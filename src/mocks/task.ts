import {TaskInterface} from "@/types";
import {generateUniqueNumber} from "@/utils/generate-unique-number";

const taskMock: TaskInterface = {
  name: 'Task name',
  createdAt: new Date(),
  status: "done",
  id: generateUniqueNumber(1000),
}

export default taskMock