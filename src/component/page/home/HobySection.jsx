
function HobySection() {
  return (
    <section
      id="HobySection"
      className="poppins-light h-screen w-full bg-linear-to-t from-black to-gray-800 absolute top-[300vh] flex flex-col lg:flex-row pl-20 pr-20 pt-45 place-content-center gap-40"
    >
      <h1 className="text-3xl ml-20 -mt-5 top-35 left-20 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text lg:text-4xl font-extrabold text-transparent font-bold absolute lg:top-25 lg:left-125">
        HOBBIES
      </h1>
      <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective-[1000px]">
        <div className="relative transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-4 border-[#3B82F6] rounded-lg shadow-lg w-full h-full">
            <img
              src="../../../../image/Gambar3.jpg"
              alt=""
              className="w-full h-70"
            />
            <p className="text-xl text-white font-bold text-center pt-4 p-6 ">
              HOVER FOR DETAIL
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-gradient-to-b from-black to-gray-500 rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-xl text-white font-bold text-center pt-0 p-6 ">
              Salah satu hobi saya adalah bermain voli. Saya kenal voli sejak
              duduk dibangku SMA, bermula dari diajak teman saya latihan di
              sebuah club dan sempat ingin menjadi atlet profesional. Namun
              sekarang keinginan itu pupus dan bermain voli hanya sekedar hobi
            </p>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective-[1000px]">
        <div className="relative transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-4 border-[#3B82F6] rounded-lg shadow-lg w-full h-full">
            <img
              src="../../../../image/image.png"
              alt=""
              className="w-full h-70"
            />
            <p className="text-xl text-white font-bold text-center pt-4 p-6 ">
              HOVER FOR DETAIL
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-gradient-to-b from-black to-gray-500 rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-xl text-white font-bold text-center pt-0 p-6 ">
              Bermain rubik menurut saya adalah hobi yang sangat menantang dan
              mengasah kemampuan otak saya. Saya sangat menyukai bermain rubik
              karena dapat mengasah kemampuan otak saya dalam mengidentifikasi
              pola dan mengasah kemampuan saya dalam berpikir logis dan kritis
            </p>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective-[1000px]">
        <div className="relative transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-4 border-[#3B82F6] rounded-lg shadow-lg w-full h-full">
            <img
              src="../../../../image/Desaign.png"
              alt=""
              className="w-full h-70"
            />
            <p className="text-xl text-white font-bold text-center pt-4 p-6 ">
              HOVER FOR DETAIL
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-gradient-to-b from-black to-gray-500 rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-xl text-white font-bold text-center pt-10 p-6 ">
              Bermain game merupakan hobi yang hampir dimiliki oleh semua orang
              terutama para remaja dan anak-anak. Bermain game dapat meredakan
              stress akibat kelelahan dan sebagainya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HobySection;
