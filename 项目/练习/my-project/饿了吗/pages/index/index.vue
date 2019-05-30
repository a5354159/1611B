<template>
<div class="main">
    <h2 class="titles">wex5 外卖</h2>
    <div class="contents">
      <div v-for="(item,index) in data" :key="index" class="conbox"> 
          <dl>
            <dt><img :src="item.img"></dt>
            <dd class="rig">
              <div class="rigChild"><div>{{item.name}}</div> <span class="select" @click="handlbind(item.id)">来一份</span></div>
              <div>{{item.title}}</div>
              <div>Y  {{item.money}}</div>
            </dd>
          </dl>
      </div>
     
    </div>
</div>
</template>

<script>
import { formatTime } from "@/utils/index";
import store from "../../store/store.js";
export default {
  created() {
    wx.request({
      url:
        "https://www.easy-mock.com/mock/5cdbd49bb62ba32b7a27f1a3/example_copy_copy/meList",
      success: result => {
        console.log(result);
        this.data = result.data.lists;
      }
    });
  },

  components: {},
  methods: {
    handlbind(id) {
      let arr = [];
      let item = this.data.filter(items => {
        return items.id === id;
      });
      item.forEach(its => {
        if (its.sum <= 10) {
          ++its.sum;
          its.money=its.sum*its.money
          arr.push(its)
          return;
        }
      });

      store.dispatch("setfootlist", item);
      wx.switchTab({
        url: "/pages/shopping/main"
      });
    }
  },
  data() {
    return {
      data: []
    };
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
.titles {
  width: 100%;
  height: 300rpx;
  text-align: center;
}
.contents {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.conbox {
  width: 100%;
  height: 250rpx;
  border-bottom: 3rpx solid #ccc;
}
.contents > .conbox > view {
  display: flex;
  padding: 30rpx;
  box-sizing: border-box;
}
.contents > .conbox > view image {
  width: 300rpx;
  height: 160rpx;
}
.contents > .conbox > view > .rig {
  padding: 0 20rpx;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 30rpx;
  justify-content: space-around;
}
.rigChild {
  display: flex;
  justify-content: space-between;
}
.select {
  color: #00f;
}
</style>
