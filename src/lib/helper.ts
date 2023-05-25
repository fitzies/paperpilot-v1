function countWords(str: string) {
  if (str[str.length - 1] === " ") {
    str = str.substring(0, str.length - 2);
  }
  if (str.length <= 1) {
    return 0;
  }
  return str.split(" ").length;
}

async function fetchGPT(text: string, mode: MenuEntryType) {
  const data = handleMode(mode) + text;

  const res = await fetch("https://paperpilot.vercel.app/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  return res.json();
}

function handleMode(mode: MenuEntryType) {
  let temp = "Please make this text more simple: ";
  if (mode === "Humanize") {
    temp = "Please paraphrase this text by simplifying it: ";
  }
  if (mode === "Formal") {
    temp = "Please make this text more formal: ";
  }
  if (mode === "Creative") {
    temp = "PLease make this text more creative: ";
  }
  if (mode === "Childify") {
    temp = "PLease write this text as if a 10 year old wrote it: ";
  }

  return temp;
}

const findMode = (menu: any): MenuEntryType => {
  return Object.keys(menu).find(
    (key: any) => menu[key] === true
  ) as MenuEntryType;
};

// async function getSynonym(word: string) {
//   const res = await fetch(
//     `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//   );
//   const obj = await res.json();
//   return obj[0].meanings[0].synonyms;
// }

const menuObj = {
  Humanize: true,
  Formal: false,
  Creative: false,
  Childify: false,
};

export { countWords, fetchGPT, menuObj, findMode };
