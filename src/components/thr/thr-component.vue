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
    <div class="detail">{{ detailContent.data }}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ComponentRequest} from '@/components/thr/component-request';
import {thrSev$} from '@/components/thr/thr-service';
import {DetailContent} from '@/components/thr/detail-content';

@Component
export default class ThrComponent extends Vue{
  requestInfo = new ComponentRequest();
  detailContent:DetailContent = {};
  clearRequest(){
    this.requestInfo = new ComponentRequest();
  }
  searchData(){
    // 1, 格式化入参
    this.requestInfo.formatData();
    console.log(this.requestInfo)
    this.detailContent.data = `正在搜索 -> -> ->`
    thrSev$.getData(this.requestInfo).then(res => this.detailContent = res);
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
