import { useTranslation } from "react-i18next";

interface Magasin {
  id: number;
  nom: string;
  adresse: string;
 }
 

export function InventaireRow({inventaire, produits, magasins, onCurrentChange, onReset}: any){
    const product = produits[inventaire.produitId-1];
    const {t} = useTranslation()
    
    const handleCurrentChange = ()=> {
      onCurrentChange({...inventaire})
      onReset(true)
    }

    return <tr>
        <td key={'edit'+inventaire.id}>
          <button className="btn btn-info p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
          onClick={handleCurrentChange}
          >{t("edit")}</button>
        </td>
        <td key={'date'+inventaire.id}>{inventaire.date? inventaire.date : ""}</td>
        <td key={'prod'+inventaire.id}>{product? product.nom : ""}</td>
        <td key={'prix'+inventaire.id}>{product ? product.prix: ""} $</td>
        {magasins.map((magasin: Magasin)=> (
          <td key={'stock'+magasin.id}>{inventaire.stock[magasin.id-1] !== null 
            ? inventaire.stock[magasin.id-1] 
            : "N/A"}
          </td>
        ))}
    </tr>
}