<template>
  <header class="header">
      <h1 class="header__title">Привет!</h1>
      <div class="header__text">
        <p class="paragraph">Добро пожаловать на 24 тренировочный день,</p>
        <p class="paragraph">Ваш последний результат - решенно 10 из 25.</p>
        <p class="paragraph">Общая точность 80%</p>
      </div>
  </header>
</template>

<script>
export default {
    name: 'WelcomeHeader'
}
</script>

<style scoped lang="scss">
  .header__text{
    border-left: 4px solid #b39486;
    .paragraph{
      margin: .5rem;
      font-weight: 600;
    }
  }
  .header{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .header__title{
    margin-right: 2rem;
  }
</style>