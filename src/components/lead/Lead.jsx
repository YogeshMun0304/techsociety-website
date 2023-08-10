import React, { useEffect, useState } from 'react'
import profile from '../../assets/profile.jpg'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Lead = ({index,linkedin,twitter,name,domain}) => {
    const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Delay the appearance of each card by 100ms times its index
    const timeout = setTimeout(() => {
      setShowCard(true);
    }, 150 * index);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div  className={`${
        showCard ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
      } rounded-lg p-4  transition-transform duration-500 ease-in-out`}
    >
    <div className=" border-2 rounded-2xl  py-2 flex flex-col items-center font-sans">
    <img
      className=" w-[7rem] h-[7rem] rounded-full mb-4 mt-1  border-4 border-blue-500 border-solid"
      src={profile}
      alt="Profile"
    />
    <div className='my-8 flex flex-col items-center'>
    <h2 className="name text-xl text-white font-sans mb-1">{name}</h2>
    <p className="domain text-white text-sm mb-4">{domain}</p>
    </div>
    <div className="social-icons flex justify-center">
      <Link to={linkedin}><FaTwitter className="icon h-8 w-8 text-blue-500 mr-2" /></Link>
      <Link to={twitter}><FaLinkedin className="icon h-8 w-8 text-blue-500" /></Link>
    </div>
  </div>
  </div>
  )
}

export default Lead