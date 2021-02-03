<template>
  <div class="home">
    <first-component v-track></first-component>
    <sec-component/>
    <thr-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FirstComponent from '@/components/first/first-component.vue'
import SecComponent from '@/components/sec/sec-component.vue';
import ThrComponent from '@/components/thr/thr-component.vue';
@Component({
  components: {
    ThrComponent,
    SecComponent,
    FirstComponent
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
div.home{
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 10px;
}
</style>
