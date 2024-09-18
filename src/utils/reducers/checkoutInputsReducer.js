export const inputInitialState = {
  name: false,
  surname: false,
  email: false,
  conditions: false,
}

export const checkoutInputsReducer = (state, action) => {
  switch(action.type){
    case "name":
      return action.params.setCheckoutInformation({...state, name:})
  }
}