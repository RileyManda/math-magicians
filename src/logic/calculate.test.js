import calculate from './calculate';

describe('calculate', () => {
  const buttonName = [
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

  buttonName.forEach((operationSymbol) => {
    it(`should update calculator data object with ${operationSymbol} button pressed`, () => {
      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual(expect.any(Object));
    });
  });

  describe('arithmetic calculations', () => {
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

    it('should return the multiplication of two numbers if the x symbol is used', () => {
      const operationSymbol = 'x';
      const initialData = {
        total: '6',
        next: '2',
        operation: 'x',
      };

      const newData = calculate(initialData, operationSymbol);

      expect(newData).toEqual({
        total: '12',
        next: null,
        operation: 'x',
      });
    });
  });

  describe('data objects', () => {
    it('should return an empty object when buttonName is "0" and obj.next is "0"', () => {
      const buttonName = '0';
      const initialData = {
        total: null,
        next: '0',
        operation: '+',
      };

      const newData = calculate(initialData, buttonName);

      expect(newData).toEqual({});
    });

    it('should update the calculator data object when a number button is pressed', () => {
      const buttonName = '3';
      const initialData = {
        total: '10',
        next: '5',
        operation: '+',
      };

      const newData = calculate(initialData, buttonName);

      expect(newData).toEqual({ next: '53', total: '10', operation: '+' });
    });
  });

  describe('jest snapshots', () => {
    buttonName.forEach((operationSymbol) => {
      it(`should update calculator data object when ${operationSymbol} button is pressed`, () => {
        const initialData = {
          total: '10',
          next: '5',
          operation: '+',
        };

        const newData = calculate(initialData, operationSymbol);

        expect(newData).toMatchSnapshot();
      });
    });
  });
});
