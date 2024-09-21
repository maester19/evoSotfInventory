interface InputProps {
    value: number;
    onChange: (value: Number) => void;
  }

export function InputNumber({ value, onChange }: InputProps) {
    return (
      <div>
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          min="0"
          required
        />
      </div>
    );
  }