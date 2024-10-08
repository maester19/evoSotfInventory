import { useState } from "react"
import { Checkbox } from "../components/forms/checkbox"
import { Input } from "../components/forms/input"
import { MagasinRow } from "../components/products/magasinRow"
import { ProductRow } from "../components/products/productRow"
import { useTranslation } from "react-i18next"


const PRODUCTS = [
    { name: "apple", stock: 3, price: "1$", magasin: "Super U"},
    { name: "dragonfruit", stock: 10, price: "2$", magasin: "Super U"},
    { name: "passionfruit", stock: 10, price: "4$", magasin: "Super U"},
    { name: "spinach", stock: 10, price: "1$", magasin: "Carrefour"},
    { name: "pumpkin", stock: 4, price: "2$", magasin: "Carrefour"},
    { name: "peas", stock: 10, price: "1$", magasin: "Carrefour"},
    { name: "apple", stock: 6, price: "1$", magasin: "Market"},
    { name: "dragonfruit", stock: 10, price: "2$", magasin: "Market"},
    { name: "passionfruit", stock: 10, price: "4$", magasin: "Market"},
    { name: "spinach", stock: 10, price: "1$", magasin: "Market"},
    { name: "pumpkin", stock: 2, price: "2$", magasin: "Market"},
    { name: "peas", stock: 10, price: "1$", magasin: "Market"},
  ]

export function Home(){

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [showUnstockedOnly, setShowUnstockedOnly] = useState(false)
    const [search, setSearch] = useState("")

    const {t} = useTranslation()

    const visibleProducts = PRODUCTS.filter(product => {
        if (showUnstockedOnly && product.stock < 5) {
            return false
        }

        if (showStockedOnly && product.stock > 5) {
            return false
        }

        if (search && !product.name.includes(search)) {
            return false
        }

        return true
    })

    return <>
        <div className="container my-3">
            <SearchBar 
            showStockedOnly={showStockedOnly} 
            onStockedOnlyChange={setShowStockedOnly} 
            search={search}
            onSearchChange={setSearch}
            showUnstockedOnly={showUnstockedOnly}
            onUnstockedOnlyChange={setShowUnstockedOnly}
            />
            <ProductTable products={visibleProducts} />
        </div>
    </>

    function SearchBar({showStockedOnly , onStockedOnlyChange,
                    showUnstockedOnly , onUnstockedOnlyChange, 
                    search, onSearchChange}: any){
        return <div>
            <div className="mb-3">
                <Input value={search} onChange={onSearchChange} placeholder={t("search")} />
                <div className="row d-flex">
                    <div className="col-4">
                        <Checkbox 
                            id="stocked" 
                            checked={showUnstockedOnly} 
                            onChange={onUnstockedOnlyChange} 
                            label={t("stock1")} />
                    </div>
                    <div className="col-4">
                        <Checkbox 
                        id="unstocked" 
                        checked={showStockedOnly} 
                        onChange={onStockedOnlyChange} 
                        label={t("stock2")} />
                    </div>
                    
                </div>
            </div>
        </div>
    }

    function ProductTable({products}: any){

        const row = []
        let lastMagasin = null

        for(let product of products){
            if(product.magasin !== lastMagasin) {
                row.push(<MagasinRow key={product.magasin} magasin={{id: product.magasin, nom: product.magasin, adresse: ""}} />)
            }
            lastMagasin = product.magasin
            row.push(<ProductRow key={product.magasin+product.name} product={product} />)
        }

        return <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>{t("tab1col1")}</th>
                    <th>{t("tab1col2")}</th>
                    <th>{t("tab1col3")}</th>
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    }
}