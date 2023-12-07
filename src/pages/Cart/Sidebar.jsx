import React, { useContext } from "react";
import { Link, useActionData } from "react-router-dom";

import {IoMdArrowForward} from'react-icons/io';
import {FiTrash2} from'react-icons/fi';

import Products from "../Products/Products";

import { SidebarContext } from "../../utils/SidebarContext";
const Sidebar = () => {
   const { isOpen, handleClose } = useContext(SidebarContext);
   return (
     <div className={`w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] ${isOpen ? 'right-0' : '-right-full'}`}>
       {/* Nội dung của Sidebar */}hahahahahahaa
     </div>
   );
 };
 
 export default Sidebar;
