<template lang="html">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-button class="CollapseBtn" v-bind:class="isCollapse ? errorClass: activeClass " v-on:click="change(isCollapse)" v-model="isCollapse" circle></el-button>
    <el-scrollbar class="scroll">
    <el-submenu index="1">
     <template slot="title">
       <i class="el-icon-phone"></i>
      <span slot="title">首页</span>
     </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
     <template slot="title">
       <i class="el-icon-tickets"></i>
      <span slot="title">二级页面</span>
     </template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
       <i class="el-icon-menu"></i>
       <span slot="title">导航二</span>
     </el-menu-item>
    </el-scrollbar>

  </el-menu>
</template>

<script>
export default {
  name: 'Nevigation',
  data() {
    return {
      isCollapse: false,
      activeClass: "el-icon-d-arrow-left",
      errorClass: "el-icon-d-arrow-right",
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    change(isCollapse) {
      this.isCollapse = !isCollapse
    }
  }
}
</script>

<style lang="css">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .scroll{
    height: 100%;
  }
</style>
