import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaHeart, FaHouse, FaUser } from "react-icons/fa6";
import TabBarWrapper from "./TabBarWrapper";

const TabBar = async () => {
  const session = await getServerSession();

  return (
    <TabBarWrapper>
      <ul className="flex items-center w-full">
        <TabBarCell href="/" icon={<FaHouse size={24} />} label="둘러보기" />

        {session && (
          <TabBarCell
            href="/wishlist"
            icon={<FaHeart size={24} />}
            label="위시리스트"
          />
        )}
        {session ? (
          <TabBarCell
            href="/profile"
            icon={<FaUser size={24} />}
            label="프로필"
          />
        ) : (
          <TabBarCell
            href="/sign-in"
            icon={<FaUser size={24} />}
            label="로그인"
          />
        )}
      </ul>
    </TabBarWrapper>
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
