<script>

export default {
  components: {
    name: "AppHeader"
  }
}

</script>
<template>
  <header>
    <img src="../assets/img/Yu-Gi-Oh!_(Logo).png" alt="">
    <h1> Yu-Gi-Oh API </h1>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
  background-color: $secondary-color;
  display: flex;
  align-items: center;
  padding: 20px;

  img {
    width: 10%;
    margin-right: 20px;
  }

}
</style>
