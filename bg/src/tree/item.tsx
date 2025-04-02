import React from 'react'
import { classNames } from 'harpe'
import { isEffectArray, isString } from 'asura-eye'
import './index.less'
import { Icon } from './icon'
import { TreeProps } from './type'

export const Item = (props: TreeProps) => {
  const { depth = 0, tree, dirName, action } = props
  const { onSelect, setFold } = action
  const fold: string[] = JSON.parse(action.fold || '[]') || []

  const { name, dir, file, child, path } = tree || {}
  const uid = path ?? name
  const getName = () => {
    if (!isString(name)) return '<Empty>'
    if (name === 'index.md' && dirName) return dirName
    return name.replace(/\.md$/gi, '')
  }
  const render_name = getName()

  const getLogo = () => {
    if (dir) return Icon.Folder
    // if (tree.html) return Icon.HTML
    return Icon.MD
  }

  const handleClick = () => {
    if (dir) {
      let newFold = [...fold]
      if (fold.includes(uid)) {
        newFold = newFold.filter((id) => id !== uid)
      } else {
        newFold.push(uid)
      }
      setFold(JSON.stringify(newFold))
      return
    }
    if (file) return onSelect(path)
  }

  return (
    <div
      key={name}
      className={classNames('item', 'depth-' + depth, {
        dir,
        file,
        fold: fold.includes(uid),
      })}>
      <div className='content' title={render_name} onClick={handleClick}>
        <div className='logo'>{getLogo()}</div>
        <div className='name'>{render_name}</div>
      </div>
      {!fold.includes(uid) && isEffectArray(child) && (
        <div className='child'>
          {child.map((item: any, i: number) => (
            <Item
              key={i}
              dirName={name}
              tree={item}
              depth={depth + 1}
              action={action}
            />
          ))}
        </div>
      )}
    </div>
  )
}
