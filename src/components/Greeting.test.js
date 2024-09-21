import { render, screen } from '@testing-library/react';
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
});
