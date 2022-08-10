import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button tests', () => {
  //   it('Button renders corretly', () => {
  //     render(<Button title='Increment' />);
  //     expect(screen.getByRole('button')).toBeInTheDocument();
  //     expect(screen.getByRole('button').textContent).toBe('Increment');
  //   });
  it('Button renders corretly', () => {
    const { container } = render(<Button title='CodeAcademy' />);
    expect(container).toMatchSnapshot();
  });
});
