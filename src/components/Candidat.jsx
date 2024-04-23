import React from "react";
import Button from "./Button";

function Candidat() {
  return (
    <div className="candidat">
      <div className="candidat-name">
        <p>Ajouter Candidant</p>
      </div>
      <form className="form">
        <div className="col">
          <div className="form-col">
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Numero de telephone</label>
              <input type="number" placeholder="Telephone" />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="form-group">
              <label>Prenom</label>
              <input type="text" placeholder="Prenom" />
            </div>
            <div className="form-group">
              <label>Numero Electeur</label>
              <input type="text" placeholder="Numero Electeur" />
            </div>
            <div className="form-group">
              <label>Photo</label>
              <input type="file" placeholder="Uploader phot" />
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label>URL site</label>
              <input type="text" placeholder="URL site" />
            </div>
            <div className="form-group">
              <label>Photo</label>
              <input type="file" placeholder="Uploader phot" />
            </div>
            <div className="form-group">
              <label>Nom de Partie</label>
              <input type="text" placeholder="Nom Partie" />
            </div>
            <div className="form-group">
              <label>Slogan</label>
              <textarea name="slogan" id="" cols="50" rows="4"></textarea>
            </div>
            <div className="form-group">
              <label>Spécifier les couleurs du parti</label>
              <input type="text" placeholder="Rouge, bleu vert" />
            </div>
          </div>
        </div>
      </form>
      <div className="btn-nav">
        <Button title="Precedant" />
        <Button title="Suivant" />
      </div>
    </div>
  );
}

export default Candidat;
