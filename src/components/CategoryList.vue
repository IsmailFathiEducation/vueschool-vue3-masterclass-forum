<template>
  <div class="col-full">
    <div v-for="category in categories" :key="category.id" class="forum-list">
      <h2 class="list-title">
        <router-link
          :to="{ name: 'CategoryShow', params: { categoryId: category.id } }"
          >{{ category.name }}</router-link
        >
      </h2>

      <forum-list :forums="categoryForums(category.id)" />
    </div>
  </div>
</template>

<script>
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
      return this.$store.state.forums.filter(
        (f) => f.categoryId === categoryId
      );
    },
  },
};
</script>
