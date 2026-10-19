import { TiArrowRightOutline } from "react-icons/ti";

function Hero(){

    return(

        <div className="relative ">
            <img src="https://media.istockphoto.com/id/884279742/photo/leisure-activities.jpg?s=612x612&w=0&k=20&c=fsD1GrpVRJpPj5F8JWnYqApLMcovBt9_ZX79ZF7VBEQ=" alt="Hero Image" className="w-full h-[500px] object-cover object-top" />
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="absolute inset-0">
                <h1 className="text-4xl font-bold text-white px-5">Eleva tu nivel. <br />Domina la calle.</h1>

                <p className="text-white mt-4 px-5">Estilo de asfalto, alma de cancha.</p>
                <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-2xl mt-4 ml-5">
                    ¿Listo para la reta? <TiArrowRightOutline />
                </button>
            </div>
        </div>

    );


}

export default Hero;