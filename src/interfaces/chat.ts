export interface IChat {
  id: string,
  employeeId: string,
  startTimestamp: string,
  status: string,
  messages: IMessage[]
}
export interface IMessage {
  id: string,
  senderType: string,
  content: string,
  timestamp: string
}
