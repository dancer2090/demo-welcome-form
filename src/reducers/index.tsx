import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { defaultAnswers } from 'utils/questions';


const rootReducer = (state = defaultAnswers, action: any) => {
  switch (action.type){
      case "ACTION_COMPLETE":
      return state
  }
  return state;
};

export const store = createStore(rootReducer);

export default rootReducer;