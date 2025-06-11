import type { Shop } from "../interfaces";
import _shops from "./shops.json";

export const shops = _shops as Shop[]; //Shop[] 做類型檢查，_shops、shops 區分資料來源和處理後的輸出
