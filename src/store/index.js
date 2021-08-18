import { createStore as _createStore } from 'vuex';

export default function createStore() {
  return _createStore({
    state: {
      message: 'Hello vite2 vue3 ssr!!',
      statData: {
        items: [],
        PrintItems: [],
        PrintCategoryItems: [],
      },
    },
    actions: {
      fetchMessage: ({ state }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            state.message = 'Hello vite2 vue3 ssr scss vuex vue-router';
            resolve(0);
          }, 200);
        });
      },
      
    },
    mutations: {
      setStat(state, payload) {
        state.statData = payload
      }
    },
    modules: {},
  });
}