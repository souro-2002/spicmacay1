import React from 'react'
import GalleryImg from './GalleryImg'

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-16 mx-auto ">
          <div className="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Journey through some auspicious moments captured in lenses</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className='picture-layout grid'>
            <GalleryImg src="24" />
            <GalleryImg src="18" />
            <GalleryImg src="5" />
            <GalleryImg src="16" />
            <GalleryImg src="19" />
            <GalleryImg src="28" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
