<!-- groups together messages sent by the same person within a short amount of time. -->

<template>
  <v-layout
  column
  fill-height
  v-bind:align-start="!data.isAuthor"
  v-bind:align-end="data.isAuthor"
  >
    <v-flex v-for="message in data.messages">
      <v-chip
        v-bind:color="data.isAuthor ? 'white' : {
          hangouts: 'green',
          discord: 'purple',
          facebook: 'blue'
        }[data.platform]"
        v-bind:text-color="data.isAuthor ? 'black' : 'white'"
        class="message">{{ message }}</v-chip>
    </v-flex>
    
  </v-layout>
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

.message {
  margin-top: 1px;
  margin-bottom: 0px;
  max-width: 600px;
}

.message .chip__content {
  white-space: normal;
  padding: 6px 12px;
  height: initial;
}
</style>
