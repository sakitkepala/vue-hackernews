<template>
  <li>
    <!-- Testing dengan find() -->
    <a :href='item.url'>{{ item.title }}</a>
    <span>Score: {{ item.score }}</span>
    <span>Author: {{ item.author }}</span>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>
