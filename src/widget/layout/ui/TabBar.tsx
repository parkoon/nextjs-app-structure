"use client";

import Link from "next/link";
import useInteractiveTabBarStyle from "../hooks/useInteractiveTabBarStyle";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";

const TabBar = () => {
  const style = useInteractiveTabBarStyle();

  return (
    <nav style={style} className="px-4">
      <ul className="flex w-full">
        <TabBarCell
          href="/"
          icon={<MdOutlineSearch size={24} />}
          label="둘러보기"
        />
        <TabBarCell
          href="/sign-up"
          icon={<MdOutlinePersonOutline size={24} />}
          label="로그인"
        />
      </ul>
    </nav>
  );
};

type TabBarCellProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};
const TabBarCell = ({ icon, label, href }: TabBarCellProps) => {
  return (
    <li className="flex-1 cursor-pointer">
      <Link
        href={href}
        className="flex flex-col justify-center items-center gap-1 "
      >
        {icon}
        <span className="text-xs">{label}</span>
      </Link>
    </li>
  );
};

export default TabBar;
