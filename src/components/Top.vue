<template>
<el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script>
  export default {
      name:'Top',
    data() {
    return {
      input: 'hahaha'
    }
  },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
<style>

</style>
