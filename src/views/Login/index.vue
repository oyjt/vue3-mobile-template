<template>
  <h1>登录页</h1>
  vuex:{{ $store.state.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { login } from '@/api/index';
import { onMounted } from 'vue';

export default{
  setup() {
    const router = useRouter();
    onMounted(() => {
      login({
        name: 'admin',
        password: '123456',
      }).then((res: object) => {
        router.push("/");
      })
    });
    const goLogin = () => {
      router.push("/");
    };
    return {
      goLogin
    }
  },
}
</script>