import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

function BlogPost({ markdownFiles }) {
  return (
    <>
      <Head>
        <title>
          Region Intelligence - Blog | Our platform revolutionizes the way you
          access and handle vital information, making your decision-making
          process quicker and more informed. Step into the future of property
          development.
        </title>
        <meta
          name='description'
          content=' No more navigating through complex research. With Region Intelligence,
      everything you need is just a few clicks away. Our platform
      revolutionizes the way you access and handle vital information,
      making your decision-making process quicker and more informed.
      Step into the future of property development - Join Region Intelligence
      today!'
        />
      </Head>
      <div className='w-full flex flex-col items-center'>
        <section className='flex flex-col justify-center items-start'>
          {markdownFiles.map((markdown, index) => (
            <article
              className='w-full max-w-[800px] mt-8 bg-gray-100 p-4 rounded-sm'
              key={index}>
              <ReactMarkdown components={customComponents}>
                {markdown}
              </ReactMarkdown>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default BlogPost

// fetch markdown files from GitHub repo
async function fetchMarkdownFileList() {
  const response = await fetch(
    'https://api.github.com/repos/DariusGarcia/markdown/contents/'
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch file list: ${response.statusText}`)
  }
  const fileList = await response.json()
  return fileList
}

async function fetchMarkdownFiles() {
  const fileList = await fetchMarkdownFileList()
  const markdownFiles = await Promise.all(
    // filter for markdown files
    fileList
      .filter((file) => file.name.endsWith('.md'))
      .map(async (file) => {
        const response = await fetch(file.download_url)
        return response.text()
      })
  )

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

// markdown styling for blog post
const customComponents = {
  p: ({ node, ...props }) => <p className='text-gray-700' {...props} />,
  h1: ({ node, ...props }) => (
    <h1 className='text-2xl font-bold mt-4 mb-2' {...props} />
  ),
  ul: ({ node, ...props }) => <ul className='list-disc ml-4' {...props} />,
  li: ({ node, ...props }) => <li className='mb-2' {...props} />,
}
