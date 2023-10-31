// import { TagType } from "./tag";

export interface NoteType {
  id: number,
  name: string,
  content: string,
  tagList: number[],
  priority: string,
  createdAt: string,
  modifiedAt: string,
  background: string,
  pinned: boolean,
}