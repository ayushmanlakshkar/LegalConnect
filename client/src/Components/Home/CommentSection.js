import React, { useEffect } from 'react';
import { useCommentSection } from '../../Store/store';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { formatDateTime } from '../../Services/formatDateTime';

function CommentSection() {
    const { isCommentSectionOf, isCommentSectionOpen, setOpenCommentSection } = useCommentSection();
    const location = useLocation();
    const commentsData = [
        {
            id: 1,
            avatar: 'https://i.pravatar.cc/150?img=1',
            username: 'JohnDoe',
            time: new Date(Date.now()).toISOString(), // 1 day ago
            description: 'This is a comment description. This is a comment description.',
            isLiked: false,
            numberOfLikes: 5,
        },
        {
            id: 2,
            avatar: 'https://i.pravatar.cc/150?img=2',
            username: 'JaneSmith',
            time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            description: 'Another comment description.',
            isLiked: true,
            numberOfLikes: 12,
        },
        {
            id: 3,
            avatar: 'https://i.pravatar.cc/150?img=3',
            username: 'User123',
            time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
            description: 'Yet another comment description.',
            isLiked: false,
            numberOfLikes: 2,
        },
        {
            id: 4,
            avatar: 'https://i.pravatar.cc/150?img=4',
            username: 'AliceWonder',
            time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
            description: 'More comment description here.',
            isLiked: true,
            numberOfLikes: 20,
        },
        {
            id: 5,
            avatar: 'https://i.pravatar.cc/150?img=5',
            username: 'BobBuilder',
            time: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(), // 10 hours ago
            description: 'Last comment description.',
            isLiked: false,
            numberOfLikes: 7,
        },
        {
            id: 6,
            avatar: 'https://i.pravatar.cc/150?img=6',
            username: 'CharlieBrown',
            time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
            description: 'This is an insightful comment.',
            isLiked: true,
            numberOfLikes: 8,
        },
        {
            id: 7,
            avatar: 'https://i.pravatar.cc/150?img=7',
            username: 'DebbieDowner',
            time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
            description: 'I disagree with the previous comments.',
            isLiked: false,
            numberOfLikes: 1,
        },
        {
            id: 8,
            avatar: 'https://i.pravatar.cc/150?img=8',
            username: 'EddyEdits',
            time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            description: 'I think this could be improved by...',
            isLiked: false,
            numberOfLikes: 3,
        },
        {
            id: 9,
            avatar: 'https://i.pravatar.cc/150?img=9',
            username: 'FionaFan',
            time: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
            description: 'I absolutely love this!',
            isLiked: true,
            numberOfLikes: 15,
        },
        {
            id: 10,
            avatar: 'https://i.pravatar.cc/150?img=10',
            username: 'GeorgeGeek',
            time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
            description: 'Here’s a detailed explanation...',
            isLiked: true,
            numberOfLikes: 25,
        },
        {
            id: 11,
            avatar: 'https://i.pravatar.cc/150?img=11',
            username: 'HannahHappy',
            time: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
            description: 'Great discussion everyone!',
            isLiked: false,
            numberOfLikes: 7,
        },
        {
            id: 12,
            avatar: 'https://i.pravatar.cc/150?img=12',
            username: 'IvanIdea',
            time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
            description: 'I have an idea to share...',
            isLiked: false,
            numberOfLikes: 4,
        },
        {
            id: 13,
            avatar: 'https://i.pravatar.cc/150?img=13',
            username: 'JudyJudge',
            time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
            description: 'In my opinion...',
            isLiked: false,
            numberOfLikes: 6,
        },
        {
            id: 14,
            avatar: 'https://i.pravatar.cc/150?img=14',
            username: 'KevinKeen',
            time: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
            description: 'This topic is very important.',
            isLiked: true,
            numberOfLikes: 30,
        },
        {
            id: 15,
            avatar: 'https://i.pravatar.cc/150?img=15',
            username: 'LauraLoyal',
            time: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 days ago
            description: 'I’ve been following this closely.',
            isLiked: true,
            numberOfLikes: 18,
        },
        {
            id: 16,
            avatar: 'https://i.pravatar.cc/150?img=16',
            username: 'MonaMind',
            time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
            description: 'This brings up many thoughts.',
            isLiked: false,
            numberOfLikes: 2,
        },
        {
            id: 17,
            avatar: 'https://i.pravatar.cc/150?img=17',
            username: 'NateNotion',
            time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
            description: 'A noteworthy comment.',
            isLiked: true,
            numberOfLikes: 10,
        },
        {
            id: 18,
            avatar: 'https://i.pravatar.cc/150?img=18',
            username: 'OliviaOpinion',
            time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            description: 'This is what I think...',
            isLiked: false,
            numberOfLikes: 5,
        },
        {
            id: 19,
            avatar: 'https://i.pravatar.cc/150?img=19',
            username: 'PeterPan',
            time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
            description: 'Flying in with a comment.',
            isLiked: true,
            numberOfLikes: 11,
        },
        {
            id: 20,
            avatar: 'https://i.pravatar.cc/150?img=20',
            username: 'QuincyQuick',
            time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
            description: 'Quick comment here.',
            isLiked: true,
            numberOfLikes: 9,
        },
    ];
    
    useEffect(() => {
        if (location.pathname != '/home') {
            setOpenCommentSection(false)
        }
    }, [location])

    return (

        <div
            id="CommentSection"
            className="fixed left-0 top-0 h-full w-full z-50 lg:z-10 flex md:justify-center lg:justify-start lg:pl-4 lg:pb-2 lg:pt-16 bg-primary bg-opacity-70 lg:bg-opacity-0" >
            <div className="flex flex-col w-full sm:h-11/12 lg:h-auto md:w-4/5 lg:w-4/12 border-text border-[1px] border-opacity-10 lg:border-opacity-10 mt-0 md:my-10 lg:mt-6 lg:mb-3  bg-secondary sm:rounded-xl ">
                <div className='grid grid-cols-3 w-full pt-5 pr-3 pb-4 items-center border-b-[1px] border-opacity-10 border-text rounded-xl sm:rounded-none '>
                    <div className='text-xl  text-center col-start-2 font-extrabold'>
                        Comments
                    </div>
                    <div className='w-full flex justify-end'>
                        <button onClick={()=>setOpenCommentSection(false)} className='text-red-400 hover:text-red-600 text-3xl'>
                            <CloseIcon color='inherit' fontSize='inherit' />
                        </button>
                    </div>
                </div>
                <div className='flex overflow-y-auto flex-1 flex-col  sm:px-5  '>
                    {commentsData.map((comment) => (
                        <div className="Comment flex flex-row py-3 px-2 rounded-lg">
                        <div className="flex items-start gap-2">
                            <div className="min-w-10 w-10 sm:min-w-12 sm:w-12 aspect-square">
                                <img
                                    src={comment.avatar}
                                    alt="avatar"
                                    className="w-full aspect-square rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <span className="PostUsername font-semibold text-lg">{comment.username}</span>
                                    <p className="text-sm text-text">{comment.description}</p>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">{formatDateTime(comment.time)}</div>
                            </div>
                        </div>
                        <div className="flex ml-auto mt-2">
                            <div className="text-2xl">
                                <FavoriteBorderIcon />
                            </div>
                        </div>
                    </div>
                    ))}
                    

                </div>
            </div>
        </div>

    );
}

export default CommentSection;
