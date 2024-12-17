import { useState } from "react"


const StarshipSearch = () => {

const [search,SetSearch] = useState();

const handleChange = (event) => {
    SetSearch(event.target.value)
}
    return(
        <>
        <div>
            <form action="">
                <input 
                type="text"
                onChange={handleChange}
                />
            </form>
        </div>
        </>
    );
};

export default StarshipSearch;