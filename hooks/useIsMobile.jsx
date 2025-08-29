import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(null); // start as null (unknown)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check(); // run once on mount
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}
