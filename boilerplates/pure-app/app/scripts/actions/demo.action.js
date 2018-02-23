export const DEMO = 'DEMO';

const demoAction = result => ({
  type: DEMO,
  data: result,
});


export const demo = data => (
  (dispatch) => {
    dispatch(demoAction(data));
  }
);
