interface Props {
  onRestart: () => void;
  onBack: () => void;
}

export default function GameControls({ onRestart, onBack }: Props) {
  return (
    <div className="game-controls">
      <button className="btn btn-secondary" onClick={onBack}>
        Назад к настройкам
      </button>
      <button className="btn btn-primary" onClick={onRestart}>
        Новая игра
      </button>
    </div>
  );
}
