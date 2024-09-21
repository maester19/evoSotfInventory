import { useEffect, useState } from "react";
import { InventaireRow } from "../components/inventaires/inventaireRow"
import { unparse } from "papaparse";
import { Modal } from "../components/inventaires/modal";
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
    const [inventories, setInventories] = useState(INVENTAIRES)

    function InventaireTable({inventaires}: any){

        useEffect(()=> {
            
        },[inventories])

        const row = []
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

    const CSVExport = () => {
        const data = inventories.map((inventaire: any) => {
          if(inventaire == null){
            return "inventaire vide"
          }
          const produit = PRODUCTS.find((p) => p.id === inventaire.produitId)?.nom || "Produit inconnu"
          const date = inventaire.date
          const stock1 = inventaire.stock[0]
          const stock2 = inventaire.stock[1]
          const stock3 = inventaire.stock[2]
          const stock4 = inventaire.stock[3]
          const stock5 = inventaire.stock[4]
          const stock6 = inventaire.stock[5]
          const stock7 = inventaire.stock[6]
          let row = {date, produit, stock1, stock2, stock3, stock4, stock5, stock6, stock7} 
    
          return row;
        });
    
        const headers = ["date", "produit", ...MAGASINS.map((m) => m.nom)];
    
        const csv = unparse({ fields: headers, data });
    
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "inventaires.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return <>
        <Form
            inventaire={inventory} 
            produits={PRODUCTS} 
            magasins={MAGASINS} 
            inventaires={inventories} 
            onInventoryChange={setInventories}
        />

        <h3 className="text-center">Inventaire</h3>
        
        <div className="d-flex">
            <button className="btn btn-warning m-1" onClick={CSVExport}>Export</button>
            <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add
            </button>
        </div> 
        <div className="container my-3">
            <InventaireTable inventaires={inventories} />
        </div>
    </>
}