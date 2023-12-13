const Card = (props) => {
    return(
    <div>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
    </div>
    );
};

export default Card;