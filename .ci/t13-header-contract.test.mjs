// 独立维护CI门槛；Native允许路径不得包含本文件或workflow。不能按运行次数/环境切换结果。
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
const target = new URL('../src/header-token.mjs', import.meta.url);
test('T13 immutable header-name boundary contract', { skip: !existsSync(target) ? 'seed only: target feature not present; not a feature pass' : false }, async () => {
  const { normalizeHeaderName } = await import(target.href);
  assert.equal(typeof normalizeHeaderName, 'function');
  assert.equal(normalizeHeaderName(' X-Trace-Id '), 'x-trace-id');
  assert.equal(normalizeHeaderName('CONTENT-TYPE'), 'content-type');
  for (const invalid of ['x:bad', 'x bad', 'x\nbad', 'x\rbad', '']) {
    assert.throws(() => normalizeHeaderName(invalid), TypeError, `invalid header name must reject: ${JSON.stringify(invalid)}`);
  }
  for (const invalid of [null, undefined, 12]) assert.throws(() => normalizeHeaderName(invalid), TypeError);
});
