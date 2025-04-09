import { ModeToggle } from './ModeToggle';
import { SidebarTrigger } from './ui/sidebar';
import { User } from 'lucide-react';

function Header() {
  return (
    <header className="bg-accent fixed flex w-full flex-wrap items-center justify-between border-b px-3 py-5 sm:px-12">
      <div className="w-full text-center bg-input mb-2">
        <p>This Is A Demo There Is No Real Data Except The GitHub Infos</p>
      </div>
      <div className="flex w-[15%] content-center items-center gap-5">
        <SidebarTrigger />
        <ModeToggle />
      </div>
      <div className="flex gap-3">
        <span>
          <User />
        </span>
        <span>hello user</span>
      </div>
    </header>
  );
}

export default Header;
