
function HobySection() {
  return (
    <section
      id="HobySection"
      className="poppins-light h-[300vh] lg:h-screen w-full bg-linear-to-t from-black to-gray-800 absolute top-[300vh] flex flex-col lg:flex-row pl-20 pr-20 pt-45 place-content-center gap-40"
    >
      <h1 className="text-3xl top-20 left-30 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text lg:text-4xl font-extrabold text-transparent font-bold absolute lg:top-25 lg:left-150">
        HOBBIES
      </h1>
      <div className="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective-[1000px] -ml-10 ">
        <div className="absolute -top-80 -left-2 lg:top-0 lg:left-10 transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 border-white bg-white rounded-lg shadow-lg w-full h-full">
            <img
              src="./src/assets/Gambar3-BW0C_W3c.jpg"
              alt=""
              className="w-full h-70"
            />
            <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent text-center pt-10 p-6 ">
              BERMAIN VOLI
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-white rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-lg text-black font-bold text-center pt-0 p-6 poppins-light">
              Salah satu hobi saya adalah bermain voli. Saya kenal voli sejak
              duduk dibangku SMA, bermula dari diajak teman saya latihan di
              sebuah club dan sempat ingin menjadi atlet profesional. Namun
              sekarang keinginan itu pupus dan bermain voli hanya sekedar hobi
            </p>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective-[1000px] -ml-10">
        <div className="absolute -top-100 -left-2 lg:top-0 lg:left-4 transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 border-white bg-white rounded-lg shadow-lg w-full h-full">
            <img
              src="./src/assets/rubik.png"
              alt=""
              className="w-full h-70"
            />
            <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent text-center pt-10 p-6 ">
              BERMAIN RUBIK
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-white rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-lg text-black font-bold text-center pt-0 p-6 poppins-light ">
              Bermain rubik menurut saya adalah hobi yang sangat menantang dan
              mengasah kemampuan otak saya. Saya sangat menyukai bermain rubik
              karena dapat mengasah kemampuan otak saya dalam mengidentifikasi
              pola dan mengasah kemampuan saya dalam berpikir logis dan kritis
            </p>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[400px] bg-transparent cursor-pointer group perspective-[1000px] -ml-10">
        <div className="absolute -top-120 -left-2 lg:top-0 transform-3d group-hover:rotate-y-[180deg] w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 border-white bg-white rounded-lg shadow-lg w-full h-full">
            <img
              src="./src/assets/Game.png"
              alt=""
              className="w-full h-70"
            />
            <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent text-center pt-10 p-6 ">
              BERMAIN GAME
            </p>
          </div>
          <div className="absolute backface-hidden rotate-y-[180deg] bg-white rounded-lg text-white shadow-lg w-full h-full">
            <p className="text-lg text-black font-bold text-center pt-10 p-6 poppins-light ">
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

export default HobySection