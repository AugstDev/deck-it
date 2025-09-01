import React from 'react'

export default function CardCreator() {
  return (
    <main>
      <nav className='flex text-[1.2rem] justify-between px-20 py-5 items-center outline-1 outline-gray-500'>
        <div className="logo">
          <span><b>Deck-it</b>/ Card Creator</span>
        </div>
        <ul className='flex gap-10 '>
          <li>Save Draft</li>
          <li>Publish Card</li>
        </ul>
      </nav>
      <div className="content flex">

      <div className="flex flex-col w-90 h-screen gap-5 left-bar p-4 border-r border-gray-500">
        <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-blue-400 to-green-300'>My Decks</h2>
        <div className="cardlist:selected flex flex-col bg-stone-900 gap-1 p-4 rounded-[10px] outline-3 outline-stone-800">
          <span className='title text-[1.2rem] font-semibold'>JavaScript Fundamentals</span>
          <span className='description text-[.9rem] text-stone-400 font-semibold'>12 cards • Last edited 2h ago</span>
        </div>
        <h2 className='text-[1.2rem] text-stone-400'>RECENT CARDS</h2>
        <div className="cardlist flex flex-col bg-zinc-900 gap-1 p-4 rounded-3xl outline-3 outline-zinc-800">
          <span className='title text-[1.2rem] font-semibold'>Product Price Comparison</span>
          <span className='description text-[.9rem] text-stone-500 font-semibold'>34 cards • 2d ago</span>
        </div>
      </div>

      <div className="flex flex-col items-center card-preview w-full mt-30 gap-1">
        <h1 className='text-4xl font-bold bg-gradient-to-br from-purple-500 via-blue-400 to-green-300 text-transparent bg-clip-text'>Create New Card</h1>
        <span className='text-stone-500 text-[1.2rem]'>Design your perfect study card</span>
        <div className="card-front mt-5">
        <span className='text-stone-300 text-[1.2rem]'>Card Front</span>
        <div className="card-1 w-fit bg-stone-400 rounded-2xl p-5">
          <img src="./" alt="_Some Image" />
          <textarea className='p-4 text-white w-120 field-sizing-content resize-none' placeholder="What is the difference between let, const, and var in Javascript" title="text" id="text"/>
        </div>
        </div>
      </div>

      </div>
    </main>
  )
}
