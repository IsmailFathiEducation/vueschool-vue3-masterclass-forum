<template>
  <div class="container">
    <div class="col-full push-top">
      <h1>{{ category.name }}</h1>
    </div>
    <div class="col-full">
      <div class="forum-list">
        <h2 class="list-title">
          {{ category.name }}
        </h2>
        <forum-list :forums="categoryForums" />
      </div>
    </div>
  </div>
</template>

<script>
import ForumList from '@/components/ForumList.vue';
import sourceData from '@/data.json';
export default {
  name: 'CategoryShow',
  props: {
    categoryId: {
      type: String,
      required: true,
    },
  },
  components: {
    ForumList,
  },
  computed: {
    category() {
      return sourceData.categories.find((c) => c.id === this.categoryId);
    },
    categoryForums() {
      return sourceData.forums.filter((f) => f.categoryId === this.categoryId);
    },
  },
};
</script>
