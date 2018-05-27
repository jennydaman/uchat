
<template>
  <div>
    <v-list>
      <v-list-group append-icon="settings">
        <v-list-tile avatar slot="activator">
          <v-list-tile-avatar>
            <img :src="user.pic" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- subitems -->

        <v-list-group
        sub-group
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Accounts</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>account_box</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="(p, n) in $platform" :key="n" @click="signin = true">
              <v-list-tile-title>{{ p.name }}</v-list-tile-title>
              <img width="30" :alt="n" :src="p.icon"/>
          </v-list-tile>

        </v-list-group>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Dark theme</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch color="primary" v-model="darkModel" style="position: relative; right: 7px;"></v-switch>
          </v-list-tile-action>
        </v-list-tile>

        <!-- should I add a log off prompt? -->
        <v-list-tile href="/mock/logout">
          <v-list-tile-content>
            <v-list-tile-title>Log out</v-list-tile-title>
          </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>clear</v-icon>
            </v-list-tile-action>
        </v-list-tile>

      </v-list-group>
    </v-list>
    <v-list dense two-line subheader class="pt-0">
      <v-subheader>Conversations</v-subheader>
      <v-list-tile
      v-for="(convo, i) in allConversations"
      :key="convo.id"
      @click="$emit('update:index', i)"
      ripple
      :color="$platform[convo.preferredPlatform].colorName"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ convo.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ convo.availablePlatforms }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-footer fixed>
      <span>&copy; uchat 2018. A <a href="https://hacks.mbhs.edu/" target="_blank">BlairHacks_1</a> project.</span>
    </v-footer>

    <!-- placeholder for account connection action -->
    <v-layout row justify-center>
      <v-dialog v-model="signin" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Sign into clicked platform</span>
          </v-card-title>
          <v-card-text>
            This is just a placeholder.
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Email"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" flat @click.native="signin = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'lateral-menu',
  data: function () {
    return {
      darkModel: true,
      signin: false

    }
  },
  props: {
    drawer: Boolean,
    darkTheme: Boolean,
    user: Object,
    allConversations: Array,
    index: Number
  },
  created: function () {
    if (document.cookie.includes('darkTheme=false')) { this.darkModel = false }
  },
  watch: {
    darkModel: function () {
      this.$emit('update:darkTheme', this.darkModel)
      document.cookie = 'darkTheme=' + this.darkModel
    }
  }
}
</script>
