<template>
  <v-flex id="chatboxbox">
    <v-text-field
    id="textfield"
    name="outgoing"
    v-bind:label="platform"
    autofocus
    clearable
    v-bind:color="'purple'"
    box
    rows="1"
    ></v-text-field>
    <button><img src="/img/third_party/discord.svg" width="30" /></button>
    <button><img src="/img/third_party/hangouts.png" width="30" /></button>
  </v-flex>
</template>

<script>
export default {
  name: "chat-box",
  data: () => {
    return { platform: "discord" };
  }
};
</script>
<style>
#chatboxbox {
  display: flex;
  flex-wrap: nowrap;
}

</style>



