export default function PromoCard() {
  return (
    <div className="relative bg-[url(/images/card-promo.jpg)] bg-cover bg-top bg-no-repeat h-auto lg:h-screen">
      {/* Overlay */}
      <div className=" bg-black/50 w-full h-full">
        <div className="flex items-center justify-center  h-full px-4 py-20">
          <div className="text-center">
            <div className="w-full mx-auto">
              <h2 className="text-3xl  font-medium text-white py-3">
                With Hidmona DebitCards, Living home and abroad is simplified
              </h2>
              <p className="text-lg text-white font-medium py-2">
                Effortless transactions, affordable and convenient
              </p>
              <a
                href="https://dev.hidmona.ch/register"
                className="inline-block mt-4 px-6 py-3 bg-primary-600 text-white rounded hover:bg-secondary duration-300"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
