const Card = ({ id, name, email, city }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{city}</p>
        </div>
    )
}

export default Card;
