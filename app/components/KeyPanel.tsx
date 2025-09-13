\"use client\";
export default function KeyPanel() {
  return (
    <section className="py-20 px-6 flex justify-center">
      <div className="w-full max-w-md shadow-xl rounded-2xl bg-white p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Anahtarını Gir</h3>
        <input placeholder="Key..." className="mb-4 w-full p-3 rounded-lg border border-gray-300" />
        <button className="w-full rounded-xl bg-black text-white py-3 hover:bg-gray-800">Doğrula</button>
      </div>
    </section>
  );
}
