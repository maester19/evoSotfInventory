interface ProductProps {
    name: string;
    price: string;
    stocked: number;
  }

export function ProductRow({product}: {product : ProductProps}){

    const style = product.stocked > 0 ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}