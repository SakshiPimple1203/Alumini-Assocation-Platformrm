import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useState } from "react";

const userSignp = () => {
const {login}=useAuth();
const [error, setError] = useState(null);
const [loading, setLoading] = useState(null);

const registerUser=async(values)=>{
if(values.password !==values.passwordConfirm){
    return setError('passwords are not the same')
}

try {
    setError(null);
    setLoading(true)
    const res=await fetch('http://localhost:3000/api/auth/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(values),
    });

    const data=await res.json();
    if(res.status===201){
        message.success(data.message)
        login(data.token,data.user);
    }
    else if(res.status===4000){
        setError(data.message);
    }
    else{
message.error('Registration failed')
    }
} catch (error) {
    message.error('Regestration Failed');
}finally{
    setLoading(false)
}
};
  return{loading,error,registerUser} ;
};

export default userSignp
