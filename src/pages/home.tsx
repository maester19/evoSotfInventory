import { Checkbox } from "../components/forms/checkbox"
import { Input } from "../components/forms/input"

export function Home(){
    return <>
        <div className="container my-3">
            <SearchBar />
        </div>
    </>

    function SearchBar(){
        return <div>
            <div className="mb-3">
                <Input value="" onChange={() => null} placeholder="Recherche ..." />
                <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher aue les produits en stock" />
            </div>
        </div>
    }
}