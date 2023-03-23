<script setup lang="ts">
const client = useMedusaClient()
const { products } = await client.products.list()
</script>

<template>
  <section>
    <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="relative mx-auto max-w-7xl">
        <div class="grid max-w-lg gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          <StoreProdCard v-for="i in products" :key="i.id" :product="i" />
        </div>
      </div>
    </div>
  </section>
</template>
