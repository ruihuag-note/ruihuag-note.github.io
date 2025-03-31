const item_width = 280

export const getRenderList = (children: any[]) => {
  const w = window.document.body.getBoundingClientRect().width
  const len = Math.max(1, Math.min(children.length, Math.floor(w / item_width)))
  let cur = 0
  const counts = new Array(len).fill(0)
  const list: any[][] = new Array(len).fill([]).map(() => [])
  const items = children.sort((a: any, b: any) => b.count - a.count)

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const { count } = item
    counts[cur] += count
    list[cur].push(item)

    const min = Math.min(...counts)
    cur = counts.indexOf(min)
  }
  // console.log(
  //   '🚀 ~ LayoutCol ~ items:',
  //   len,
  //   items.map((item: any) => item.count),
  //   list.map((items: any) => items.map((item: any) => item.count)),
  // )
  return list
}
