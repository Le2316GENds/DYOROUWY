// 代码生成时间: 2025-09-24 10:04:16
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'NotificationComponent',
  props: {
    initialMessages: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const messages = ref(props.initialMessages);

    // 响应式数据
    const addMessage = (newMessage) => {
      messages.value.push(newMessage);
    };

    // 生命钩子 - 组件挂载时
    onMounted(() => {
      console.log('Notification component is mounted.');
    });

    // 生命钩子 - 监听messages变化
    watch(messages, (newMessages, oldMessages) => {
      console.log('Messages updated:', newMessages);
    });

    return {
      messages,
      addMessage
    };
  }
};
</script>

<style scoped>
.notification {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
