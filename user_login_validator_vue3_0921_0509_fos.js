// 代码生成时间: 2025-09-21 05:09:32
import { ref, onMounted } from 'vue';

// 响应式数据
const username = ref('');
const password = ref('');
const isValid = ref(false);

// 监听器，用于控制表单验证
const handleValidation = () => {
  if (username.value && password.value) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
};

// 生命周期钩子，组件挂载后设置验证监听
onMounted(() => {
  handleValidation();
});

// 登录方法
const login = () => {
  if (isValid.value) {
    console.log('登录成功！');
  } else {
    console.log('登录失败，请检查用户名和密码是否已填写。');
  }
};

</script>

<template>
  <div>
    <h1>用户登录</h1>
    <input type="text" placeholder="用户名" v-model="username" @input="handleValidation()" />
    <input type="password" placeholder="密码" v-model="password" @input="handleValidation()" />
    <button @click="login()">登录</button>
    <p v-if="!isValid">请填写用户名和密码。</p>
  </div>
</template>

<style scoped>
  /* 样式代码 */
</style>
