<template>
  <div class="container">
    <div class="form">
      <div>第三种写法</div>
      <a-range-picker v-model="requestInfo.createRangeTime"/>
      <a-range-picker v-model="requestInfo.updateRangeTime"/>
      <a-input v-model="requestInfo.searchText" placeholder="请输入搜索内容"/>
      <a-button @click="clearRequest"> 重置 </a-button>
      <a-button @click="searchData" type="primary"> 搜索 </a-button>
    </div>
    <div class="detail">{{ detailContent }}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ComponentRequest} from '@/components/thr/component-request';

@Component
export default class ThrComponent extends Vue{
  requestInfo = new ComponentRequest();
  detailContent = '';
  clearRequest(){
    this.requestInfo = new ComponentRequest();
  }
  searchData(){
    // 1, 格式化入参
    this.requestInfo.formatData();
    console.log(this.requestInfo)
    this.detailContent = `正在搜索 -> -> ->`
    setTimeout(()=>{
      this.detailContent = `搜索结果更新：${new Date().toLocaleString()}`
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
div.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  div.form{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-column-gap: 10px;
    align-items: center;
  }
  div.detail{
    margin-top: 20px;
  }
}
</style>
