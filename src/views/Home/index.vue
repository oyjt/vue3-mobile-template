<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image"/>
    </van-swipe-item>
  </van-swipe>
  <van-card
      v-for="item in 20"
      :key="item"
      :num="item"
      tag="标签"
      :price="item.toFixed(2)"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      :origin-price="(item * 10).toFixed(2)"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "home",
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    return {
      images
    }
  }
})
</script>

<style scoped>

</style>