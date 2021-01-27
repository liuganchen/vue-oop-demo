<template>
  <div class="container">
    <div class="form">
      <div>第一种写法</div>
      <a-range-picker v-model="createRangeTime"/>
      <a-range-picker v-model="updateRangeTime"/>
      <a-input v-model="searchText" placeholder="请输入搜索内容"/>
      <a-button @click="clearRequest"> 重置 </a-button>
      <a-button @click="searchData" type="primary"> 搜索 </a-button>
    </div>
    <div class="detail">{{ detailContent }}</div>
  </div>
</template>

<script>
export default {
  name: "first-component",
  data() {
    return {
      createRangeTime: [],
      updateRangeTime: [],
      searchText: '',
      detailContent: ''
    }
  },
  methods:{
    clearRequest(){
      this.createRangeTime =  [];
      this.updateRangeTime =  [];
      this.searchText = '';
    },
    searchData(){
      // 1, 格式化入参
      let request = {searchText: this.searchText};
      if(this.createRangeTime.length > 1){
        request = {
          ...request,
          createRangeTimeStartTime: this.createRangeTime[0],
          createRangeTimeEndTime: this.createRangeTime[1]
        }
      }
      if(this.updateRangeTime.length > 1){
        request = {
          ...request,
          updateRangeTimeStartTime: this.updateRangeTime[0],
          updateRangeTimeEndTime: this.updateRangeTime[1],
        }
      }
      console.log(request);
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
