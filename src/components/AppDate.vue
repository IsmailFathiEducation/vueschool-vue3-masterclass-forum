<template>
  <span :title="fullDate">
    {{ timeAgo }}
  </span>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default {
  name: 'AppDate',
  props: {
    timestamp: {
      type: Number,
      required: true,
    },
  },
  computed: {
    timeAgo() {
      return dayjs.unix(this.timestamp).fromNow();
    },
    fullDate() {
      return dayjs.unix(this.timestamp).format('llll');
    },
  },
};
</script>
