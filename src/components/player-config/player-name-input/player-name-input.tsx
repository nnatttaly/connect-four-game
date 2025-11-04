import "./player-name-input.css";

interface Props {
  name: string;
  onChange: (name: string) => void;
}

export default function PlayerNameInput({ name, onChange }: Props) {
  return (
    <div className="form-group">
      <label>Имя</label>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        className="name-input"
      />
    </div>
  );
}
