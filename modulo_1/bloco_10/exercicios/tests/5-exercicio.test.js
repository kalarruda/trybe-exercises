// Compare dois objetos para verificar se são idênticos ou não

const objs = require('../5-exercicio');

describe('5-exercicio Objs', () => {
  it('compara obj1 e obj2 são idênticos ou não', () => {
    expect(objs.obj1).toEqual(objs.obj2);
  })

  it('compara obj1 e obj3 são idênticos ou não', () => {
    expect(objs.obj1).not.toEqual(objs.obj3);
  })

  it('compara obj2 e obj3 são idênticos ou não', () => {
    expect(objs.obj2).not.toEqual(objs.obj3);
  })
})