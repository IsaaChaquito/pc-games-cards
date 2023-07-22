
import './toast.css'

export const MyToast = ({
  type,
  text,
  isOpen,
  setIsOpen
}) =>{

  const toastType = {
    info: {color: '#0ea5e9', border:'toast-border-info'},
    success: {color: '#22c55e', border: 'toast-border-success'},
    warning: {color: '#f49d0b', border: 'toast-border-warning'},
    danger: {color: '#ef4444', border: 'toast-border-danger'},
    '': {color: '#000000', border: 'toast-border-default'},
  }



  return(
    <div className={'toast-wrapper ' + toastType[type]?.border + (isOpen ?' show-toast' : '')} >
      <section className='toast-close-button' title='Close'>
        <svg onClick={()=>setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> 
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </section>
      
      <section className='toast-content'>
        <i className='toast-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" fill={toastType[type]?.color} width={34} height={34} viewBox="0 0 24 24">
            <g> <path  fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
            </g>
          </svg>
        </i>
        <span className='toast-h-line'></span>
        <span>{text}</span>
      </section>
      <section><button></button></section>
    </div>
  )
}