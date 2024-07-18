import {create} from 'zustand';

export const useUserDetails = create((set)=>({
    isUserLoggedIn : true,
    loggedUserDetails : {},
    setIsUserLoggedIn : () => set((state)=>({isUserLoggedIn : !state.isUserLoggedIn})),
}))