export default function NavBar(){
    return(
        <div className="flex justify-between items center h-20 bg-[#000000] px-14">
            <div className="flex items-center space-x-4">
                <img className="w-20 cursor-pointer" src="mundo.png" alt="Logo Mundo"/>
                <h3 className="text-white text-lg"> Lugares que quero conhecer </h3>
            </div>
        </div>
    );
}