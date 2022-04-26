<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        v-model="text"
        id="post_text"
        class="form-input"
        name="text"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="form-actions">
      <button class="btn btn-blue" type="submit" name="Publish">
        Submit post
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  data() {
    return { text: '' };
  },
  methods: {
    save() {
      const post = {
        id: 'gggg' + Math.random(),
        text: this.text,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
        publishedAt: Math.floor(Date.now() / 1000),
      };
      this.$emit('save', { post });
      this.text = '';
    },
  },
};
</script>
