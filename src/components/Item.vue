<template>
  <li>
    <!-- Testing dengan find() -->
    <a>{{ item.title }}</a>
    {{ item.url }}
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>
