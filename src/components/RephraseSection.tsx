export default function RephraseSection(props: { text: string }) {
  return (
    <div className="w-1/2 h-full border-l-2 border-zinc-900 p-4 overflow-y-auto">
      <p className="font-interbold text-white overflow-y-auto h-[87%]">
        {props.text}
      </p>
    </div>
  );
}
