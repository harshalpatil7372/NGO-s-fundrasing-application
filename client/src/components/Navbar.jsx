import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe'

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address, logout } = useStateContext();

  
  const handleRedirect1 = () => {
    window.location.href = 'https://thirdweb.com/goerli/0xb026a401Bd49ef0831dE45056663eAA105CB0d47/events'; 
  }

  const handleRedirect2 = () => {
    window.location.href = 'https://www.blockchain.com/explorer'; 
  }

  const verifyAddress = () => {
    navigate('WalletSearchAddress');
  }


  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create your fundraiser' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#1dc071]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
        
        <CustomButton 
          btnType="button"
          title="Track"
          styles="bg-[#1c1917]"
          handleClick={handleRedirect1}
        />


        <CustomButton 
          btnType="button"
          title="Dashboard"
          styles="bg-[#1c1917]"
          handleClick={handleRedirect2}
        />

<button type="search" className='font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-gray-900' onClick={verifyAddress}>Verify Address</button>

        <CustomButton 
          btnType="button"
          title="Logout"
          styles="bg-[#1c1917]"
          handleClick={logout}
        />  



        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>




      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#64748b] flex justify-center items-center cursor-pointer">
            <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#cbd5e1] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#1dc071]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />

          <CustomButton 
            btnType="button"
            title="Track"
            styles="ml-2 bg-[#1c1917]"
            handleClick={handleRedirect1}
        />

        <CustomButton 
            btnType="button"
            title="Dashboard"
            styles="ml-2 bg-[#1c1917]"
            handleClick={handleRedirect2}
        />

        <button type="search" className='ml-1 mr-2 font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] p-1 rounded-[10px] bg-gray-900' onClick={verifyAddress}>Verify Address</button>
        <CustomButton 
          btnType="button"
          title="Logout"
          styles="ml-2 bg-[#1c1917]"
          handleClick={logout}
        />  

      

            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar