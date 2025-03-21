import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import { useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import './index.less'
import { isString } from 'asura-eye'

export function Markdown() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const url = location.state?.url ?? searchParams.get('url')

  const getDir = () => {
    const parts = url.split('\\')
    const folderPath = parts.slice(0, parts.length - 1).join('/')
    return folderPath || '/'
  }
  const dir = getDir()

  const [md, setMd] = React.useState('')
  const init = async () => {
    if (!url) return
    try {
      const res = await axios.get(url)
      if (res.status === 200) {
        setMd(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    init()
  }, [url])
  return (
    <div className='markdown'>
      <ReactMarkdown
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkMath]}
        children={md}
        components={{
          img(props) {
            const { src, node, ...rest } = props
            const getSrc = () => {
              if (isString(src) && /^\.\//.test(src)) {
                return src.replace(/^\.\//, '/' + dir + '/')
              }
              return src
            }
            return <img src={getSrc()} {...rest} />
          },
          code({ children, className, node, ...rest }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                className={'code-lang ' + className}
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={oneDark}
              />
            ) : (
              <code {...rest} className={'code-no-lang ' + (className || '')}>
                {children}
              </code>
            )
          },
        }}
      />
    </div>
  )
}
