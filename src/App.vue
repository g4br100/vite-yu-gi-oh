<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue'
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
    AppSearch
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getCards() {
      let myUrl = store.apiURL;
      if (store.searchText != "-1") {
        myUrl += `&${store.apiArchetypeParameter}=${store.cardsType[store.searchText].archetype_name}`;
      }
      axios.get(myUrl).then(cards => {
        store.cardsList = cards.data.data;
      }).catch(error => {
        console.log(error);
      })
    },

    getCardstype() {
      axios.get(store.archetypesURL).then(archetypes => {
        store.cardsType = archetypes.data;
      }).catch(error => {
        console.log(error);
      })
    },

  },
  created() {
    this.getCards();
    this.getCardstype();
  }
}
</script>

<template>
  <AppHeader />
  <AppSearch @search="getCards" />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './styles/generals.scss' as *;
</style>
