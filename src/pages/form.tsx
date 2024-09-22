import { useState } from "react";
import { InputDate } from "../components/forms/inputDate";
import { Select } from "../components/forms/select";
import { InputNumber } from "../components/forms/inputNumber";

interface Magasin {
  id: number;
  nom: string;
}

export function Form({ inventaire, produits, magasins, inventaires, onInventoryChange }: any) {
  const [date, setDate] = useState(inventaire ? inventaire.date : "");
  const [prodId, setProdId] = useState(inventaire ? inventaire.produitId : 1);
  const [stock, setStock] = useState(
    inventaire
      ? inventaire.stock
      : magasins.reduce(({acc, magasin}: any) => ({ ...acc, [magasin.id]: 0 }), {})
  );

  const handleStockChange = (magasinId: number, value: number) => {
    setStock((prevStock: any) => ({ ...prevStock, [magasinId]: value }));
  };

  const handleSubmit = () => {
    if (!date || !prodId || !stock) {
      alert("Please fill in all fields");
      return;
    }
    const newInventory = { id: inventaire ? inventaire.id : inventaires.length + 1, date, produitId: prodId, stock };
    if(inventaires[0] == null){
        inventaires[0] = newInventory
        inventaires[0].id = 1
    }
    else if (inventaires.length < newInventory.id) {
      inventaires.push(newInventory);
    } else {
      inventaires[newInventory.id - 1] = newInventory;
    }
    onInventoryChange([...inventaires]);
    setDate(inventaire.date)
    setProdId(inventaire.produitId)
    setStock(inventaire.stock)
  };

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