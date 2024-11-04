import React, { useContext, useEffect } from 'react';
import { ShopContext } from './Context/ShopContext';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';

function Searchbar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  // Set a timer to close the search bar after inactivity
  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => {
        setShowSearch(false);
        console.log('Search bar automatically hidden after inactivity');
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Clear the timeout if the user types again
    }
  }, [search, setShowSearch]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setShowSearch(false);
  };

  return showSearch ? (
    <div className='border-t border-b text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={handleInputChange}
          className='flex-1 outline-none bg-inherit text-sm'
          type="text"
          placeholder='Search'
        />
        <IoIosSearch />
      </div>
      <RxCross2
        size={20}
        onClick={handleClose}
        className='inline cursor-pointer'
      />
    </div>
  ) : null;
}

export default Searchbar;
