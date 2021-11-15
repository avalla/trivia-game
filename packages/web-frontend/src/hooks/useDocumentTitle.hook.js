import { useEffect } from 'react';

function useDocumentTitle({ title, description }) {
  useEffect(() => {
    document.title = `${title} :: Trivia Game`;
    document?.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

export default useDocumentTitle;
