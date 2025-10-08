// 代码生成时间: 2025-10-09 02:16:24
        @click="selectTab(index)">
        {{ tab.title }}
      </li>
    </ul>
    <div class="tab-content">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'TabSwitcher',
  props: {
    tabs: Array
  },
  setup(props) {
    const activeTab = ref(0); // 响应式数据，存储当前激活的标签页索引

    onMounted(() => {
      console.log('Component mounted'); // 组件挂载时的生命周期钩子
    });

    function selectTab(index) {
      activeTab.value = index;
    }

    return {
      activeTab,
      selectTab
    };
  }
}
</script>

<style scoped>
.tab-list li.active {
  font-weight: bold;
  color: red;
}
</style>
