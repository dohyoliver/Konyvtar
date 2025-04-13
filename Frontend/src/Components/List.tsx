import axios from "axios"
import { useEffect, useState } from "react"

interface Books{
    id:number
    title: string
    author: string
    publish_year: number
    page_count:number
}

function List(){

    const [books, setBooks] = useState<Books[]>([])
    const [error, setError] = useState<string| null>(null)
    const [loading, setLoading]= useState<boolean>(false)
    const [success, setSuccess]=useState<string |null>(null)

    const handleRent = async(id: number) =>{
        try{
            const response = await axios.post(`http://localhost:3000/api/books/${id}/rent`)

            setSuccess("Sikeres kölcsönzés")
            setError(null)
        }catch(err){
            setError(`Már kivan kölcsönözve`)
            setSuccess(null)
        }
    }
    
useEffect(()=>{
        const fetchbook= async () =>{
            setLoading(true)
            try{
            const response = await axios.get("http://localhost:3000/api/books")
            if (response.status !== 200){
                throw new Error('a könyvek betöltése nem sikerült')
            }
            setBooks(response.data)
            
            }catch(err){
                
                setError(`${err} A könyvek betöltése nem sikerült`)
            }finally{
                setLoading(false)
            }
        }
        fetchbook()
},[])
 return(
    <div className="container">
        <div className="row g-4">
        <div className="col-12">
            <h2>Könyvek listája</h2>
            {loading && <p>Könyvek loading...</p>}
            {success && <p style={{color: "green"}}>{success}</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {books.length===0 && !loading &&<p>Nincsenek könyvek</p>}
        </div>
            {books.map((books)=>(
                <div className="col-lg-4" key={books.id}>
                    <div className="card h-100 p3">
                        <h3>{books.title}</h3>
                        <h4>{books.author}</h4>
                        <p>Kiadási év: {books.publish_year}</p>
                        <p>Hossz: {books.page_count}</p>
                        <img src={`${books.author}.jpg`} alt={books.author}   className="card-img-top mb-3" ></img>
                        <button className="btn btn-primary mb-3" onClick={() => handleRent(books.id)}>Kölcsönzés</button>
                    </div>
                </div>
            ))}

        </div>
    </div>
 )

}
export default List