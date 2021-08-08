import React from 'react'
import Photo from './Photo'
import './index.css'

export default function StockPhotos() {
    
    const mainUrl = `https://api.unsplash.com/photos/`
    const searchUrl = `https://api.unsplash.com/search/photos/`
    const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    
    const [loading,setLoading] = React.useState(false)
    const [photos,setPhotos] = React.useState([])
    const [page, setPage] = React.useState(1)

    const fetchImages = async () =>{
        setLoading(true)
        const urlPage = `&page=${page}` 
        let url
        url = `${mainUrl}${clientId}${urlPage}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            setPhotos(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    React.useEffect(()=>{
        const event = window.addEventListener('scroll', ()=>{
            if(!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2){
                setPage((oldPage)=>{
                    return oldPage + 1
                })
            }
        })

        return () => window.removeEventListener('scroll', event)

    })

    React.useEffect(()=>{
        setLoading(false)
        fetchImages()
    }, [page])

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("Submit")
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="search">
            <center>
                <input type="text" placeholder="Search Images" />                 
            </center>
        </form>

        <div className="image_container">            
            {
                photos.map(( photo) =>
                   (
                       <Photo {...photo} key={photo.id}/>
                   ) 
                )
            }
        </div>
        </>
        
    )
}
