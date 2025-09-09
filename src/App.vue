<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background: #f5f5f5;
  padding: 16px 0;
  border-radius: 8px;
  margin-bottom: 24px;
  margin-top: 0;
}

a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}

a.router-link-active {
  background: #1976d2;
  color: #fff;
}

a:hover {
  background: #e3e3e3;
}
</style>