import { GripVertical } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TaskProps {
  id: string;
  title: string;
}

export const Task: React.FC<TaskProps> = ({ id, title }) => {
  const [className, setClassName] = useState("")

  return (
    <Card
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("taskId", id);
        setClassName("bg-red-500");
        setTimeout(() => {
          setClassName("hidden");
        }, 0);
      }}
      onDragEnd={() => setClassName("flex")}
      className={cn("bg-white shadow-sm flex items-center p-3 gap-3", className)}
    >
      <GripVertical className="text-gray-400" size={16} />
      <CardContent className="p-0 flex-1">{title}</CardContent>
    </Card>
  )
}


