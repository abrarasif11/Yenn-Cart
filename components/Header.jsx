// import Link from 'next/link';
// import React from 'react'

// const Header = () => {
//   const menuItems = (
//     <>
//       <li className="font-medium  text-yellow-400">
//         <Link href={'/'}>Appointment</Link>
//       </li>
//       <li className="font-medium  text-yellow-400">
//         <Link href={'/'}>Services</Link>
//       </li>
//       <li className="font-medium  text-yellow-400">
//         <Link href={'/'}>Testimonial</Link>
//       </li>
//       <button className=" bg-white btn-circle">
//       <div className="indicator">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//         <span className="badge badge-xs badge-primary indicator-item"></span>
//       </div>
//     </button>
//       {/* {isAdmin && (
//         <li className="font-medium font-poppins text-yellow-400"
//         >
//           <Link
//             to="/dashboard" >
//             Dashboard
//           </Link>
//         </li>
//       )} */}
//       {/* {user?.uid ? (
//         <li
//           className="font-medium font-poppins text-yellow-400"
//           onClick={handleLogOut}
//         >
//           <button>Logout</button>
//         </li>
//       ) : (
//         <li className="font-medium font-poppins text-yellow-400">
//           <Link to="/login">Login</Link>
//         </li>
//       )} */}
//       {/* {user?.uid && (
//         <div
//           className="tooltip ml-4 mb-1 lg:tooltip-left md:tooltip-right mt-1 dropdown dropdown-bottom dropdown-end"
//           data-tip={user?.displayName}
//         >
//           <label tabIndex={0}>
//                         {
                            
//                             user?.photoURL ?
//                                 <img
//                                     className="w-[36px] h-[36px] rounded-full mr-5"
//                                     src={user?.photoURL}
//                                     alt=""
//                                 />
//                                 :
//                                 <FaUserCircle className=" w-[30px] mt-1 mr-2 h-[40px]"></FaUserCircle>
//                         }
                        
//                     </label>

//         </div>
//       )} */}
//     </>
//   );
//   return (
//     <div className="navbar bg-black flex justify-between">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn text-yellow-400 btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={1}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
//           >
//             {menuItems}
//           </ul>
//         </div>
//         <div className="flex  items-center">

//           <Link
//            href={'/'}
//             className="btn btn-ghost text-yellow-400 font-poppins font-semibold normal-case text-2xl"
//           >
//             Yenn Cart
//           </Link>
//         </div>
        
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//     </div>
//   )
// }

// export default Header