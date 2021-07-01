<template>
  <div class="cate-container">
    <van-sidebar v-model="active" class="sidebar">
    </van-sidebar>
    <div class="shop-content">
    </div>
  </div>
</template>

<script lang="ts">
import {ref, watch} from 'vue';
import {Notify} from 'vant'
export default {
  name: 'category',
  setup() {
    const active = ref(0);
    watch(() => active.value, () => document.querySelector('.shop-content').scrollTop = 0)
    const nav2shop = (title) => {
      Notify({ type: 'success', message: title })
    }
    return {
      active,
      nav2shop
    };
  },
};
</script>

<style scoped>

</style>