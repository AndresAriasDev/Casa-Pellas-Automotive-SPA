const priceFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function formatVehiclePrice(priceFrom: number, priceTo?: number): string {
  const from = `C$${priceFormatter.format(priceFrom)}`;

  return priceTo !== undefined && priceTo !== priceFrom
    ? `${from} – C$${priceFormatter.format(priceTo)}`
    : from;
}
