<template>
  <form class="options">
    <fieldset class="options__fieldset">
      <h3 class="form-title">Настройки игры</h3>
      <label class="range-input">
        <div class="input-container">
          <span>1</span>
          <input v-bind:value="mainOptions.duration" @change="rangeInputOnChange" name="duration" type="range" min="1" max="15"/>
          <span>15</span>
        </div>
        <div class="input-counter">Длительность {{mainOptions.duration}} мин.</div>
      </label>
      <label class="range-input">
        <div class="input-container">
          <span>1</span>
          <input v-bind:value="mainOptions.difficulty" @change="rangeInputOnChange" name="difficulty" type="range" min="1" max="10" />
          <span>10</span>
        </div>
        <div class="input-counter">Уровень сложности {{mainOptions.difficulty}}</div>
      </label>
      <div class="check-box-group">
        <div
          v-for="(mode, key) in parameterList"
          v-bind:class="{checked: mode.isChecked}"
          :key="key"
          class="check-box-group__checkbox"
          v-on:click.prevent="() => toggleCheckbox(key)"
        >
          <label v-bind:for="'checkbox-' + key">{{mode.name}}</label>
          <input type="checkbox" v-bind:id="'checkbox-' + key" />
        </div>
      </div>
    </fieldset>
    <button  class="form-submit" type="submit">Play!</button>
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "GameOptions",
  computed: mapState({
    parameterList: 'parameterList',
    mainOptions: 'mainOptions',
  }),
  methods: {
    toggleCheckbox: function (key) {
      this.$store.dispatch({type: 'toggleParameterCheckbox', key})
    },
    changeMainOptions: function (value, keyName) {
      this.$store.dispatch({type: 'changeMainOptions', value, keyName})
    },
    rangeInputOnChange: function ({target}) {
      if(target) {
        this.changeMainOptions(target.value, target.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.form-submit {
  background: #fff;
  border: none;
  color: #b39486;
  font-size: 2rem;
  letter-spacing: 1px;
  border: 2px solid #50372c;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 3px 7px #000;
  transition-duration: 0.3s ease-in-out;
  margin: 0 auto;
  position: relative;
  top: 20px;
  display: block;
  &:active {
    margin-top: 3px;
    box-shadow: 0px -3px 7px #000;
  }
  &:hover {
    letter-spacing: 3px;
  }
}
.check-box-group {
  display: flex;
  flex-direction: column;
}
.range-input {
  margin-bottom: 2rem;
  font-weight: 600;
  display: block;
  max-width: 200px;
}
.options {
  margin: 0 auto;
  max-width: 50%;
}
.options__fieldset {
  border: none;
  background: #fff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: 0px 3px 7px #000;
}
.check-box-group__checkbox {
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  input {
    opacity: 0;
    position: absolute;
  }
  &::before {
    content: "\2714";
    border: 0.1em solid #000;
    border-radius: 0.2em;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 0.2em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.2s;
  }
  &:active {
    &::before {
      transform: scale(0);
    }
  }
  &.checked {
    &::before {
      background-color: #b39486;
      border-color: #b39486;
      color: #fff;
    }
  }
}
input[type="range"] {
  -webkit-appearance: none;
  background: transparent;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; 
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; 
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range] {
  -webkit-appearance: none;
  margin: 18px 14px;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #b39486;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #b39486;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #b39486;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #b39486;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #b39486;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #b39486;
}
input[type=range]:focus::-ms-fill-upper {
  background: #b39486;
}
</style>
