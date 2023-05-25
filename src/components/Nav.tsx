export default function Nav() {
  return (
    <div className="w-screen h-20 px-16 flex items-center justify-end gap-8 ">
      <div className="text-white font-interbold lg:text-lg text-md mr-auto">
        paper pilot
      </div>
      {["docs", "account"].map((item) => {
        return (
          <div
            className="text-gray-300 hover:text-white cursor-pointer duration-150 font-inter lg:text-lg text-sm"
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
