const Ticket = ({ total }) => {

    return (
        <div style={{
            border: '2px solid #2F4F2F',
            padding: '10px',
            borderRadius: '5px',
            color: '#2F4F2F',
            fontWeight: 'bold',
            maxWidth: '200px',
            textAlign: 'right'
        }}>
            Total: {total} €
        </div>
    );
};

export default Ticket;