import Link from "next/link";

const Error = () => {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
  "
    >
      <div className="px-40 py-20">
        <div className="flex flex-col items-center">
          <h6 className="mb-2 font-bold text-center md:text-3xl">
            <span>Oops!</span>
          </h6>
          <p className="mb-8 text-center md:text-lg">
            The page doesn't exist
          </p>
          <Link
            href="/"
            className="px-6 py-2 text-sm text-black"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
