<template>
  <div class="home">
    <WelcomeHeader />
    <GameOptions />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeHeader from '@/components/WelcomeHeader.vue'
import GameOptions from '@/components/GameOptions.vue'

export default {
  name: 'home',
  components: {
    WelcomeHeader,
    GameOptions
  }
}
</script>

<style lang="scss" scoped>
  .home{
      padding-top: 4rem;
      height: 100%;
      background-image: linear-gradient(to right top, #d3a98e, #d9ab88, #dfad81, #e3af7a, #e6b272, #e9b36a, #ebb462, #edb65a, #f0b64f, #f2b644, #f4b737, #f6b727);
  }
</style>