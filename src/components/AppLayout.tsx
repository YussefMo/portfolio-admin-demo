import { Outlet } from 'react-router-dom';
import Header from './Header';
import SidebarComp from './SidebarComp';
import { SidebarProvider } from './ui/sidebar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function AppLayout() {
  return (
    <>
      <ReactQueryDevtools />
      <SidebarProvider>
        <SidebarComp />
        <section className="w-screen">
          <Header />
          <main className="px-6 py-33 sm:px-12 w-full h-fit overflow-auto">
            <Outlet />
          </main>
        </section>
      </SidebarProvider>
    </>
  );
}

export default AppLayout;
