interface DropCardProps {
  imagen: string;
  alt: string;
  textButton: string;
}

function DropCard({imagen,alt,textButton}:DropCardProps) {
return(
    <div>
        <img src={imagen} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        <button className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">{textButton}</button>
    </div>
);



}

export default DropCard;