import { InventaireRow } from "../components/inventaires/inventaireRow"


const INVENTAIRES = [
    { id: 1, date: new Date().toISOString().split("T")[0], produitId: 1, stock: [1,5,6,8,5,9,23] }
]

interface Magasin {
    id: number;
    nom: string;
    adresse: string;
}

const PRODUCTS = [
    { id:1, nom: "apple", prix: 1},
    { id:2, nom: "dragonfruit", prix: 2},
    { id:3, nom: "passionfruit", prix: 4},
    { id:4, nom: "spinach", prix: 1},
    { id:5, nom: "pumpkin", prix: 2},
    { id:6, nom: "peas", prix: 1},
    { id:7, nom: "apple", prix: 1},
    { id:8, nom: "dragonfruit", prix: 2},
    { id:9, nom: "passionfruit", prix: 4}
  ]
  
  const MAGASINS = [
    { id:1, nom: "Super U", adresse: "yaounde" },
    { id:2, nom: "Carrefour", adresse: "yaounde" },
    { id:3, nom: "Little Market", adresse: "yaounde" },
    { id:4, nom: "Dovv", adresse: "yaounde" },
    { id:5, nom: "Mahima", adresse: "yaounde" },
    { id:6, nom: "Santa Lucia", adresse: "yaounde" },
    { id:7, nom: "Fontana", adresse: "yaounde" },
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
            row.push(<InventaireRow 
                key={inventaire.produitId}
                inventaire={inventaire} 
                magasins={MAGASINS}
                produits={PRODUCTS}
                />)
        }

        return <table className="table table-striped table-hover">
            <thead>
                <tr style={{background: "aqua"}}>
                    <th rowSpan={2}>Date</th>
                    <th rowSpan={2}>Product</th>
                    <th rowSpan={2}>Prix</th>
                    <th colSpan={MAGASINS.length}>Magasin</th>
                </tr>
                <tr>
                    {MAGASINS.map((magasin: Magasin)=> (
                        <td key={magasin.id}>{ magasin.nom }</td>
                    ))}
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    }
}