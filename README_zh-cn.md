Now is Chinese , if you need English [Click here](https://github.com/azurestar-space/RollWiki)

# 卷子维基

一个简单的单页面维基软件。
## 环境
MySQL 或 SQLite3 (需要)

### 设置环境
1. 在你的电脑上安装MySQL (如果你使用MySQL)
2. 连接你的数据库并创建一个表叫做rollwiki (如果你使用MySQL)
3. 创建一个新文件叫做 `settings.json` (如果你使用MySQL, 可以参考 `settings.mysql.default.json`, 如果你使用SQLite3, 可以参考 `settings.sqlite3.default.json`)
4. 运行 `python manage.py migrate` (你必须使用Python3)
5. 
```shell
pip install django
pip install mysqlclient # 如果你使用MySQL, 安装它
```
### 注释

如果你想要使用 sqlite3, 就在settings.json将 `database.type` 改为 `sqlite3` 并设置 `database.name` 为你的文件路径

## 支持语言

英语 (en)

中文 (zh)
