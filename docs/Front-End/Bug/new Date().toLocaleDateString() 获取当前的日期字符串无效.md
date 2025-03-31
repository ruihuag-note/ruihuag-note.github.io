# [`new Date().toLocaleDateString() 获取当前的日期字符串无效`](/)

- 当系统语言是新加坡英语的时候，使用这个方法获取当前的日期字符串会出现 Invalid Date，toLocaleDateString 是有两个参数的，不指定语言就会出现这个问题，而且只在手机上出现，不太好排查，new Date().toLocaleDateString('en-Us') 调用的时候指定语言就没问题了；
