import {
    CalendarIcon,
    HomeIcon,
    CalendarDaysIcon,
    CreditCardIcon,
    IdentificationIcon,
  } from '@heroicons/react/20/solid';
  import Link from 'next/link';
   
  const links = [
    { icon: HomeIcon, name: 'Home', href: '/' },
    { icon: CalendarIcon, name: 'Reservá', href: '/dashboard/reserva' },
    { icon: CalendarDaysIcon, name: 'Mis reservas', href: '/dashboard/misreservas' },
    { icon: CreditCardIcon, name: 'Mis pagos', href: '/dashboard/mispagos' },
    { icon: IdentificationIcon, name: 'Mis datos', href: '/dashboard/misdatos' },
  ];

  export default function NavLinks() {
    return (
      <>
        
            {links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <Link
                key={link.name}
                href={link.href}
                className="flex h-[48px] items-center justify-center grow gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
                </Link>
            );
            })}
        
      </>
    );
  }