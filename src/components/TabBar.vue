<template>
  <van-tabbar v-model="active" fixed route active-color=”#6689e2“>
    <van-tabbar-item v-for="(item, index) in tabbars" :to="item.to" :key="index">
        <span>{{ item.title }}</span>
        <template #icon="props">
            <img :src.sync="props.active ? item.image_active : item.image" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
// ts 定义类型并且暴露出去
export interface ITabList {
  title: string          // 标题
  to: { name: string }   // url路径
  image: string          // 初始图标
  image_active: string   // 选中图标
}
export default defineComponent({
  name: "TabBar",
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    tabbars: {
      type: Array as PropType<ITabList[]>, // 类型断言
      default: () => {
        return []
      }
    }
  },
  setup(props) {
    const active = ref(props.defaultActive)
    return { active }
  }
})
</script>

