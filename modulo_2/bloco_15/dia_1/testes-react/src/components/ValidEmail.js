import React from 'react';
import '../App';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        // Adicionamos uma renderização condicional com o operador lógico '&&' para que
        // esse elemento <h3> só exista quando a variável email tiver algum valor verdadeiro.
        email && (
          <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
        // <h3 data-testid="id-is-email-valid">{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
        )
      }
    </div>
  );
};

export default ValidEmail;