import Image from 'next/image';
import logo from '../../public/images/logo-packlab-navbar-blanco.png';

export function Brand() {
  return (
    <span className="brand-logo">
      <Image src={logo} alt="Pack Lab" sizes="220px" className="brand-image" priority />
    </span>
  );
}
