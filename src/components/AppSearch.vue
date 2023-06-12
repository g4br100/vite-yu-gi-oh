<script>
import { store } from '../store';
export default {
  name: "AppSearch",
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div id="container">
    <select @change="$emit('search')" v-model="store.searchText">
      <option value="-1">Select archetype</option>
      <option :value="idx" v-for="(archetype, idx) in store.cardsType">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
#container {
  margin: 20px 80px;
}
</style>


