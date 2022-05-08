<template>
  <div class="container">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <thread-list :threads="forumThreads" />
    </div>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue';
export default {
  name: 'ForumShow',
  components: { ThreadList },
  props: {
    forumId: {
      type: String,
      required: true,
    },
  },
  computed: {
    forum() {
      return this.$store.state.forums.find((f) => f.id === this.forumId);
    },
    forumThreads() {
      return this.$store.state.threads.filter(
        (t) => t.forumId === this.forumId
      );
    },
  },
};
</script>
