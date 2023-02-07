import {USER_SIGNUP} from '../Constants/Constants';

export const generateUniqueReferral = () => {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var uniqueCode = '';
  var codeLength = 6;
  for (var i, i = 0; i < codeLength; i++) {
    uniqueCode += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  console.log(uniqueCode, 'uniquecode');
  // setReferallCode(uniqueCode);
  return uniqueCode;
};

const userAction = (name, email, userId, password) => {
  console.log(name, email, userId, password, 'inside actions');
  const referallCode = generateUniqueReferral(name);
  return {
    type: USER_SIGNUP,
    payload: {
      name,
      email,
      userId,
      password,
      referallCode,
    },
  };
};

export default userAction;
