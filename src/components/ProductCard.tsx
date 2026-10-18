

interface ProductCardProps { //Se define la interfaz ProductCardProps que describe las propiedades que se esperan recibir en el componente ProductCard
    marca: string;
    modelo: string;
    precio: number;
    imagen: string;
    calificacion: number;
}

function ProductCard({marca,modelo,precio,imagen,calificacion}:ProductCardProps) { 
    //Se define el componente ProductCard que recibe las propiedades definidas en la interfaz ProductCardProps
    return(
        <div>
            <img src={imagen} alt={modelo} className="w-54 h-64 object-cover rounded-t-lg"></img>
            <h3>{marca}</h3>
            <h4>{modelo}</h4>
            <p>${precio}</p> 
            <p>{calificacion}</p>
            <div className="flex flex-col items-start gap-1">
                <button>Añadir al carrito</button>
                <button>Ver detalles</button>
            </div>
            
        </div>
    );
}

export default ProductCard; 