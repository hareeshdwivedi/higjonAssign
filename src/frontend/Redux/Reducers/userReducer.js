import {USER_SIGNUP} from '../Constants/Constants';

const initialState = {
  users: [
    {
      name: 'Girish',
      email: 'girish@gmail.com',
      userId: '123',
      password: 'giri123',
      isOwner: false,
      referallCode: '',
    },
    {
      name: 'Owner',
      email: 'owner@gmail.com',
      userId: 'testuser',
      password: 'test@123',
      isOwner: true,
      referallCode: '',
    },
    {
      name: 'Owner',
      email: 'owner@gmail.com',
      userId: 'dummyuser',
      password: 'test@321',
      isOwner: true,
      referallCode: '',
    },
  ],
};

const userReducer = (state = initialState, action) => {
  console.log(action, 'actionpayload');
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
