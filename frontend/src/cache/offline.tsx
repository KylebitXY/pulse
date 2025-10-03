import {
  set,
  get,
} from "idb-keyval";

export async function cacheData(
  key: string,
  value: any
) {

  await set(key, value);
}

export async function getCached(
  key: string
) {

  return await get(key);
}