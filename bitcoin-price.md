<script setup>
import { ref, onMounted } from 'vue'

const price = ref(0)

async function fetchBitcoinPrice() {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  const data = await response.json()
  price.value = data.bitcoin.usd
}

onMounted(() => {
  fetchBitcoinPrice()
  setInterval(fetchBitcoinPrice, 60000) // 每分钟更新一次
})
</script>

<template>
  <div>
    <h2>比特币实时价格</h2>
    <p>{{ price }} USD</p>
  </div>
</template>