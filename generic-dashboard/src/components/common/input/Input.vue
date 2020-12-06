<template>
  <div>
    <input 
      type="text"

    >
    {{onlyNumbers('aa')}}
  </div>
</template>

<script>
  import './Utils'

  export default {  
    methods:  {
      onlyNumbers(val) {
          onlyNumber(val)
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>