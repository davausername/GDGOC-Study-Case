import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "../ui/Skeleton";

import gdgocLogo from '../../assets/img/GDGoC_UGM_identity.svg';

export default function NavBar() {

  const { data, loading } = useFetch("/navigation");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-y">
      <a href="/" className="w-20">
        <img src={gdgocLogo} href="/" />
      </a>

      <ul className="flex">
        {!loading && data?.data?.map((item) => (
          <li key={item.href}>
            <a href="item.href" className="">{item.label}</a>
          </li>
        ))}
      </ul>
      
      <a href="#" className="text-red-500">
        Find your track
      </a>
    </nav>
  );
}