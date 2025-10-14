export default function RegisterPage() {
  return (
    // Main: stacks vertically on mobile (flex-col), row on medium screens and up (md:flex-row)
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Kiri: Pesan Buat Akun */}
      <div className="flex-1 flex flex-col justify-center items-center text-white p-10 md:rounded-r-3xl h-1/3 md:h-full">
        <h1 className="text-4xl font-bold mb-2">Buat Akun Baru</h1>
        <p className="text-2xl">
          gabung dengan <span className="font-bold">Dompet.in</span>
        </p>
      </div>

      {/* Kanan: Form Register */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-6 h-2/3 md:h-full">
        <div className="w-full max-w-sm"> {/* Form akan memiliki lebar maksimum 384px */}
          <label className="block mb-1 text-gray-600">email</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2 mb-4" />

          <label className="block mb-1 text-gray-600">password</label>
          <input type="password" className="w-full border border-gray-300 rounded-md p-2 mb-6" />

          <button className="w-full bg-green-500 text-white font-bold py-2 rounded-md mb-4">
            daftar
          </button>

          <p className="text-sm text-gray-600 text-center">
            sudah punya akun? <a href="/login" className="font-semibold text-green-600">masuk</a>
          </p>
        </div>
      </div>
    </main>
  );
}