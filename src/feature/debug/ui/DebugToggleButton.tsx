"use client";

import {
  getEnabledCookie,
  toggleEnabledCookie,
} from "../lib/generate-layer-debug-props";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/shared/ui";

export const DebugToggleButton = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleChange = () => {
    toggleEnabledCookie();
    setChecked((prev) => !prev);
    router.refresh();
  };

  useEffect(() => {
    const initialUpdate = async () => {
      const enabled = await getEnabledCookie();
      setChecked(enabled);
    };
    initialUpdate();
  }, []);

  return (
    <Checkbox
      className="fixed bottom-10 right-10"
      onChange={handleChange}
      checked={checked}
    />
  );
};
