import React from 'react'
import { classNames } from 'harpe'
import { TreeProps } from './type'
import { Item } from './item'
import { useLocalStorage } from '0hook'
import { getTreeNode } from './util'
import './index.less'
import { Icon } from './icon'
import { isString } from 'asura-eye'

const parse = (value: any, defaultValue: any) => {
  if (!isString(value)) return defaultValue
  try {
    return JSON.parse(value) || defaultValue
  } catch (error) {
    return defaultValue
  }
}

export function Tree(props: TreeProps) {
  const { tree = {}, data = {} } = props
  const [selectName, setSelectName] = useLocalStorage('tree-select-name', '')
  const [searchVal, setSearchVal] = useLocalStorage('tree-searchVal', '')
  const [fold, setFold] = useLocalStorage('tree-fold', '[]')
  const [hidden, setHidden] = useLocalStorage('tree-hidden', '[]')
  // const hidden = JSON.parse(hidden || '[]')
  const nodes = getTreeNode({ ...tree }, searchVal, data)?.child || []

  // console.log('🚀 ~ Tree ~ nodes:', nodes)

  const onSelect = (url: string) => {
    window.open(`/md?url=${encodeURIComponent(url)}`, '_blank')
  }

  const action = {
    searchVal,
    onSelect,
    fold,
    setFold,
  }
  const hiddenList: string[] = parse(hidden, [])
  const showNodes: any[] =
    nodes?.filter((_: any) => !hiddenList.includes(_.name)) || []

  const getList = () => {
    const nodes = showNodes
    if (selectName) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (node.name === selectName) return node
      }
    }

    return nodes?.[0] || {}
  }

  return (
    <div className='tree'>
      <div className='search'>
        <input
          value={searchVal || ''}
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <div className='left '>
        <div className='render'>
          {nodes?.map?.((item: any, i: number) => {
            const { name } = item
            const hiddenStatus = hiddenList.includes(name)

            return (
              <div
                key={i}
                className={classNames('module-name', {
                  select: selectName === name,
                  hidden: hiddenStatus,
                })}>
                <span
                  className='name'
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectName(name)
                  }}>
                  {name}
                </span>
                <span
                  className='icon'
                  onClick={(e) => {
                    e.preventDefault()
                    setHidden(
                      JSON.stringify(
                        hiddenStatus
                          ? [...hiddenList].filter((_) => _ !== name)
                          : [name, ...hiddenList],
                      ),
                    )
                  }}>
                  {Icon.Eye}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <div className='render'>
          <Item tree={getList()} action={action} />
        </div>
      </div>
    </div>
  )
}
