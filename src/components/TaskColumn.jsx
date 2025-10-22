import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

const colorMap = {
  red: 'border-red-500/30 bg-red-500/5',
  amber: 'border-amber-500/30 bg-amber-500/5',
  green: 'border-green-500/30 bg-green-500/5',
};

const iconMap = {
  red: '🔴',
  amber: '🟡',
  green: '🟢',
};

function TaskColumn({ id, title, tasks, onDeleteTask, color }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-lg border-2 p-4 min-h-96 flex flex-col ${colorMap[color]}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span>{iconMap[color]}</span>
          {title}
          <span className="ml-2 text-sm bg-slate-700 text-gray-300 px-2 py-1 rounded">
            {tasks.length}
          </span>
        </h2>
      </div>

      {/* Tasks */}
      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex-1 space-y-3 overflow-y-auto pr-2">
          {tasks.length === 0 ? (
            <div className="flex items-center justify-center h-32 text-gray-500">
              <p className="text-center">Henüz görev yok</p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </div>
      </SortableContext>
    </div>
  );
}

export default TaskColumn;
