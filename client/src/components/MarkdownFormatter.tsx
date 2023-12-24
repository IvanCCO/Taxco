import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkToc from 'remark-toc'

interface MarkdownText {
  text: string;
}

export default function MarkdownFormatter({ text }: MarkdownText) {
  return (
    <Markdown
      children={text}
      remarkPlugins={[remarkGfm, remarkToc]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={prism}
            />
          ) : (
            <code {...rest} className={"bg-gray-200 px-1"}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1 className="text-3xl font-semibold my-8" {...props}>
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1 className="text-xl font-semibold my-6" {...props}>
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1 className="text-lg font-semibold my-4" {...props}>
              {props.children}
            </h1>
          );
        },
        h4(props) {
          return (
            <h1 className="text-base font-bold my-2" {...props}>
              {props.children}
            </h1>
          );
        },
        ul(props) {
          return (
            <ul className="list-disc ml-4 text-sm" {...props}>
              {props.children}
            </ul>
          );
        },
        li(props) {
          return (
            <li className="my-6" {...props}>
              {props.children}
            </li>
          );
        },
        p(props) {
          return (
            <p className="leading-relaxed" {...props}>
              {props.children}
            </p>
          );
        },
        blockquote(props) {
          return (
            <blockquote className="border-l-4 border-gray-500 pl-4 italic">
              {props.children}
            </blockquote>
          );
        },
        a(props) {
          return (
            <a href={props.href} className="text-blue-600 font-semibold">
              {props.children}
            </a>
          );
        },
      }}
    />
  );
}

// Tabela não funciona at all
// Table of contents tbm não funciona
// Trecho destaco tambem não funciona `react-markdown`
