const formatPrice = ({ amount, currency }) => {
  if (!amount || !currency) return '';
  const formatter = new Intl.NumberFormat('es-AR', { style: 'currency', currency });
  return formatter.format(amount);
};

export default formatPrice;
