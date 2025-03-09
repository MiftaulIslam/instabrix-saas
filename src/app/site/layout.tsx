
import Navigation from '@/components/navigation';
import  React,{ ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='min-h-screen text-white overflow-hidden' >
        <div className="absolute top-6 left-20 w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-[#7214FF] rounded-full blur-3xl opacity-10" />
        <div className=" absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-[#32CAFD] rounded-full blur-3xl opacity-10" />
        <Navigation/>
        <hr />
      
        <div className='container mx-auto relative z-10'>
      {children}
        </div>
            
    </main>
  )
}

export default Layout
