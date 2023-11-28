import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export function BasicLayout({ children } : BasicLayoutProps) {
  return (
    <div className="flex items-center flex-col">
      <Header />
      <div className="flex w-full mt-20 mb-20 flex-col">       
        {children}
      </div>
      <Footer />
    </div>
  )
}