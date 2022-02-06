import SyntaxHighlighter from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015'

type Props = {
  className: string
}

const CodeBlock: React.FC<Props> = ({ className, ...otherProps }) => {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''
  return (
    <SyntaxHighlighter
      style={style}
      language={language}
      PreTag="div"
      showLineNumbers={language !== 'shell' ? true : false}
      className=" rounded prose-code:!bg-[#1E1E1E]"
    >
      {String(otherProps.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
