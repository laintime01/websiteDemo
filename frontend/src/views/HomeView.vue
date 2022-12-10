<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <ChatPage msg="OpenAI Chat Bot App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ChatPage from "@/components/ChatPage.vue";

export default {
  name: "HomeView",
  components: {
    ChatPage,
  },
};
</script>
