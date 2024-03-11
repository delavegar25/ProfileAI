import React from 'react';


const FirstPage = () => {
    return (
        <div className='bg-black text-white min-h-screen min-w-screen flex items-center justify-center'>
            <div className='mx-auto max-w-lg'>
            <img src="" className='w-20 h-auto relative bottom-20 cursor-not-allowed'/>
            <h1 className='text-4xl font-bold mb-6 py-6 text-center'>Hey, It's Pascal!</h1> 
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
             <ul className='flex flex-col list-none m-4'>
                <li className='border border-gray-600 rounded-xl p-8 m-4'><a href='#'>Check out my Projects</a></li>

                <li className='border border-gray-600 rounded-xl p-8 m-4'>
             

                    <a href='https://medium.com/pascalokereke18@gmail.com' className='relative left-2'>Check out my Medium blog</a></li>
                
                <li className='border border-gray-600 rounded-xl p-8 m-4'>   
                <svg enable-background="new 0 0 25 25" id="Layer_1" version="1.1" viewBox="0 0 25 25" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M48.8,257.1c0-40.3,0.1-80.7-0.1-121c0-3.8,1.2-5.9,4.5-7.9c66-40.1,132-80.2,197.9-120.5c4.3-2.7,7.2-2.6,11.5,0.1   c66,40.4,132.2,80.6,198.3,120.8c3,1.8,3.9,3.8,3.9,7.2c-0.1,81.2-0.1,162.3,0,243.5c0,3.5-1.2,5.3-4.1,7   c-66.9,40.6-133.7,81.3-200.5,122.1c-2.7,1.6-4.5,1.5-7.1-0.1c-66.9-40.8-133.9-81.6-200.9-122.3c-2.9-1.8-3.5-3.8-3.5-6.9   C48.9,338.4,48.8,297.7,48.8,257.1z M451.8,257.3c0-37.5-0.1-75,0.1-112.5c0-4.8-1.4-7.3-5.5-9.8C384.7,97.5,323,60,261.3,22.3   c-3.2-2-5.5-2.1-8.9-0.1C190.4,60.2,128.2,98,66,135.7c-3.4,2-4.3,4.2-4.3,7.9c0.1,75.8,0.1,151.7,0,227.5c0,3.8,1.1,5.9,4.4,7.9   c61.9,37.6,123.8,75.2,185.5,113c4,2.5,6.8,2.1,10.6-0.2c61.5-37.6,123.1-75.1,184.7-112.5c3.6-2.2,5-4.3,5-8.6   C451.8,332.9,451.8,295.1,451.8,257.3z"/><path d="M286.7,307.2c8,12.7,9.7,26,9.4,39.9c-0.3,18.2-0.1,36.3-0.1,54.5c0,1.8,0,3.6,0,5.9c-1.8,0.2-3.2,0.4-4.7,0.4   c-23.5,0-47-0.1-70.5,0.1c-3.9,0-5.2-1.1-5.1-5.1c0.2-11.5,0.1-22.9,0.1-34.9c-3.8,0.5-7.1,0.9-10.3,1.3   c-28.6,3.4-48.9-8.3-61.5-34c-4.5-9.2-11-17.4-17-25.8c-1.8-2.6-5.2-4-7.7-6.2c-1.1-1-1.6-2.7-2.3-4.1c1.5-0.6,2.9-1.7,4.4-1.8   c14-0.9,24.1,5.7,32.1,16.6c4.7,6.4,9.3,13.2,15.3,18.1c13,10.7,28.2,11.6,43.9,6.6c1.2-0.4,2.8-2.1,2.9-3.3   c0.9-9.9,2.8-19.4,8.6-26.8c-11.3-3.5-22.7-5.9-33.3-10.5c-30-13-44.8-36.6-45.5-69c-0.4-15.7,0.2-31.3,4.5-46.6   c2.5-8.8,6.4-16.7,13-23.3c1.2-1.2,1.5-4.3,0.9-6c-4.7-13.8-4.1-27.5-0.3-41.3c1.3-4.8,3.6-5.4,7.9-4c12.3,4,21.1,12.3,29,22   c1.6,1.9,3,3.9,4.8,6.2c15.7-9.1,33-9.3,50.4-9.3c17.2,0,34.4,0,50,9.1c4.6-5.2,9-10.5,13.9-15.5c5.8-5.9,12.7-10.1,20.7-12.7   c4-1.3,6.3-0.9,7.8,3.7c4.4,13.8,5.2,27.5-0.3,41.1c-1.3,3.3-0.8,5.2,1.7,7.8c7.4,7.6,11.9,17,13.5,27.4c3,19.5,4.9,39,1,58.6   c-4.2,21.1-16.2,36.6-34.5,47.3C316.7,301.4,302.6,305.8,286.7,307.2z"/></g></svg>   
                    <a href='https://github.com/delavegar25 relative left-2'>Check out my Github</a></li>
                

                <li className='border border-gray-600 rounded-xl p-8 m-4'>
                <a href='https://linkedin.com/in/okereke-pascal-72900724a'>Let's connect on Linkedin</a></li>

                <li className='border border-gray-600 rounded-xl p-8 m-4'>
                <svg enable-background="new 0 0 25 25" height="25px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="25px" className='relative right-6 top-6' xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M256.23,512C396.81,512,512,396.81,512,256.23   C512,115.184,396.81,0,256.23,0C115.184,0,0,115.184,0,256.23C0,396.81,115.184,512,256.23,512L256.23,512z" fill="#1EBEF0" fill-rule="evenodd"/><path clip-rule="evenodd" d="M276.635,137.407c-9.077,6.351-15.873,15.42-20.865,25.396   l-2.265,5.898c-1.359,4.077-2.273,8.163-2.726,12.241c-0.453,2.265-0.453,4.085-0.906,5.898v3.625l0.453,5.898l0.906,7.71h-0.453   h-2.719h-1.813c-22.224-0.453-43.987-5.445-63.04-14.061l-11.334-5.437c-2.265-0.914-4.078-2.273-6.351-3.632   c-12.694-7.257-24.028-16.78-34.012-27.208c-6.343-6.804-12.241-14.061-17.232-21.771c-5.438,10.437-8.616,22.677-8.616,35.379   c0,4.531,0.453,9.069,1.359,13.6c0,2.265,0.453,4.085,0.914,5.898c4.078,13.6,11.334,25.849,21.31,34.918l4.992,4.539l-6.351-1.367   c-8.163-2.266-16.326-4.984-24.036-8.164c0.906,16.327,7.257,31.293,17.232,43.089c9.522,11.327,22.224,19.951,36.73,24.028   l-16.779,0.906l-14.054-0.453c10.429,25.403,34.465,43.995,63.033,46.261c-26.302,19.498-58.955,30.388-93.873,30.388   c25.849,15.873,55.33,25.841,87.521,27.653h20.865c99.31-5.438,177.77-87.522,177.77-188.199v-9.522   c3.625-3.171,7.25-6.343,10.89-9.975c8.608-7.71,16.326-16.78,22.67-26.302c-10.437,6.804-22.67,10.429-36.277,10.429h-0.453   h-0.453h0.453c12.232-8.163,21.763-20.404,26.747-34.465c-9.515,4.992-20.404,8.616-31.294,11.796l-1.359,0.453l-8.155,1.812   c-11.795-12.702-28.575-20.865-47.167-20.865h-0.452h-0.906c-4.984,0-9.983,0.453-14.968,1.367   c-7.249,1.812-14.514,4.984-20.404,8.616L276.635,137.407z" fill="#FFFFFF" fill-rule="evenodd"/></g></svg>
                    <a href='https://twitter.com/delavegar_' className='relative left-2'>Let's connect on Twitter</a></li>
             </ul>
         </div>
        </div>
 </div>        
    );
};

export default FirstPage;
