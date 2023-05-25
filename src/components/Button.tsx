export default function Button(props: { onClick: Function; text?: any }) {
  const onclick = () => {
    props.onClick();
  };

  return (
    <div
      onClick={onclick}
      className="lg:w-1/3 w-[100%] lg:h-full h-3/4 bg-purple-600 rounded-lg px-4 flex justify-center items-center font-interbold text-white text-lg cursor-pointer"
    >
      {props.text}
    </div>
  );
}
