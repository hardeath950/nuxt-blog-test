<script setup lang="ts">
const { getItems } = useDirectusItems()
const list = ref<Article[]>([])

async function load () {
  try {
    list.value = await getItems<Article[]>({
      collection: 'posts',
      params: {
        fields: [
          'user_created.*',
          '*'
        ]
      }
    })
  } catch (error) {
    console.warn(error)
  }
}

load()
</script>

<template>
  <section>
    <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="relative mx-auto max-w-7xl">
        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <BlogArtCard v-for="i in list" :key="i.slug" :article="i" />
        </div>
      </div>
    </div>
  </section>
</template>
