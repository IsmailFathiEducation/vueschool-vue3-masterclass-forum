import { createStore } from 'vuex'
import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  mutations: {
    SET_POST: (state, post) => {
      state.posts.push(post)
    },
    APPEND_POST_TO_THREAD: (state, post) => {
      const thread = state.threads.find(t => t.id === post.threadId)
      thread.posts.push(post.id)
    }
  },
  getters: {
    authUser: (state) => state.users.find(u => u.id === state.authId),
    users: (state) => state.users,
    userById: (state) => (userId) => {
      return state.users.find((u) => u.id === userId)
    },
    posts: (state) => state.posts,
    // threads: (state) => state.threads,
    threadById: (state) => (threadId) => {
      return state.threads.find((t) => t.id === threadId)
    },
    threadPosts: (state) => (threadId) => {
      return state.posts.filter((p) => p.threadId === threadId)
    },
    categoryForums: (state) => (categoryId) => {
      return state.forums.filter(
        (f) => f.categoryId === categoryId
      )
    }
  },
  actions: {
    savePost: ({ commit }, { post }) => {
      post.id = 'gggg' + Math.random()
      commit('SET_POST', post)
      commit('APPEND_POST_TO_THREAD', post)
    }
  }
})
