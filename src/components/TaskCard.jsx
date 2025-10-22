import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoTrash, IoClock } from 'react-icons/io5';

function TaskCard({ task, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const priorityColors = {
    low: 'bg-blue-900 text-blue-200',
    medium: 'bg-yellow-900 text-yellow-200',
    high: 'bg-red-900 text-red-200',
  };

  const priorityLabels = {
    low: 'Düşük',
    medium: 'Orta',
    high: 'Yüksek',
  };

  const isOverdue = new Date(task.deadline) < new Date();

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-slate-700/50 border border-slate-600 rounded-lg p-3 cursor-move hover:bg-slate-700/80 transition-all hover:shadow-lg ${
        isDragging ? 'shadow-lg ring-2 ring-blue-500' : ''
      }`}
    >
      {/* Title */}
      <h3 className="font-semibold text-sm text-gray-100 mb-2 line-clamp-2">
        {task.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-400 mb-3 line-clamp-2">
        {task.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1">
          <span className={`text-xs px-2 py-1 rounded font-medium ${priorityColors[task.priority]}`}>
            {priorityLabels[task.priority]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 text-xs ${isOverdue ? 'text-red-400' : 'text-gray-400'}`}>
            <IoClock size={14} />
            <span>{new Date(task.deadline).toLocaleDateString('tr-TR')}</span>
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="p-1 hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-colors rounded"
          >
            <IoTrash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
