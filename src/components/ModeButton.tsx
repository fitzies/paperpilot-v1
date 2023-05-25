"use client";

import { menuObj } from "@/lib/helper";

export default function ModeButton(props: {
  item: string;
  active: boolean;
  onClick: Function;
}) {
  const onClick = () => {
    let tempMode = {
      Humanize: false,
      Formal: false,
      Expand: false,
      Shorten: false,
      Creative: false,
      Childify: false,
    };
    tempMode[props.item as keyof typeof tempMode] = true;
    props.onClick(tempMode);
  };

  if (props.active) {
    return (
      <div
        className="font-interbold bg-purple-600 lg:px-3 px-2 cursor-pointer rounded-lg text-white hover:-translate-y-[.15rem] duration-150 text-sm lg:text-lg"
        onClick={onClick}
      >
        {props.item}
      </div>
    );
  }

  return (
    <div
      className="font-interbold text-purple-50 lg:px-3 px-2 cursor-pointer hover:bg-purple-400 rounded-lg hover:-translate-y-[.1rem] duration-150 text-sm lg:text-lg"
      onClick={onClick}
    >
      {props.item}
    </div>
  );
}
