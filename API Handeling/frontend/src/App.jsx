import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState('')

  useEffect(() => {
    const controller = new AbortController()
      // ;  this semicolon is for safty purpose
      ; (async () => {

        try {
          setError(false)
          setLoading(true)
          const response = await axios.get('/api/products?search=' + searchResult, {
            signal: controller.signal
            // this signal cancel previous request if it hit on same url?
          })
          console.log(response.data);
          setProducts(response.data)
          setLoading(false)
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return
          }
          setError(true)
          setLoading(false)
          console.log("Error while fetching data :: ", error);
        }
        finally {
          setLoading(false)
        }

        // cleanup
        return () => {
          controller.abort()
        }
      })()

  }, [searchResult])

  // custom hook 
  // const [products, error, loading] = customQuery('/api/products')

  // alternative 
  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      <h2>Frontend API Handeling</h2>
      <input type="text"
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
      />
      <br />
      <span>Number of products:

        {error && <h1>Something went wrong</h1>}
        {loading && <h1>Loading...</h1>}
        {!error && !loading && (<span>{products.length} </span>)}
      </span>
    </div>

  )
}

export default App




// custom hook 
// const customQuery = (urlPath) => {
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     // ;  this semicolon is for safty purpose
//     (async () => {

//       try {
//         setError(false)
//         setLoading(true)
//         const response = await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//         console.log("Error while fetching data :: ", error);
//       }
//       finally {
//         setLoading(false)
//       }
//     })()
//   }, [urlPath])
//   return [products, error, loading]
// }