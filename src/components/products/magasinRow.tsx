interface Magasin {
    id: string;
    nom: string;
    adresse: string ;
}
export function MagasinRow({magasin}: { magasin: Magasin }){

    const style = {background : "aqua"}
    return <tr style={style}>
        <td colSpan={3}><strong>{magasin.nom}</strong></td>
    </tr>
}