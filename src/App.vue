<template>
  <v-app :dark="darkTheme">
    <v-toolbar
      fixed
      app
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>{{ name }}</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn icon><v-icon>people</v-icon></v-btn> -->
    </v-toolbar>

  <v-navigation-drawer
    v-model="drawer"
    fixed
    app
  >
    <lateral-menu
    :drawer="drawer"
    :dark-theme.sync="darkTheme"
    :user="user"
    :all-conversations="allConversations"
    :index.sync="index"
    ></lateral-menu>
  </v-navigation-drawer>


    <!-- appear after loading to avoid undefined errors -->
    <div id="chatpos" v-if="!loading">
      <div style="padding-left: 300px" class="hidden-md-and-down"></div>
    <chat-box :available-platforms="allConversations[index].availablePlatforms" :current-platform.sync="currentPlatform"></chat-box>
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
import LateralMenu from './components/LateralMenu.vue'
import * as Model from './model'

export default {
  name: 'app',
  data: () => {
    return {
      drawer: true,
      user: {
        name: "",
        pic: ""
      },
      allConversations: [],
      index: 0,
      messageStream: null,
      darkTheme: true,
    }
  },
  created: function () {
    Model.getUser().then(r => {
      this.user = r
    })
    Model.getConversations().then(r => {
      // TODO: loading spinner, error message if Promise rejected (connection interruption)
      this.allConversations = r
      this.loadStream()
    })
  },
  computed: {
    loading: function() {
      return this.index >= this.allConversations.length
    },
    name: function() {
      return this.loading ? 'uchat' : this.allConversations[this.index].name
    },
    currentPlatform: {
      get: function() {
        return this.loading ? 'uchat' : this.allConversations[this.index].preferredPlatform
      },
      set: function(newValue) {
        this.allConversations[this.index].preferredPlatform = newValue
      }
    }
  },
  watch: {
    index: 'loadStream',
    currentPlatform: function() {
      this.$vuetify.theme.primary = this.$platform[this.currentPlatform].color
    }
  },
  methods: {
    loadStream: function() {
      Model.getMessageStream(this.allConversations[this.index].id).then(ms => {
        this.messageStream = ms
      })
    }
  },
  props: {
    source: String // tbh idk what this is doing here
  },
  components: {
    MessageGroup, ChatBox, LateralMenu
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
</style>
