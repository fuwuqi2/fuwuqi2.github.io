/* 本地预览服务器 — 运行: npm start 或 node serve.js
   默认 http://localhost:8799 ，可用 --port 参数改端口 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = parseInt(process.argv.find(a => a.startsWith('--port='))?.split('=')[1]) || 8799;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p);
  fs.readFile(f, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404</h1><p>' + p + ' 不存在</p><p><a href="/">← 回首页</a></p>');
    } else {
      res.writeHead(200, {
        'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream',
        'Cache-Control': 'no-cache',
      });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log('\n  FUWUQI2 本地预览已启动\n');
  console.log('  总站:   http://localhost:' + port + '/');
  console.log('  腾讯云: http://localhost:' + port + '/tencent/');
  console.log('  阿里云: http://localhost:' + port + '/aliyun/');
  console.log('  京东云: http://localhost:' + port + '/jdcloud/');
  console.log('  雨云:   http://localhost:' + port + '/rainyun/');
  console.log('  帮助:   http://localhost:' + port + '/help/\n');
  console.log('  按 Ctrl+C 停止\n');
});
