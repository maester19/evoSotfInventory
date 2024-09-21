interface Magasin {
    id: string;
    nom: string;
    adresse: string;
}
export function MagasinRow({magasin}: { magasin: Magasin }){
    return <tr>
        <td colSpan={2}><strong>{magasin.nom}</strong></td>
    </tr>
}