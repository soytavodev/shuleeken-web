import { site } from '../data/site';

// Intl usa las reglas de cada país: en es-CL un precio sale como "$12.990"
// (sin decimales) y en es-ES como "12,99 €". Así no se formatea a mano.
const money = new Intl.NumberFormat(site.locale, {
  style: 'currency',
  currency: site.currency,
  maximumFractionDigits: site.currency === 'CLP' ? 0 : 2,
});

export function formatPrice(amount: number): string {
  return money.format(amount);
}
