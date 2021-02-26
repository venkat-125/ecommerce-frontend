export default function (state = null, action) {
    switch (action.type){
        case "REGISTER":
            if(action.payload.data.token != null){
                localStorage.setItem('token', action.payload.data.token);
                return true;
            }
            case "LOGIN" :
            
            if(action.payload.data.token != null){
                localStorage.setItem('token', action.payload.data.token);
                return true;
            }
            default:
                console.log("in default")
                return false;
    }
}