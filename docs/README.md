# R1

## R2

### R3

<template>
<common-form></common-form>
</template>

:tada: :100:

<common-search>
<div slot="header">头部</div>
<template v-slot:footer="fd">子组件数据:{{fd.data}}</template>

<div>
{{ $page }}
</div>

### 组件里写内容

</common-search>


### 外部内容
<script>
console.log("script data")
</script>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
      console.log("mounted README",this.$vue)
  }
}
</script>