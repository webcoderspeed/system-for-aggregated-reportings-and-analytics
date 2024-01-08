import React from 'react';
import { Link } from 'react-router-dom';

const items: {
  label: string;
  link: string;
}[] = [
  {
    label: 'Dashboard',
    link: '/',
  },
  {
    label: 'Backlog Vacancies',
    link: '/backlog-vacancies',
  },
  {
    label: 'Probity Portal Data',
    link: '/probity-portal-data',
  },
];

function SidebarItem({ label, link }: { label: string; link: string }) {
  return (
    <Link to={`/${link}`} className='px-4 py-2 bg-sky-600/80 text-white'>
      {label}
    </Link>
  );
}

function Sidebar() {
  return (
    <div className='flex flex-col gap-2 my-2'>
      {items?.map((item) => <SidebarItem key={item.label} label={item.label} link={item.link} />)}
    </div>
  );
}

export default Sidebar;
