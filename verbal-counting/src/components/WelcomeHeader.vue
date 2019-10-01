<template>
  <header class="header">
      <div class="header__content">
        <h1 class="header__title">Привет!</h1>
        <div v-if="!previousResult.empty" class="header__text">
          <p class="paragraph">Добро пожаловать на 24 тренировочный день,</p>
          <p class="paragraph">Ваш последний результат - решенно {{previousResult.doneCount}} из 25.</p>
          <p class="paragraph">Общая точность {{previousResult.accuracy}}%</p>
        </div>  
        <div v-else class="header__text"> 
          <p class="paragraph">К сожалению нет данных о твоей последней игре &#x1f625;</p>
        </div>
      </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'WelcomeHeader',
    computed: mapState({
      previousResult: 'previousResult',
    }),
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
    &__content{
       display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      align-items: center;
    }
  }
  .header__title{
    margin-right: 2rem;
  }
</style>