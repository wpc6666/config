{
    "name": "Sub-Store",
    "description": "定时任务默认为每天 20 点 30 分. 定时任务指定时将订阅/文件上传到私有 Gist. 在前端, 叫做 '同步' 或 '同步配置'",
    "task": [
      "20 30 * * * https://raw.githubusercontent.com/sub-store-org/Sub-Store/release/cron-sync-artifacts.min.js, tag=Sub-Store Sync, img-url=https://raw.githubusercontent.com/58xinian/icon/master/Sub-Store1.png"
    ]
  }
