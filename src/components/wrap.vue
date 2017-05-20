<template>
  <div>
    <bjheader></bjheader>
    <bjaside></bjaside>
    <bjmain></bjmain>
    <bjfooter></bjfooter>
  </div>
</template>

<script>
import bjheader from '@/components/header'
import bjaside from '@/components/aside'
import bjmain from '@/components/main'
import bjfooter from '@/components/footer'
export default {
  name: 'wrap',
  components: {
    bjheader,
    bjaside,
    bjmain,
    bjfooter,
  }
}
</script>
