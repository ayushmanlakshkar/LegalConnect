import {create} from 'zustand';

export const useUserDetails = create((set)=>({
    isUserLoggedIn : true,
    loggedUserDetails : {},
    setIsUserLoggedIn : () => set((state)=>({isUserLoggedIn : !state.isUserLoggedIn})),
}))

export const useCommentSection = create((set)=>({
    isCommentSectionOf:'',
    isCommentSectionOpen : false,
    setOpenCommentSection : (status) => set((state)=>({
        isCommentSectionOpen : status
    })),
    setIsCommentSectionOf:(postID) => set((state)=>({isCommentSectionOf:postID}))
}))

export const useQuestionModal = create((set)=>({
    isQuestionModalOf:'',
    isQuestionModalOpen : true,
    setOpenQuestionModal : (status) => set((state)=>({
        isQuestionModalOpen : status
    })),
    setIsQuestionModalOf:(questionID) => set((state)=>({isQuestionModalOf:questionID}))
}))