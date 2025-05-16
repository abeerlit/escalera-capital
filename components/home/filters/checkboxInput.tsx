type CheckboxInputProps = {
  label: string;
  checkLabel: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const CheckboxInput = ({
  label,
  checkLabel,
  checked,
  onChange,
}: CheckboxInputProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <span className="font-semibold">{label}</span>
      <label className="flex gap-3 py-1 items-center cursor-pointer">
        <input
          type="checkbox"
          className="size-4 accent-black"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {checkLabel}
      </label>
    </div>
  );
};
