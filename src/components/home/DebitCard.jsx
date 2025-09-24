export default function DebitCard() {
  return (
    <div className="relative bg-[url(/images/debitCardIntro.jpg)]  bg-cover bg-center bg-no-repeat h-auto lg:h-screen">
      {/* Optional: background overlay or image can go here */}
      <div className="absolute h-full w-full bg-black/50"></div>
      <div className="px-4 py:8 md:py-16">
        <div className="flex flex-col lg:flex-row justify-end">
          {/* Empty space for offset (mimicking col-lg-8 offset-lg-4) */}
          <div className="w-full lg:w-2/4 text-center lg:text-left text-white z-40">
            <div className=" p-4 lg:p-8 text-center">
              <h2 className=" text-xl md:text-3xl font-medium py-3">
                Introducing Hidmona Debit Card
              </h2>
              <p className="text-lg py-2 ">
                Widely accepted, faster money services and convenient way for
                withdrawing cash from ATMs.
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
