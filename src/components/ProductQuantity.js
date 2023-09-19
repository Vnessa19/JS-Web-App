import React, { useState } from 'react';
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

function ProductQuantity() {
    const [number, setNumber] = useState(0);

    const increase = () =>setNumber(number === 10 ? number : number + 1);
    const decrease = () =>setNumber(number === 0 ? 0: number - 1);
    return(
        <>
            <FiArrowUp onClick={increase} />
            <span>{number}</span>
            <FiArrowDown onClick={decrease} />
        </>
    );
}

export default ProductQuantity;