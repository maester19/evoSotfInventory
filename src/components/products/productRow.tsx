interface ProductProps {
    name: string;
    price: string;
    stock: number;
  }

export function ProductRow({product}: {product : ProductProps}){

    const style = product.stock > 0 ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
    </tr>
}