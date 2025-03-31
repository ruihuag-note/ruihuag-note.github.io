# Antd DatePicker 设置默认值报 `clone.weekday is not a function`

- `antd`: `^5.16.2`
- `dayjs`: `^1.11.10`

解决:

```js
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'

dayjs.extend(advancedFormat)
dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
```
