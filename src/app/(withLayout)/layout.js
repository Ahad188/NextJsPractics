import React from 'react';

const layout = ({ children}) => {
     return (
          <div>
        <header>
          <nav>
               <ul className='flex justify-between mx-5'>
                     <li className='mx-5'><a href="3">home</a></li>
                     <li className='mx-5'><a href="3">home</a></li>
                     <li className='mx-5'><a href="3">home</a></li>
               </ul>
          </nav>
        </header>
               {children}
               {/*  */}
               <footer className="footer bg-neutral text-neutral-content p-10">
   
          this is footer side
</footer>
          </div>
     );
};

export default layout;