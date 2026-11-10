import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { total } from './total.js';

test('adds each line price times its quantity', () => {
  strictEqual(total([{ price: 2, quantity: 3 }, { price: 5, quantity: 1 }]), 11);
});

test('is zero for an empty order', () => {
  strictEqual(total([]), 0);
});
