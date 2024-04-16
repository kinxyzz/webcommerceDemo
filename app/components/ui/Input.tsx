interface InputProps<T = string> {
  type?: T;
  name?: T;
}

export default function Input({ type, name }: InputProps) {
  return (
    <input
      className="border-b-[1px] border-slate-400 rounded-sm  p-2"
      type={type}
      name={name}
      id={name}
    />
  );
}
