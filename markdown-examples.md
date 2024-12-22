# 比特币技术示例

这个页面展示了一些与比特币技术相关的 Markdown 示例。

## Ordinals

Ordinals 是一种在比特币上铭刻数字内容的协议。

```js
const inscription = {
  content: "Hello, Bitcoin!",
  contentType: "text/plain",
  fee: 5000  // satoshis
};

console.log(`Inscribing: ${inscription.content}`);
## Runes

Runes 是比特币上的新型代币标准。

::: info
Runes 使用 OP_RETURN 输出来编码代币信息。
:::

::: tip
Runes 可以用于创建可替代和不可替代的代币。
:::
## Lightning Network

闪电网络是比特币的第二层扩容解决方案。

- 即时支付
- 低手续费
- 高吞吐量
## OP_CAT

OP_CAT 是一个提议中的比特币操作码。

| 特性 | 描述
|-----|-----
| 堆栈操作 | 连接两个堆栈项
| 用途 | 增强脚本表达能力
| 状态 | 提议中