import { useState } from "react";
import { InputDate } from "../components/forms/inputDate";
import { Select } from "../components/forms/select";
import { InputNumber } from "../components/forms/inputNumber";


export function Form({title, inventaire,produits, magasins, inventaires, onInventoryChange}: any) {

    const [date, setDate] = useState(inventaire? inventaire.date : "")
    const [prodId, setProdId] = useState(inventaire?inventaire.produitId: 1)
    const [stock, setStock] = useState(inventaire? inventaire.stock: [])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        inventaires[0] == null ? inventaires[0] = {id: 1, date: date, produitId: prodId, stock: stock}:
        inventaires.length < inventaire.id ? 
        inventaires.push({id: inventaire.id, date: date, produitId: prodId, stock: stock}):
        inventaires[inventaire.id-1] = {id: inventaire.id, date: date, produitId: prodId, stock: stock}
        onInventoryChange(inventaires)

        console.log(inventaires)
    }

    return <>
    <h3 className="text-center">{title}</h3>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="date" className="m-1">Date</label>
            <InputDate value={date} onChange={setDate}/>
        </div>
        <div className="form-group">
            <label htmlFor="produit" className="m-1">Produits</label>
            <Select collection={produits} value={prodId} onChange={setProdId} />
        </div>
        <div className="p-1">
            <h4 className="m-1 text-center">Entrer les stocks </h4>
            {magasins.map((m: any)=> (
            <div className="m-1 form-group" key={m.id}>
                <label htmlFor={`stock-${m.id}`}>{m.nom}</label>
                <InputNumber value={stock[m.id-1]} onChange={setStock} />
            </div>
            ))}
        </div>
        <p className="text-center">
            <button type="submit" className="btn btn-success p-2">Valider</button>
        </p>
    </form>
    </>

    
}