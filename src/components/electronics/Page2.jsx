const Page2 = () => {
  return (
    <div className="absolute top-[1000px] left-[600px] w-72 p-4 border rounded-2xl shadow-md bg-white">
      <h2 className="text-lg font-semibold text-center">16ProMax</h2>
      <p className="text-center text-red-500 font-medium text-sm">
        Price $1900
      </p>
      <div className="flex justify-center my-4">
        <img
          src="data:image/jpeg;base64,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"
          alt="16ProMax"
          className="w-full h-56 rounded"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="text-orange-500 font-semibold hover:underline">
          Buy Now
        </button>
        <button className="text-gray-500 hover:underline">See More</button>
      </div>
    </div>
  );
};

export default Page2;
