

const initialstate=[];
export const ProductListselected=(state=initialstate,action)=>{
    switch(action.type){
        case "PRODUCTLISTSELECTED": state=action.payload;
            return state;
        default :return state;
    }
}