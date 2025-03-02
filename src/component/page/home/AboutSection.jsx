import Stack from "../../react-bits/Stack";
import PohanJalan from "../../../assets/PohanJalan.jpg";
import Gambar1 from "../../../assets/Gambar1.jpg";
import Gambar2 from "../../../assets/Gambar2.jpg";
import Gambar3 from "../../../assets/Gambar3-BW0C_W3c.jpg";

function AboutSection() {
  const images = [
    {
      id: 1,
      img: PohanJalan,
    },
    {
      id: 2,
      img: Gambar1,
    },
    {
      id: 3,
      img: Gambar2,
    },
    {
      id: 4,
      img: Gambar3,
    },
  ];
  return (
    <>
      <section
        className="h-dvh w-full bg-linear-to-t from-gray-800 to-black absolute poppins-light"
        id="AboutSection"
      >
        <div className="absolute top-40 left-20 lg:left-260 lg:top-0 lg:mt-100">
          <Stack
            randomRotation={true}
            sensitivity={200}
            sendToBackOnClick={false}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={images}
          />
        </div>
        <div className="absolute top-80 pl-5 pr-3 lg:top-60 lg:left-30">
          <h1 className=" bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-3xl -top-60 left-35 font-extrabold text-transparent font-bold absolute lg:-top-28 lg:left-115 lg:text-4xl">
            ABOUT
          </h1>
          <p className="mt-20 text-[14px] text-white text-justify lg:w-[70%] lg:text-lg indent-4 lg:mt-0 ">
            Halo! Saya As Siddiqi Pohan, seorang mahasiswa Teknik Informatika
            semester 4 di UIN SUSKA RIAU. Saya sangat senang bermain dengan kode
            dan menciptakan sesuatu yang bermanfaat melalui teknologi. Saat ini,
            saya sedang mendalami pengembangan web dan aplikasi mobile, Saya
            telah mempelajari berbagai bahasa pemrograman seperti Java, dan
            JavaScript, serta familiar dengan framework seperti React. Saya
            selalu bersemangat untuk mempelajari hal-hal baru dan mengasah
            keterampilan saya di dunia pemrograman. Saya juga aktif dalam
            labsquad pemrograman di kampus saya, di mana saya sering berdiskusi
            dan berbagi pengetahuan dengan sesama pengembang.
          </p>
        </div>
      </section>
    </>
  );
}



export default AboutSection;
