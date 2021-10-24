const fs = require('fs');
const { expect } = require('chai');
const numbers = require('../numbers');
const exp = require('constants');

describe('executa a função numbers', () => {
  describe('o número é maior que 0', () => {
    it('A resposta é uma string', () => {
      const resposta = numbers(10); // simula o que ele quer
      expect(resposta).to.be.a('string');
    });

    it('A resposta é igual a "positivo"', () => {
      const resposta = numbers(10);
      expect(resposta).equals('positivo');
    });
  });

  describe('O número é menor que 0', () => {
    it('retorna uma string', () => {
      const resposta = numbers(-10);
      expect(resposta).to.be.a('string');
    });

    it('A resposta é igual a "negativo"', () => {
      const resposta = numbers(-10);
      expect(resposta).equals('negativo');
    });
  });

  describe('O número é igual a 0', () => {
    it('a resposta é uma string', () => {
      const resposta = numbers(0);
      expect(resposta).to.be.a('string');
    });

    it('a resposta é "neutro"', () => {
      const respo = numbers(0);
      expect(respo).equals('neutro');
    });
  });

  describe('Quando o valor não é um número', () => {
    it('resposta é uma string', () => {
      const resposta = numbers('escrita');
      expect(resposta).to.be.a('string');
    });

    it('A resposta ser igual a "não é número"', () => {
      const resposta = numbers('palavra');
      expect(resposta).equals("não é número");
    });
  });
});
