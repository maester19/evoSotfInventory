interface Magasin {
  id: number;
  nom: string;
  adresse: string;
 }
 

export function InventaireRow({inventaire, produits, magasins}: any){
    const product = produits[inventaire.produitId];

    return <tr>
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