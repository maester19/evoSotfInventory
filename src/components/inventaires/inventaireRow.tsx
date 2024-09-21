interface Inventaire {
  date: string;
  produitId: number;
  stock: Record<number, number>; // Record<magasinId, stock>
 }
 interface Magasin {
  id: number;
  nom: string;
  adresse: string;
 }
 

export function InventaireRow({inventaire, produits, magasins}: 
  {inventaire : Inventaire, produits: any; magasins : any}){
    const product = produits[inventaire.produitId];

    return <tr>
        <td>{inventaire.date}</td>
        <td>{product.nom}</td>
        <td>{product.prix}</td>
        {magasins.map((magasin: Magasin)=> (
          console.log(inventaire.stock[magasin.id-1]),
          <td>{inventaire.stock[magasin.id-1] !== null 
            ? inventaire.stock[magasin.id-1] 
            : "N/A"}
            </td>
        ))}
    </tr>
}