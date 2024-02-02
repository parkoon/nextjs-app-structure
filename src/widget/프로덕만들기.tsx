import { createProduct } from "@/domain/product/api";
import React from "react";
import ProductForm from "./form/ProductForm";

type Props = {
  memeId: string;
};

const 프로덕만들기 = ({ memeId }: Props) => {
  const handleSuccess = (values) => {
    createProduct({ ...values, msmeId });
  };
  return (
    <div>
      <ProductForm onSuccess={handleSuccess} />
    </div>
  );
};

export default 프로덕만들기;
