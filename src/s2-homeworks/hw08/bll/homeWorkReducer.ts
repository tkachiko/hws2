import {UserType} from '../HW8';

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      const stateCopy = [...state];
      if (action.payload === 'up') {
        stateCopy.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
      } else stateCopy.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      return stateCopy; // need to fix
    }
    case 'check': {
      return [...state.filter(u => u.age > 18)]; // need to fix
    }
    default:
      return state;
  }
};
