export const clpFormat = (value = 0) => {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 2
  });

  return formatter.format(value)
}