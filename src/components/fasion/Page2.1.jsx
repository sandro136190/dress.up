const Page4 = () => {
  return (
    <div className="absolute top-[1500px] left-[1000px] w-72 p-4 border rounded-2xl shadow-md bg-white">
      <h2 className="text-lg font-semibold text-center">Nike Air</h2>
      <p className="text-center text-red-500 font-medium text-sm">Price $20</p>
      <div className="flex justify-center my-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2a0VsfDRRPicW07GBg_siSR1kBjB79zYQdw&s"
          alt="NikeAir"
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

export default Page4;
