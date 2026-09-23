import { NIO_PER_USD } from "../config/currency";
import type { Currency } from "../types/currency";

const nioFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});
const usdFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export function formatVehiclePrice(
  priceFrom: number,
  priceTo?: number,
  currency: Currency = "NIO",
): string {
  const formatPrice = (price: number) =>
    currency === "USD"
      ? `$${usdFormatter.format(price / NIO_PER_USD)}`
      : `C$${nioFormatter.format(price)}`;

  const from = formatPrice(priceFrom);

  return priceTo !== undefined && priceTo !== priceFrom
    ? `${from} – ${formatPrice(priceTo)}`
    : from;
}
