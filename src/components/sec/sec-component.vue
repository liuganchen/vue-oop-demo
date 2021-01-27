<template>
  <div class="container">
    <div class="form">
      <div>第二种写法</div>
      <a-range-picker v-model="requestInfo.createRangeTime"/>
      <a-range-picker v-model="requestInfo.updateRangeTime"/>
      <a-input v-model="requestInfo.searchText" placeholder="请输入搜索内容"/>
      <a-button @click="clearRequest"> 重置 </a-button>
      <a-button @click="searchData" type="primary"> 搜索 </a-button>
    </div>
    <div class="detail">{{ detailContent }}</div>
  </div>
</template>

<script>
const requestStaticData = {
  createRangeTime: [],
  updateRangeTime: [],
  searchText: '',
}
export function formatRequestData(request){
  // 1, 格式化入参
  if(request.createRangeTime.length > 1){
    request = {
      ...request,
      createRangeTimeStartTime: request.createRangeTime[0],
      createRangeTimeEndTime: request.createRangeTime[1]
    }
  }
  if(request.updateRangeTime.length > 1){
    request = {
      ...request,
      updateRangeTimeStartTime: request.updateRangeTime[0],
      updateRangeTimeEndTime: request.updateRangeTime[1],
    }
  }
  return request;
}
export default {
  name: "sec-component",
  data(){
    return {
      requestInfo: requestStaticData,
      detailContent: ''
    }
  },
  methods:{
    clearRequest(){
      this.requestInfo = requestStaticData;
    },
    searchData(){
      // 1, 格式化入参
      formatRequestData(this.requestInfo);
      this.detailContent = `正在搜索 -> -> ->`
      setTimeout(()=>{
        this.detailContent = `搜索结果更新：${new Date().toLocaleString()}`
      }, 2000)
    }
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
