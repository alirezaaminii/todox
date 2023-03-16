import {CategoryInterface} from "@/types";
import {generateUniqueNumber} from "@/utils/generate-unique-number";

const categoryMock: CategoryInterface = {
  name: 'Productivity',
  id: generateUniqueNumber(1000),
}

export default categoryMock