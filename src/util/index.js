export const formatCurrency = (value) => {
  if (typeof(value) !== 'number') {
    throw Error('Invalid params')
  }

  return `R$ ${value}`;
}