<template>
<div id="app">
  <!-- 外层容器 -->
  <el-container>
    <!-- 顶栏容器 -->
    <el-header>

    </el-header>
    <!-- 顶栏容器end -->
    <el-container>
      <!-- 侧边栏容器 -->
      <el-aside width="auto" class="leftBox">
        <Nevigation/>
      </el-aside>
      <!-- 侧边栏容器end -->
    <el-container>
      <!-- 主要区域容器 -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- 主要区域容器end -->
      <!-- 底栏容器 -->
      <el-footer>
      </el-footer>
      <!-- 底栏容器eng -->
    </el-container>
  </el-container>


  </el-container>
  <!-- 外层容器end -->
</div>
</template>

<script>
import Nevigation from './components/nevigation.vue'
// window.on('resize', () => {

// })
  $(".leftBox").css("height",$(window).height())
export default {
  name: 'App',
  components: { Nevigation }
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
body,html{
height: 100%;
width:100%;
padding: 0;
margin: 0;
}
/* .scroll{
  height: 100%;
} */
.leftBox{
  height: 100%;
}
</style>
