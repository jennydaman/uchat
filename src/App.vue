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
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <h1>main content</h1>
    </v-content>
    <v-footer app fixed>
      <span>this is a bottom bar for cool information!</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    drawer: true,
    title: "person",
    user: {name: "Jennings Zhang", pic: "https://jennydaman.github.io/assets/square_swan.jpg"},
    friends: [
      {name: "Noah Singer", pic: "https://angstromctf.com/assets/images/people/Noah%20Singer.jpg"},
      {name: "Noah Kim", pic: "https://angstromctf.com/assets/images/people/Noah%20Kim.jpg"},
      {name: "Ian Rackow", pic: "https://angstromctf.com/assets/images/people/Ian%20Rackow.jpg"}
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#logo {
  width: 300px;
}
</style>
