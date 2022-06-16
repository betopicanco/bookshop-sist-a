import Link from "next/link"

const MenuLink = (props: {href: string, children: string}) => {
  return (
    <li className={`text-white my-6 pl-12`}>
      <Link href={props.href} passHref>
        {props.children}
      </Link>
    </li>
  );
}

export default MenuLink;