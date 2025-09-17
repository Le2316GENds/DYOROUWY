// 代码生成时间: 2025-09-17 22:06:07
import { ref, onMounted } from 'vue';

// 定义响应式数据
const randomNum = ref(0);

// 随机数生成器函数
const generateRandomNumber = () => {
  randomNum.value = Math.floor(Math.random() * 100); // 生成0-99的随机数
};

// 组件挂载时生成一个随机数
onMounted(generateRandomNumber);
</script>

<template>
  <div>
    <h1>Random Number Generator</h1>
    <p>The random number is: {{ randomNum }}</p>
    <button @click="generateRandomNumber">Generate</button>
  </div>
</template>

<style scoped>
/* 样式部分可以根据需要添加 */
</style>