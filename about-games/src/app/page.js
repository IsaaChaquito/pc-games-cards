import './assets/fonts/fonts.css'

export default function Home() {

  const titleStyle = "text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-8 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col md:flex-row'>
        <span id='ui' className={titleStyle}>is</span>

        <span id='ui' className={titleStyle}>this</span>

        <span id='ui' className={titleStyle}>Entertaining?</span>

      </div>
    </main>
  )
}
