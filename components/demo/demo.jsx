export default function DemoVideo() {
  return (
    <section className='mt-24 mb-12 h-full w-full'>
      <div className='flex justify-center h-full'>
        <div className='flex justify-center h-[70vh] md:h-full w-full p-2 xl:max-w-7xl md:p-8'>
          {/* <iframe
            src='https://streamable.com/5vexs6'
            className='w-full md:h-[600px] h-full'
            allow='fullscreen'
          /> */}
          <iframe
            src='https://www.youtube.com/embed/0pkBpgMnk8s?si=Klq4p8UTji1OW297'
            className='w-full md:h-[600px] h-full'
            title='City Planning Guide Demo Video'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
