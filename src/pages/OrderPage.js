import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';             

function OrderPage({ products }) {
    return(
        <>
        <h2>Make An Order? </h2>
            <article>
                <h3 className="diffFont" >You can order pet toys on this page!</h3>
                <table id="order">
                    <caption className="required">You may only choose one product at a time.</caption>
                        <thead>
                            <tr>
                                <th>Item and Company</th>
                                <th>Price</th>
                                <th>How many do you want?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((thisProduct, i) =>
                            <ProductRow
                             product={thisProduct}
                             key={i}
                             />
                            )}
                        </tbody>
                        <tfoot>

                        </tfoot>
                </table>
            </article>
            </>
    );
}
export default OrderPage;

