import axios from "axios"

// Create Profile 
export function CreateProfiles(NameOrEmail, Password){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        NameOrEmail:NameOrEmail,
        Password:Password
    }
return axios.post(URL, PostBody).then((Response)=>{
        if(Response.status===200){
            return true;
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error)
        return false
    })
}

// Read Profile 
export function Read(){
    let URL = "/api/v1/ReadProuct/:id"
    return axios.get(URL).then((Response)=>{
            if(Response.status===200){
                return Response["data"].Data
            }else{
                return false
            }
        }).catch((Error)=>{
            console.log(Error)
            return false
        })
}


export function DeleteRequest(id){
    store.dispatch(ShowLoader())
    let URL="http://localhost:5000/api/v1/DeleteUser/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Delete Successful")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        UnAuthorizeRequest(err);
        return false;
    });
}


// exports.defult = CreateProfile