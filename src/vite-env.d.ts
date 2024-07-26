/// <reference types="vite/client" />
interface Window {
    isPhone: boolean; //是否是手机端
    lngList: string[]; //语言列表

    bs?: unknown; //滚动管理
}

interface ImportMetaEnv {
    readonly VITE_TWITTER: string;
    readonly VITE_DISCORD: string;
    readonly VITE_MIRROR: string;
    readonly VITE_ZORA: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
