import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator App', () => {
  test('renders calculator input field', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  // test('allows numbers to be inputted', () => {
  //   render(<App />);
  //   const inputField = screen.getByRole('textbox');
  //   userEvent.click(screen.getByText('1'));
  //   expect(inputField.value).toBe('1');
  // });

  // test('can perform addition', () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText('2'));
  //   userEvent.click(screen.getByText('+'));
  //   userEvent.click(screen.getByText('3'));
  //   userEvent.click(screen.getByText('='));
  //   expect(screen.getByRole('textbox').value).toBe('5');
  // });

  // test('can perform subtraction', () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText('5'));
  //   userEvent.click(screen.getByText('-'));
  //   userEvent.click(screen.getByText('2'));
  //   userEvent.click(screen.getByText('='));
  //   expect(screen.getByRole('textbox').value).toBe('3');
  // });

  // test('can clear input', () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText('9'));
  //   userEvent.click(screen.getByText('Clear'));
  //   expect(screen.getByRole('textbox').value).toBe('');
  // });

  // test('handles division by zero with error', () => {
  //   render(<App />);
  //   userEvent.click(screen.getByText('1'));
  //   userEvent.click(screen.getByText('/'));
  //   userEvent.click(screen.getByText('0'));
  //   userEvent.click(screen.getByText('='));
  //   expect(screen.getByRole('textbox').value).toBe('Error');
  // });

  
});
