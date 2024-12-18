const users = (state, action) => {
    switch (action.type) {
      case "CREATE_USERS":
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };
  export default users;