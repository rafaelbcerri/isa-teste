import { formatCurrency } from '.';

describe('formatCurrency', () => {
  it('should be a function', () => {
    expect(formatCurrency).toBeInstanceOf(Function);
  });

  describe('when there is no param', () => {
    it('should new an error', () => {
      try {
        formatCurrency()
      } catch(e) {
        expect(e.message).toBe('Invalid params')
      }
    });
  });

  describe('when there is a invalid param', () => {
    it('should new an error', () => {
      try {
        formatCurrency('123123')
      } catch(e) {
        expect(e.message).toBe('Invalid params')
      }
    });
  });

  describe('when param exists', () => {
    describe('and it is a 0', () => {
      it('should format to currency', () => {
        expect(formatCurrency(0)).toBe('R$ 0');
      });
    });

    describe('and it is a 10000', () => {
      it('should format to currency', () => {
        expect(formatCurrency(10000)).toBe('R$ 10000');
      });
    });
  });
});