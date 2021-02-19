<template>
  <div class="container">
    <div class="form">
      <div>第一种写法</div>
      <a-range-picker v-model="request.createRangeTime"/>
      <a-range-picker v-model="request.updateRangeTime"/>
      <a-input v-model="request.searchText" placeholder="请输入搜索内容"/>
      <a-button @click="clearRequest"> 重置 </a-button>
      <a-button @click="searchData" type="primary"> 搜索 </a-button>
    </div>
    <div class="detail">{{ detailContent.data }}</div>
  </div>
</template>

<script>
export default {
  name: "first-component",
  data() {
    return {
      request: {
        createRangeTime: [],
        updateRangeTime: [],
        searchText: '',
      },
      detailContent: {}
    }
  },
  methods:{
    clearRequest(){
      this.request.createRangeTime =  [];
      this.request.updateRangeTime =  [];
      this.request.searchText = '';
    },
    searchData(){
      // 1, 格式化入参
      let request = {searchText: this.request.searchText};
      if(this.request.createRangeTime.length > 1){
        request = {
          ...request,
          createRangeTimeStartTime: this.request.createRangeTime[0],
          createRangeTimeEndTime: this.request.createRangeTime[1]
        }
      }
      if(this.request.updateRangeTime.length > 1){
        request = {
          ...request,
          updateRangeTimeStartTime: this.request.updateRangeTime[0],
          updateRangeTimeEndTime: this.request.updateRangeTime[1],
        }
      }
      console.log(request);
      this.detailContent.data = `正在搜索 -> -> ->`
      setTimeout(()=>{
        this.detailContent = {data:`搜索结果更新：${new Date().toLocaleString()}`,total: 12}
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
