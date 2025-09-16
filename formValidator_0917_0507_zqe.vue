// 代码生成时间: 2025-09-17 05:07:11
import { ref, reactive, onMounted, computed } from 'vue';

export default {
  name: 'FormValidator',
  setup() {
    // 响应式数据
    const formData = reactive({
      username: '',
      email: '',
      password: ''
    });

    // 错误信息
    const errors = reactive({
      username: '',
      email: '',
      password: ''
    });

    // 生命周期钩子
    onMounted(() => {
      console.log('Component mounted');
    });

    // 表单验证器
    const validate = () => {
      errors.username = '';
      errors.email = '';
      errors.password = '';

      if (!formData.username) {
        errors.username = 'Username is required';
      }
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
    };

    // 提交表单
    const handleSubmit = () => {
      validate();
      if (Object.values(errors).every(e => !e)) {
        console.log('Form submitted:', formData);
      }
    };

    // 返回响应式数据和表单处理函数
    return {
      formData,
      errors,
      handleSubmit
    };
  }
};
</script>

<style scoped>
/* 样式 */
</style>