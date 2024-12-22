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

## 闪电网络节点管理

使用 lnd 的 gRPC API 来管理闪电网络节点：

import lnService from 'ln-service';

const { lnd } = lnService.authenticatedLndGrpc({
  cert: 'base64_encoded_tls_cert',
  macaroon: 'base64_encoded_macaroon',
  socket: '127.0.0.1:10009',
});

async function getNodeInfo() {
  const nodeInfo = await lnService.getWalletInfo({ lnd });
  console.log('Node public key:', nodeInfo.public_key);
  console.log('Active channels:', nodeInfo.active_channels_count);
}

getNodeInfo();