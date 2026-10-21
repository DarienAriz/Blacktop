import ProductCard from './ProductCard';

function TrendingNow() {
    const trendingProducts = [
     {id: 1, marca: "Nike", modelo:"Air Force 1", precio:1500, imagen:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,c_scale,w_300,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/AIR+FORCE+1+%2707.png", calificacion:4.8},
     {id: 2, marca: "Adidas", modelo:"Ultraboost", precio:1800, imagen:"https://assets.adidas.com/images/w_500,f_auto,q_auto/43a39db74ca54e0bb553ec2647180cfe_9366/Tenis_Ultraboost_5_Negro_JH9634_01_standard.jpg", calificacion:4.5},
     {id: 3, marca: "Puma", modelo:"RS-X", precio:1200, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvVJwT5-mrQGu-vWMHkaHaJRuphw7_z8Kfq4vtPF0jQ&s=10", calificacion:4.2},
     {id: 4, marca: "Reebok", modelo:"Classic Leather", precio:1300, imagen:"https://files.plytix.com/api/v1.1/rn/public_files/pim/assets/26/27/60/67/6760272625376d00089f5480/images/cd/4b/c2/6a/6ac24bcd53b1a9c14ff34e5d/100008493_01_mswyyi.webp/100008493_01_mswyyi.jpg?s=600x&t=JPEG", calificacion:4.6},];
    
    return (
        <div className='px-6'>
            <h2 className="text-2xl font-bold mb-6 mt-4">Tendencias</h2>

            <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mb-6">
                 {trendingProducts.map((producto) => (
                    <ProductCard
                    key={producto.id}
                    marca={producto.marca}
                    modelo={producto.modelo}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    calificacion={producto.calificacion}
                   />
                  ))}
            </div>
        </div>
    );
}

export default TrendingNow;