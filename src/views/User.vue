<template>
  <v-container>
    <h1>USER LIST</h1>
    <br />
    <v-row>
      <v-col cols="12" v-for="(item, key) in dataList" :key="key">
        <h3>
          {{ key + 1 }}. Name: {{ item.cusFullName }} Tel:
          {{ item.cusPhone }} Email: {{ item.cusEmail }}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "@/plugins/firebaseConfig.js";
export default {
  data: () => ({
    dataList: []
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      db.collection("users")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.dataList.push(doc.data());
          });
        });
    }
  }
};
</script>

<style></style>
