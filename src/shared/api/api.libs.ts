import { cookieKey } from "../config";
import { isomorphicCookie } from "../libs/isomorphic-cookie";

const REAL_WORLD_BASE_URL = "https://api.realworld.io/api";
export const realWorldPath = (path: string) => `${REAL_WORLD_BASE_URL}${path}`;

export const getToken = async () =>
  await isomorphicCookie().get(cookieKey.token);

export const hasToken = async () => !!(await getToken());

export const getBearerAuthorization = async () => {
  const token = await getToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
};
