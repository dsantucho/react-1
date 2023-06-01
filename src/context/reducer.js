//def all the apps lavel states and actions to make the change of states


export const initialState={
    basket:[],
}
//selector
export const getBasketTotal = (basket)=>{
    return (basket?.reduce((amount, item)=>item.price+amount,0));
}

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item]
            }
        case  "REMOVE_FROM_BASKET":
            //como podes agregar multiples items con = id nos vamos a manejar con un indix
            //splice solo removera el elemento onClick dejando las copias
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1); //splice(index position to add o remove, howmany: nro items to be remove)
            }else{
                console.warn(`Cant remove product [id: ${action.id}] is not in the basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
            default:
                return state;
    }
}

export default reducer;