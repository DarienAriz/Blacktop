import DropCard from "./DropCard";

function NewDrop() {

    return (
        <div>
            <h2 className="text-2xl font-bold px-4 mb-6">Nuevos lanzamientos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 h-225 md:h-150 px-4"> {/*Grid Padre */}
                <div className="grid grid-rows-2 gap-4">
                    <div className="relative overflow-hidden rounded-lg">
                        <DropCard imagen="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/3e1ab7dc-771d-4c0d-8d34-63c0d67a3572/los-mejores-tenis-de-b%C3%A1squetbol-nike-para-bases.jpg" alt="New Drop Item1" textButton="Explorar" />
                    </div>

                    <div className="relative overflow-hidden rounded-lg">
                        <DropCard imagen="https://d83g1ecahmg39.cloudfront.net/gallery/270937605/products/1500x1500/204566d2-70b7-483b-a233-46a24c711ac4.jpg" alt="New Drop Item2" textButton="Explorar" />
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                    <DropCard imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh110gPk0dsD4Y8hfY0pb3xQUHnu5bg2kTbTYqxplWBW6oC0N0joegxaqQ&s=10" alt="New Drop Item3" textButton="Explorar" />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <DropCard imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RHuN7p_NhsUFAKigZHkdmDAnCxSCRv_xQdi5eILoiugIXVPPz_yFQMuc&s=10" alt="New Drop Item4" textButton="Explorar" />
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="relative overflow-hidden rounded-lg">
                        <DropCard imagen="https://m.media-amazon.com/images/I/51OCFT-GkKL._AC_SY900_.jpg" alt="New Drop Item5" textButton="Ver más" />
                    </div>

                    <div className="relative overflow-hidden rounded-lg">
                        <DropCard imagen="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/321/best-womens-basketball-shoes-22479033-main.jpg" alt="New Drop Item6" textButton="Explorar" />
                    </div>
                </div>
            </div> {/*Grid Padre */}


        </div>
    );

}

export default NewDrop;