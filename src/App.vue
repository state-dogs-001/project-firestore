<template>
  <v-app>
    <v-app-bar app color="light" dark>
      <div class="d-flex align-center">
        <h1>
          IMPOSSIBLE HOTEL
        </h1>
      </div>
      <v-spacer />
      <v-btn color="light" to="/reg">Register</v-btn>
      <v-btn color="light" to="/user">User</v-btn>
    </v-app-bar>

    <v-main>
      <router-view class="mb-10" />
    </v-main>

    <v-footer padless dark color="light">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Impossible Hotel</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({})
};
</script>
