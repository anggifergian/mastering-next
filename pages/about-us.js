import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout>
      <div className="h-72 md:h-96 w-100 bg-blue-500 flex justify-center items-center p-10 transition duration-100 ease-out">
        <p className="font-bold text-3xl text-white -mt-8">About Us</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="-mt-10 mx-8 mb-8 rounded-md border border-opacity-50 px-6 py-12 shadow-md bg-white">
          <p className="font-semibold text-lg text-gray-800 text-center">
            Mabit Nurul Fikri
          </p>
        </div>

        <main id="about-us-article" className="mb-4">
          <div className="flex flex-col items-center md:flex-row space-y-4 px-6 md:space-y-0 md:space-x-4 pb-4 md:pb-8">
            <div className="w-full flex-1 p-4">
              <div className="border-2 shadow-lg rounded-lg border-opacity-100 border-blue-400 bg-blue-500 w-100 h-40 w-100"></div>
            </div>
            <div className="w-full flex-1 p-4">
              <p className="text-2xl font-semibold text-gray-900 pb-2">
                Platform Belajar UTBK Buat Kamu yang Ambis
              </p>
              <p className="text-gray-500">
                Banyak dari kami merasa tidak begitu serius belajar di sekolah, namun Mabit adalah tempat yang berbeda. Disini kamu bisa mengekspresikan dirimu dengan bebas, bahkan kamu bisa berperan untuk menjadi pengajar ketika kegiatan belajar mengajar.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row space-y-4 px-6 md:space-y-0 md:space-x-4 pb-4 md:pb-8">
            <div className="w-full flex-1 p-4">
              <p className="text-2xl font-semibold text-gray-900 pb-2">
                Berdiri Tegap Menghadap Ke Kanan Kamera
              </p>
              <p className="text-gray-500">
                Banyak dari kami merasa tidak begitu serius belajar di sekolah, namun Mabit adalah tempat yang berbeda. Disini kamu bisa mengekspresikan dirimu dengan bebas, bahkan kamu bisa berperan untuk menjadi pengajar ketika kegiatan belajar mengajar.
              </p>
            </div>
            <div className="w-full flex-1 p-4 order-first md:order-last">
              <div className="border-2 shadow-lg rounded-lg border-opacity-100 border-blue-400 bg-blue-500 w-100 h-40"></div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}