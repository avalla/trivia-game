const formatter = require('./question-formatter');

describe('Question formatter', () => {
  it('Question is null or undefined should throw an error', () => {
    expect(() => formatter(null, 0))
      .toThrow(new Error('Question should be defined'));
    expect(() => formatter(undefined, 0))
      .toThrow(new Error('Question should be defined'));
    expect(() => formatter(1, 0))
      .toThrow(new Error('Question type not recognized'));
    expect(() => formatter('aaa', 0))
      .toThrow(new Error('Question type not recognized'));
    expect(() => formatter({}))
      .toThrow(new Error('Question index type not recognized'));
    expect(() => formatter({}, 'aaa'))
      .toThrow(new Error('Question index type not recognized'));
  });
  describe('Check question properties', () => {
    const completeQuestion = {
      incorrect_answers: ['1', '2'],
      correct_answer: '3',
      difficulty: 'easy',
      question: 'bar',
      category: ' foo',
    };
    it('Correct question', () => {
      expect(formatter(completeQuestion, 1))
        .toEqual({
          questionId: 1,
          question: completeQuestion.question,
          points: 1,
          correct_answer: completeQuestion.correct_answer,
          answers: ['1', '2', '3'],
          difficulty: completeQuestion.difficulty,
          category: completeQuestion.category,
        });
    });
    it('Missing incorrect_answers', () => {
      const { incorrect_answers, ...q } = completeQuestion;
      expect(() => formatter(q, 1))
        .toThrow(new Error('Question is missing one or more property'));
    });
    it('Missing correct_answer', () => {
      const { correct_answer, ...q } = completeQuestion;
      expect(() => formatter(q, 1))
        .toThrow(new Error('Question is missing one or more property'));
    });
    it('Missing difficulty', () => {
      const { difficulty, ...q } = completeQuestion;
      expect(() => formatter(q, 1))
        .toThrow(new Error('Question is missing one or more property'));
    });
    it('Missing question', () => {
      const { question, ...q } = completeQuestion;
      expect(() => formatter(q, 1))
        .toThrow(new Error('Question is missing one or more property'));
    });
  });
  describe('Answers should be sorted', () => {
    it('Answers are "numbers"', () => {
      const question = {
        question: 'bar',
        correct_answer: '5',
        incorrect_answers: ['2', '3', '1'],
        difficulty: 'easy',
      };
      const result = formatter(question, 1);
      expect(result.answers.length).toBe(question.incorrect_answers.length + 1);
      expect(new Set(result.answers)).toEqual(new Set(['1', '2', '3', '5']));
    });
    it('Answers are string', () => {
      const question = {
        question: 'bar',
        correct_answer: 'apple',
        incorrect_answers: ['orange', 'banana', 'cherry'],
        difficulty: 'easy',
      };
      const result = formatter(question, 1);
      expect(result.answers.length).toBe(question.incorrect_answers.length + 1);
      expect(new Set(result.answers)).toEqual(new Set(['apple', 'banana', 'cherry', 'orange']));
    });
  });
});
