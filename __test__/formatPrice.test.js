import formatPrice from '../formatters/formatPrice';

describe('formatPrice unit test', () => {
  test('should return ARS formatted price', () => {
    const formattedPrice = formatPrice({ amount: 10000, currency: 'ARS' });
    expect(formattedPrice).toContain('10.000,00');
    expect(formattedPrice).toContain('$');
  });

  test('should empty string on invalid input', () => {
    const formattedPrice = formatPrice({ something: 1 });
    expect(formattedPrice).toEqual('');
  });

  test('should empty string on invalid input', () => {
    const formattedPrice = formatPrice({ amount: 10000 });
    expect(formattedPrice).toEqual('');
  });

  test('should empty string on invalid input', () => {
    const formattedPrice = formatPrice({ currency: 'ARS' });
    expect(formattedPrice).toEqual('');
  });
});
