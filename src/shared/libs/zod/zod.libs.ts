import { ZodType } from "zod";
import { Contract } from "../fetcher/fetcher.types";

export const zodContract = <T>(data: ZodType<T>): Contract<T> => {
  const isData = (prepared: T) => data.safeParse(prepared).success;

  return {
    isData,
    getErrorMessages(raw: T) {
      const validation = data.safeParse(raw);
      if (validation.success) {
        return [];
      }

      return validation.error.errors.map((e) => {
        const path = e.path.join(".");
        return path !== "" ? `${e.message}, path: ${path}` : e.message;
      });
    },
  };
};
