import React from "react";
import { CircleUser, CloudUpload, SquarePlus, List } from "lucide-react";

import NavItem from "./NavItem";
function Nav() {
  return (
    <div>
      <header className="header">
        <img src="../../public/images/symbole.svg" alt="" className="logo" />
        <CircleUser />
      </header>
      <main className="showcase">
        <div className="showcase-elt">
          <NavItem title="Importation fichier" icon={<CloudUpload />} />
          <NavItem title="Ajouter Candidat" icon={<SquarePlus />} />
          <NavItem title="Liste Candidat" icon={<List />} />
        </div>
      </main>
    </div>
  );
}

export default Nav;
