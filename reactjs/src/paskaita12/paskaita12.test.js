import { render, screen, fireEvent } from '@testing-library/react';
import Paskaita12 from './Paskaita12';

describe('Paskaita 12 tests', () => {
  it('Paskaita 12 renders correctly', () => {
    const { container } = render(<Paskaita12 />);
    expect(container).toMatchSnapshot();
  });

  it('Button component should increase count by 1', () => {
    render(<Paskaita12 />);
    const incrementBtn = screen.getByText(/Increment/i);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl.textContent).toBe('Count - 0');
    fireEvent.click(incrementBtn);
    expect(headingEl.textContent).toBe('Count - 1');
  });

  it('Button component should decrement count by 1', () => {
    render(<Paskaita12 />);
    const decrementBtn = screen.getByText(/Decrement/i);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl.textContent).toBe('Count - 0');
    fireEvent.click(decrementBtn);
    expect(headingEl.textContent).toBe('Count - -1');
  });

  it('Button component should increment count by 1 and decrement count by 1', () => {
    render(<Paskaita12 />);
    const incrementBtn = screen.getByText(/Increment/i);
    const decrementBtn = screen.getByText(/Decrement/i);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl.textContent).toBe('Count - 0');
    fireEvent.click(incrementBtn);
    expect(headingEl.textContent).toBe('Count - 1');
    fireEvent.click(decrementBtn);
    expect(headingEl.textContent).toBe('Count - 0');
  });

  it('Button component should increment count by 5', () => {
    render(<Paskaita12 />);
    const incrementBtn = screen.getByText(/Increment/i);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl.textContent).toBe('Count - 0');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(headingEl.textContent).toBe('Count - 5');
  });
});
