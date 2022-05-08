<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img
              :src="authUser.avatar"
              :alt="`${authUser.username} profile picture`"
              class="avatar-xlarge"
            />
          </p>

          <h1 class="title">{{ authUser.username }}</h1>

          <p class="text-lead">{{ authUser.name }}</p>

          <p class="text-justify">{{ authUser.bio || 'No bio specified.' }}</p>

          <span class="online">{{ authUser.username }} is online</span>

          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>

          <hr />

          <p v-if="authUser.website" class="text-large text-center">
            <i class="fa fa-globe"></i>
            <a target="_blank" :href="authUser.website">{{
              authUser.website
            }}</a>
          </p>
        </div>

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <PostsList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostsList from '@/components/PostsList.vue';
export default {
  name: 'ProfilePage',
  components: { PostsList },
  computed: {
    ...mapGetters(['authUser']),
    userPosts() {
      return this.$store.state.posts.filter(
        (p) => p.userId === this.authUser.id
      );
    },
    userPostsCount() {
      return this.userPosts.length;
    },
    userThreads() {
      return this.$store.state.threads.filter(
        (p) => p.userId === this.authUser.id
      );
    },
    userThreadsCount() {
      return this.userThreads.length;
    },
  },
};
</script>
