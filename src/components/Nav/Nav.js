import { Fragment } from 'react'
import { Disclosure, Menu} from '@headlessui/react'
import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/outline'
import profile from '../../assets/profile.jpeg'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]
const BASE_URL= "http://localhost:3000/"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        key={item.name}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
// function NavList() {
//   return (
//     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <Link to="http://localhost:3000/about" className="flex items-center hover:text-blue-500 transition-colors">
//           Pages
//          </Link> 
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
// }
 
// export function NavbarSimple() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);
 
//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
 
//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);
 
//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// }