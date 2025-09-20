// 代码生成时间: 2025-09-20 17:11:45
import { ref, onMounted } from 'vue';

// 响应式数据：原始JSON数据和格式化后的数据
const rawJson = ref('');
# NOTE: 重要实现细节
const formattedJson = ref('');

// 生命周期钩子：组件挂载时清空格式化后的数据
onMounted(() => {
  formattedJson.value = '';
});

// 方法：格式化JSON数据
function formatJson() {
  try {
    const parsedJson = JSON.parse(rawJson.value);
    formattedJson.value = JSON.stringify(parsedJson, null, 2);
  } catch (error) {
    console.error('Invalid JSON:', error);
    formattedJson.value = 'Invalid JSON';
  }
}
</script>

<template>
  <div>
    <!-- 输入区域，用于输入原始JSON数据 -->
    <textarea v-model="rawJson" placeholder="Enter or paste your JSON here..." rows="10" cols="50"></textarea>

    <!-- 格式化按钮 -->
    <button @click="formatJson">Format JSON</button>
# 添加错误处理

    <!-- 显示格式化后的数据区域 -->
    <pre v-if="formattedJson !== 'Invalid JSON'">{
      {{ formattedJson }}
    }</pre>
    <p v-else>{{ formattedJson }}</p>
  </div>
</template>
