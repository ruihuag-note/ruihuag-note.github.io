import React from 'react'
import { ObjectType } from '0type'
import { classNames } from 'harpe'
import { isEffectArray, isString } from 'asura-eye'
import './index.less'
import { useNavigate } from 'react-router-dom'

export interface TreeProps {
  tree: ObjectType<any>
  dirName?: string
  onSelect?(url: string): void
  [key: string]: any
}

export function Tree(props: TreeProps) {
  const { tree } = props
  const navigate = useNavigate()

  const onSelect = (url: string) => navigate(`/md?url=${url}`)

  const Item = (props: TreeProps) => {
    const { depth = 0, tree, dirName } = props
    const { name, dir, file, children, path } = tree || {}

    const getName = () => {
      if (!isString(name)) return '<Empty>'
      if (name === 'index.md' && dirName) return dirName
      return name.replace(/\.md$/gi, '')
    }
    const render_name = getName()

    return (
      <div
        key={name}
        className={classNames('item', { dir, file }, 'depth-' + depth)}>
        <div
          className='name'
          onClick={() => {
            file && onSelect(path)
          }}>
          {render_name}
        </div>
        {isEffectArray(children) && (
          <div className='children'>
            {children.map((item: any, i: number) => (
              <Item key={i} dirName={name} tree={item} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='tree'>
      <Item tree={tree} />
    </div>
  )
}
