"use client";

// import { getSynonym } from "@/lib/helper";
import { useEffect, useState } from "react";

export default function RephraseSection(props: { text: string }) {
  const [words, setWords] = useState<string[]>(props.text.split(" "));

  const getWords = async (word: string, index: number) => {
    // let newWord = await getSynonym(word);
    console.log(word);
  };

  useEffect(() => {
    setWords(() => props.text.split(" "));
  }, [props.text]);

  return (
    <div className="w-1/2 h-full border-l-2 border-zinc-900 p-4 overflow-y-auto">
      <p className="font-interbold text-white overflow-y-auto h-[87%]">
        {words.map((word, idx) => {
          return (
            <>
              <span
                key={idx}
                className="hover:text-purple-200"
                onClick={() => getWords(word, idx)}
              >
                {word}
              </span>{" "}
            </>
          );
        })}
      </p>
    </div>
  );
}
