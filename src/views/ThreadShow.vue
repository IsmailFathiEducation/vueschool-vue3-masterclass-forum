<template>
  <div class="container">
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>

      <p>
        By
        <a href="#" class="link-unstyled">{{ userById(thread.userId).name }}</a
        >, 2 hours ago.
        <span
          style="float: right; margin-top: 2px"
          class="hide-mobile text-faded text-small"
          >3 replies by 3 contributors</span
        >
      </p>

      <posts-list :posts="threadPosts" />

      <post-editor @save="savePost" />
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import PostsList from '@/components/PostsList.vue';
import PostEditor from '@/components/PostEditor.vue';
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
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  computed: {
    thread() {
      return this.threads.find((t) => t.id === this.threadId);
    },
    threadPosts() {
      return this.posts.filter((p) => p.threadId === this.threadId);
    },
  },
  methods: {
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
    savePost({ post }) {
      post.threadId = this.threadId;
      this.thread.posts.push(post.id);
      this.posts.push(post);
    },
  },
};
</script>
