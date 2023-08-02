"use client"
import { motion, AnimatePresence } from "framer-motion"


 
 const PageWrapper = ({children}) => {
   return (
    
      <motion.div 
      initial={{opacity: 0,y:15}}
      animate={{opacity: 1,y:0}}
      exit={{opacity: 0,y:15}}
      transition={{delay: 0.25}}
     >
    

      {children}
    
       </motion.div>
       
   )
 }
 
 export default PageWrapper
 