const TechSkills = (props) => {
    const { habilidadesTecnológicas } = props;

    return (
        <>
            {
                habilidadesTecnológicas.map((tecnologia, i) => <li key={i}> { tecnologia } </li>)
            }
        </>
    )
};

export default TechSkills;