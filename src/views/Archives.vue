<template>
  <div class="hello">
    <ul class="flyers">
      <li class="flyer" v-for="flyer of flyers" :key="flyer.date">
        <img :src="flyer.img" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

const ARCHIVE_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw50PfBHw7EBrKhIZUR5u9SG9folyqRJPcB1eViRGj9A9yhoSk/exec";

@Component({})
export default class Archives extends Vue {
  private flyers = [];
  async mounted() {
    const res = await axios.get(ARCHIVE_ENDPOINT);
    this.flyers = res.data;
  }
}
</script>

<style lang="sass" scoped>
.flyers
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: flex-start
  align-content: flex-start
</style>
