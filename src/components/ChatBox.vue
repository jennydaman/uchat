<template>
  <v-flex id="chatboxbox">
    <v-text-field
    id="textfield"
    name="outgoing"
    v-bind:label="currentPlatform"
    autofocus
    clearable
    color="primary"
    box
    rows="1"
    ></v-text-field>
    <button v-for="p in availablePlatforms" :key="p" v-on:click="$emit('update:currentPlatform', p)">
      <img width="30" :title="p" :alt="p" :src="$platform[p].icon"/>
    </button>
  </v-flex>
</template>

<script>

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
