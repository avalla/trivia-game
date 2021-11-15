import { render, screen, fireEvent } from '../libs/testing-library';
import ErrorNotification from './ErrorNotification';

describe('Renders ErrorNotification', () => {
  test('Error empty', () => {
    render(<ErrorNotification />);
    expect(screen.queryByTestId(/error-title/)).toBeNull();
  });
  test('Error not empty', () => {
    const preloadedState = {
      application: {
        error: new Error('Sorry, there was an error'),
      },
    };
    render(<ErrorNotification />, { preloadedState });
    expect(screen.queryByTestId(/error-title/)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('error-close'));
    expect(screen.queryByTestId(/error-notification-wrapper/)).toBeNull();
  });
});
