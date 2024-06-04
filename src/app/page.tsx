export default function Home() {
  return (
    <main className="w-[100%] flex flex-col lg:flex-row bg-blue-600 lg:h-[600px] xl:h-[654px] 2xl:h-[780px] px-10 py-16 lg:px-16 lg:py-44">

      <div className="w-[100%] mx-auto">
        <h2 className="text-white font-medium mb-5 lg:ml-10 text-center lg-text-start">Internal Store Video</h2>
        <video controls className="min-h-[200px] md:min-h-[320px] mx-auto mb-10 lg:mb-0 lg:ml-10 rounded-xl w-[100%] md:w-[65%] lg:w-[85%] h-[100%]">
          <source src="closure.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-[100%] mx-auto">
        <h2 className="text-white font-medium mb-5 lg:mr-10 text-center lg-text-start">Embedded External Video</h2>
        <iframe src="https://www.youtube.com/embed/Kgw2UdUL2Ts?si=oJ_4mY8MkpsOSfbo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mx-auto lg:mx-0 md:w-[65%] min-h-[200px] md:min-h-[320px] rounded-xl w-[100%] lg:w-[85%] h-[100%] lg:mr-10"></iframe>
      </div>
    </main>
  );
}
