import { ObjectType } from '0type'

export interface TreeProps {
  tree: ObjectType<any>
  dirName?: string
  onSelect?(url: string): void
  data?: ObjectType<string>
  [key: string]: any
}