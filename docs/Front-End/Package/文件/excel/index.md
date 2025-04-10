# [exceljs - Node 和浏览器里实现 Excel 的解析和生成](https://www.npmjs.com/package/exceljs?activeTab=readme)

## 读取文件

```tsx
const { Workbook } = require('exceljs')

async function main() {
  const workbook = new Workbook()

  const workbook2 = await workbook.xlsx.readFile('./data.xlsx')

  workbook2.eachSheet((sheet, index1) => {
    console.log('工作表' + index1)

    sheet.eachRow((row, index2) => {
      const rowData = []

      row.eachCell((cell, index3) => {
        rowData.push(cell.value)
      })

      console.log('行' + index2, rowData)
    })
  })
}

main()
```

## 生成文件

```tsx
const { Workbook } = require('exceljs')

async function main() {
  const workbook = new Workbook()

  const worksheet = workbook.addWorksheet('guang111')

  worksheet.columns = [
    { header: 'ID', key: 'id', width: 20 },
    { header: '姓名', key: 'name', width: 30 },
    { header: '出生日期', key: 'birthday', width: 30 },
    { header: '手机号', key: 'phone', width: 50 },
  ]

  const data = [
    {
      id: 1,
      name: '光光',
      birthday: new Date('1994-07-07'),
      phone: '13255555555',
    },
    {
      id: 2,
      name: '东东',
      birthday: new Date('1994-04-14'),
      phone: '13222222222',
    },
    {
      id: 3,
      name: '小刚',
      birthday: new Date('1995-08-08'),
      phone: '13211111111',
    },
  ]
  worksheet.addRows(data)

  workbook.xlsx.writeFile('./data2.xlsx')
}

main()
```
