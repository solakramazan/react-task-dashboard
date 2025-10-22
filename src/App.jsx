import { useState } from 'react';
import { DndContext, closestCorners } from '@dnd-kit/core';
import { IoAdd, IoSearch } from 'react-icons/io5';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Dashboard Tasarımı',
      description: 'Modern dashboard UI tasarla',
      status: 'in-progress',
      deadline: '2025-10-25',
      priority: 'high',
    },
    {
      id: '2',
      title: 'API Bağlantısı',
      description: 'Backend API ile entegrasyon',
      status: 'todo',
      deadline: '2025-10-28',
      priority: 'high',
    },
    {
      id: '3',
      title: 'Test Yazma',
      description: 'Unit testler oluştur',
      status: 'todo',
      deadline: '2025-11-01',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'Drag-Drop Özelliği',
      description: 'Kartları sürükle-bırak ile taşı',
      status: 'done',
      deadline: '2025-10-22',
      priority: 'high',
    },
  ]);

  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showForm, setShowForm] = useState(false);

  // Arama ve filtreleme
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesPriority;
  });

  const getTasksByStatus = (status) => {
    return filteredTasks.filter((task) => task.status === status);
  };

  // Görev ekleme
  const addTask = (newTask) => {
    const task = {
      id: Date.now().toString(),
      ...newTask,
    };
    setTasks([...tasks, task]);
    setShowForm(false);
  };

  // Görev silme
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Drag end işlemi
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find((task) => task.id === active.id);
    const overStatus = over.id;

    if (activeTask && activeTask.status !== overStatus) {
      setTasks(
        tasks.map((task) =>
          task.id === active.id
            ? { ...task, status: overStatus }
            : task
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              📋 Task Dashboard
            </h1>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg"
            >
              <IoAdd size={20} />
              Yeni Görev
            </button>
          </div>

          {/* Search ve Filtreler */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Görev ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="all">Tüm Öncelikler</option>
              <option value="low">Düşük</option>
              <option value="medium">Orta</option>
              <option value="high">Yüksek</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskColumn
              id="todo"
              title="Yapılacak"
              tasks={getTasksByStatus('todo')}
              onDeleteTask={deleteTask}
              color="red"
            />
            <TaskColumn
              id="in-progress"
              title="Devam Ediyor"
              tasks={getTasksByStatus('in-progress')}
              onDeleteTask={deleteTask}
              color="amber"
            />
            <TaskColumn
              id="done"
              title="Tamamlandı"
              tasks={getTasksByStatus('done')}
              onDeleteTask={deleteTask}
              color="green"
            />
          </div>
        </DndContext>
      </main>

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          onClose={() => setShowForm(false)}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}

export default App;
