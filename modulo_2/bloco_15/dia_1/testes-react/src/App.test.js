  // App.test.js
  import React from 'react';
  import { render, fireEvent } from '@testing-library/react';
  import App from './App';
  
  test('Verificando se existe o campo Email.', () => {
    const { getByLabelText } = render(<App />); // procura pela label
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  test('verifica se existe um botão', () => {
    const { getByRole } = render(<App />);// pega apenas um elemento do tipo (se tiver mais de um dá erro)
    const btn = getByRole('button');
    expect (btn).toBeInTheDocument();
    expect(btn.type).toBe('button');

  });

  test('Verifica se existe dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

 test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btnEnviar = getByTestId('id-send');
  expect(btnEnviar).toBeInTheDocument();
  expect(btnEnviar.type).toBe('button');
  expect(btnEnviar).toHaveValue('Enviar');
})

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});