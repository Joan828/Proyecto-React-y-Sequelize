const users = (state, action) => {
    switch (action.type) {
      case "CREATE_USERS":
        return {
          ...state,
          users: action.payload,
        };
        case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
        };
      default:
        return state;
    }
  };
  export default users;