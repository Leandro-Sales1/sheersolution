import { atom, RecoilState } from "recoil";
import { IChat } from "../interfaces/chat";

export const chatState: RecoilState<IChat> = atom({
  key: 'TodoList',
  default: {
    employeeId: '',
    id: '',
    messages: [],
    startTimestamp: '',
    status: ''
  },
});
