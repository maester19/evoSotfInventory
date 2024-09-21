interface InputProps {
    value: string;
    onChange: (value: string) => void;
  }

export function InputDate({ value, onChange }: InputProps) {
  const today = new Date().toISOString().split("T")[0]
    return (
      <div>
        <input
          type="date"
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          max={today}
        />
      </div>
    );
  }