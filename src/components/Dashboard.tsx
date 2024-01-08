import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import InfoCard from './InfoCard';

const infoData = ['Backlog version', 'Probity Portal Data'];

function Dashboard() {
  return (
    <div className='px-2'>
      <Header />
      <div className='flex gap-5 min-h-screen'>
        <Sidebar />
        <div className='flex-1 bg-gray-400/50 my-2 flex flex-col gap-2'>
          {infoData?.map((info) => <InfoCard key={info} info={info} />)}
        </div>
      </div>

      <footer className='text-center px-4 py-2'>
        Copyright &copy;
        {new Date().getFullYear()} Concept. All rights reserved.{' '}
      </footer>
    </div>
  );
}

export default Dashboard;
