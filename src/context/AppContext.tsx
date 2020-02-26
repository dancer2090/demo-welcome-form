import React from 'react';
import { defaultAnswers } from 'utils/questions';

export const defaultAppContext = {
  isCompleted: false,
  answers: defaultAnswers
}

export const AppContext = React.createContext(defaultAppContext);
