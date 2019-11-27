<template>
  <div>
    <child testProp="some-value" />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: { Child }
}
</script>
