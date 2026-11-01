import test from 'node:test';
import assert from 'node:assert/strict';
import { PROTOCOL_VERSION } from '../src/protocol.mjs';
import { subtract } from '../src/subtract.mjs';
test('baseline: protocol version remains 1', () => assert.equal(PROTOCOL_VERSION, 1));
test('subtract: returns a - b for 100,37 and -5,8', () => {
  assert.equal(subtract(100, 37), 63);
  assert.equal(subtract(-5, 8), -13);
});
import { readdir } from 'node:fs/promises';

// 固定验证入口保留全部基线断言，并运行独立场景的实际测试模块。
const scenarios = new URL('./scenarios/', import.meta.url);
let entries;
try {
  entries = await readdir(scenarios, { withFileTypes: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
  entries = [];
}
for (const entry of entries.filter(entry => entry.isFile() && entry.name.endsWith('.test.mjs')).sort((a, b) => a.name.localeCompare(b.name))) {
  await import(new URL(entry.name, scenarios).href);
}
