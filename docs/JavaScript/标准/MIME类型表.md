# [`MIME类型表`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/MIME_types/Common_types)

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/MIME_types/Common_types)
- 两种主要的 MIME 类型在默认类型中扮演了重要的角色：
  - `text/plain`: 表示文本文件的默认值。一个文本文件应当是人类可读的，并且不包含二进制数据。
  - `application/octet-stream`: 表示所有其他情况的默认值。一种未知的文件类型应当使用此类型。浏览器在处理这些文件时会特别小心，试图防止、避免用户的危险行为。

| 扩展名 | 文档类型 | MIME 类型 |
|:----|:----|:----|
|`.aac` | AAC 音频 | `audio/aac` |
|`.abw` | AbiWord 文档 |  application/x-abiword |
|`.apng` | 动态可移植网络图形（APNG）图像 | image/apng
|`.arc` | 归档文件（嵌入多个文件）| application/x-freearc
|`.avif` | AVIF 图像 | image/avif
|`.avi` | AVI：音频视频交织文件格式（Audio Video Interleave） | video/x-msvideo
|`.azw` | Amazon Kindle 电子书格式 | application/vnd.amazon.ebook
|`.bin` | 任何二进制数据类型 | application/octet-stream
|`.bmp` | Windows OS/2 位图 | image/bmp
|`.bz` | BZip 归档 | application/x-bzip
|`.bz2` | BZip2 归档 | application/x-bzip2
|`.cda` | CD 音频 | application/x-cdf
|`.csh` | C-Shell 脚本 | application/x-csh
|`.css` | 层叠样式表（CSS） | text/css
|`.csv` | 逗号分隔值（CSV） | text/csv
|`.doc` | Microsoft Word | application/msword
| `.docx` | Microsoft Word（OpenXML）  | application/vnd.openxmlformats-officedocument.wordprocessingml.document
|`.eot` | MS 嵌入式 OpenType 字体 |  application/vnd.ms-fontobject
|`.epub` | 电子出版（EPUB） | application/epub+zip
|`.gz` | GZip 压缩归档 | application/gzip
|`.gif` | 图像互换格式（GIF） | image/gif
|`.htm` |, .html 超文本标记语言（HTML）| text/html
|`.ico` | 图标（Icon）格式 | image/vnd.microsoft.icon
|`.ics` | iCalendar 格式 | text/calendar
|`.jar` | Java 归档（JAR） | application/java-archive
|`.jpeg` |, .jpg JPEG 图像 | image/jpeg
|`.js` | JavaScript | text/javascript （规范：HTML 和 RFC 9239）
|`.json` | JSON 格式 | application/json
|`.jsonld` | JSON-LD 格式 | application/ld+json
|`.mid` |, .midi 音乐数字接口（MIDI） | audio/midi、audio/x-midi
|`.mjs` | JavaScript 模块 | text/javascript
|`.mp3` | MP3 音频 | audio/mpeg
|`.mp4` | MP4 视频 | video/mp4
|`.mpeg` | MPEG 视频 | video/mpeg
|`.mpkg` | Apple 安装包 | application/vnd.apple.installer+xml
|`.odp` | 开放文档演示稿文档 | application/vnd.oasis.opendocument.presentation
|`.ods` | 开放文档表格文档 | application/vnd.oasis.opendocument.spreadsheet
|`.odt` | 开放文档文本文档 | application/vnd.oasis.opendocument.text
|`.oga` | OGG 音频 | audio/ogg
|`.ogv` | OGG 视频 | video/ogg
|`.ogx` | OGG | application/ogg
|`.opus` | Opus 音频 | audio/opus
|`.otf` | OpenType 字体 | font/otf
|`.png` | 便携式网络图形 | image/png
|`.pdf` | Adobe 便携式文档格式（PDF） | application/pdf
|`.php` | 超文本预处理器（Personal Home Page） | application/x-httpd-php
|`.ppt` | Microsoft PowerPoint | application/vnd.ms-powerpoint
| `.pptx` | Microsoft PowerPoint（OpenXML） | application/vnd.openxmlformats-officedocument.presentationml.presentation
| `.rar` | RAR 归档 | application/vnd.rar
|`.rtf` | 富文本格式（RTF） | application/rtf
|`.sh` | 伯恩 shell 脚本 | application/x-sh
|`.svg` | 可缩放矢量图形（SVG）| image/svg+xml
|`.tar` | 磁带归档（TAR） | application/x-tar
|`.tif` |, .tiff 标签图像文件格式（TIFF） | image/tiff
|`.ts` | MPEG 传输流 | video/mp2t
|`.ttf` | TrueType 字体 | font/ttf
|`.txt` | 文本（通常是 ASCII 或 ISO 8859-n） | text/plain
|`.vsd` | Microsoft Visio | application/vnd.visio
|`.wav` | 波形音频格式 | audio/wav
|`.weba` | WEBM 音频 | audio/webm
|`.webm` | WEBM 视频 | video/webm
|`.webp` | WEBP 图像 | image/webp
|`.woff` | Web 开放字体格式（WOFF） | font/woff
|`.woff2` | Web 开放字体格式（WOFF） | font/woff2
|`.xhtml` | XHTML | application/xhtml+xml
|`.xls` | Microsoft Excel | application/vnd.ms-excel
|`.xlsx` | Microsoft Excel（OpenXML） | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
| `.xml` | XML RFC 7303（section 4.1）推荐使用 | application/xml，但有时仍会使用 text/xml。你可以将特定的 MIME 类型分配给具有 .xml 扩展名的文件，这取决于其内容的解释方式。例如，Atom 消息来源是 `application/atom+xml`，而`application/xml` 是默认的有效值。
|`.xul` | XUL | application/vnd.mozilla.xul+xml
|`.zip` | ZIP 归档 | application/zip
|`.3gp` | 3GPP 音视频容器 | video/3gpp；如果不包含视频则为 audio/3gpp
|`.3g2` | 3GPP2 音视频容器 | video/3gpp2；如果不包含视频则为 audio/3gpp2
|`.7z` | 7-zip 归档 | application/x-7z-compressed
