<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    async handleConfigUIApp() {
      const { configUIApp } = await import('x-app-sdk');
      


      const config = {
        headerTitle: 'Tên ứng dụng',
        headerTextColor: '#ffffff',
        headerColor: '#000000'
      };
      try {
        const response = await configUIApp(config);
        console.log('Cấu hình thành công:', response);
      } catch (error) {
        console.error('Lỗi cấu hình:', error);
      }
    },
  },
}
</script>

<template>
  <h2>HomeScreen</h2>
  <button @click="goToAbout">Go to About</button>
    <button @click="handleConfigUIApp">Cấu hình UI App</button>
</template>