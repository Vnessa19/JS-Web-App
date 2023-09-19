import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';     

function ProductRow({ product }) {
    return(
        <tr>
            <td>{product.product} from {product.company}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;