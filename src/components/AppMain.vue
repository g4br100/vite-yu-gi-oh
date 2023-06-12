<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store';

export default {
  name: "AppMain",
  components: {
    SingleCard
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div id="container">
    <div id="list">
      <div id="card-number">
        <h2>Card number: {{ store.cardsList.length }}</h2>
      </div>
      <div id="cards">
        <SingleCard v-for="card in store.cardsList" :details="card" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#container {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: $secondary-color;
  padding: 20px 0;

  #list {
    color: $secondary-color;
    width: 90%;
    margin: 0 auto;

    #card-number {
      padding: 10px;
    }

    #cards {
      display: flex;
      flex-wrap: wrap;
    }

    h2 {
      color: $black;
      margin-bottom: 20px;
    }

  }
}
</style>
