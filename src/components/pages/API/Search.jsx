import { useState } from "react"

export default function Search() {
    const [search, setSearch] = useState({
        search: ''
    })
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        console.log(search)
    }
    return(
        <>
        <div className="dashboard-container-dev">
            <form onSubmit={handleSubmitSearch}>
                <label htmlFor='game-field'>Game search : </label>
                <input id='game-field' type='text' value={search.search} onChange={(e)=> setSearch({...search, search: e.target.value})}/>   
                <button type="submit">Search</button>             
            </form>
        </div>
        </>
    )
}