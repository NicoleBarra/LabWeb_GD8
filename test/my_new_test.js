const assert = require('assert');
const VectorCalculator = require('../app/models/VectorCalculator');
const BankAccount = require('../app/models/BankAccount');

describe('Object', () => {
    let a = {x:1,y:2};
    let b = {x:3,y:7};

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

    
    

});