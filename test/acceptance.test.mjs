import test from 'node:test';
import assert from 'node:assert/strict';
import { PROTOCOL_VERSION } from '../src/protocol.mjs';
import { subtract } from '../src/subtract.mjs';
test('baseline: protocol version remains 1', () => assert.equal(PROTOCOL_VERSION, 1));
test('subtract: returns a - b for 100,37 and -5,8', () => {
  assert.equal(subtract(100, 37), 63);
  assert.equal(subtract(-5, 8), -13);
});
