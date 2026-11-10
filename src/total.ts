export interface Line { price: number; quantity: number }

export function total(lines: Line[]): number {
  return lines.reduce((sum, line) => sum + line.price, 0);
}
