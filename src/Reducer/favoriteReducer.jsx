export const FavouriteReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_Favourite":
      return {
        ...state,
        Favourite: [...state, payload.product],
      };
  }
};
