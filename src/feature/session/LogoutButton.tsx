"use client";

import { cookieKey } from "@/shared/config";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie(cookieKey.token);
    router.push("/");
    router.refresh();
  };
  return (
    <button className="btn btn-outline-danger" onClick={handleLogout}>
      Or click here to logout.
    </button>
  );
};
