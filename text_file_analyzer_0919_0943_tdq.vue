// 代码生成时间: 2025-09-19 09:43:30
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const fileContent = ref('');
const fileName = ref('');
const fileSize = ref(0);

// 文件处理函数
function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
    fileSize.value = file.size;
    const reader = new FileReader();
    reader.onload = function (e) {
      fileContent.value = e.target.result;
    };
    reader.readAsText(file);
  }
}

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
});

onUnmounted(() => {
  console.log('Component is unmounted.');
});
</script>

<style scoped>
.content {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>