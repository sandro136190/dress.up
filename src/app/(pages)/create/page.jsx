import { createUser } from "@/app/libs/crud";

const CreatePage = () => {
  return (
    <div className=" max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className=" text-4xl text-gray-800"> </h1>
      <div>
        <form action={createUser}>
          <button type="submit" className=""></button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
