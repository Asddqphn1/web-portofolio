import Ballpit from "../../react-bits/Ballpit";

function Contact() {
  return (
    <section
      id="ContactSection"
      className="absolute lg:h-screen w-full top-[500vh] lg:top-[400vh] bg-black border-none"
    >
      <h1 className="text-3xl text-center top-20 left-30 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text lg:text-4xl font-extrabold text-transparent font-bold absolute lg:top-20 lg:left-147">
        CONTACT
      </h1>

      <form
        action=""
        className="relative z-1 bg-white mt-40 mb-0 w-dvw mx-auto space-y-4 rounded-lg p-4 shadow-lg lg:w-100 sm:p-6 lg:p-8"
      >
        <label htmlFor="nama">Nama:</label>
        <input
          type="text"
          placeholder="Masukkan Nama"
          id="nama"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Masukkan Email"
          id="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
        />
        <label htmlFor="pesan">Pesan:</label>
        <textarea
          name="pesan"
          id="pesan"
          cols="30"
          rows="10"
          placeholder="Masukkan Pesan"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs h-30"
        ></textarea>
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Kirim
        </button>
      </form>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Ballpit
          count={100}
          gravity={1}
          friction={1}
          wallBounce={0.95}
          followCursor={true}
          colors={["#1db7f0", "#92dcf7", "#f7f9fa"]}
        />
      </div>
    </section>
  );
}
export default Contact;
