<script setup lang="ts">

const client = useMedusaClient()
const { list } = await client.products.list()

</script>

<template>
  <section>
    {{ list }}
    <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="relative mx-auto max-w-7xl">
        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <StoreHaCard v-for="i in list" :key="i.id" :article="i" />
        </div>
      </div>
    </div>
  </section>
</template>
