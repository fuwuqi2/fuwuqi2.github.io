/* fuwuqi2 · master link inventory (single source of truth)
   Grouped by provider. Every page on every site derives from this. */
const DEALS = {
  tencent: [
    { name:'腾讯云国内站', link:'https://curl.qcloud.com/ITnFdvQ9', desc:'腾讯云国内站优惠，云服务器等产品活动价', tags:'腾讯云 国内 云服务器 优惠', badges:[{x:'热门',t:'hot'},{x:'新客特惠',t:'deal'}] },
    { name:'腾讯云国外站', link:'https://curl.qcloud.com/Kholy9gT', desc:'腾讯云国际站优惠，海外云资源活动价', tags:'腾讯云 国际 海外 云服务器', badges:[{x:'海外',t:'new'}] },
    { name:'WorkBuddy 全场景 AI 办公工作台', link:'https://cloud.tencent.com/act/cps/redirect?redirect=6871&cps_key=e1a339fa804f2f1f68cb6f3a74ee7da5&from=console', desc:'WorkBuddy 全场景 AI 办公工作台，智能办公提效工具', tags:'AI 办公 工作台 智能', badges:[{x:'AI 工具',t:'new'}] },
  ],
  aliyun: [
    { name:'阿里云新客户', link:'https://www.aliyun.com/minisite/goods?userCode=9iwd9zzb', desc:'阿里云新用户专享优惠，云服务器等产品新人价', tags:'阿里云 新用户 新人价 云服务器', badges:[{x:'新客专享',t:'deal'},{x:'新人价',t:'hot'}] },
    { name:'阿里云OPC产品套餐', link:'https://opc.aliyun.com/products?utm_content=g_1000413977&userCode=9iwd9zzb', desc:'阿里云 OPC 产品套餐，云产品组合更省', tags:'阿里云 OPC 套餐 组合 优惠', badges:[{x:'套餐更省',t:'deal'}] },
  ],
  jdcloud: [
    { name:'京东云服务器', link:'https://3.cn/35a6-f3Y', desc:'京东云主机，安全稳定，性能强劲，新客下单专享特惠', tags:'京东云 服务器 主机 新客', badges:[{x:'新客特惠',t:'deal'},{x:'性能强劲',t:'hot'}] },
    { name:'京东云京美建站SaaS版', link:'https://3.cn/-35a6ZCN', desc:'京美建站搭建企业网站、小程序、3000+精美模板', tags:'建站 SaaS 小程序 模板 企业网站', badges:[{x:'3000+模板',t:'new'}] },
  ],
  rainyun: [
    { name:'雨云服务器', link:'https://www.rainyun.com/MTI2MjQxNg==_', desc:'免备案（香港、美国）', tags:'雨云 服务器 免备案 香港 美国', badges:[{x:'免备案',t:'new'}] },
  ],
};
if (typeof module !== 'undefined' && module.exports) module.exports = DEALS;
