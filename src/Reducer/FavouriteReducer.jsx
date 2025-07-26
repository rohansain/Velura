export const FavouriteReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_Favourite":
      return {
        ...state,
        Favourite: [...state.Favourite, payload.product],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        Favourite: state.Favourite.filter(
          (item) => item.id !== payload.product.id
        ),
      };
  }
};
