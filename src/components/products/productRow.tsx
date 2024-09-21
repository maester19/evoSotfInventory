interface Product {
    name: string;
    price: string;
    stock: number;
  }

export function ProductRow({product}: {product : Product}){

    const style = product.stock > 5 ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
    </tr>
}