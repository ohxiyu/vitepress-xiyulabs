```markdown
# 比特币开发 API 示例

这个页面展示了一些与比特币开发相关的 API 使用示例。

## 使用 Bitcoin Core RPC

以下是使用 Bitcoin Core RPC 获取区块信息的示例：

```js
import { Client } from 'bitcoin-core';

const client = new Client({
  network: 'testnet',
  username: 'rpcuser',
  password: 'rpcpassword',
  host: 'localhost',
  port: 18332
});

async function getLatestBlockInfo() {
  const blockchainInfo = await client.getBlockchainInfo();
  console.log('Latest block height:', blockchainInfo.blocks);
  console.log('Current difficulty:', blockchainInfo.difficulty);
}

getLatestBlockInfo();

