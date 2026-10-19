

function Categories(){
    const categories = [
            {id: 1,genero:"Hombre", imagen:"https://www.basketballemotion.com/imagescms/postblogs/22537/tamanofijo/zapatillasdebaloncestoparaexteriorjpg0.webp",boton1:"Explorar"},
            {id: 2,genero:"Mujer", imagen:"https://cdn.forbes.com.mx/2024/01/WNBA-jugadoras-calzado-exclusivo.webp",boton1:"Descubir Estilos"},
    ];
    return(

        <div>
            <h2 className="font-bold text-2xl px-4 mb-4">Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-0 md:px-4">
                {categories.map((category) => (
                    <div key={category.id} className="bg-gray-100 p-4 rounded-lg relative"> {/*Div map*/}
                             <img src={category.imagen} alt={category.genero} className="w-full h-64 object-cover rounded-lg" />
                            <div className="absolute bottom-5 left-4">{/*Div Todo*/}
                                <h3 className="font-bold bottom-4 left-4 text-white mb-4">{category.genero}</h3>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                {category.boton1}
                                </button> 
                        </div> 
                       
                    </div> 
                ))}
            </div>
        </div>

    );
}

export default Categories;