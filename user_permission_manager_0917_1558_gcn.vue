// 代码生成时间: 2025-09-17 15:58:36
import { ref, onMounted } from 'vue';

// 响应式数据
const permissions = ref([
  { id: 1, name: 'Read', granted: false },
  { id: 2, name: 'Write', granted: false },
  { id: 3, name: 'Delete', granted: false },
]);

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
  // 可以在这里执行数据获取等操作
});

// 切换权限状态的方法
function togglePermission() {
  const indexToToggle = 0; // 选择要切换的权限索引
  permissions.value[indexToToggle] = {
    ...permissions.value[indexToToggle],
    granted: !permissions.value[indexToToggle].granted,
  };
}
</script>
