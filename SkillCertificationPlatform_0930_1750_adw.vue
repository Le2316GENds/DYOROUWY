// 代码生成时间: 2025-09-30 17:50:39
import { ref, reactive, onMounted } from 'vue';

// 响应式数据
const state = reactive({
  skills: [],
  newSkill: ''
});

// 定义添加技能的方法
function addSkill() {
  if (state.newSkill.trim()) {
    state.skills.push({ name: state.newSkill });
    state.newSkill = '';
  }
};

// 生命周期钩子
onMounted(() => {
  console.log('技能认证平台组件已挂载');
  fetchSkills();
});

function fetchSkills() {
  // 模拟从API获取技能列表，实际应用中应替换为API请求
  state.skills = [{ name: 'Vue开发' }, { name: 'JavaScript编程' }, { name: '软件测试' }];
};

</script>

<style scoped>
.empty-message {
  text-align: center;
  color: #888;
}
.skills-list ul {
  list-style-type: none;
  padding: 0;
}
</style>