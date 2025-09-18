// 代码生成时间: 2025-09-18 22:23:00
    <p v-if="isConnected">Connected to the internet</p>
    <p v-else>Not connected to the internet</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'NetworkConnectionChecker',
  setup() {
    const isConnected = ref(false);

    // Function to check network connection
    const checkConnection = () => {
      navigator.onLine ? (isConnected.value = true) : (isConnected.value = false);
    };

    // Watch for changes in navigator.onLine
    const observer = new MutationObserver(checkConnection);
    const config = { attributes: false, childList: false, subtree: false };

    onMounted(() => {
      checkConnection();
      observer.observe(document.body, config);
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      isConnected
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
