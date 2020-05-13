interface Check {
  reg: any,
  validation: Function,
  message: string,
}

const emailCheck:Check[] = [
  {
    reg: '',
    validation: (val: string, compare: string):boolean => val === compare,
    message: 'Please, fill the form',
  },
  {
    reg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    validation: (val: string, compare: RegExp):boolean => compare.test(val) === false,
    message: 'Please, enter correct email',
  },
  {
    reg: process.env.REACT_APP_LOGIN,
    validation: (val: string, compare: string):boolean => val !== compare,
    message: 'Please, enter correct email',
  },
];

const passwordCheck:Check[] = [
  {
    reg: '',
    validation: (val: string, compare: string):boolean => val === compare,
    message: 'Please, fill the form',
  },
  {
    reg: process.env.REACT_APP_PASSWORD,
    validation: (val: string, compare: string):boolean => val !== compare,
    message: 'Please, enter correct password',
  },  
];

const textCheck:Check[] = [
  {
    reg: '',
    validation: (val: string, compare: string):boolean => val === compare,
    message: 'Please, fill the form',
  },
];

export const validateEmailField = (email: string):string[] => {
  const error: string[] = [];
  emailCheck.forEach((el:Check) => {
    if (el.validation(email, el.reg)) error.push(el.message);
  });
  return error;
}

export const validatePasswordField = (password: string):string[] => {
  const error: string[] = [];
  passwordCheck.forEach((el:Check) => {
    if (el.validation(password, el.reg)) error.push(el.message);
  });
  return error;
}

export const validateTextField = (text: string):string[] => {
  const error: string[] = [];
  textCheck.forEach((el:Check) => {
    if (el.validation(text, el.reg)) error.push(el.message);
  });
  return error;
}


