import React from 'react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const Featured = () => {
    let items = [];
    const arrowClass = 'text-indigo-600 mt-14 w-10 h-10 cursor-pointer';
    (() => {
        const randomBg = ['bg-gradient-to-r from-cyan-500 to-blue-500', 'bg-gradient-to-r from-sky-500 to-indigo-500', 'bg-gradient-to-r from-violet-500 to-fuchsia-500', 'bg-gradient-to-r from-purple-500 to-pink-500'];
        for(let i = 0; i < 4; i++) {
            items.push(<div key={i}>
                <div className={`rounded w-60 h-40 ${randomBg[Math.floor(Math.random()*4)]}`} />
                <p>PRODUCT NAME</p>
                <p>$PRICE</p>
            </div>)
        }
    })();
  return (
    <section className='text-center w-full pb-10'>
        <div>
            <h2 className='p-10 text-xl font-semibold'>Featured Products</h2>
            <div className='flex justify-evenly'>
                <BsArrowLeftSquare className={`${arrowClass}`} />
                {items}
                <BsArrowRightSquare className={`${arrowClass}`} />
            </div>
        </div>
        <div>
            <h2 className='p-10 text-xl font-semibold'>Products on Sale</h2>
            <div className='flex justify-evenly'>
                <BsArrowLeftSquare className={`${arrowClass}`} />
                {items}
                <BsArrowRightSquare className={`${arrowClass}`} />
            </div>
        </div>
        <div>
            <h2 className='p-10 text-xl font-semibold'>Best Selling Products</h2>
            <div className='flex justify-evenly'>
                <BsArrowLeftSquare className={`${arrowClass}`} />
                {items}
                <BsArrowRightSquare className={`${arrowClass}`} />
            </div>
        </div>
    </section>
  )
}

export default Featured;