import React from 'react';


const FirstPage = () => {
    return (
        <div className='bg-black text-white min-h-screen min-w-screen flex items-center justify-center'>
            <div className='mx-auto max-w-lg'>
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
                <li className='border border-gray-600 rounded-xl p-8 m-4 overflow-hidden'>
                    <a href='#'>Check out my Projects</a></li>

                <li className='border border-gray-600 rounded-xl p-1 m-4 overflow-hidden'>
                <svg enable-background="new 0 0 100 100" height="100px" id="Layer_1" version="1.1" viewBox="0 0 100 100" width="30px" className='relative right-0 top-3' xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="50" cy="50" fill="#00E56B" r="45"/><g id="XMLID_110_"><g id="XMLID_111_"><path d="M43.031,66.248c0,1.186-0.868,1.723-1.93,1.191l-10.849-5.424     c-0.636-0.318-1.158-1.16-1.158-1.873V33.549c0-0.949,0.696-1.379,1.546-0.955l12.316,6.158c0.046,0.025,0.074,0.07,0.074,0.123     V66.248z" fill="#FFFFFF" id="XMLID_112_"/><g><polygon fill="#FFFFFF" points="43.975,40.523 43.975,55.035 56.873,61.484     "/></g><g><path d="M70.753,38.809l-12.627-6.312c-0.638-0.318-1.463-0.082-1.837,0.523l-7.965,12.941l9.114,14.809      l13.376-21.738C70.864,38.953,70.835,38.85,70.753,38.809z" fill="#FFFFFF"/></g><g><polygon fill="#FFFFFF" points="56.969,61.291 56.969,61.436 57.099,61.502     "/><path d="M57.896,61.9l10.693,5.348c1.277,0.639,2.314,0.191,2.314-1V40.762L57.896,61.9z" fill="#FFFFFF"/></g></g></g></g></svg>
                    <a href='https://medium.com/pascalokereke18@gmail.com' className='relative left-8 bottom-12'>Check out my Medium blog</a></li>
                
                <li className='border border-gray-600 rounded-xl p-4 m-4 overflow-hidden'>                   
              <svg height="72" viewBox="0 0 72 72" width="32" className='relative right-0 top-3' xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#3E75C3"/><path d="M35.9985,12 C22.746,12 12,22.7870921 12,36.096644 C12,46.7406712 18.876,55.7718301 28.4145,58.9584121 C29.6145,59.1797862 30.0525,58.4358488 30.0525,57.7973276 C30.0525,57.2250681 30.0315,55.7100863 30.0195,53.6996482 C23.343,55.1558981 21.9345,50.4693938 21.9345,50.4693938 C20.844,47.6864054 19.2705,46.9454799 19.2705,46.9454799 C17.091,45.4500754 19.4355,45.4801943 19.4355,45.4801943 C21.843,45.6503662 23.1105,47.9634994 23.1105,47.9634994 C25.2525,51.6455377 28.728,50.5823398 30.096,49.9649018 C30.3135,48.4077535 30.9345,47.3460615 31.62,46.7436831 C26.2905,46.1352808 20.688,44.0691228 20.688,34.8361671 C20.688,32.2052792 21.6225,30.0547881 23.1585,28.3696344 C22.911,27.7597262 22.0875,25.3110578 23.3925,21.9934585 C23.3925,21.9934585 25.4085,21.3459017 29.9925,24.4632101 C31.908,23.9285993 33.96,23.6620468 36.0015,23.6515052 C38.04,23.6620468 40.0935,23.9285993 42.0105,24.4632101 C46.5915,21.3459017 48.603,21.9934585 48.603,21.9934585 C49.9125,25.3110578 49.089,27.7597262 48.8415,28.3696344 C50.3805,30.0547881 51.309,32.2052792 51.309,34.8361671 C51.309,44.0917119 45.6975,46.1292571 40.3515,46.7256117 C41.2125,47.4695491 41.9805,48.9393525 41.9805,51.1877301 C41.9805,54.4089489 41.9505,57.0067059 41.9505,57.7973276 C41.9505,58.4418726 42.3825,59.1918338 43.6005,58.9554002 C53.13,55.7627944 60,46.7376593 60,36.096644 C60,22.7870921 49.254,12 35.9985,12" fill="#FFF"/></g></svg>
                    <a href='https://github.com/delavegar25' className='relative left-9 bottom-9'>Check out my Github</a></li>
                

                <li className='border border-gray-600 rounded-xl p-8 m-4 overflow-hidden'>
                    
                <a href='https://linkedin.com/in/okereke-pascal-72900724a'>Let's connect on Linkedin</a></li>

                <li className='border border-gray-600 rounded-xl p-8 m-4 overflow-hidden'>
                <svg enable-background="new 0 0 25 25" height="25px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="25px" className='relative right-4 top-3' xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M256.23,512C396.81,512,512,396.81,512,256.23   C512,115.184,396.81,0,256.23,0C115.184,0,0,115.184,0,256.23C0,396.81,115.184,512,256.23,512L256.23,512z" fill="#1EBEF0" fill-rule="evenodd"/><path clip-rule="evenodd" d="M276.635,137.407c-9.077,6.351-15.873,15.42-20.865,25.396   l-2.265,5.898c-1.359,4.077-2.273,8.163-2.726,12.241c-0.453,2.265-0.453,4.085-0.906,5.898v3.625l0.453,5.898l0.906,7.71h-0.453   h-2.719h-1.813c-22.224-0.453-43.987-5.445-63.04-14.061l-11.334-5.437c-2.265-0.914-4.078-2.273-6.351-3.632   c-12.694-7.257-24.028-16.78-34.012-27.208c-6.343-6.804-12.241-14.061-17.232-21.771c-5.438,10.437-8.616,22.677-8.616,35.379   c0,4.531,0.453,9.069,1.359,13.6c0,2.265,0.453,4.085,0.914,5.898c4.078,13.6,11.334,25.849,21.31,34.918l4.992,4.539l-6.351-1.367   c-8.163-2.266-16.326-4.984-24.036-8.164c0.906,16.327,7.257,31.293,17.232,43.089c9.522,11.327,22.224,19.951,36.73,24.028   l-16.779,0.906l-14.054-0.453c10.429,25.403,34.465,43.995,63.033,46.261c-26.302,19.498-58.955,30.388-93.873,30.388   c25.849,15.873,55.33,25.841,87.521,27.653h20.865c99.31-5.438,177.77-87.522,177.77-188.199v-9.522   c3.625-3.171,7.25-6.343,10.89-9.975c8.608-7.71,16.326-16.78,22.67-26.302c-10.437,6.804-22.67,10.429-36.277,10.429h-0.453   h-0.453h0.453c12.232-8.163,21.763-20.404,26.747-34.465c-9.515,4.992-20.404,8.616-31.294,11.796l-1.359,0.453l-8.155,1.812   c-11.795-12.702-28.575-20.865-47.167-20.865h-0.452h-0.906c-4.984,0-9.983,0.453-14.968,1.367   c-7.249,1.812-14.514,4.984-20.404,8.616L276.635,137.407z" fill="#FFFFFF" fill-rule="evenodd"/></g></svg>
                    <a href='https://twitter.com/delavegar_' className='relative left-4 bottom-3'>Let's connect on Twitter</a></li>
             </ul>
         </div>
        </div>
 </div>        
    );
};

export default FirstPage;
