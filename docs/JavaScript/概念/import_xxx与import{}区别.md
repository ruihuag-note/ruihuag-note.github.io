# import_xxx 与 import\{\}区别

ES6 中 `export` 与 `export default` 均可用于导出常量、函数、文件、模块等，你可以在其它文件或模块中通过 import 的两种方式对其进行导入。一个模块只能有一个 `export default`,但可以有若干个 `export`。 区别就在下面。

1. `export` 与 `export default` 均可用于导出常量、函数、文件、模块等
2. 在一个文件或模块中，export 、import 可以有多个，export default 仅有一个
3. 通过 export 方式导出，**在导入时要加 export default 则不需要**
4. export 能直接导出变量表达式，export default 不行
