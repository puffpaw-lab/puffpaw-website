import { MediaWidth } from "@/theme/themeConfig";
import { useSize } from "ahooks";
import { useEffect, useState } from "react";

/**判断屏幕宽度 */
export default function useIsPhone() {
  const size = useSize(document.querySelector("body"));
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    setIsPhone((size?.width || MediaWidth.xl) < MediaWidth.xl);
  }, [size, setIsPhone]);

  return isPhone;
}
