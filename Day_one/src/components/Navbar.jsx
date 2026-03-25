import {Link , NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";


function Navbar  (){
    return(
        <div className="bg-orange-300 justify-evenly flex text-zinc-950  ">
         <span className=' flex items-center gap-1'>
               <FaHome className='text-green-600 text-xl' />
            <Link to='/abc' > Home</Link>
         </span>
            <Link to='/pqr' >About</Link>

            <NavLink to='/hello' className={({isActive})=>isActive?`text-yellow-600`:`text-blue-500`}  >Hello</NavLink>
           
        </div>
    )
}
export default Navbar