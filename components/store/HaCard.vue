<script lang="ts" setup>

const props = defineProps<{
  article: Article
}>()

</script>

<template>
  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div class="flex-shrink-0">
      <img
        class="object-cover w-full h-48"
        :src="'http://localhost:8055/assets/' + props.article.image + '?width=384&height=512&quality=80'"
        alt="Article Image"
        width="384"
        height="512"
      >
    </div>
    <div class="flex flex-col justify-between flex-1 p-6 bg-white">
      <div class="flex-1">
        <NuxtLink :to="`/blog/articles/${props.article.slug}`" class="block mt-2">
          <p class="text-xl font-semibold text-neutral-600">
            {{ props.article.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ props.article.summary }}
          </p>
        </NuxtLink>
      </div>
      <div class="flex items-center mt-6">
        <div class="flex-shrink-0">
          <NuxtLink to="https://twitter.com/Mike_Andreuzza">
            <span class="sr-only">{{ props.article.user_created.first_name }} {{ props.article.user_created.last_name }}</span>
            <img
              class="w-10 h-10 rounded-full"
              :src="'http://localhost:8055/assets/' + props.article.user_created.avatar + '?width=250&height=250&quality=50'"
              alt=""
            >
          </NuxtLink>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-neutral-600">
            <span class="hover:underline">  {{ props.article.user_created.first_name }}
              {{ props.article.user_created.last_name }}</span>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-16"> {{ props.article.date_created }}</time>
            <span aria-hidden="true"> · </span>
            <span> 6 min read </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
