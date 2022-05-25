import Link from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  text: string;
  href: string;
}

export default ({ text, href }: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`text-white inline-block p-3 ${
          router.pathname === href ? "bg-blue" : "hover:bg-darkest-gray"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};
