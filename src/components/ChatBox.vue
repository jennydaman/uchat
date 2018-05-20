<template>
  <div id="chatbox">
    <v-text-field
    id="outgoing"
    name="outgoing"
    v-bind:label="platform"
    autofocus
    clearable
    

    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'chat-box',
  data: () => {return {platform: 'discord'}}
}
</script>



