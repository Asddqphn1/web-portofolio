function HeroSection() {
  return (
    <>
      <div
        id="HeroSection"
        className="poppins-light absolute top-0 lg:top-30 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-4"
      >
        <img
          src="./dist/assets/Foto_Pohan-removebg-preview.png"
          alt=""
          className="h-60 rounded-full mt-10 ml-23 shadow-2xl shadow-blue-500/50 lg:h-80"
        />
        <div className="p-4 pt-5 box-border lg:pl-30">
          <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-extrabold text-transparent typing-effect">
            Hello I'm As Siddiqi Pohan <span className="text-white">👋</span>
          </h1>
          <p className="text-lg text-gray-100 mt-5 text-justify pr-4 lg:w-[80%]">
            Saya seorang mahasiswa Teknik Informatika yang senang bermain dengan
            kode dan menciptakan sesuatu yang bermanfaat. Saya percaya bahwa
            belajar adalah proses seumur hidup, dan saya selalu bersemangat
            untuk mengasah keterampilan saya di dunia pemrograman dan teknologi
          </p>
          <div>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
