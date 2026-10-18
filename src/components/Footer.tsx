import {} from "lucide-react"; /*Estamos usando la libreria lucide-react que previamente instalamos en la terminal*/
import {FaFacebook, FaInstagram, FaTwitter, FaCcVisa,FaPaypal,FaCcMastercard } from "react-icons/fa"; /*Se importan los iconos de redes sociales de la libreria react-icons*/

function Footer(){
    return(

        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 gap-6">
            <section>
                <h3>Suscribete a Blacktop</h3>
                <div className="flex gap-2">
                <input type="email" placeholder="Ingresa tu correo electronico" className="border border-gray-300 rounded-md px-4 py-2 mt-2"/>
                <button className="bg-black text-white rounded-md px-4 py-2 mt-2 cursor-pointer">Suscribirse</button>
                </div>
                
            </section>

            <div className="flex gap-4">
                <h3>Redes Sociales</h3> 
                <a href="#"><FaFacebook size={20} /></a>
                <a href="#"><FaInstagram size={20} /></a>
                <a href="#"><FaTwitter size={20} /></a>
            </div>
            <div className="flex gap-4">
                <ul>
                    <li><a href="#">Nosotros</a> </li>
                    <li><a href="#">Contacto</a></li>
                    <li>Metodos de pago
                        <ul className="flex gap-4">
                            <li><FaCcVisa  size={20}/></li>
                            <li><FaPaypal size={20}/></li>
                            <li><FaCcMastercard size={20}/></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </footer>
    );
}
export default Footer;
