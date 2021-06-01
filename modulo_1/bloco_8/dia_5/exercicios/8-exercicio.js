// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const assert = require('assert');
// const { measureMemory } = require('node:vm'); NÃO ENTENDI PORQUE COLOCARAM ISSO (DÁ ERRO NO CÓDIGO)

// escreva greet abaixo
const greet = (name, message = 'Hi') => `${message} ${name}`
console.log(greet('joao', 'olá'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');