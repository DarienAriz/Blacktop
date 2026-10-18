import {ShoppingCart, User} from "lucide-react"; /*Estamos usando la libreria lucide-react que previamente instalamos en la terminal
para usar los iconos de carrito de compra y usuario, se instala la libreria lucide-react asi: npm install lucide-react */ 
import logo from "../assets/basketball.svg"; /*Se importa el logo de la carpeta assets para usarlo en el componente NavBar*/

function NavBar() {
    return (
    <div className="flex flex-wrap  justify-between items-center  px-6 py-4 gap-6">

   { /*Logo pegado a la izquierda */}
    <div className="order-1 md:order-1">
    <img src={logo} alt="Logo" className="w-9 h-9 inline-block mr-1"/> {/*Se agrega el logo a la izquierda del nombre de la tienda */}
    <a href="#" className="Blacktop">Blacktop</a>
    </div>
    


    {/*Navegacion Links de enmedio  */}
     <ul className="order-3 md:order-2 w-full md:w-auto flex gap-6">
        <li><a href="#">Hombres</a></li>
        <li><a href="#">Mujeres</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Nuevos Lanzamientos</a></li>
    </ul>
    
    {/*Iconos de usuario y carrito */}
    <div className="order-2 md:order-3 flex gap-4">
        <a href="#"><User/></a>
        <a href="#"><ShoppingCart/></a> {/* De esta manera se muestran los iconos  -->De esta manera se comenta dentro del código */}
    </div>

    </div>
    );
}

export default NavBar; //Se exporta el componente NavBar para poder usarlo en otros archivos de la aplicacion.