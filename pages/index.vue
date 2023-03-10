<script setup lang="ts">
const { getItems } = useDirectusItems()

const posts = await getItems<Post[]>({ collection: 'posts' })

</script>

<template>
  <div class="flex items-center flex- w-full justify-center min-h-screen border">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-screen-sm sm:text-center sm:mx-auto prose">
        <h2>
          My Directus Blog
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr class="w-full my-8 border-gray-300">
      </div>
      <div class="flex flex-col items-center justify-center space-y-4 transition-all duration-700">
        <NuxtLink v-for="post in posts" :key="post.slug" class="capitalize border p-4 shadow-md hover:shadow-sm" :to="`/articles/${post.slug}`">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
