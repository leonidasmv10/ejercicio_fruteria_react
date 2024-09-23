import { useEffect, useState } from 'react';

const Product = ({ name, price, onAddProductShop }) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#4CAF50',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            maxWidth: '200px',
            fontFamily: 'Arial',
            marginBottom: '10px'
        }}>
            <span>{name} ({price} €/u)</span>
            <button
                style={{
                    backgroundColor: '#F5F5DC',
                    border: 'none',
                    color: 'black',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}
                onClick={onAddProductShop}
            >
                Afegir
            </button>
        </div>
    );
};


export default Product;