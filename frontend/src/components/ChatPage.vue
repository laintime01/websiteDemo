<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      test the openai api
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >openai chat bot</a
      >
    </p>
    <div class="jumbotron vertical-center">
      <div class="container">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css"
          integrity="sha384-RxqHG2ilm4r6aFRpGmBbGTjsqwfqHOKy1ArsMhHusnRO47jcGqpIQqlQK/kmGy9R"
          crossorigin="anonymous"
        />
        <div class="row">
          <div class="col-sm-12">
            <div style="background-color: gray">
              <b-form-input
                v-model="openai_prompt"
                style="display: inline-block; width: 80%"
              ></b-form-input>
              <b-button
                style="display: inline-block; background-color: #999999"
                v-on:click="this.onTalk"
                >Talk</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      openai_prompt: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onTalk() {
      const payLoad = {
        prompt: this.openai_prompt,
      };
      console.log(payLoad);
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
