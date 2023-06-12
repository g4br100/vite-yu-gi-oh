import { reactive } from "vue";

export const store = reactive({
  apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  archetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  cardsList: [],
  cardsType: [],
  searchText: "-1",
  apiArchetypeParameter: "archetype"
});