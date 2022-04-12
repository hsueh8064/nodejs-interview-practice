# Q6. 基於 node.js 實現 RESTful API

## Plugins

### express

使用 express 可以快速搭建功能完整的網站伺服器，使用 express 可以幫助我們替請求方法以及 URLs 定義路由。基於 express 我們可以快速搭建起功能完整的 RESTful API。

```sh
npm install express
```

### body-parser
body-parser用於處理從客戶端傳輸而來的request，可以直接獲得POST、PUT中的body內容，解析json、urlencoded、text等多種檔案格式。

```sh
npm install body-parser
```

## 檔案結構
```
restful-api
├─controllers
│  ├─borad.js
│  └─index.js
├─routes
│  ├─borad.js
│  └─index.js
└─index.js
```
