# FUWUQI2 · 云服务器优惠导航

一站式收录京东云、腾讯云、阿里云、雨云等主流云厂商官方优惠入口，按厂商分组直达。所有链接直达官方活动页，无中间商加价。

> 本站只做入口导航，不售卖任何服务器。价格与活动以云厂商官方页面为准。

## 站点结构

| 站点 | 路径 | 说明 |
|------|------|------|
| 总站（首站） | `/` | 集中引入所有专区，含对比、新手指南、FAQ |
| 腾讯云专区 | `/tencent/` | 国内站、国际站云服务器活动价，WorkBuddy AI 办公 |
| 阿里云专区 | `/aliyun/` | 新用户专享新人价，OPC 产品套餐 |
| 京东云专区 | `/jdcloud/` | 云服务器新客特惠，京美建站 SaaS |
| 雨云专区 | `/rainyun/` | 香港、美国免备案服务器 |
| 帮助中心 | `/help/` | 选购、备案、新客、下单、FAQ 等文档 |

## 技术说明

- 纯静态站点，无后端、无追踪脚本、无第三方依赖。
- 所有页面含 Schema.org 结构化数据、Open Graph、Twitter Card。
- 优惠链接直接写在 HTML 中（非 JS 渲染），确保搜索引擎可抓取。
- 提供 `llms.txt` / `llms-full.txt` 供生成式引擎读取（GEO）。
- 站点地图：`/sitemap.xml`，robots：`/robots.txt`，RSS：`/feed.xml`。

## 部署

推送到 GitHub 后，GitHub Pages 自动构建。仓库地址：`https://github.com/fuwuqi2/fuwuqi2.github.io`，站点地址：`https://fuwuqi2.github.io/`。

## 数据维护

优惠链接数据集中在 `data.js`（总站）和各专区目录下的 `data.js`。更新链接后，页面内联 HTML 需同步更新对应入口。
