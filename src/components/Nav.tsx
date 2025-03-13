import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between py-[30px] items-center font-bold'>
        <p>FROSTED</p>
        <ul className='flex items-center'>
            <li className='px-2'>BOARD</li>
            <li className='px-2'>BLOG</li>
            <li className='px-2'>FAQ</li>
            <li className='px-5 py-4 border-1 ml-2 rounded-md'><button>RESERVE</button></li>
        </ul>
    </nav>
  )
}

export default Nav
