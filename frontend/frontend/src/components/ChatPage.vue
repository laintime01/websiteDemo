<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <!-- bootswatch CDN-->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lumen/bootstrap.min.css"
        integrity="sha384-GzaBcW6yPIfhF+6VpKMjxbTx6tvR/yRd/yJub90CqoIn2Tz4rRXlSpTFYMKHCifX"
        crossorigin="anonymous"
      />
      <div class="row">
        <div class="col-sm-12">
          <h1>{{ msg }}</h1>
          <br />
          <br />
          <div style="">
            <b-form-input
              v-model="talk_text"
              style="display: inline-block; width: 80%"
            ></b-form-input>
            <b-button
              style="display: inline-block; margin-left: 10px"
              v-on:click="this.onTalk"
            >
              talk</b-button
            >
          </div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <b-table striped hover :items="items"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { onTalkApi } from "@/api/chat";
export default {
  name: "ChatPage",
  data() {
    return {
      talk_text: "",
      items: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onTalk() {
      const payLoad = {
        prompt: this.talk_text,
      };
      onTalkApi(payLoad).then((res) => {
        this.items.push(
          { a: "User:", content: this.talk_text },
          { a: "AI:", content: res.data.message }
        );
        this.clear_text();
      });
    },
    clear_text() {
      this.talk_text = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
