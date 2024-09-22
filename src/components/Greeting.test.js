import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greetings';

describe('Greeting component', () => {
  test('renders hello world as a test', () => {
    // Arrage
    render(<Greeting />);

    // Act
    // .. nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "changed" if the button WAS clicked', async () => {
    //Arrange
    render(<Greeting />);
    //Act
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button WAS clicked', async () => {
    //Arrange
    render(<Greeting />);
    //Act
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    //Assert
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  });
});
