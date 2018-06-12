<template>
<div id="app">
  <!-- 外层容器 -->
  <el-container>
    <!-- 顶栏容器 -->
    <el-header>

      <!-- <Nevigation/>    -->
    </el-header>
    <!-- 顶栏容器end -->
    <!-- 侧边栏容器 -->
    <el-aside>

    </el-aside>
    <!-- 侧边栏容器end -->
    <!-- 主要区域容器 -->
    <el-main>
      <router-view/>
    </el-main>
    <!-- 主要区域容器eng -->
    <!-- 底栏容器 -->
    <el-footer>
    </el-footer>
    <!-- 底栏容器eng -->
  </el-container>
  <!-- 外层容器end -->
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
