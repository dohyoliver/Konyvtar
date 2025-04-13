import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

interface books{
    title: string
    author: string
    publish_year: number
    page_count:number
}
function Newbook({onBookAdded}: {onBookAdded: () =>void }){
    const [books, setBooks] = useState<books>({
        title:"",
        author:"",
        publish_year: 0,
        page_count: 0,
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading]= useState<boolean>(false)
    const [success, setSuccess]=useState<boolean>(false)
    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target;
        setBooks({
            ...books,
            [name]:  name === "publish_year" || name === "page_count" ? Number(value) : value
        })

    }
    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault
        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const formattedmember = {
                ...books,
             
            };
            await axios.post("http://localhost:3000/api/books", formattedmember);
            setSuccess(true)
            setBooks({  title:"",
                author:"",
                publish_year: 0,
                page_count: 0,})
            onBookAdded()
            navigate("/")

        } catch (err: any) {
            setError(err.respone?.data?.message || "hiba történt")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center mb-4">Új tag hozzáadása</h1>

                    {success && <div className="alert alert-succes">Koncert sikeresen hozzáadva</div>}
                    {error && <div className="alert alertdanger">{error}</div>}

                    <form onSubmit={handleSumbit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                value={books.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">author</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                className="form-control"
                                value={books.author}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="publish_year" className="form-label">publish_year</label>
                            <input
                                type="number"
                                id="publish_year"
                                name="publish_year"
                                className="form-control"
                                value={books.publish_year}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="page_count" className="form-label">page_count</label>
                            <input
                                type="number"
                                id="page_count"
                                name="page_count"
                                className="form-control"
                                value={books.page_count}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? "hozzáadás..." : "Hozzáadás"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Newbook;