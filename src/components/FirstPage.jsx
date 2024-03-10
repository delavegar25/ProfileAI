import React from 'react';

const FirstPage = () => {
    return (
        <div className='bg-black text-white min-h-screen min-w-screen flex items-center justify-center'>
            <div className='mx-auto max-w-lg'>
            <img src="" className='w-20 h-auto relative bottom-20 cursor-not-allowed'/>
            <h1 className='text-4xl font-bold mb-6 text-center'>Hey, It's Pascal!</h1> 
            <p className='text-md font-medium text-gray-400 px-6'>I'm a Software Engineer and Technical Writer</p>
            <br />
            <p className='text-md font-medium text-gray-400 px-6'>As a Software Engineer, I thrive on the challenge of building innovative solutions that solve real-world problems.</p>
            <br />
           <p className='text-md font-medium text-gray-400 px-6'>From crafting elegant code to designing user-friendly interfaces, I'm constantly pushing the boundaries of what is possible in the digital realm.</p>
            <br />
           <p className='text-md font-medium text-gray-400 px-6'>I believe that clear communication is the key to unlocking understanding, hence, I use Medium to communicate better to my audience. </p> 
            <br />
            <p className='text-md font-medium text-gray-400 px-6'>I break down web development into digestible chunks that empower readers to master new skills and concepts.</p> 
            <br />
            <p className='text-md font-medium text-gray-400 px-6'>Technologies: Python, Javascript(React & Vue), TailwindCSS.</p>                  
            
         <div className='flex justify-center items-center'>
             <ul className='flex flex-row list-none'>
                <li className='border border-gray-600 rounded-xl p-3'>Let's connect on Twitter</li>
             </ul>

         </div>

        </div>
 </div>        
    );
};

export default FirstPage;
