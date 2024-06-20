/// <reference types="vite/client" />
interface Window {
  isPhone: boolean; //是否是手机端
  lngList: string[]; //语言列表

  bs?: unknown; //滚动管理
}
