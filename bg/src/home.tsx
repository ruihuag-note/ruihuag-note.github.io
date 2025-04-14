import React from 'react'
import axios from 'axios'
import { Tree } from './tree'
import { ObjectType } from '0type'

export function Home() {
  const [tree, setTree] = React.useState<ObjectType>({})
  const [data, setData] = React.useState<ObjectType<string>>({})
  const init = async () => {
    axios
      .get('.assets/tree.json')
      .then((res) => setTree(res.data))
      .catch((error) => {
        console.error(error)
      })
    axios
      .get('.assets/db.json')
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error(error)
      })
  }
  React.useEffect(() => {
    init()
  }, [])

  return (
    <div className='home'>
      <Tree tree={tree} data={data} />
    </div>
  )
}
