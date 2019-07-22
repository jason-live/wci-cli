import * as passport from './service';

export default {
  namespace: 'passport',
  state: {
    account: null,
    user: null,
  },

  effects: {
    * signIn({ payload: data }, { call, put }) {
      const res = yield call(passport.signIn, data);
      if (res) {
        yield put({
          type: 'save',
          payload: {
            account: res.account,
          },
        });
        return res;
      }
      return false;
    },
  },

  reducers: {
    save(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
};
