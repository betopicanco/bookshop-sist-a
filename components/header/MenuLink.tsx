import Link from "next/link"

export default function MenuLink(props: { href: string, children: string }) {
  return (
    <li className={`text-white my-6 pl-12`}>
      <Link href={props.href} passHref>
        {props.children}
      </Link>
    </li>
  );
}