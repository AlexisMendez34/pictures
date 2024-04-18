import ImageShow from "./ImageShow"

function ImageList(){

    function ImageList({images}) {
        const renderImage = images.map((image) =>{
            return <ImageShow key={image.id} image={image}/>
        })
    }

    return(
        <div>
            <h1>{renderImage}</h1>
        </div>
    )
}
export default ImageList