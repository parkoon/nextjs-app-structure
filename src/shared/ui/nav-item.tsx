"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export const NavItem = ({ href, children }: NavItemProps) => {
  const pathname = usePathname();
  const className = pathname === href ? "text-slate-900" : "";
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
