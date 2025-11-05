import "../../components/ui/button/button.css";

interface Props {
  onRestart: () => void;
  onBack: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

export default function GameControls({
  onRestart,
  onBack,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
}: Props) {
  return (
    <div className="game-controls">
      <button className="btn btn-secondary" onClick={onBack}>
        Назад к настройкам
      </button>
      {onUndo && (
        <button
          className="btn btn-secondary"
          onClick={onUndo}
          disabled={!canUndo}
        >
          ← Undo
        </button>
      )}
      {onRedo && (
        <button
          className="btn btn-secondary"
          onClick={onRedo}
          disabled={!canRedo}
        >
          Redo →
        </button>
      )}
      <button className="btn btn-primary" onClick={onRestart}>
        Новая игра
      </button>
    </div>
  );
}
