<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
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
        <v-list-tile v-for="friend in friends" :key="friend.name" @click="">
          <v-list-tile-avatar>
            <img v-bind:src="friend.pic" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ friend.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-title id="logo" class="hidden-md-and-down">uhacks <small>logo</small></v-toolbar-title>

      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>{{ person }}</v-toolbar-title>
    </v-toolbar>
    <v-content id="content">
      <message-group v-bind:data="data[0]"></message-group>
      <message-group v-bind:data="data[1]"></message-group>
    </v-content>
    <v-footer app fixed>
      <span>this is a bottom bar for cool information!</span>
    </v-footer>
  </v-app>
</template>

<script>
import MessageGroup from './components/MessageGroup.vue'
export default {
  name: 'app',
  data: () => {
    return {
      drawer: true,
      person: 'person',
      user: {
        name: 'Jennings Zhang',
        pic: 'https://jennydaman.github.io/assets/square_swan.jpg'
      },
      friends: [
        {
          name: 'Noah Singer',
          pic: 'https://angstromctf.com/assets/images/people/Noah%20Singer.jpg'
        },
        {
          name: 'Noah Kim',
          pic: 'https://angstromctf.com/assets/images/people/Noah%20Kim.jpg'
        },
        {
          name: 'Ian Rackow',
          pic: 'https://angstromctf.com/assets/images/people/Ian%20Rackow.jpg'
        }
      ],
      data: [
        {
          platform: 'discord',
          isAuthor: false,
          author: 'Noah Singer',
          messages: ['hey', 'how are you?']
        },
        {
          platform: 'discord',
          isAuthor: true,
          author: 'Jennings Zhang',
          messages: [
            'they ask you how you are',
            "and you have to say you're fine",
            "but you're not really fine"
          ]}
      ]
    }
  },
  props: {
    source: String
  },
  components: {
    MessageGroup
  }
}
</script>

<style>
html {
  overflow-y: hidden;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#logo {
  width: 300px;
}

#content {
  overflow-y: scroll;
}
</style>
