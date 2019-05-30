<template>
<div class="main">
      <button @click="sub">-</button>
      <div>{{num}}</div>
       <button @click='add'>+</button>
       <div>{{sum}}</div>
</div>
</template>

<script>
import { formatTime } from "@/utils/index";
import { mapActions,mapState } from 'vuex'
export default {
  created() {},
  computed: mapState(['num','sum']),
    // num(){
    //   return this.$store.state.num
    // }
  // },
  components: {},
  methods: {
    sub() {
    //   // Store.commit("sub");
      // this.$store.dispatch('subaSync')
      this.subaSync()
    },
    add() {
    //   // Store.commit("add");
      // this.$store.dispatch('addaSync')
      this.addaSync()
    },
    ...mapActions(['subaSync','addaSync'])
  },
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
