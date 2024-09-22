import { useTranslation } from "react-i18next";

interface Magasin {
  id: number;
  nom: string;
  adresse: string;
 }
 

export function InventaireRow({inventaire, produits, magasins, onCurrentChange}: any){
    const product = produits[inventaire.produitId];
    const {t} = useTranslation()

    return <tr>
        <td key={'edit'+inventaire.id}>
          <button className="btn btn-info p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
          onChange={()=> onCurrentChange(...inventaire)}
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