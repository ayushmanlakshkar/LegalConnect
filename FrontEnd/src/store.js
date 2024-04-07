import {create} from 'zustand';

export const usePosts = create((set)=>({
    posts:[],
    setPosts:(input)=>set({posts:[...input]})
}))

export const useToast = create((set)=>({
    message:"",
    type : "",
    setToast:(toast)=>{set({
        message:toast.message,
        type:toast.type
    })},
    clearToast :()=>{set({
       message:"",
       type: ""
    })}
}))

export const useLogin = create((set)=>({
    status:false,
    toggleLogin:()=>{set((state)=>({status:!state.status}))}
}))

export const useUser = create((set)=>({
    username:"",
    setUsername:(name)=>{console.log(name)
        set({username:name})}
}))