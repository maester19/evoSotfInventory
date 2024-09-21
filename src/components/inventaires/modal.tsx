import { Form } from "../../pages/form";

export function Modal({title, inventaire, produits, magasins, inventaires, onInventoryChange}: any){
    return <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="staticBackdropLabel">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <Form
                inventaire={inventaire} 
                produits={produits} 
                magasins={magasins} 
                inventaires={inventaires} 
                onInventoryChange={onInventoryChange}
            />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
}