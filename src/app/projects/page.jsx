//Implements the same special card used in skills to a greater degree. Each project is sectioned off with their pictures
//for readability

import Image from "next/image"

export default function Projects() {
  return (
    <div className="bg-[#0e0e0e] h-[200vh] w-full text-white content">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-7xl font-bold text-center text-black mb-26">Projects</h1>

        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            PC hardware experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            <div className="relative w-full h-64 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/pc1.jpg"
                alt="PC build 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            Taking apart old hardware that my family bought was one of my favorite ways to pass time when I was younger. I think I
            entered the space of building my own computers a little later than most, I did not even know that video games could be
            run on a pc until high school. Later on in college I was able to expereince the process for myself. I was fortunage enough
            to have saved enough money for a fairly top of the line computer so it lasted a fair few years. Eventually, I decided
            to upgrade after I had made more money through my first job. Not long after, I decided to move to a different country
            to continue my education. It was difficult to bring the entire computer with me, so I gathered the parts from my first 
            build and made up the difference when I arrived. It was my first experince putting together old parts with more recent
            ones, but hours of research and my experience building my first computer meant I was able to boot it up with no issues.
            When I graduated, I decided to leave this second computer with a cousin who needed it. My newer computer in the previous
            country was bought by a friend, so I was able to create my newest build with the most recent parts. A process that took
            me half of a day, and meticulously following video tutorials, evolved into a process I was able to complete in barely
            the span of an evening, with no noise around except for my favorite music. This was helpful when I was in my first job,
            Overall, where I was able to quickly grasp the concepts and perform the work quickly. I was even made a liason between
            the companies hardware team and my own service dispatch team. I was able to turn what was a hobby intended for my own 
            entertainment into a a promtion in my first job and a source of income through selling my previous old computer 
          </p>
        </div>

        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-12">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Card Game: FU
          </h2>

          <div className="flex justify-center">
            <div className="relative w-full h-100 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/fu1.png"
                alt="start screen"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            This project was my first attempt at building a competitive computer. It's based off of my favorite card game to play
            with friends. The game is fairly complex, with various rules. I was not able to incorporate every rule because of this,
            but I was able to make a sold approximation
          </p>
          <div className="flex justify-center">
            <div className="relative w-300 h-100 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/fu2.png"
                alt="game screen"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            In the simplest terms, the game is about playing higher cards than the opponent. If somebody is unable to play a higher
            card, they must take all cards that have been played. The one to get rid of all cards they own after emptying the deck
            is the winner
          </p>
          <div className="flex justify-center">
            <div className="relative w-300 h-200 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/fu3.png"
                alt="gameplay"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            While it was quite in-depth, I didn't have the deepest knowledge of decison structures. I was unable to implement any 
            real dynamic thinking from the opponent, relying mostly on if/else statements. The game is quite functional, and a close
            approximation to the real thing, for a first attempt it is more than adequate
          </p>
          <div className="flex justify-center">
            <div className="relative w-300 h-100 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/fu4.png"
                alt="gameplay"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            link to project: https://github.com/jooooooooooooooooo-web/Card-Games/tree/main
          </p>
        </div>

        <div className="bg-[#a8b2d1] rounded-lg shadow-sm p-8 mt-12">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Turtle Races
          </h2>

          <div className="flex justify-center">
            <div className="relative w-full h-125 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/turtle1.png"
                alt="Turtle race 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            This was a project I made the very next year, flexing the ability to create simple animations along with active controls.
            It involves a simple race between yourself and a computer. Although movement is automatic, there are still ways to influence
            the game, such as using a speed boost or making sure you don't slip on the wet parts of the track
          </p>
          <div className="flex justify-center">
            <div className="relative w-full h-125 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/turtle3.png"
                alt="Turtle race 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            A distinct difference between this and my first attempt at a game is the use of multiple classes and funcitons. My first
            game was essentially one long main function, while this one dedicates different activities to different functions
          </p>
          <div className="flex justify-center">
            <div className="relative w-full h-125 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/turtle4.png"
                alt="Turtle race 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            The program was able to read certain points of the map that we created, this would grant one of the special powerups at random.
            I was part of the effort for this, and it was tricky trying to see where exactly on the grid to place these. Of particular
            difficulty was making sure it was wide enough to even get the power up
          </p>
          <div className="flex justify-center">
            <div className="relative w-full h-125 rounded-md overflow-hidden bg-gray-100">
              <Image
                src="/turtle5.png"
                alt="Turtle race 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-1xl mb-6 text-black mt-4">
            Of particular difficulty was the rate at which the opponent would use their own powerups. It was strange trying to get a
            good ratio going, as it seemed the opponent would burn all of their items immediately. I made the formula end up around
            6% to be able to get consistent usage towards the end of the race. It was overall worth it, as it increased the challenge
          </p>
          <p className="text-1xl mb-6 text-black mt-4">
            link to this project: https://github.com/jooooooooooooooooo-web/At-the-races
          </p>
        </div>
      </div>
    </div>
  )
}