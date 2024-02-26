import qs, { ParsedUrlQueryInput } from "querystring";
import { ZodType } from "zod";

export const formatUrl = (config: {
  href: string;
  query?: ParsedUrlQueryInput;
}) => {
  const url = `${config.href}${
    config?.query ? `?${qs.stringify(config.query)}` : ""
  }`;

  return url;
};
