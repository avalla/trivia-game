import { render, screen } from '../../../libs/testing-library';
import Navbar from './Navbar';

describe('Renders navbar', () => {
  test('Home Link', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/Trivia Game/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Logged out user', () => {
    render(<Navbar />);
    expect(screen.queryByTestId(/username/i)).toBeNull();
  });
  test('Logged in user', () => {
    const preloadedState = {
      authentication: {
        userId: 1,
        userName: 'Mr. Awesome Player'
      }
    }
    render(<Navbar />, { preloadedState });
    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByText(preloadedState.authentication.userName)).toBeInTheDocument();
    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
  });
})
