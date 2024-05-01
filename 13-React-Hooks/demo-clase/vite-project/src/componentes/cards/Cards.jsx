import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/action';
import { useEffect } from "react";
import Card from '../card/Card';

const Cards = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state)=>state); //Estado global

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
{
    users?.map(( {id, name, email, address}) => {
        return(
            <Card
            key={id}
            id={id}
            name={name}
            email={email}
            city={address.city}
            />
        )
    })
}
        </div>
    )
};

export default Cards;