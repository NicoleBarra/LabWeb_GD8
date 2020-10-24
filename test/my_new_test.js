const assert = require('assert');
const VectorCalculator = require('../app/models/VectorCalculator');
const BankAccount = require('../app/models/BankAccount');

describe('Object', () => {
    let a = {x:1,y:2};
    let b = {x:3,y:7};

    let BankAccountA = BankAccount(3300.0, []);
    let BankAccountB = BankAccount(300.0, []);
    let BankAccountC = BankAccount(5000.0, []);

    describe('sum', () => {
        it('Suma los vectores de a y b', () => {
          assert.deepStrictEqual({ x: 4, y: 9}, VectorCalculator.sum(a,b));
        })
      })

      describe('sub', () => {
        it('Resta los vectores a y b', () => {
          assert.deepStrictEqual({ x: -2, y: -5}, VectorCalculator.sub(a,b));
        })
      })

      describe('scalar', () => {
        it('Escala el vector a', () => {
          assert.deepStrictEqual({ x: 2.5, y: 5}, VectorCalculator.scalar(a,2.5));
        })
      })

      describe('dot', () => {
        it('Calcula el producto punto de los vectores a y b ', () => {
          assert.deepStrictEqual(17, VectorCalculator.dot(a,b));
        })
      })

      describe('current', () => {
        it('Obtiene el dinero actual en la cuenta', () => {
          let bankA = BankAccount(3300.0,["substracted 200.0", "appended 1000.0"]);
          assert.deepStrictEqual(3300.0, bankA.getCurrent());
        })
      })

      describe('append', () => {
        it('Agrega el valor especificado al dinero actual en la cuenta', () => {
          let bankB = BankAccount(300.0,["substracted 200.0", "appended 1000.0"]);
          assert.deepStrictEqual(500.0, bankB.append(200.0));
        })
      })

      describe('substract', () => {
        it('Resta el valor especificado al dinero actual en la cuenta', () => {
          let bankC = BankAccount(5000.0,["substracted 200.0", "appended 1000.0"]);
          assert.deepStrictEqual(2000.0, bankC.substract(3000.0));
        })
      })

      describe('merge', () => {
        it('Junta historiales y saldo caso original mayor', () => {

            let bankDA = BankAccount(300,["substracted 200.0", "appended 1000.0"]);
            let bankDB = BankAccount(300,["substracted 20.0", "appended 2000.0"]);
            bankDA.merge(bankDB);
            
            assert.deepStrictEqual(["substracted 200.0", "appended 1000.0", "substracted 20.0", "appended 2000.0"], banDA.getHistory());
            assert.deepStrictEqual(600, bankDA.getCurrent());
        })
      })
      
      describe('history', () => {
        it('Regresa un arreglo de objetos con el historial de movimientos de la cuenta. ', () => {

            let bankE = BankAccount(300,["substracted 200.0", "appended 1000.0"]);

          assert.deepStrictEqual(["substracted 200.0", "appended 1000.0"], bankE.getHistory());
        })
      })

});