import { GripVertical } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"

interface TaskProps {
  id: string;
  title: string;
}

export const Task: React.FC<TaskProps> = ({ id, title }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("taskId", id);
  }

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      className={cn("bg-white shadow-sm flex items-center p-3 gap-3")}
    >
      <GripVertical className="text-gray-400" size={16} />
      <CardContent className="p-0 flex-1">{title}</CardContent>
    </Card>
  )
}


