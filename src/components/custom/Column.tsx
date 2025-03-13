import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react"
import { Task } from "./Task"

interface ColumnProps {
  title: string;
  tasks: { id: string; title: string }[]
  onDrop: (taskId: string) => void
}

export const Column: React.FC<ColumnProps> = ({ title, tasks, onDrop }) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData("taskId")
    onDrop(taskId)
  }

  return (
    <Card
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="w-[350px] flex flex-col bg-gray-100 shadow-md rounded-2xl overflow-hidden"
	>
      <div className="p-4 bg-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <ScrollArea className="flex-1 p-4 space-y-3">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </ScrollArea>
      <div className="p-4 bg-gray-200 flex justify-center">
        <Button variant="outline" className="w-full">
          Create new task
        </Button>
      </div>
    </Card>
  )
}


