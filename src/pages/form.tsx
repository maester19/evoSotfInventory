import { useEffect, useState } from "react";
import { InputDate } from "../components/forms/inputDate";
import { Select } from "../components/forms/select";
import { InputNumber } from "../components/forms/inputNumber";

interface Magasin {
  id: string;
  nom: string;
  adresse: string;
 }
 interface Produit {
  id: string;
  nom: string;
  prix: number;
 }
 interface Inventaire {
  date: string;
  produitId: string;
  stock: Record<string, number>; // Record<magasinId, stock>
 }

export function Form({ inventaire, produits, magasins, inventaires, onInventoryChange, reset, onResetChange }: any) {

  const [date, setDate] = useState(localStorage.getItem("date") || inventaire.date)
  const [prodId, setProdId] = useState(localStorage.getItem("prodId") || inventaire.produitId)
  const [stock, setStock] = useState(JSON.parse(localStorage.getItem("stock")) || inventaire.stock)

  const handleStockChange = (magasinId: number, value: number) => {
    setStock((prevStock: any) => ({ ...prevStock, [magasinId]: value }))
    localStorage.setItem("stock", JSON.stringify(stock))  
  }

  const handleReset = () => {
    if(reset == true){
      setDate(inventaire.date)
      setProdId(inventaire.produitId)
      setStock(inventaire.stock)
    }
    onResetChange(false)
  }

  useEffect(()=> {
    handleReset()
  },[reset])

  const handleSubmit = () => {
    if (!date || !prodId || !stock) {
      alert("Please fill in all fields");
      return;
    }
    inventaires = JSON.parse(localStorage.getItem("inventaires")) || []
    const newInventory = { id: inventaire ? inventaire.id : inventaires.length + 1, date, produitId: prodId, stock }

    if(inventaires[0] == null){
        inventaires[0] = newInventory
        inventaires[0].id = 1
    }
    else if (inventaires.length < newInventory.id) {
      inventaires.push(newInventory);
    } else {
      inventaires[newInventory.id - 1] = newInventory;
    }
    localStorage.setItem("inventaires", JSON.stringify(inventaires));
    onInventoryChange([...inventaires]);

    handleReset()
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="staticBackdropLabel">Form inventory</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="form" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    }}>
                    <div className="form-group">
                        <label htmlFor="date" className="m-1">Date</label>
                        <InputDate value={date} onChange={setDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="produit" className="m-1">Produits</label>
                        <Select collection={produits} value={prodId} onChange={setProdId} />
                    </div>
                    <div className="p-1">
                        <h4 className="m-1 text-center">Entrer les stocks </h4>
                        {magasins.map((m: Magasin) => (
                        <div key={`${m.id}-${m.nom}`} className="m-1 form-group">
                            <label htmlFor={`stock-${m.id}`}>{m.nom}</label>
                            <InputNumber value={stock[m.id-1]} onChange={(value: any) => handleStockChange(m.id-1, value)} />
                        </div>
                        ))}
                    </div>
                    <p className="text-center">
                        <button type="submit" className="btn btn-success p-2" data-bs-dismiss="modal">Valider</button>
                    </p>
                </form>
            </div>
          </div>
        </div>
    </div>





    
  );
}