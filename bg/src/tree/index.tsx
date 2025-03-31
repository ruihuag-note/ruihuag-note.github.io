import React from 'react'
import { ObjectType } from '0type'
import { classNames } from 'harpe'
import { isEffectArray, isString } from 'asura-eye'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Icon } from './icon'
import { getRenderList } from './util'

export interface TreeProps {
  tree: ObjectType<any>
  dirName?: string
  onSelect?(url: string): void
  [key: string]: any
}

export function Tree(props: TreeProps) {
  const { tree } = props
  const navigate = useNavigate()

  const onSelect = (url: string) =>
    navigate(`/md?url=${encodeURIComponent(url)}`)
  const [fold, _setFold] = React.useState<string[]>([])
  const setFold = (list: string[] = []) => {
    _setFold(list)
    localStorage.setItem('fold', JSON.stringify(list))
  }
  const init = () => {
    const cache_fold = localStorage.getItem('fold')
    if (!cache_fold) return
    try {
      const cache_fold_val = JSON.parse(cache_fold)
      isEffectArray<string>(cache_fold_val) && _setFold(cache_fold_val)
    } catch (error) {
      console.info(error)
    }
  }
  React.useEffect(() => {
    init()
  }, [])
  
  const Item = (props: TreeProps) => {
    const { depth = 0, tree, dirName } = props
    const { name, dir, file, children, path } = tree || {}
    const uid = path ?? name
    const getName = () => {
      if (!isString(name)) return '<Empty>'
      if (name === 'index.md' && dirName) return dirName
      return name.replace(/\.md$/gi, '')
    }
    const render_name = getName()

    const LayoutCol = () => {
      const list = getRenderList(children)
      return (
        <div className='layout-col'>
          {list.map((item, index) => {
            return (
              <div key={index}>
                {item.map((item: any, i: number) => (
                  <Item key={i} dirName={name} tree={item} depth={depth + 1} />
                ))}
              </div>
            )
          })}
        </div>
      )
    }

    const getLogo = () => {
      if (dir) return Icon.Folder
      if (tree.html) return Icon.HTML
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
        setFold(newFold)
        return
      }
      if (file) return onSelect(path)
    }

    return (
      <div
        key={name}
        className={classNames(
          'item',
          {
            dir,
            file,
            fold: fold.includes(uid),
            'no-having-grandson': true,
          },
          'depth-' + depth,
        )}>
        <div className='content' onClick={handleClick}>
          <div className='logo'>{getLogo()}</div>
          <div className='name' title={render_name}>
            {render_name}
          </div>
        </div>
        {!fold.includes(uid) && isEffectArray(children) && (
          <div className='children'>
            {depth === 0 ? (
              <LayoutCol />
            ) : (
              children.map((item: any, i: number) => (
                <Item key={i} dirName={name} tree={item} depth={depth + 1} />
              ))
            )}
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
