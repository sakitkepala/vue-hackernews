<template>
  <li>
    <!-- Testing dengan find() -->
    <a :href='item.url'>{{ item.title }}</a>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>
