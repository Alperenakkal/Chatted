import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
import Conversation from './Conversation';


const SearchInput = () => {
  const [search,setSearch] =useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations} =useGetConversations();
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Aranan karakter 3 den fazla olmali")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("Aradığın Bulunamadi");
  }
  return (
    <form className='flex items-center gap-3' onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Search...' 
        className='input input-bordered rounded-full' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>

    </form>
  )
}

export default SearchInput