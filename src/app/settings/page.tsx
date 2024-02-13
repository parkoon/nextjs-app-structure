"use client";
import { cookieKey } from "@/shared/config";
import { Button } from "@/shared/ui/button";
import { deleteCookie } from "cookies-next";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";

const SettingsPage = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie(cookieKey.token);
    router.push("/");
    router.refresh();
  };
  return (
    <div>
      <Button onClick={handleLogout}>Or click here to logout.</Button>
    </div>
  );
};

export default SettingsPage;
