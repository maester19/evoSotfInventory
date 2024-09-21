interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (value: string) => void;
    id: string;
  }

export function Checkbox({ checked, onChange, label, id }: CheckboxProps) {
    return (
      <div className="form-check">
        <input
          id={id}
          type="checkbox"
          className="form-check-input"
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
      </div>
    );
  }