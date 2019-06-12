<template>
  <div class="hello">
    <p>{{ lambdaMsg }}</p>
    <p><button @click="callLambda">Get Message from Lambda</button></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Archives extends Vue {
  private lambdaMsg = "Click to get a message";
  async mounted() {}
  callLambda() {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => {
        this.lambdaMsg = json.msg;
      });
  }
}
</script>

<style lang="sass" scoped></style>
