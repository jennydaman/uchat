<template>
  <!-- TODO resize height on type -->
  <v-flex id="chatboxbox">
    <v-text-field
    id="chatbox"
    name="outgoing"
    :label="currentPlatform"
    autofocus
    clearable
    color="primary"
    box
    rows="1"
    multi-line
    ></v-text-field>
    <button v-for="p in availablePlatforms" :key="p" v-on:click="$emit('update:currentPlatform', p)">
      <img width="30" :title="p" :alt="p" :src="$platform[p].icon"/>
    </button>
  </v-flex>
</template>

<script>

const box = document.getElementById('chatbox')

export default {
  name: 'chat-box',
  props: {
    availablePlatforms: Array,
    currentPlatform: String
  }
}
</script>
<style>
#chatboxbox {
  display: flex;
  flex-wrap: nowrap;
}

</style>
