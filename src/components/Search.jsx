import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
       
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>FINANCIAL SERVICES</h3>
                <p className='py-1'>SCHOOL FEES AND ALL MONEY RELATED ISSUES </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>EDUCATION SERVICES</h3>
                <p className='py-1'>ALL-INCLUSIVE CURRICULUM AND EXTRA CURRICULUM ACTIVITIES</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK AN APPOINTMENT NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>OFFICE</label>
                  <select className='border rounded-md p-2'>
                      <option>Principal</option>
                      <option>Deputy Principal</option>
                      <option>Bursar</option>
                      <option>Secretary</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full bg-yellow-500 my-4'>Available During Week Days Working Hours</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
