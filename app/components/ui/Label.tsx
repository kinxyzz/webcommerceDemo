export default function Label({
  htmlFor,
  name,
}: {
  htmlFor: string;
  name: string;
}) {
  return (
    <label
      className="block text-xl text-slate-900 font-semibold"
      htmlFor={htmlFor}
    >
      {name}
    </label>
  );
}
