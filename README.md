# repopilot-autonomy-api-sandbox
RepoPilot issue346 dedicated autonomous acceptance sandbox: API; synthetic data only

固定验证命令仍为 npm test。test/acceptance.test.mjs 保留原有断言，并按文件名顺序加载 test/scenarios/*.test.mjs；新增场景在独立模块提供真实 Node 行为断言，导入或断言失败会使正式验证失败。本夹具初始化不计入自主任务完成证据；旧试次仍使用原冻结 SHA。
