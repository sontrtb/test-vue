<script setup>
import {configUIApp } from 'x-app-sdk';
import { ref } from 'vue';

const resultJson = ref('');

function onButtonClick() {
  const config = {
      title: 'Header mới',
      showHeader: true,
      backgroundColor: '#ffffff'
    };

  configUIApp(config)
    .then((res) => {
  resultJson.value = JSON.stringify(res);
    })
    .catch(error => {
      console.error('Lỗi chọn ảnh:', error);
  resultJson.value = JSON.stringify({ error });
    });
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
    <p>
      <pre v-if="resultJson">{{ resultJson }}</pre>
    </p>
  <button @click="onButtonClick">Đổi header</button>
</template>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #369870;
}
</style>
