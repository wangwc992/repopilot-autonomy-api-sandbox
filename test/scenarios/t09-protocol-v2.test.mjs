import test from 'node:test';
import assert from 'node:assert/strict';
import { PROTOCOL_VERSION } from '../../src/protocol.mjs';

test('t09: protocol version is numeric 2', () => {
  assert.equal(typeof PROTOCOL_VERSION, 'number');
  assert.strictEqual(PROTOCOL_VERSION, 2);
});
