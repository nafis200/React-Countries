
import { useState } from 'react'
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags,population,area,cca3} = country
    const [visited, setVisited] = useState(false)

    const handleVisited = ()=>{
        setVisited(!visited)
    }

    const passWithParams = ()=>{
        handleVisitedCountry(country)
    }

    
    return (
        <div className={`country ${visited && 'visited'}`}> 
            <h3 style = {{color: visited? 'Purple':'red' }}>name:{name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Populations: {population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={passWithParams}>Marked visited</button>
            <br />
            <button onClick={handleVisited}>visited</button>
            {visited && 'i have visited'}

        </div>
    )
}

export default Country;