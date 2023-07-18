import calculate from './calculate';

describe('calculate', () => {
  it('should update calculator data object with AC button pressed', () => {
    const buttonName = 'AC';

    const initialData = {
      total: '10',
      next: '5',
      operation: '+',
    };

    calculate(initialData, buttonName);

    expect(buttonName).toEqual('AC');
  });
  it('should update calculator data object with 1 button pressed', () => {
    const buttonName = '1';

    const initialData = {
      total: '10',
      next: '5',
      operation: '+',
    };

    calculate(initialData, buttonName);

    expect(buttonName).toEqual('1');
  });
});
