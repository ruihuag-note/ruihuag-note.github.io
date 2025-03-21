import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import axios from 'axios'

export function Home() {
  const [md, setMd] = React.useState('')
  const init = async () => {
    try {
      // const url = './test.md'
      // const url = './比较.md'
      // const url  = '../../note/CSS/比较.md'
      // const url  = '../note/CSS/比较.md'
      const url = './note/CSS/比较.md'
      const res: any = await axios.get(url)
      console.log(res.data)
      setMd(res.data)
    } catch (error) {
      console.log(error)
    }
   
  }
  React.useEffect(() => {
    init()
  }, [])
  return (
    <div className='home'>
      <Markdown
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkMath]}
        children={md}
        // children={markdown}
        components={{
          img(props) {
            const { src, node, ...rest } = props
            console.log(src)
            return (
              <img
                // src={require('../../ruihuag-note.github.io' + src)}
                {...rest}
              />
            )
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
