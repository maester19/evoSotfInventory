interface Inventaire {
    date: Date;
    produitId: number;
    stock: any 
}

export function InventaireRow({inventaire}: {inventaire : Inventaire}){

    const Produits = [
        { id: 1, name: "apple", price: "1$"},
        { id: 2, name: "dragonfruit", price: "2$"},
        { id: 3, name: "passionfruit", price: "4$"},
        { id: 4, name: "spinach", price: "1$"},
        { id: 5, name: "pumpkin", price: "2$"},
        { id: 6, name: "peas", price: "1$"},
      ]

      const Magasins = [
        { id: 1, name: "Super U"},
        { id: 2, name: "Carrefour"},
      ]
    console.log(inventaire.date)
    return <tr>
        <td>{}</td>
        <td>{inventaire.produitId}</td>
        <td>{inventaire.stock[0].magasinId} {inventaire.stock[0].stock}</td>
        <td>{inventaire.stock[1].magasinId} {inventaire.stock[1].stock}</td>
    </tr>
}