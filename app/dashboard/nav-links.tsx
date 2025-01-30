'use client';

import {
    CalendarIcon,
    HomeIcon,
    CalendarDaysIcon,
    CreditCardIcon,
    IdentificationIcon,
    PowerIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';
  import { signOut } from '../auth';
   
  const links = [
    { icon: HomeIcon, name: 'Home', href: '/dashboard' },
    { icon: CalendarIcon, name: 'Reservá', href: '/dashboard/reserva' },
    { icon: CalendarDaysIcon, name: 'Mis reservas', href: '/dashboard/misreservas' },
    { icon: CreditCardIcon, name: 'Mis pagos', href: '/dashboard/mispagos' },
    { icon: IdentificationIcon, name: 'Mis datos', href: '/dashboard/misdatos' },
  ];

  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        
            {links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                  )}
                >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
                </Link>
            );
            })}

            
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> 
      </>
    );
  }