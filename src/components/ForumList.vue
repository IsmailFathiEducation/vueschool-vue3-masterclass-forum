<template>
  <div v-for="forum in forums" :key="forum.id" class="forum-listing">
    <div class="forum-details">
      <router-link
        :to="{ name: 'ForumShow', params: { forumId: forum.id } }"
        class="text-xlarge"
        >{{ forum.name }}</router-link
      >
      <p>{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p>
        <span class="count">{{ forum.threads?.length }}</span>
        {{ forumThreadsCountText(forum.threads) }}
      </p>
    </div>

    <div class="last-thread">
      <img
        class="avatar"
        src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg"
        alt=""
      />
      <div class="last-thread-details">
        <a href="thread.html">Post Reactions</a>
        <p class="text-xsmall">
          By <a href="profile.html">Rolf Haug</a>, a month ago
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      type: Array,
      required: true,
    },
  },
  methods: {
    forumThreadsCountText(threadsCount) {
      if (threadsCount) {
        return threadsCount > 1 ? 'threads' : 'thread';
      } else {
        return 'no thread';
      }
    },
  },
};
</script>
