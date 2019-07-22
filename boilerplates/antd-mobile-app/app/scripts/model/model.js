export default {
  namespace: 'common',
  state: {
  },

  effects: {
  },

  reducers: {
    save(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
};
