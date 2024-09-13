

export default function Banner() {
  return (
    <div className="h-svh relative">
      <img src="banner3.jpg" alt="banner family tree" className="w-full h-full object-cover fixed bg-gradient-to-tr from-[#2925244d] via-[#1c19174d] to-[#0c0a094d] -z-50" />
      <img src="icon.png" alt="blason ruiz-sosa" className="w-20 absolute top-20 end-10 drop-shadow-lg" />
      <h1 className="absolute start-20 sm:start-auto bottom-5 end-10 text-4xl sm:text-6xl font-bold text-white">Familia Ruiz Sosa</h1>
    </div>
  );
}