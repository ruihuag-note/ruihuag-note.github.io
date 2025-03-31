import React from 'react'
import axios from 'axios'
import { Tree } from './tree'
import { ObjectType } from '0type'

export function Home() {
  const [tree, setTree] = React.useState<ObjectType>({})

  const init = async () => {
    try {
      const url = 'tree.json'
      const res = await axios.get(url)
      if (res.status === 200) {
        setTree(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className='home'>
      <Tree tree={tree} />
    </div>
  )
}
