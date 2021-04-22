<template>
    <div>
    <slot name="header"></slot>
    <div>
        body {{ title }}
    </div>
    <slot> </slot>
    <slot name="footer" :data="footerData"></slot>
    </div>
</template>
 
<script>
export default {
  name: 'Search',
  data () {
    return {
      footerData:"footerData"
    }
  },
  props: {
      title: {
      type: String,
      default: 'title'
    }
  },
  methods: {
    handleClick (event) {
    }
  },
  mounted () {

  }
}
</script>