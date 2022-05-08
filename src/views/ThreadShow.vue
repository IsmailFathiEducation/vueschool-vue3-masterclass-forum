<template>
  <div class="container">
    <div class="col-large push-top">
      <h1>{{ threadById(threadId).title }}</h1>

      <p>
        By
        <a href="#" class="link-unstyled">{{
          userById(threadById(threadId).userId).name
        }}</a
        >, 2 hours ago.
        <span
          style="float: right; margin-top: 2px"
          class="hide-mobile text-faded text-small"
          >3 replies by 3 contributors</span
        >
      </p>

      <posts-list :posts="threadPosts(threadId)" />

      <post-editor @save="savePost" />
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';
import PostEditor from '@/components/PostEditor.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'PageThreadShow',
  props: {
    threadId: {
      type: String,
      required: true,
    },
  },
  components: {
    PostsList,
    PostEditor,
  },
  computed: {
    ...mapGetters(['threadById', 'threadPosts', 'userById']),
  },
  methods: {
    savePost({ post }) {
      post.threadId = this.threadId;
      this.$store.dispatch('savePost', { post });
    },
  },
};
</script>
