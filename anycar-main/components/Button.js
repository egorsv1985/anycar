import styles from '../styles/Button.module.scss'

export default function Button({text, outlined, onClick, type, white, arrow, disabled}) {
  return (
    <>
      {!white &&
        <button
          className={`${styles.button} ${outlined ? styles.outlined : ''}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      }

      {white &&
        <button
          className={`${styles.button} ${styles.white}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          <span>{text}</span>
          {arrow &&
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.9375 6.13399H12.0563L8.65312 2.04649C8.49399 1.85503 8.41744 1.60821 8.44029 1.36031C8.46315 1.11241 8.58355 0.883741 8.775 0.724611C8.96645 0.565482 9.21328 0.488924 9.46118 0.51178C9.70908 0.534636 9.93775 0.655033 10.0969 0.846487L14.7844 6.47149C14.8159 6.51623 14.8441 6.56323 14.8688 6.61211C14.8688 6.65899 14.8687 6.68711 14.9344 6.73399C14.9769 6.84148 14.9991 6.9559 15 7.07149C14.9991 7.18707 14.9769 7.30149 14.9344 7.40899C14.9344 7.45586 14.9344 7.48399 14.8688 7.53086C14.8441 7.57974 14.8159 7.62675 14.7844 7.67149L10.0969 13.2965C10.0087 13.4023 9.89835 13.4874 9.77358 13.5458C9.64882 13.6041 9.51273 13.6342 9.375 13.634C9.15595 13.6344 8.94367 13.5581 8.775 13.4184C8.68007 13.3397 8.6016 13.243 8.54408 13.1339C8.48656 13.0249 8.45113 12.9055 8.43981 12.7827C8.42849 12.6599 8.4415 12.5361 8.47811 12.4183C8.51471 12.3006 8.57419 12.1912 8.65312 12.0965L12.0563 8.00899H0.9375C0.68886 8.00899 0.450402 7.91021 0.274587 7.7344C0.0987711 7.55858 0 7.32013 0 7.07149C0 6.82285 0.0987711 6.58439 0.274587 6.40857C0.450402 6.23276 0.68886 6.13399 0.9375 6.13399Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="15" y1="7.0709" x2="5.58793e-08" y2="7.0709" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4CB7CC"/>
                <stop offset="1" stopColor="#52DAAC"/>
              </linearGradient>
            </defs>
          </svg>
          }
        </button>
      }
    </>
  )
}