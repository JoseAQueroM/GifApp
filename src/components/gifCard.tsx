import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

type GifData = {
    id: number;
    title: string;
    img: string;
};


export const GifCard = ( {title, img} : GifData ) => {

 

    return (

       <>
            <div className="col-md-4 col-12 mb-3">
                <div className="card cardGif">
                    <img src= {img}  className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                    </div>
                </div>
            </div>
       </>

    )

}
