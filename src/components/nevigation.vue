<template lang="html">
  <el-menu default-active="/" mode="vertical" :router ="rout" class="el-menu-vertical-demo" @open="handleOpen" :unique-opened="open"  @close="handleClose" :collapse="isCollapse" :collapse-transition="transition" @select="selectCallBack">
    <el-button class="CollapseBtn" v-bind:class="isCollapse ? errorClass: activeClass " v-on:click="change(isCollapse)" v-model="isCollapse" circle></el-button>
    <el-menu-item index="/">
       <i class="el-icon-menu"></i>
       <span slot="title">施工统计</span>
    </el-menu-item>
    <el-submenu index="2">
     <template slot="title">
       <i class="el-icon-refresh"></i>
      <span slot="title">施工安全</span>
     </template>
      <el-menu-item index="2-1" router="/safe">安全隐患</el-menu-item>
      <el-menu-item index="2-2">安全会议</el-menu-item>
      <el-menu-item index="2-3">安全预案</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
     <template slot="title">
       <i class="el-icon-rank"></i>
      <span slot="title">施工质量</span>
     </template>
      <el-menu-item index="3-1">质量隐患</el-menu-item>
      <el-menu-item index="3-2">质量会议</el-menu-item>
      <el-menu-item index="3-3">隐蔽工程</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
     <template slot="title">
       <i class="el-icon-date"></i>
      <span slot="title">施工进度</span>
     </template>
      <el-menu-item index="4-1">日常工作</el-menu-item>
      <el-menu-item index="4-2">施工计划</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
     <template slot="title">
       <i class="el-icon-printer"></i>
      <span slot="title">审批种类</span>
     </template>
      <el-menu-item index="5-1">我的审批</el-menu-item>
      <el-menu-item index="5-2">我已发起</el-menu-item>
      <el-menu-item index="5-3">抄送给我</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
     <template slot="title">
       <i class="el-icon-phone"></i>
      <span slot="title">人员管理</span>
     </template>
      <el-menu-item index="6-1">我的考勤</el-menu-item>
      <el-menu-item index="6-2">项目人员</el-menu-item>
      <el-menu-item index="6-3">施工班组</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
     <template slot="title">
       <i class="el-icon-tickets"></i>
      <span slot="title">设备管理</span>
     </template>
      <el-menu-item index="7-1">设备统计</el-menu-item>
      <el-menu-item index="7-2">设备保险</el-menu-item>
      <el-menu-item index="7-3">设备维护</el-menu-item>
      <el-menu-item index="7-4">操作员</el-menu-item>
    </el-submenu>
    <el-submenu index="8">
     <template slot="title">
       <i class="el-icon-goods"></i>
      <span slot="title">物资管理</span>
     </template>
      <el-menu-item index="8-1">地磅管理</el-menu-item>
      <el-menu-item index="8-2">库房管理</el-menu-item>
      <el-menu-item index="8-3">拌合站点</el-menu-item>
    </el-submenu>
    <el-submenu index="9">
     <template slot="title">
       <i class="el-icon-news"></i>
      <span slot="title">资料管理</span>
     </template>
      <el-menu-item index="9-1">施工方案</el-menu-item>
      <el-menu-item index="9-2">技术交底</el-menu-item>
      <el-menu-item index="9-3">合同交底</el-menu-item>
    </el-submenu>



  </el-menu>
</template>

<script>
export default {
  name: 'Nevigation',
  data() {
    return {
      // 导航栏默认展开
      isCollapse: false,
      // 按钮改变样式
      activeClass: "el-icon-d-arrow-left",
      errorClass: "el-icon-d-arrow-right",
      // 是否路由跳转
      rout:true,
      // 子菜单打开触发方式是否为手风琴模式
      open:true,
      //是否开启折叠动画
      transition:true,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(this);
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    change(isCollapse) {
      this.isCollapse = !isCollapse
    },
    selectCallBack(index,indexPath){
      console.log(indexPath,index);
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
