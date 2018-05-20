<!-- groups together messages sent by the same person within a short amount of time. -->

<template>
  <div class="group" v-bind:class="data.isAuthor ? 'right' : 'left'">
    <v-chip
    v-for="message in data.messages"
    v-bind:color="data.isAuthor ? 'white' : {
    hangouts: 'green',
    discord: 'purple',
    facebook: 'blue'
  }[data.platform]"
    v-bind:text-color="data.isAuthor ? 'black' : 'white'"
    class="message">{{ message }}</v-chip>

  </div>
</template>

<script>
export default {
  name: 'message-group',
  props: {
    data: Object
  }
}
</script>

<style>
.group {
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.left {
  align-items: flex-start;
}

.right {
  align-items: flex-end;
}

.message {
  margin-top: 1px;
  margin-bottom: 0px;
  max-width: 600px;
}
</style>
