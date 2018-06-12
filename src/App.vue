<template>
<div id="app">
  <!-- 外层容器 -->
  <el-container style="height:100%;">
    <!-- 顶栏容器 -->
    <el-header>

    </el-header>
    <!-- 顶栏容器end -->
    <el-container style="height:80%;">
      <el-scrollbar class="scroll" style="height:100%;">
        <!-- 侧边栏容器 -->
        <el-aside width="auto" class="leftBox">
          <Nevigation/>
        </el-aside>
      </el-scrollbar>
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
import Nevigation from './components/nevigation.vue';
$(".leftBox").css("height", $(window).height())
export default {
  name: 'App',
  components: {
    Nevigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
  height: 100%;
}

body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}

.scroll {
  height: 100%;
}

.leftBox {
  height: 100%;
}
.el-scrollbar__view{
  overflow-x: visible;
}
.el-scrollbar__wrap{
  overflow-x: visible;
}
</style>
