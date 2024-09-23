const ProductShop = ({ name, count, price, onDelete }) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#2F4F2F',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            maxWidth: '200px',
            fontFamily: 'Arial',
            marginBottom: '10px'
        }}>
            <div>
                <span style={{ fontWeight: 'bold' }}>{name}</span>
                <br />
                <span>{count}u x {price} €/u = {count * price} €</span>
            </div>
            <button
                style={{
                    backgroundColor: '#F5F5DC',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}
                onClick={onDelete}
            >
                Treure
            </button>
        </div>
    );
};


export default ProductShop;