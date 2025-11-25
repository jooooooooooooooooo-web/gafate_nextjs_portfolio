type SkillQualities = {
  name: string
  value: number
}

function SCard({ name, value }: SkillQualities) {
  return (
    <div className="w-full flex items-center gap-6 py-4">
      {/* bigger, bold label */}
      <div className="w-56 text-black font-bold text-lg">{name}</div>

      {/* larger progress bar */}
      <div className="flex-1">
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="h-6 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-[#3a3d58]"
            style={{ width: `lvl ${value}` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {value >= 15 ? `lvl ${value}` : null}
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Skills(){
  return (
    // full-bleed background band; change bg color or replace with image via style
    <div
      className="w-full bg-[#e0e0e0] py-12"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#abb2d1] rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-6 text-black text-center">Skills</h1>
          <SCard name="Physical Hardware" value={75} />
          <p className="text-1xl mb-6 text-black mt-4">
            Working with Physical hardware was probably the earliest skill I developed. From cars, I evolved to computers, and I later
            learned how to work with networking devices too. I have taken apart all of my old gaming consoles from the PS1 to the PS5 
            for various reasons, from cleaning to adding storage. I have build both high end and mid-range computers, always keeping old
            parts in case they were needed. Every computer I have built has had the parts swapped around at some point, making sure all
            backend drivers were up to date and functional
          </p>
          <SCard name="Backend Programming" value={70} />
          <p className="text-1xl mb-6 text-black mt-4">
            Although I initally lacked passion in it, I polished my programming skills since I was in high school. My first class used
            simple JavaScript, and I later learned C++ upon coming to college. I have some work expereince building applicaitons using 
            C. I was exposed to even more variety of languages, such as Python and C# after the second time I entered college.
          </p>
          <SCard name="Front-end Development" value={41} />
          <p className="text-1xl mb-6 text-black mt-4">
            I have never had a particularly keen eye for design, but I do understand the importance of a strong user experience. While
            I may not be too experienced with color theory and abstraction, I have a good understanding of placement of elements.
            I have developed some mobile applications through flutter, and I have some experience with web layouts using figma, later
            implementing it with React and TailwindCSS.
          </p>
          <SCard name="Network Engineering" value={58} />
          <p className="text-1xl mb-6 text-black mt-4">
            I found a passion for networking fairly recently, but realized I was always strong with it. From connecting routers
            to tracing ethernet lines from office to office, I have found the development and physical sides fascinating. I have a CISCO
            certification for IT, and some class experience with their net+ certificate
          </p>
          <SCard name="Writing Structure" value={64} />
          <p className="text-1xl mb-6 text-black mt-4">
            It may not seem important at first, but my experience in writing should not be discounted. Being able to interpret code
            and expressing it in an easy to digest manner is why friends come to me for help with their coding. The first college I
            attended graded us on proper commenting, highligting the importance of third parties being able to understand what we code.
            I have thousands of words of short stories and essays, and I am even in the process of creating my own novel. My technical
            work always comes first, but that does not discount the usefulness of my writing
          </p>
        </div>
      </div>
    </div>
  )
}