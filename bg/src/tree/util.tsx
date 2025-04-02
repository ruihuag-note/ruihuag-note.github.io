import { isEffectArray, isString } from 'asura-eye'
import { ObjectType } from '0type'

export const having = (
  item: ObjectType,
  searchVal: string | null = '',
  data: ObjectType<string> = {},
): boolean => {
  if (isString(searchVal) && searchVal.length < 1) return true

  const is = (val: any) => {
    if (isString(val) && searchVal) {
      const list = searchVal.split(' ')
      for (let i = 0; i < list.length; i++) {
        const mm = list[i]
        if (!mm) continue
        if (val.indexOf(mm) > -1) return true
        if (val.search(new RegExp(mm, 'i')) > -1) return true
      }
      return false
    }
    return true
  }

  const cb = (item: any): boolean => {
    const { name, path, file, child } = item
    if (name && is(name)) return true

    if (path && file && is(data[path])) return true

    if (isEffectArray(child))
      for (let i = 0; i < child.length; i++) {
        if (cb(child[i])) return true
      }

    return false
  }
  // console.log(item, cb(item), searchVal)
  return cb(item)
}

export const getTreeNode = (
  tree: any,
  searchVal: string | null = '',
  data: ObjectType<string> = {},
) => {
  const cb = (obj: any) => {
    if (having(obj, searchVal, data)) {
      if (isEffectArray(obj.child))
        obj.child = obj.child.filter((item: any) =>
          having(item, searchVal, data),
        )
      return obj
    }
    return undefined
  }

  return cb(tree)
}
