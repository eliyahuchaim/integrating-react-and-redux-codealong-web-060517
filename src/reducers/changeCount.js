export default function changeCount(state = {count: 0}, action){
  switch (action.type) {
    case "INCREASE_COUNT":
      return {count: state.count + 1}
      break;
    default:
      return state;
  };
};
