

const initialstate="";
export const AlbumCall=(state=initialstate,action)=>{
    switch(action.type){
        case "ALBUMRESP": state=action.payload;
            return state;
        default :return state;
    }
}