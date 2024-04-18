import axios from 'axios'

const searchImage = async(term) => {
    const url = "https://api.unsplash.com/search/photos/?client_id=B7Y8BRgzXAq7n-RG7diDJasPMtt4QR2josvPaN5kehg";
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })
    
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}
export default searchImage