// 代码生成时间: 2025-09-19 02:25:03
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 响应式数据
const url = ref('');
const content = ref('');
const loading = ref(false);
const error = ref(null);

// 生命周期钩子：组件挂载时执行内容抓取
onMounted(async () => {
    if (url.value) {
        try {
            loading.value = true;
            const response = await axios.get(url.value);
            content.value = response.data;
            error.value = null;
        } catch (e) {
            error.value = e.message;
        } finally {
            loading.value = false;
        }
    }
});

// 抓取网页内容的方法
function scrapeContent() {
    loading.value = true;
    axios.get(url.value).then(response => {
        content.value = response.data;
        error.value = null;
    }).catch(e => {
        error.value = e.message;
    }).finally(() => {
        loading.value = false;
    });
}
</script>

<template>
    <div>
        <h1>Web Content Scraper</h1>
        <input v-model="url" placeholder="Enter URL to scrape"/>
        <button @click="scrapeContent">Scrape Content</button>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-if="error">
            <p>Error: {{ error }}</p>
        </div>
        <div v-if="content">
            <h2>Scraped Content:</h2>
            <pre>{{ content }}</pre>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>