<script setup lang="ts">
const { getItemById } = useDirectusItems()
const route = useRoute()

const post = await getItemById<Product>({ collection: 'posts', id: route?.params?.slug?.toString() })

const router = useRouter()
</script>

<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <n-button @click="() => router.back()">
      Voltar
    </n-button>
    <div class="max-w-screen-sm sm:text-center sm:mx-auto prose">
      <h2>
        {{ post.title }}
      </h2>
      <img
        :src="'http://localhost:8055/assets/' + post.image"
        alt="webp"
      >
      <hr class="w-full my-8 border-gray-300">
      <p v-html="post.content" />
    </div>
  </div>
</template>
