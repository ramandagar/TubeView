import React, { useEffect, useState } from 'react';
import youtubeIcon from '../assets/youtube.png';
import hamburger from '../assets/hamburger.png';
import user from '../assets/user.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from './utils/appSlice';
import { YOUTUBE_SEARCH_API } from './utils/contants';
import { useSelector } from 'react-redux';
import { cacheResults } from './utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const togglemenuhandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery === '') {
        setSuggestions([]);
      } else if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    console.log('API CALL -' + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log('json', json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => togglemenuhandler()}
          className='h-8 cursor-pointer'
          alt="hamburger"
          src={hamburger}
        />
        <a href='/'>
          <img
            className='h-8 mx-3'
            alt="youtube"
            src={youtubeIcon}
          />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input
            className='w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button placeholder='Search' className='border  border-gray-400 p-2 rounded-r-full'>Search</button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 px-5 w-[29rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((s) => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🍔{s}</li>)}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='profile'
          src={user}
        />
      </div>
    </div>
  );
};

export default Head;
