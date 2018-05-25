<!-- groups together messages sent by the same person within a short amount of time. -->

<template>
  <p><v-layout
  column
  fill-height
  v-bind:align-start="!isAuthor"
  v-bind:align-end="isAuthor"
  class="mgroup"
  v-bind:class="isAuthor ? 'mright' : 'mleft'"
  >
    <span v-for="message in messages" class="message" v-bind:style="special">{{ message }}</span>
  </v-layout></p>
</template>

<script>
export default {
  name: 'message-group',
  props: {
    platform: String,
    isAuthor: Boolean,
    author: String,
    messages: Array
  },
  computed: {
    special: function() {
      const bg = this.isAuthor ? "white" : this.$bg_color[this.platform];
      const fg = this.isAuthor ? "black" : "white";

      return {
        'background-color': bg ,
        color: fg
      }
    }
  }
}
</script>

<style>

.message {
  max-width: 600px;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 6px 12px;
  margin-bottom: 1px;
}

@media only screen and (max-width: 720px) {
  .message {
    max-width: 80%;
  }
}

.mgroup {
  --r: 16px;
}

.mgroup.mleft span:first-child {
  border-top-left-radius: var(--r);
}
.mgroup.mleft span {
  border-top-right-radius: var(--r);
  border-bottom-right-radius: var(--r);
}
.mgroup.mleft span:last-child {
  border-bottom-left-radius: var(--r);
}


.mgroup.mright span:first-child {
  border-top-right-radius: var(--r);
}
.mgroup.mright span {
  border-top-left-radius: var(--r);
  border-bottom-left-radius: var(--r);
}
.mgroup.mright span:last-child {
  border-bottom-right-radius: var(--r);
}
</style>
