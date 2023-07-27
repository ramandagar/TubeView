import React from 'react';
import youtubeIcon from '../assets/youtube.png';

const CommentData = [
    {
      name: 'User1',
      text: 'This is the first comment.',
      replies: [
        {
          name: 'User2',
          text: 'Reply to the first comment.',
          replies: [
            {
              name: 'User1',
              text: 'Reply to the reply.',
              replies: [],
            },
          ],
        },
        {
          name: 'User3',
          text: 'Another reply to the first comment.',
          replies: [],
        },
      ],
    },
    {
      name: 'User4',
      text: 'This is the second comment.',
      replies: [],
    },
    // Add more comments and replies as needed

    
    {
      name: 'User1',
      text: 'This is the first comment.',
      replies: [
        {
          name: 'User2',
          text: 'Reply to the first comment.',
          replies: [
            {
              name: 'User1',
              text: 'Reply to the reply.',
              replies: [],
            },
          ],
        },
        {
          name: 'User3',
          text: 'Another reply to the first comment.',
          replies: [],
        },
      ],
    },
    {
      name: 'User4',
      text: 'This is the second comment.',
      replies: [],
    },
    // Add more comments and replies as needed

    
  ];
  

const CommentList = ({ data }) => {
  return data.map((comment, index) => <Comment key={index} data={comment} />);
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='flex -shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='h-4 w-4' src={youtubeIcon} alt='User' />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
          <div className='ml-5'>
            <CommentList data={replies} />
          </div>
      
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList data={CommentData} />
    </div>
  );
};

export default CommentContainer;
