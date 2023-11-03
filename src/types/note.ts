// import { TagType } from "./tag";

export interface NoteType {
  id: string,
  name: string,
  content: string,
  tagList: number[],
  priority: string,
  createdAt: string,
  modifiedAt: string,
  background: string,
  pinned: boolean,
  type: 'normal' | 'archive' | 'trash',
}