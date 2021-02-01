<template>
  <div>
      <button @click="back">取消</button>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
 
</style>