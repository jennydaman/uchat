<template>
  <v-app dark>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>{{ person }}</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img v-bind:src="user.pic" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ user.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-divider></v-divider>
        <v-list-tile v-for="friend in conversations" :key="friend.name" @click="">
          <v-list-tile-avatar>
            <img v-bind:src="friend.pic" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ friend.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-footer app fixed class="hidden-md-and-down">
      <span>&copy; uchat 2018. Made at <a href="https://hacks.mbhs.edu/" target="_blank">BlairHacks_0</a>.</span>
    </v-footer>

    <div id="chatpos" v-bind:class="{ftspace: $vuetify.breakpoint.lgAndUp}">
      <div style="padding-left: 300px" class="hidden-md-and-down"></div>
    <chat-box></chat-box>
    </div>

    <v-content>
      <v-container fluid id="messageArea">
        <message-group v-for="group in messageStream" v-bind="group"></message-group>
        <div style="height: 56px"></div> <!-- space for the chat box -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MessageGroup from './components/MessageGroup.vue'
import ChatBox from './components/ChatBox.vue'

import * as Model from './model'
export default {
  name: 'app',
  data: () => {
    return {
      drawer: true,
      person: 'person',
      user: Model.getUser(),
      conversations: Model.getConversations(),
      messageStream: Model.getMessageStream()
    }
  },
  props: {
    source: String
  },
  components: {
    MessageGroup, ChatBox
  }
}
</script>

<style lang="scss">

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#messageArea {
  height: 100%;
}

#chatpos {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  z-index: 1;
}

#chatpos.ftspace {
  bottom: 12px;
}

</style>
