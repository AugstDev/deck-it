import React from 'react'

export default function CardCreator() {
  return (
    <main>
      {/*This div below is from the Navigation Bar  */}
      <nav className='sticky top-0 bg-black z-10 flex text-[1.2rem] justify-between px-20 py-5 items-center outline-1 outline-gray-500'>
        <div className="logo">
          <span><b>Deck-it</b>/ Card Creator</span>
        </div>

        <div className='flex gap-10'>
          <button className='dark-button'>Save Draft</button>
          <button className='gradient-button'>Publish Card</button>
        </div>

      </nav>

      <div className="content flex">

        {/*This div below is from Left Bar  */}
        <div className="left-bar">
          <h2 className='gradient-text'>My Decks</h2>

          <div className="cardlist-selected">
            <span className='title text-[1.2rem] font-semibold'>JavaScript Fundamentals</span>
            <span className='description'>12 cards • Last edited 2h ago</span>
          </div>

          <h2 className='text-[1.2rem] text-stone-400'>RECENT CARDS</h2>

          <div className="cardlist flex flex-col bg-zinc-900 gap-1 p-4 rounded-3xl outline-3 outline-zinc-800">
            <span className='title text-[1.2rem] font-semibold'>Product Price Comparison</span>
            <span className='description text-[.9rem] text-stone-500 font-semibold'>34 cards • 2d ago</span>
          </div>

        </div>


        {/*This div below is from Create New Card  */}
        <div className="flex flex-col items-center card-preview w-full mt-30 gap-12">
          <div className='title-bar'>
            <h1 className='text-4xl font-bold bg-gradient-to-br from-purple-500 via-blue-400 to-green-300 text-transparent bg-clip-text'>Create New Card</h1>
            <span className='text-stone-500 text-[1.2rem]'>Design your perfect study card</span>
          </div>

          <div className="card-front">
            <span className='text-stone-300 text-[1.2rem]'>Card Front</span>
            <div className="card-1 ">
              <img className='w-1/4 rounded-4xl' src="./images/blitzcrank.jpg" alt="_Some Image" />
              <textarea className='py-2 mt-5 text-xl text-white text-center w-130 field-sizing-content resize-none' defaultValue="What is the name of this champion in League of Legends?" title="text" id="text-front"/>
            </div>
          </div>

          <div className="card-back">
            <span className='text-stone-300 text-[1.2rem]'>Card Back</span>
            <div className="card-2">
              <img className='w-1/4 rounded-4xl' src="./images/blitzcrank.jpg" alt="_Some Image" />
              <textarea className='p-4 text-white text-2xl font-bold text-center w-130 field-sizing-content resize-none' defaultValue="Blitzcrank" title="text" id="text-back"/>
            </div>
          </div>
        </div>

        {/*This div below is from Right Bar  */}
        <div className="right-bar border-l-2">
          <h2 className='gradient-text'>Card Properties</h2>
          <span className='description'>Customize your study card</span>

          <div className="card-color">
            <span>BACKGROUND</span>

            <div className="front-color mt-4">
              <span className='text-stone-400'>Front Background</span>

              <div className='flex gap-2 mt-3'>
                <button className='w-8 h-8 bg-gradient-to-br from-[#A855F7] to-[#3B82F6] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#14B8A6] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#EC4899] to-[#EF4444] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#4B5563] to-[#1F2937] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-[8px]' title='color' type='button'/>
              </div>

            </div>

            <div className="back-color mt-4">
              <span className='text-stone-400'>Back Background</span>

              <div className='flex gap-2 mt-3'>
                <button className='w-8 h-8 bg-gradient-to-br from-[#A855F7] to-[#3B82F6] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#14B8A6] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#EC4899] to-[#EF4444] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#4B5563] to-[#1F2937] rounded-[8px]' title='color' type='button'/>
                <button className='w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-[8px]' title='color' type='button'/>
              </div>

            </div>
          </div>

          <div className="risk bg-zinc-600 w-full rounded-full h-0.5 "/>

          {/*This div below is from Content Panel  */}
          <div className="addContent flex flex-col gap-4">
            <span>CONTENT</span>
            <div className="create-panel cursor-pointer">
              <span className='card-icon from-zinc-500 to-stone-400 leading-8'>T</span>
              <div className="titleDesc flex flex-col">
                <span className=''>Add Text</span>
                <span className='text-stone-400 text-[.9rem]'>Add Text to your cards</span>
              </div>
            </div>

            <div className="create-panel cursor-pointer">
              <span className='card-icon from-purple-500 to-pink-400 leading-6'>📷</span>
              <div className="titleDesc flex flex-col">
                <span className=''>Add Image</span>
                <span className='text-stone-400 text-[.9rem]'>JPG, PNG, GIF up to 5MB</span>
              </div>
            </div>

            <div className="create-panel cursor-pointer">
              <span className='card-icon from-blue-500 to-cyan-500 leading-9'>🎵</span>
              <div className="titleDesc flex flex-col">
                <span className=''>Add Audio</span>
                <span className='text-stone-400 text-[.9rem]'>MP3, WAV up to 10MB</span>
              </div>
            </div>
          </div>

          <div className="labels flex flex-col gap-3">
            <span className=''>LABELS & TAGS</span>
            <input className='create-panel' title="Labels" placeholder="Add Tags (press Enter)" type="text"></input>
            <div className="show-label flex justify-between scroll-auto">
              <button className='variable bg-gradient-to-r outline-purple-500/70 from-purple-500/40 to-pink-500/40 rounded-full w-fit'>JavaScript</button>
              <button className='variable bg-gradient-to-r outline-cyan-500/70 from-cyan-500/40 to-blue-500/40 rounded-full w-fit'>Variables</button>
              <button className='variable bg-gradient-to-r outline-lime-500/70 from-lime-500/40 to-green-500/40 rounded-full w-fit'>Programming</button>
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}
