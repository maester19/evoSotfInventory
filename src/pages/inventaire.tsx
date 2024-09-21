import { useEffect, useState } from "react";
import { InventaireRow } from "../components/inventaires/inventaireRow"
import { Form } from "./form";

interface Magasin {
    id: number;
    nom: string;
    adresse: string;
}

const INVENTAIRES = [null]
const inventory = {id: INVENTAIRES.length +1,date: new Date().toISOString().split("T")[0], produitId: 1, stock: [0,0,0,0,0,0,0] }


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
    const [inventories, setInventaires] = useState(INVENTAIRES)

    function InventaireTable({inventaires}: any){

        useEffect(()=> {
            
        },[inventories])

        const row = []
        console.log(INVENTAIRES)
        for(let inventaire of inventaires){
            inventaire? 
            row.push(<InventaireRow 
                key={inventaire.id}
                inventaire={inventaire} 
                magasins={MAGASINS}
                produits={PRODUCTS}
                />) : undefined
        }

        return <table className="table table-striped table-hover border">
            <thead>
                <tr style={{background: "darkblue", color: "#fff"}}>
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

    return <>
        {/*  Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Inventaire</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <Form title="Ajouter un inventaire"
                    inventaire={inventory} 
                    produits={PRODUCTS} 
                    magasins={MAGASINS} 
                    inventaires={inventories} 
                    onInventoryChange={setInventaires}
                />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        <h3 className="text-center">Inventaire</h3>
        
        <div className="d-flex">
            <button className="btn btn-outline-success m-1">Export</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add
            </button>
        </div> 
        <div className="container my-3">
            <InventaireTable inventaires={inventories} />
        </div>
    </>
}