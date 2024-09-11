import { User } from "./User";

export type HabitContentProps = {
  _id: string,
  description: string,
  difficulty: string,
  frequency: string,
  members: User[],
  creator: User,
  startDate: Date,
  endDate: Date,
  monthNames: string[],
  handleJoin: () => void,
  handleLeave: () => void,
  handleEdit: () => void,
  handleDelete: () => void,
}