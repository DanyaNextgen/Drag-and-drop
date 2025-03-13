import { Column } from "@/components/custom/Column"
import { useState } from "react"

interface TaskType {
  id: string;
  title: string;
}

const initialTasks: TaskType[] = [
  { id: "1", title: "Почистить обувь" },
  { id: "2", title: "Сделать домашку" },
  { id: "3", title: "Прочитать книгу" },
  { id: "4", title: "Поработать над проектом" },
  { id: "5", title: "Позвонить другу" },
  { id: "6", title: "Посмотреть урок по React" },
];

const Home: React.FC = () => {
  const [todoTasks, setTodoTasks] = useState<TaskType[]>(initialTasks)
  const [inProgressTasks, setInProgressTasks] = useState<TaskType[]>([])
  const [doneTasks, setDoneTasks] = useState<TaskType[]>([])

  const handleMoveTask = (
    taskId: string,
    toColumn: React.Dispatch<React.SetStateAction<TaskType[]>>
  ) => {
    const allTasks = [...todoTasks, ...inProgressTasks, ...doneTasks]
    const taskToMove = allTasks.find((task) => task.id === taskId)

    if (!taskToMove) return

    setTodoTasks((prev) => prev.filter((task) => task.id !== taskId))
    setInProgressTasks((prev) => prev.filter((task) => task.id !== taskId))
    setDoneTasks((prev) => prev.filter((task) => task.id !== taskId))

    toColumn((prev) => [...prev, taskToMove])
  }

  return (
    <div className="flex gap-5">
      <Column
        title="Todo"
        tasks={todoTasks}
        onDrop={(taskId) => handleMoveTask(taskId, setTodoTasks)}
      />
      <Column
        title="In progress"
        tasks={inProgressTasks}
        onDrop={(taskId) => handleMoveTask(taskId, setInProgressTasks)}
      />
      <Column
        title="Done"
        tasks={doneTasks}
        onDrop={(taskId) => handleMoveTask(taskId, setDoneTasks)}
      />
    </div>
  )
}

export default Home



