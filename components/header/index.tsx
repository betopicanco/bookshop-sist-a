import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header 
      className={`
        bg-stone-800 
        flex justify-between 
        px-20
      `}
    >
      <div className="flex p-1">
        <Link href={'/'}>
          <div>
            <Image 
              src={'/img/vendor.jpg'}
              alt={'foto de perfil do vendedor'}
              width={'65'}
              height={'65'}
              style={{
                borderRadius: '9999px',
                borderStyle: 'solid',
                borderColor: '#FFFFFF',
              }}
            />
          </div>
        </Link>
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
}