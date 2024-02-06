import {
  getIsomorphicCookie,
  setIsomorphicCookie,
} from "@/shared/lib/isomorphic-cookie";
import { HTMLAttributes } from "react";

const LAYER_COLOR = {
  widget: "#fa0ee9",
  feature: "#14a200",
  entity: "#2573e5",
} as const;

type LayerKeys = keyof typeof LAYER_COLOR;

type LayerPath = `${LayerKeys}/${string}`;

type CustomHTMLAttributes<T> = {
  "data-fsd"?: string;
} & HTMLAttributes<T>;
const D_ENABLED_COOKIE = "d-enabled";

// TODO. 쿠리 정리.
export const toggleEnabledCookie = async () => {
  const enabled = await getEnabledCookie();

  setIsomorphicCookie(D_ENABLED_COOKIE, !enabled);
};

export const getEnabledCookie = async () => {
  return (await getIsomorphicCookie(D_ENABLED_COOKIE)) === "true";
};

export const generateLayerDebugProps = async <
  T extends HTMLElement = HTMLDivElement
>(
  path: LayerPath
) => {
  const debugEnabled = await getEnabledCookie();
  const layer = path.split("/")[0] as LayerKeys;
  const layerColor = LAYER_COLOR[layer];
  const properties = {} as CustomHTMLAttributes<T>;
  console.log(debugEnabled);

  if (debugEnabled) {
    properties["data-fsd"] = path;
    properties.style = {
      "--layer-color": layerColor,
      "--layer-bg-color": `${layerColor}10`,
    } as React.CSSProperties;
  }

  return properties;
};
