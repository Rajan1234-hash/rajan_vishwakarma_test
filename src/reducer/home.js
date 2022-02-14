// const photodata="";
// export const photocall=(state=photodata,action)=>{
//     switch(action.type){
//         case "SETPHOTODATA": state=action.payload;
//             return state;
//         default :return state;
//     }
// }

const initialstate="";
export const Photocall=(state=initialstate,action)=>{
    switch(action.type){
        case "PROPOSALRESPONSE": state=action.payload;
            return state;
        default :return state;
    }
}