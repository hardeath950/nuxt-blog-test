<script setup lang="ts">
const { getItems } = useDirectusItems()
const posts = await getItems<Post[]>({
  collection: 'posts',
  params: {
    fields: [
      'user_created.*',
      '*'
    ]
  }
})

</script>

<template>
  <section>
    <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="relative mx-auto max-w-7xl">
        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
          <BlogArticleCard v-for="post in posts" :key="post.slug" :article="post" />
        </div>
      </div>
    </div>
  </section>
</template>
