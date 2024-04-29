// CountdownMask.vue
<template>
  <van-overlay :show="isShow">
    <div class="wrapper">
      <van-count-down v-if="isShow" :time="time" v-slot="{ seconds }" @finish="finish">
        <span class="seconds">{{ seconds }}</span>
      </van-count-down>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: 'CountdownMask',
  data() {
    return {
      isShow: false,
      time: 3500
    }
  },
  props: ['onFinish'],
  methods: {
    show(time) {
      this.isShow = true;
      this.time = time;
    },
    finish() {
      // 关闭遮罩
      this.isShow = false;
      
      // 调用传递进来的 onFinish 回调函数，触发事件，通知父组件
      this.onFinish()
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.seconds {
  font-size: 100px;
  color: rgb(237, 119, 77);
}
</style>