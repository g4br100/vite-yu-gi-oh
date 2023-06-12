<script>

export default {
  name: "SingleCard",
  props: {
    details: Object
  }
}
</script>

<template>
  <div class="card">
    <img :src="details.card_images[0].image_url" alt="Immagine carta">
    <h3 class="card-title">{{ details.name }}</h3>
    <h5 class="card-type">{{ details.type }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  color: $black;
  background-color: $primary-color;
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc((100% / 5) - 10px);

  .card-title {
    font-size: 23px;
    color: $secondary-color;
    margin: 10px 0;
    text-align: center;
    padding: 0 10px;
  }

  .card-type {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
