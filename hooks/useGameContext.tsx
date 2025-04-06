import React, { createContext, useContext, useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type GameContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Зробити 10 кліків', completed: false },
    { id: 2, title: 'Зробити 5 подвійних кліків', completed: false },
    { id: 3, title: "Утримувати об'єкт 3 секунди", completed: false },
    { id: 4, title: "Перетягнути об'єкт", completed: false },
    { id: 5, title: 'Зробити свайп вправо', completed: false },
    { id: 6, title: 'Зробити свайп вліво', completed: false },
    { id: 7, title: "Змінити розмір об'єкта", completed: false },
    { id: 8, title: 'Отримати 100 очок', completed: false },
  ]);

  return (
    <GameContext.Provider value={{ score, setScore, tasks, setTasks }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
