import calculate from './calculate';

describe('calculate', () => {
  const operationSymbols = [
    'AC',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '+/-',
    '=',
    '%',
    '-',
    '+',
  ];

  const initialData = {
    total: '10',
    next: '5',
    operation: '+',
  };

  operationSymbols.forEach((operationSymbol) => {
    it(`should update calculator data object with ${operationSymbol} button pressed`, () => {
      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual(expect.any(Object));
    });
    it('should return the sum of two numbers if the + symbol is used', () => {
      const operationSymbol = '+';

      const initialData = {
        total: '5',
        next: '5',
        operation: '+',
      };

      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual({
        total: '10',
        next: null,
        operation: '+',
      });
    });

    it('should return the subtraction of two numbers if the - symbol is used', () => {
      const operationSymbol = '-';

      const initialData = {
        total: '5',
        next: '5',
        operation: '-',
      };

      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual({
        total: '0',
        next: null,
        operation: '-',
      });
    });

    it('should return the division of two numbers if the ÷ symbol is used', () => {
      const operationSymbol = '÷';

      const initialData = {
        total: '6',
        next: '3',
        operation: '÷',
      };

      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual({
        total: '2',
        next: null,
        operation: '÷',
      });
    });
  });
});
