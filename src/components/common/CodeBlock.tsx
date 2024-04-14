import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  codeString: string;
  language: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ codeString, language }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;