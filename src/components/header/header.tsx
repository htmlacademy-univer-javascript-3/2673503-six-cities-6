import Logo from '@/components/logo/logo.tsx';
import NavigationBar from '@/components/navigation-bar/navigation-bar.tsx';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          <NavigationBar logged/>
        </div>
      </div>
    </header>
  );
}
