<template>
  <div>
    账号<input type="text" v-model="user" /><br />
    <p>{{ password }}</p>
    密码<input type="password" v-model="password" /><br />
    <br />
    <button @click="login">login</button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { reactive, toRefs, computed, getCurrentInstance } from "vue";
export default {
  setup() {
    const state = reactive({
      user: "admin",
      password: "",
    });
    const { ctx } = getCurrentInstance();
    const login = () => {
      const { user, password } = ctx;
      if (user === "admin" && password === "123456") {
        ctx.$router.push("/home");
        sessionStorage.setItem("user", user);
      } else {
        alert("账号密码不正确");
      }
    };
    return {
      ...toRefs(state),
      login,
    };
  },
};
</script>
