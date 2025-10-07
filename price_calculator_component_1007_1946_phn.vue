// 代码生成时间: 2025-10-07 19:46:31
import { ref, onMounted } from 'vue';

// 响应式数据
const price = ref(0);
const discount = ref(0);
const total = ref(0);

// 计算总价的方法
function calculateTotal() {
  total.value = price.value * (1 - discount.value / 100);
}

// 生命周期钩子
onMounted(() => {
  calculateTotal();
});

</script>

<template>
  <div>
    <h1>Price Calculator</h1>
    <div>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="price" @change="calculateTotal"/>
    </div>
    <div>
      <label for="discount">Discount (%):</label>
      <input type="number" id="discount" v-model="discount" @change="calculateTotal"/>
    </div>
    <div>
      <label for="total">Total Price:</label>
      <input type="number" id="total" v-model="total" disabled/>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
