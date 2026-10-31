import test from 'node:test';
import assert from 'node:assert/strict';
import { PROTOCOL_VERSION } from '../src/protocol.mjs';
test('baseline: protocol version remains 1', () => assert.equal(PROTOCOL_VERSION, 1));
