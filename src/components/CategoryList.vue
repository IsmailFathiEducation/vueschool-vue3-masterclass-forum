<template>
  <div class="col-full">
    <div v-for="category in categories" :key="category.id" class="forum-list">
      <h2 class="list-title">
        <a href="category.html">{{ category.name }}</a>
      </h2>

      <forum-list :forums="categoryForums(category.id)" />
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';
export default {
  name: 'CategoryList',
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    categoryForums(categoryId) {
      return sourceData.forums.filter((f) => f.categoryId === categoryId);
    },
  },
};
</script>
