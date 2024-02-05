import React from "react";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type">;

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <input type="checkbox" {...props} />;
};

export default Checkbox;
