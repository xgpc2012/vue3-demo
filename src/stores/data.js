import { defineStore } from 'pinia'

export const useDataStore = defineStore('storeTest', {
  state: () => ({
    myName: 'Name',
    myEmail: '',
  }),
  getters: {
    test: (state) => state.myName + ' ' + state.myEmail,
  },
  actions: {
    print() {
      console.log(this.myEmail)
    },
  },
})
