"use client";

import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Sample = (props: Props) => {
  const { data } = useSession();
  return (
    <div>
      data in client component <br />
      {JSON.stringify(data)}
    </div>
  );
};

export default Sample;
