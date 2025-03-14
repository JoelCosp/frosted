import React from 'react'

// Icons
import { LayoutPanelTop } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { Check } from 'lucide-react';
import { Plus } from 'lucide-react';

// Components
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <section className='max-w-[1250px] px-5 mx-auto'>
          <div className='flex items-center justify-center text-white flex-col sm:flex-row sm:gap-40'>
            <h1 className='text-6xl text-center font-bold'>Get a Webiste. <br /><span className='text-[#FFBC00]'>Skip the <span className='line-through'>drama</span>.</span></h1>
            <ul className='pt-5 sm:pt-0'>
              <li className='py-4 flex gap-2 items-center text-2xl font-bold'><LayoutPanelTop size={32} color='#FFBC00' /> Killer design</li>
              <li className='py-4 flex gap-2 items-center text-2xl font-bold'><Cpu size={32} color='#FFBC00' /> Painless process</li>
              <li className='py-4 flex gap-2 items-center text-2xl font-bold'><CircleCheckBig size={32} color='#FFBC00' /> Strategic updates</li>
            </ul>
          </div>

          <div className='hidden sm:grid sm:grid-cols-4 sm:gap-5'>
            <img className='rounded-t-2xl' src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/38a608a4-d3ae-4726-a7c7-1cc9c270204c/screencapture-surepass-2025-01-16-13_32_04.jpg?format=2500w" alt="" />
            <img className='rounded-t-2xl' src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/38a608a4-d3ae-4726-a7c7-1cc9c270204c/screencapture-surepass-2025-01-16-13_32_04.jpg?format=2500w" alt="" />
            <img className='rounded-t-2xl' src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/38a608a4-d3ae-4726-a7c7-1cc9c270204c/screencapture-surepass-2025-01-16-13_32_04.jpg?format=2500w" alt="" />
            <img className='rounded-t-2xl' src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/38a608a4-d3ae-4726-a7c7-1cc9c270204c/screencapture-surepass-2025-01-16-13_32_04.jpg?format=2500w" alt="" />
          </div>
      </section>
      
      <section className='bg-white rounded-2xl'>
        <div className='max-w-[1250px] px-5 mx-auto py-[60px]'>
          <h2 className='font-bold text-4xl text-center'>Building a new website can feel like working a second job.</h2>
          <img src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/4054451a-5b9b-4ba9-b096-01343ff6e4a5/frustrated-woman-simplified-illustration.png?format=750w" alt="" />
          <h2 className='font-bold text-4xl text-center'>What if you could make <span className='bg-[#FFBC00] px-2 rounded-2xl'>one decision</span> to simplify everything?</h2>
          <p>When you join SiteClub, you get a <span className='font-bold'>dedicated expert</span> to design, build, & evolve your website as you grow.</p>
          <img src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/88a39682-7ad1-4510-a37f-4ba23862544b/happy-woman-illustration-illustration.png?format=750w" alt="" />
          <div>
            <h2 className='font-bold text-4xl text-center'>When you join SiteClub, everything just works.</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3'>
              <div className='flex justify-center items-center py-5 flex-col'>
                <LayoutPanelTop size={50} color='#FFBC00' />
                <h3 className='font-bold text-2xl mt-[30px]'>Killer Design</h3>
                <p className='text-center mt-5 text-xl'>We combine professional design with strategic layouts and clear messaging to meet your business goals.</p>
              </div>
              <div className='flex justify-center items-center py-5 flex-col'>
                <LayoutPanelTop size={50} color='#FFBC00' />
                <h3 className='font-bold text-2xl mt-[30px]'>Killer Design</h3>
                <p className='text-center mt-5 text-xl'>We combine professional design with strategic layouts and clear messaging to meet your business goals.</p>
              </div>
              <div className='flex justify-center items-center py-5 flex-col'>
                <LayoutPanelTop size={50} color='#FFBC00' />
                <h3 className='font-bold text-2xl mt-[30px]'>Killer Design</h3>
                <p className='text-center mt-5 text-xl'>We combine professional design with strategic layouts and clear messaging to meet your business goals.</p>
              </div>
            </div>
        </div>
        </div>
      </section>
      
      <section className='py-[60px]'>
        <div className='max-w-[1250px] px-5 mx-auto pb-[60px]'>
          <h2 className='font-bold text-4xl text-center text-white'>Get custom crafted website for your unique business.</h2>
        </div>
        <div className='px-[40px] mx-auto'>
          <Slider />
        </div>
      </section>

      <section>
        <div className='max-w-[1250px] px-5 mx-auto grid grid-cols-1 sm:grid-cols-3 py-[60px]'>
          <div>
            <h2>Join the worry-free website club.</h2>
            <p>Add a dedicated website expert to your team who will design, build, and manage your website.</p>
            <button>Let's talk</button>
          </div>

          <div>
            <p>SiteClub Membership</p>
            <h2>$480/mo.</h2>
            <ul>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
              <li><Check color='#FFBC00'/>7 page website</li>
            </ul>
            <button className='bg-[#FFBC00]'>Join the club</button>
          </div>

          <div>
            <p>Optional Add-ons</p>
            <ul>
              <li><Plus color='#FFBC00'/>Additional pages</li>
              <li><Plus color='#FFBC00'/>Online course</li>
              <li><Plus color='#FFBC00'/>E-commerce</li>
              <li><Plus color='#FFBC00'/>On-site SEO</li>
              <li><Plus color='#FFBC00'/>Email setup</li>
            </ul>
            <button className='bg-[#FFBC00]'>Join the club</button>
          </div>
        </div>
      </section>
    </>
      
  )
}

export default Home
