<template>
<div class="main">
  <!-- <div class="tit"><div>{{name}}</div><div>></div></div>
  <div class="xuanzequ">
    <div>您选择的是：</div>
    <vie class="xuanzhong">
      <block v-for="(item ,index) in arr" :key="index">
      <div @click="bb(index)">{{item}}</div>
    </block>
    </vie>
  </div>
  <div>
    <block v-for="(item,index) in datas.city" :key="index">
      <div class="zimu">{{item.title}}</div>
        <div class="cont">
            <block v-for="(ic,im) in item.lists" :key='im'>
                <div @click="abc(ic,im)" :class="[(im===ind?'active':'nomal')]" >
                  {{ic}}
                </div>
            </block>
          </div>
      </block>
  </div> -->
</div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";
// import data from "../../data/data.json";
export default {
  created() {
    // this.datas = data;
    // console.log(this.datas);
    var reqTask = wx.request({
      url: 'http://94.191.78.55:3006/users',
      success: (result)=>{
        console.log(result)
      },
    });
  },
  components: {
    card
  },
  methods: {
    // abc(val, i) {
    //   let newArr = this.arr;
    //   if (!newArr.includes(val)) {
    //     if (this.arr.length > 10) {
    //       return;
    //     }
    //     newArr.push(val);
    //   }

      // console.log(newArr)
    //   this.arr = newArr;
    // },
    // bb(index) {
    //   console.log(index);
    //   this.arr.forEach((item, indexs) => {
    //     if (indexs === index) {
    //       this.arr.splice(index, 1);
    //     }
    //   });
    // }
  },
  data() {
    return {
      name: "您的上牌地址",
      arr: ["上海", "江苏", "北京"],
      datas: {},
      ind:0
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
.tit {
  padding: 0 25rpx;
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 30rpx;
  box-sizing: border-box;
}
.xuanzequ {
  width: 100%;
  height: 300rpx;
  /* background: #00f; */
  padding: 0 20rpx;
  margin: 50rpx 0;
}
.xuanzhong {
  display: flex;
  flex-wrap: wrap;
}
.xuanzhong > view {
  width: 20%;
  margin: 10rpx;
}
.cont {
  display: flex;
  flex-wrap: wrap;
}
.zimu {
  margin: 10rpx;
}
.cont > view {
  width: 20%;
  margin: 30rpx;
}
.active {
  border: 2rpx solid #0000f0;
}
.nomal {
  border: 2rpx solid transparent;
}
</style>
