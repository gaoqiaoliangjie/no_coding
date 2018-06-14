<template>
<el-slider v-model="value1"></el-slider>
</template>

<script>
  export default {
      name:'Top',
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
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
