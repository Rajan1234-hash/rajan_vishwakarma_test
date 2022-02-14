


const initialstate=[];
export const TotalItemSelected=(state=initialstate,action)=>{
    switch(action.type){
        case "TOTALITEMSELECTED": state=action.payload;
            return state;
        default :return state;
    }
}