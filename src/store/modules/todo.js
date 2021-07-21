const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export const create = (payload) => {
  return {
    type: CREATE,
    payload: payload,
  };
};

export const done = (id) => {
  return {
    type: DONE,
    id: id,
  };
};

const initState = {
  list: [
    // {
    //   id: 0,
    //   text: "공부하기",
    //   done: false,
    // },
    // {
    //   id: 1,
    //   text: "물마시기",
    //   done: false,
    // },
  ],
};

const todo = (state = initState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: action.payload.done,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((item) => {
          return item.id === action.id ? { ...item, done: true } : item;
        }),
      };
    default:
      return state;
  }
};

export default todo;
