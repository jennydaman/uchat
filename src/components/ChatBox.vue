<template>
  <div id="chatbox">
    <v-text-field
    id="outgoing"
    name="outgoing"
    v-bind:label="platform"
    autofocus
    clearable
    ></v-text-field>
    <button><img src="/img/third_party/discord.svg" width="24" /></button>
    <button><img src="/img/third_party/hangouts.png" width="24" /></button>

  </div>
</template>

<script>
export default {
  name: 'chat-box',
  data: () => {return {platform: 'discord'}}
}
</script>

<style>

</style>



