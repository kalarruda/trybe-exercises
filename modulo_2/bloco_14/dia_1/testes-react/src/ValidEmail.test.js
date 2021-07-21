import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail'

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se não aparece mensagem, caso email esteja vazio', () =>{
  const EMAIL_EMPTY = '';
  const { getByText } = render(<ValidEmail email={EMAIL_EMPTY} />);
  const isValid = screen.queryByTestId('id-is-email-valid');
  expect(isValid).not.toBeInTheDocument();
});

// Utilizando a função 'toHaveAttribute' verificamos se o elemento possui a classe
// com o nome esperado para cada situação.
test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});