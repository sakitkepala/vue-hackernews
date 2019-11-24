<template>
  <div class="item-list">
    <item v-for='item in displayItems' :key='item.id'></item>
  </div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      displayItems: window.items
    }
  }
}
</script>
