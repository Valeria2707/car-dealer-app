type Props = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function SelectField({
  label,
  options,
  value,
  onChange,
  disabled = false,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-1 text-lg font-medium text-gray-700">
        {label}
      </label>
      <select
        className={`w-full border rounded-lg p-3 shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
          disabled
            ? 'bg-gray-100 cursor-not-allowed text-gray-400'
            : 'hover:shadow-md'
        }`}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
