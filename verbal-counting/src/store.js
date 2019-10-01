import Vue from 'vue'
import Vuex from 'vuex'
import { TOGGLE_PARAMETER_CHECKBOX, CHANGE_DIFFICULTY, CHANGE_DURATION } from '@/mutations/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parameterList: [
      {
        name: 'Суммирование',
        isChecked: true
      },
      {
        name: 'Разность',
        isChecked: false
      },
      {
        name: 'Умножение',
        isChecked: false
      },
      {
        name: 'Деление',
        isChecked: false
      },
      {
        name: 'Возведение в степень',
        isChecked: false
      }
    ],
    mainOptions: {
      duration: 1,
      difficulty: 1
    }
  },
  mutations: {
    [TOGGLE_PARAMETER_CHECKBOX]: (state, { key }) => {
      state.parameterList[key].isChecked = !state.parameterList[key].isChecked
    },
    [CHANGE_DIFFICULTY]: (state, value) => {
      state.mainOptions.difficulty = value
    },
    [CHANGE_DURATION]: (state, value) => {
      state.mainOptions.duration = value
    }
  },
  actions: {
    toggleParameterCheckbox ({ commit }, key) {
      commit(TOGGLE_PARAMETER_CHECKBOX, key)
    },
    changeMainOptions ({ commit }, { value, keyName }) {
      if (keyName === 'duration') {
        commit(CHANGE_DURATION, value)
      }
      if (keyName === 'difficulty') {
        commit(CHANGE_DIFFICULTY, value)
      }
    }
  }
})
