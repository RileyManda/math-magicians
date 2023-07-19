import operate from '../logic/operate';

describe('operate', () => {
  it("with input 1 and 2, it should return '3'", () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it("with input 1 and 2, it should return '-1'", () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  it("with input 1 and 2, it should return '2'", () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  it("with input 1 and 2, it should return '0.5'", () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  it("with input 1 and 0, it should return 'Can't divide by 0.'", () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  it("with input 1 and 2, it should return '1'", () => {
    expect(operate(1, 2, '%')).toBe('1');
  });

  it("with input 1 and 0, it should return 'Can't find modulo as can't divide by 0.'", () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it("with operation '$', it should throw an error 'Unknown operation '$''", () => {
    expect(() => operate(1, 2, '$')).toThrow("Unknown operation '$'");
  });
});
