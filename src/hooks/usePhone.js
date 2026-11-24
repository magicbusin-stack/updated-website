import { useEffect, useState } from "react";

/* true on phones (under 640px). It starts false, so the page built on the server and the first browser draw are the same. */
export default function usePhone() {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const set = () => setPhone(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return phone;
}
