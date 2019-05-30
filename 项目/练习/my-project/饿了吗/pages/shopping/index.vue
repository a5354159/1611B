<template>
<div class="main">
      <div class="tit">清单</div>
      <div v-for="(item,index) in getData" :key="index" class="box">
         <div class="picshoop">
          <div>{{item.name}}</div><div v-if="!item.money==0">{{item.money}}</div>
          <div class="cont">
            <div>-</div><div>{{item.sum}}</div><div>+</div>
          </div>
        </div>
            <div class="heji">合计￥{{item.money}}</div>
      </div>    
</div>
</template>

<script>
import { formatTime } from "@/utils/index";
import store from "../../store/store.js";
export default {
  created() {},
  computed: {
    getData() {
      return store.state.arr;
    }
  },
  components: {},
  methods: {},
  data() {
    return {};
  }
};
</script>


<style>
page,
page > view {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
}
.tit {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  color: #00f;
  border-bottom: 2px solid #ccc;
  text-indent: 30rpx;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.picshoop {
  display: flex;
  justify-content: space-around;
  padding: 20rpx 0;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}
.cont{
  display: flex;
}
.heji{
  text-align: right;
  padding:30rpx; 
}
</style>
