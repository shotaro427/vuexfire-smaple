import Vuex from 'vuex'
import { db } from '../plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
    },
    mutations: {
      ...vuexfireMutations
    },
    actions: {
      bindUsers: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('users', db.collection('users'))
      }),
      addUser: firestoreAction((context, {name, email}) => {
        return db.collection('users').add({
          name,
          email
        })
      })
    },
    getters: {
      getUsers: (state) => {
        return state.users
      },
    },
  })
}

export default createStore