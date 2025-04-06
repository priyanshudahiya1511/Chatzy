import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogOutButton from './LogOutButton';

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col w-full sm:w-80 min-h-screen bg-slate-800'>
      <SearchInput />
      <div className='divider px-3' />
      <div className='flex-1 overflow-y-auto scrollbar'>
        <Conversations />
      </div>
      <LogOutButton />
    </div>
  );
};

export default SideBar;
