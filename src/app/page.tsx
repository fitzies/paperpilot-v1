"use client";

import Button from "@/components/Button";
import ModeButton from "@/components/ModeButton";
import RephraseSection from "@/components/RephraseSection";
import { countWords, fetchGPT, findMode } from "@/lib/helper";
import { useEffect, useState } from "react";

export default function Page() {
  const [mode, setMode] = useState<MenuType>({
    Humanize: true,
    Formal: false,
    // Expand: false,
    // Shorten: false,
    Creative: false,
    Childify: false,
  });

  const modeChange = (tempMode: any) => {
    setMode(() => tempMode);
  };

  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);

  const onChange = (e: any) => {
    setText(() => e.target.value);
    setWordCount(() => countWords(e.target.value));
  };

  useEffect(() => {
    setWordCount(() => countWords(text));
  }, [text]);

  const [paraphrasedText, setParaphrasedText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const rephrase = async () => {
    setLoading(() => true);
    let trueKey: MenuEntryType = findMode(mode);
    // Object.keys(mode).find((key: any) => mode[key] === true);
    const res = await fetchGPT(text, trueKey);

    setParaphrasedText(() => res[Object.keys(res)[0]]);
    setLoading(() => false);
  };

  const getPasteData = () => {
    navigator.clipboard.readText().then((text) => {
      setText(() => text);
    });
  };

  return (
    <div className="h-[70vh] w-[75vw] bg-zinc-800 mx-auto mt-[3vh] rounded-lg flex flex-col shadow-lg shadow-zinc-950">
      <div className="w-full h-16 flex items-center px-4 lg:gap-3 bg-zinc-700 rounded-t-lg min-h-[4rem]">
        {Object.entries(mode).map((value) => {
          return (
            <ModeButton
              item={value[0]}
              active={value[1]}
              onClick={modeChange}
              key={value[0]}
            />
          );
        })}
      </div>
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full border-r-2 border-zinc-900 p-4 flex flex-col gap-4 relative">
          <textarea
            value={text}
            onChange={onChange}
            className="w-full h-[87%] bg-transparent font-interbold text-white outline-none resize-none"
          />
          {wordCount <= 0 ? (
            <div
              onClick={getPasteData}
              className="absolute lg:w-1/5 w-1/2 aspect-video border-4 border-purple-300 lg:block inset-x-[42%] inset-y-[40%] rounded-2xl font-interbold duration-150 text-purple-200 flex justify-center items-center cursor-pointer hover:-translate-y-1 opacity-75 hover:opacity-100"
            >
              <p>paste</p>
            </div>
          ) : null}
          <div className="w-full h-[9%] flex items-center justify-between px-3">
            <p className="font-inter text-white text-lg lg:block hidden">
              {wordCount} words
            </p>
            {!loading ? (
              <Button onClick={rephrase} text="rephrase" />
            ) : (
              <Button onClick={rephrase} text="..." />
            )}
          </div>
        </div>
        <RephraseSection text={paraphrasedText} />
      </div>
    </div>
  );
}
