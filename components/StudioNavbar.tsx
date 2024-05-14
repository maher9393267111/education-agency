import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      
<div className=' flex flex-row  items-center text-white'>

 <div className=' text-white flex w-full justify-center items-center gap-12  min-h-[100px] m-6 '>


 <Link href='/' className='text-accent flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-accent mr-2' />
          Backe to homepage
        </Link>

        {/* <Link href='/' className='text-accent flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-accent mr-2' />
          Backe to homepage
        </Link> */}



    
 </div>


</div>


      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;