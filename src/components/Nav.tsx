import React from 'react'
import { Menu } from 'lucide-react';
import siteclub from '../assets/siteclub.svg';


const Nav = () => {
  return (
    <>
    <nav className='max-w-[1250px] px-5 mx-auto flex justify-between py-[50px] items-center font-bold hidden sm:flex'>
        <img className='max-w-[200px]' src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/6e7b1fcf-7208-426d-bfb6-60a7bb57151c/SiteClub+Logo+%28Light+Horizontal%29.png?format=1500w" alt="" />
        <ul className='flex items-center'>
            <li className='px-2 text-white'>Let's Talk</li>
            <li className='ml-2'><button className='bg-[#FFBC00] px-5 py-4 rounded-full'>Join the Club</button></li>
        </ul>
    </nav>
    <nav className='max-w-[1250px] px-5 pt-5 mx-auto'>
      <Menu color='white' size={40}/>
      <img src={siteclub} alt="" />
    </nav>
    </>
  )
}

export default Nav
