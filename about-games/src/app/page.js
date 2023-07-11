import './assets/fonts/fonts.css'

export default function Home() {

  const titleStyle = "text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-5 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pl-2 pr-2 "

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col md:flex-row'>
        <span className={titleStyle + 'spacing-effect'}>is</span>

        <span className={titleStyle + 'spacing-effect'}>this</span>

        <div className='flex flex-col'>
          <span className={titleStyle + 'flip-1'}>Entertaining?</span>
          <span className={titleStyle + 'flip-2'}>Boring?</span>
        </div>
      </div>
    </main>
  )
}
