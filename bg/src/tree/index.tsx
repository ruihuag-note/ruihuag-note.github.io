import React from 'react'
import { classNames } from 'harpe'
import { TreeProps } from './type'
import { Item } from './item'
import { useLocalStorage } from '0hook'
import { getTreeNode } from './util'
import './index.less'

export function Tree(props: TreeProps) {
  const { tree = {}, data = {} } = props
  const [selectName, setSelectName] = useLocalStorage('tree-select-name', '')
  const [searchVal, setSearchVal] = useLocalStorage('tree-searchVal', '')
  const [fold, setFold] = useLocalStorage('tree-fold', '[]')
  const nodes = getTreeNode({ ...tree }, searchVal, data)?.child || []

  // console.log('🚀 ~ Tree ~ nodes:', nodes)

  const getList = () => {
    if (selectName) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (node.name === selectName) return node
      }
    }

    return nodes?.[0] || {}
  }

  const onSelect = (url: string) => { 
    window.open(`/md?url=${encodeURIComponent(url)}`, '_blank')
  }

  const action = {
    searchVal,
    onSelect,
    fold,
    setFold,
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
            return (
              <div
                key={i}
                className={classNames('module-name', {
                  select: selectName === name,
                })}
                onClick={() => setSelectName(name)}>
                {name}
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
