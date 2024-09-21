import { useState } from "react";
import { InputDate } from "../components/forms/inputDate";
import { Select } from "../components/forms/select";
import { InputNumber } from "../components/forms/inputNumber";

interface Inventory {
  id: number;
  date: string;
  produitId: number;
  stock: { [key: number]: number };
}

interface Magasin {
  id: number;
  nom: string;
}

interface Props {
  inventaire: Inventory | null;
  produits: any[];
  magasins: Magasin[];
  inventaires: Inventory[];
  onInventoryChange: (inventaires: Inventory[]) => void;
}

export function Form({ inventaire, produits, magasins, inventaires, onInventoryChange }: Props) {
  const [date, setDate] = useState(inventaire ? inventaire.date : "");
  const [prodId, setProdId] = useState(inventaire ? inventaire.produitId : 1);
  const [stock, setStock] = useState(
    inventaire
      ? inventaire.stock
      : magasins.reduce((acc, magasin) => ({ ...acc, [magasin.id]: 0 }), {})
  );

  const handleStockChange = (magasinId: number, value: number) => {
    setStock((prevStock) => ({ ...prevStock, [magasinId]: value }));
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
  };

  return (
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
        {magasins.map((m) => (
          <div key={`${m.id}-${m.nom}`} className="m-1 form-group">
            <label htmlFor={`stock-${m.id}`}>{m.nom}</label>
            <InputNumber value={stock[m.id-1]} onChange={(value) => handleStockChange(m.id, value)} />
          </div>
        ))}
      </div>
      <p className="text-center">
        <button type="submit" className="btn btn-success p-2">Valider</button>
      </p>
    </form>
  );
}