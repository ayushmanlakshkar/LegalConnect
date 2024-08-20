import {create} from 'zustand';

export const useUserDetails = create((set)=>({
    isUserLoggedIn : true,
    loggedUserDetails : {},
    setIsUserLoggedIn : () => set((state)=>({isUserLoggedIn : !state.isUserLoggedIn})),
}))

export const useCommentSection = create((set)=>({
    isCommentSectionOf:'',
    openCommentSection : false,
    setOpenCommentSection : (status) => set((state)=>({
        openCommentSection : status
    })),
    setIsCommentSectionOf:(postID) => set((state)=>({isCommentSectionOf:postID}))

}))