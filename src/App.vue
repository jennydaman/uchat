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


    <v-content>
      <div id="content">
      <v-container fluid>
        <message-group v-for="group in data" v-bind:data="group"></message-group>
      </v-container>
      </div>
    </v-content>

    <v-footer app>
      <span>&copy; uchat 2018. Made at <a href="https://hacks.mbhs.edu/" target="_blank">BlairHacks_0</a>.</span>
    </v-footer>
    <div id="chatpos">
      <div style="padding-left: 300px" class="hidden-md-and-down"></div>
    <chat-box></chat-box>
    </div>

  </v-app>
</template>

<script>
import MessageGroup from './components/MessageGroup.vue'
import ChatBox from './components/ChatBox.vue'
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
          ]},
        {
          platform: 'hangouts',
          isAuthor: false,
          author: 'Noah Singer',
          messages: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem arcu, pulvinar eu mauris eget, vestibulum aliquam nisi. Etiam blandit leo lorem, quis gravida nunc faucibus non. Suspendisse potenti. Nam auctor mollis mi sit amet eleifend. Donec nec ornare sem. Integer diam sem, auctor ac ex eget, molestie maximus quam. Fusce pellentesque nisl ac erat vestibulum hendrerit. Praesent ultricies malesuada rhoncus.',
            "Morbi facilisis, augue sit amet imperdiet varius, dui ipsum vestibulum orci, in tempus enim massa nec neque. Fusce facilisis a mi vitae ornare. Phasellus in enim lorem. Praesent malesuada varius lectus vel eleifend. Sed tempus metus et est tempus, nec eleifend sem posuere. Donec laoreet vitae purus quis varius. Aliquam semper lacus sed laoreet consectetur.",
            "Sed eget malesuada ligula. Vivamus a tempor magna. Ut ultricies vel lectus eu viverra. Donec at ligula nunc. Nam tempor a magna at auctor. Morbi nec pulvinar elit. Donec tincidunt elit massa, tristique facilisis odio ultrices quis. Ut accumsan a urna in luctus. Donec porttitor sed odio ac molestie.",
            "In hac habitasse platea dictumst. Integer massa quam, scelerisque vel tellus eu, hendrerit porta turpis. Aliquam erat volutpat. Vestibulum varius lacus sit amet porttitor vulputate. Quisque et justo sed leo pharetra egestas. Integer finibus consectetur metus ac auctor. Aenean purus dui, finibus vel metus eget, convallis tempor ligula. Suspendisse ac accumsan dui. Sed sagittis, tortor sit amet sollicitudin sollicitudin, leo nibh venenatis ipsum, non condimentum turpis velit maximus magna. Nullam non libero eu elit bibendum ullamcorper. Duis a dui sit amet sapien bibendum rhoncus. Aenean sagittis dignissim ipsum, ut finibus ex vestibulum eget. Suspendisse eu nibh pulvinar, pellentesque ipsum quis, vehicula nibh. Nulla aliquet sagittis semper."
          ]},
        {
          platform: 'hangouts',
          isAuthor: false,
          author: 'Noah Singer',
          messages: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem arcu, pulvinar eu mauris eget, vestibulum aliquam nisi. Etiam blandit leo lorem, quis gravida nunc faucibus non. Suspendisse potenti. Nam auctor mollis mi sit amet eleifend. Donec nec ornare sem. Integer diam sem, auctor ac ex eget, molestie maximus quam. Fusce pellentesque nisl ac erat vestibulum hendrerit. Praesent ultricies malesuada rhoncus.',
            "Morbi facilisis, augue sit amet imperdiet varius, dui ipsum vestibulum orci, in tempus enim massa nec neque. Fusce facilisis a mi vitae ornare. Phasellus in enim lorem. Praesent malesuada varius lectus vel eleifend. Sed tempus metus et est tempus, nec eleifend sem posuere. Donec laoreet vitae purus quis varius. Aliquam semper lacus sed laoreet consectetur.",
            "Sed eget malesuada ligula. Vivamus a tempor magna. Ut ultricies vel lectus eu viverra. Donec at ligula nunc. Nam tempor a magna at auctor. Morbi nec pulvinar elit. Donec tincidunt elit massa, tristique facilisis odio ultrices quis. Ut accumsan a urna in luctus. Donec porttitor sed odio ac molestie.",
            "In hac habitasse platea dictumst. Integer massa quam, scelerisque vel tellus eu, hendrerit porta turpis. Aliquam erat volutpat. Vestibulum varius lacus sit amet porttitor vulputate. Quisque et justo sed leo pharetra egestas. Integer finibus consectetur metus ac auctor. Aenean purus dui, finibus vel metus eget, convallis tempor ligula. Suspendisse ac accumsan dui. Sed sagittis, tortor sit amet sollicitudin sollicitudin, leo nibh venenatis ipsum, non condimentum turpis velit maximus magna. Nullam non libero eu elit bibendum ullamcorper. Duis a dui sit amet sapien bibendum rhoncus. Aenean sagittis dignissim ipsum, ut finibus ex vestibulum eget. Suspendisse eu nibh pulvinar, pellentesque ipsum quis, vehicula nibh. Nulla aliquet sagittis semper."
          ]}
      ]
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
  height: calc(100% - 300px);
}

#chatpos {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 12px;
}


</style>
