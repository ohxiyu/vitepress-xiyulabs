# btcprice

<script setup>
import { ref, onMounted } from 'vue'

const price = ref('Loading...')

async function fetchBitcoinPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    const data = await response.json()
    price.value = data.bitcoin.usd
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error)
    price.value = 'Error fetching price'
  }
}

onMounted(() => {
  fetchBitcoinPrice()
  setInterval(fetchBitcoinPrice, 60000) // 
})
</script>

<div class="bitcoin-price">
  <h2>BTC</h2>
  <p>{{ price }} USD</p>
</div>

<style>
.bitcoin-price {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}
</style>