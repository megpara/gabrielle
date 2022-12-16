import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import Menu from "./Menu";
import * as React from "react";
import Popup from "./Popup";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const closePopup = () => setIsPopupOpen(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();
  let path = router.asPath;
  const enablePopup = path === "/info";

  return (
    <div className="primaryColor">
      <div className={`${styles.title} absolute top-0 m-8`}>
        <Link href="/info">gjy</Link>
      </div>

      <div className="absolute top-0 right-0 m-8 group h-[35px] cursor-pointer">
        <button onClick={() => setMenuOpen(!menuOpen)} className="h-full">
          <div className="flex flex-col justify-between h-[16px] group-hover:h-[1px] duration-700 w-[35px]  items-end">
            <span className="h-[1px] w-full bg-white" />
            <span className="h-[1px] w-full bg-white" />
          </div>
        </button>
      </div>

      <Menu open={menuOpen} toggle={toggleMenu} />
      {enablePopup && <Popup open={isPopupOpen} closePopup={closePopup} />}
    </div>
  );
}
