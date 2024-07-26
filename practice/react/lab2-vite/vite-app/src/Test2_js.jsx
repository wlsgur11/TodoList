const CountryList = () =>{
    let list = [
        {no: 1, country: '이집트', visited: false},
        {no: 2, country: '조지아', visited: false},
        {no: 3, country: '캐나다', visited: true}
    ]

    let countries = list.map((item, index) =>{
        return (
            <li key={item.no} className={item.visited ? "list-group-item active":"list-group-item"}>
                {item.no}: {item.country} - {item.visited?"O":"X"}
            </li>
        )
    })

    return(
        <ul className="list-group">{countries}</ul>
    )
}

export default CountryList