// 代码生成时间: 2025-09-18 10:35:35
import { ref, onMounted, onUnmounted } from 'vue';

// Reactivity
const isLoading = ref(true);
const cpuUsage = ref(0);
const memoryUsage = ref(0);
const diskUsage = ref(0);

// Fetch system performance data
const fetchSystemPerformanceData = async () => {
    // Mock API call to fetch system performance data
    // In a real-world scenario, you'd use an API call to fetch actual data
    isLoading.value = true;
    setTimeout(() => {
        cpuUsage.value = 50;
        memoryUsage.value = 75;
        diskUsage.value = 60;
        isLoading.value = false;
    }, 2000);
};

// Lifecycle hooks
onMounted(() => {
    fetchSystemPerformanceData();
});

onUnmounted(() => {
    // Cleanup tasks if needed (e.g., clearing intervals, aborting API requests)
    // console.log('Performance monitor component unmounted');
});
</script>

<style scoped>
.performance-monitor {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>