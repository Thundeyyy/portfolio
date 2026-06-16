export default function Home() {
  return (
    <div className="portfolio-container">
      
		<section id="home" className="flex">
			<div className="flex-1">	
				<h1 className="font-bold uppercase text-[48px] leading-11 mx-5 mt-10">
					Paginas Web profesionales para negocios
				</h1>
				<h2 className="text-[#c3c3c3] text-[20px] leading-tight mx-5 mt-2">
					Portafolio de paginas web de clientes diseñadas para potenciar sus negocios
				</h2>
			</div>
			<div className="flex-1 flex justify-center items-center">
				<p> imagen de portada  </p>
				{/* <img src="" alt="" /> */}
				

			</div>
		</section>
		
		<section id="inicio" className="flex flex-col justify-center items-center mt-10">
			<button className="border-4 border-[#38bdf8] text-[#38bdf8] font-bold uppercase m-5 px-6 py-3 tracking-wider hover:bg-[#38bdf8] hover:text-[#0d0e12] hover:shadow-[0_0_15px_#38bdf8] transition-all duration-300 cursor-pointer">
			Ver mis proyectos
			</button>
		</section>

		<section id="portafolio">
			<h1 className="font-bold uppercase text-[48px] leading-11 mx-5 mt-10">
				Portafolio	
			</h1>			
			<h2 className="text-[#c3c3c3] text-[20px] leading-tight mx-5 mt-2">
				Los proyectos destacados realizado para clientes.
			</h2>
		</section>	

		<section id="portafolio-1" className="mt-10">
			<h1 className="font-bold  text-[18px] leading-11 mx-5">
				Restaurantes y Cafeterias
			</h1>
			<div className="grid grid-cols-2 justify-items-center p-10 gap-10">
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
			</div>
		</section>

		
		<section id="portafolio-2" className="mt-10">
			<h1 className="font-bold  text-[18px] leading-11 mx-5">
				Restaurantes y Cafeterias
			</h1>
			<div className="grid grid-cols-2 justify-items-center p-10 gap-10">
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
			</div>
		</section>

		
		<section id="portafolio-3" className="mt-10">
			<h1 className="font-bold  text-[18px] leading-11 mx-5">
				Restaurantes y Cafeterias
			</h1>
			<div className="grid grid-cols-2 justify-items-center p-10 gap-10">
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
				<div className="bg-[#1e2027] border-2 border-[#2e323f] w-full h-108">

				</div>
			</div>
		</section>
    </div>
  );
}