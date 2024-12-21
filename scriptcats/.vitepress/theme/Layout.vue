<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <button class="connect-wallet">
        Connect Wallet
      </button>
    </template>
  </Layout>
</template>