import { InventaireRow } from "../components/inventaires/inventaireRow"


const INVENTAIRES = [
    { produitId: 1, stock: [{magasinId: 1, stock: 0}, {magasinId: 2, stock: 0}], date: new Date},
    { produitId: 2, stock: [{magasinId: 1, stock: 10}, {magasinId: 2, stock: 10}], date: new Date},
    { produitId: 3, stock: [{magasinId: 1, stock: 10}, {magasinId: 2, stock: 10}], date: new Date},
    { produitId: 4, stock: [{magasinId: 1, stock: 10}, {magasinId: 2, stock: 10}], date: new Date},
    { produitId: 5, stock: [{magasinId: 1, stock: 0}, {magasinId: 2, stock: 0}], date: new Date},
    { produitId: 6, stock: [{magasinId: 1, stock: 10}, {magasinId: 2, stock: 10}], date: new Date},
  ]

export function Inventaire(){

    return <>
        <center><h3>Inventaire</h3></center>
        <div className="container my-3">
            <InventaireTable inventaires={INVENTAIRES} />
        </div>
    </>

    // function SearchBar({search, onSearchChange}: any){
    //     return <div>
    //         <div className="mb-3">
    //             <Input value={search} onChange={onSearchChange} placeholder="Recherche ..." />
    //         </div>
    //     </div>
    // }

    function InventaireTable({inventaires}: any){

        const row = []
        let lastDate = null

        for(let inventaire of inventaires){
            lastDate = inventaire.date
            row.push(<InventaireRow key={inventaire.date} inventaire={inventaire} />)
        }

        return <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product Id</th>
                    <th>Stock SuperU</th>
                    <th>Stock Carrefour </th>
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    }
}