// 代码生成时间: 2025-10-04 18:36:28
import { ref, onMounted } from 'vue';

// Reactive data for environment variables
const environmentVars = ref({});

// Lifecycle hook to fetch environment variables
onMounted(() => {
  environmentVars.value = process.env;
});
</script>

<style scoped>
/* Add styles here if needed */
</style>
