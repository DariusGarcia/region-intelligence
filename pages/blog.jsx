import React from 'react'
import ReactMarkdown from 'react-markdown'

const customComponents = {
  p: ({ node, ...props }) => <p className='text-gray-700' {...props} />,
  h1: ({ node, ...props }) => (
    <h1 className='text-2xl font-bold mt-4 mb-2' {...props} />
  ),
  ul: ({ node, ...props }) => <ul className='list-disc ml-4' {...props} />, // Apply a disc-style bullet point
  li: ({ node, ...props }) => <li className='mb-2' {...props} />,
  // Add styling for other Markdown elements as needed
}

function BlogPost({ markdownFiles }) {
  return (
    <div className='w-full'>
      <article>
        <ReactMarkdown components={customComponents}>
          {markdownFiles}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default BlogPost

async function fetchMarkdownFiles() {
  const response = await fetch(
    'https://raw.githubusercontent.com/DariusGarcia/markdown/main/post.md'
  )

  const markdownFiles = await response.text()
  console.log(markdownFiles)
  return markdownFiles
}

export async function getStaticProps() {
  const markdownFiles = await fetchMarkdownFiles()
  return {
    props: {
      markdownFiles,
    },
  }
}
