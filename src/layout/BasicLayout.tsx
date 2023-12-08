import { ButtonAddNewPost } from '@/components/ButtonAddNewPost';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useUserInfo } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export function BasicLayout({ children } : BasicLayoutProps) {
  const { userInfo } = useUserInfo();

  return (
    <div className="flex items-center flex-col relative">
      <Header />
      <div className="flex w-full mt-20 mb-20 flex-col">       
        {children}
      </div>
      <Footer />
      <ToastContainer />

      {userInfo && 
        <ButtonAddNewPost />
      }
    </div>
  )
}