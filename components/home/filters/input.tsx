type InputProps = {
  label?: string | React.ReactNode;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const Input = ({ label, type, placeholder, className, value, onChange }: InputProps) => {
  return (
    <label className={`flex flex-col gap-1 w-full ${className}`}>
      {label && (
        <span className="text-sm font-semibold">
          {label}
        </span>
      )}
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="outline-none bg-transparent w-full border border-gray-300 rounded px-3 py-1"
      />
    </label>
  );
};
