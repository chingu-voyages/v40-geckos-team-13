import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-slate-400 h-60 w-full pb-10 flex'>
      <div className='flex-1 p-10'>
        <h3 className='font-semibold text-2xl'>Newsletter</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis nisi ac leo tincidunt, in gravida mauris placerat. 
        Integer mollis, lectus ac rhoncus volutpat, mi lectus commodo tellus, ut faucibus massa dolor in eros. 
        Curabitur eget dolor quis eros vulputate aliquet. Aliquam erat volutpat. Curabitur a commodo dolor.
        </p>
      </div>
      <div className='flex items-center flex-1 p-10'>
        <input className='w-2/3 p-4' placeholder='Email Address' />
        <button className='bg-slate-600 text-white font-bold uppercase p-4'>Subscibe</button>
      </div>
    </div>
  )
}

export default Newsletter;