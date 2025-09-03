import React from 'react'

export default function CardCreator() {
  return (
    <main>
      {/*This div below is from the Navigation Bar  */}
      <nav className='flex text-[1.2rem] justify-between px-20 py-5 items-center outline-1 outline-gray-500'>
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
      <div className="left-bar border-l-2">
        <h2 className='gradient-text'>Card Properties</h2>
        <span className='description'>Customize your study card</span>
        <div className="card-color">
          <span>BACKGROUND</span>
          <div className="front-color">
            <span>Front Background</span>
            <div>
              <button title='color' type='button'/>
            </div>

          </div>
        </div>

      </div>

    </div>

    </main>
  )
}
