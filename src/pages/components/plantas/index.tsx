import Image from 'next/image'
import { MagnifyingGlass, X } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles.module.scss'
export default function Plantas() {
  const [image, setChangeImage] = useState('/1quarto.png')
  const [modalImage, setModalImage] = useState(false)

  function handleChangeImage(value: string) {
    setChangeImage(value)
  }

  function handleModalImage() {
    setModalImage(!modalImage)
  }

  return (
    <div className={styles.container} id="empreendimento">
      <div className={styles.title}>
        <h1>Plantas</h1>
      </div>
      <div className={styles.plantas}>
        <div className={!modalImage ? styles.planta : styles.plantaModal}>
          <Image
            alt="1 quarto"
            src={image}
            width={1153}
            height={1081}
            loading="lazy"
          />
          {!modalImage ? (
            <MagnifyingGlass
              size={32}
              className={styles.lupa}
              onMouseUp={handleModalImage}
            />
          ) : (
            <X size={32} className={styles.lupa} onMouseUp={handleModalImage} />
          )}
        </div>
        <div className={styles.button}>
          <div className={styles.title2}>
            <h1>Plantas</h1>
          </div>
          <button
            className={image === '/3quarto.png' ? styles.Active : ''}
            onClick={() => handleChangeImage('/3quarto.png')}
          >
            3 quartos
          </button>
          <button
            className={image === '/2quarto.png' ? styles.Active : ''}
            onClick={() => handleChangeImage('/2quarto.png')}
          >
            2 quartos
          </button>
          <button
            className={image === '/cobertura.png' ? styles.Active : ''}
            onClick={() => handleChangeImage('/cobertura.png')}
          >
            Cobertura
          </button>
        </div>
      </div>
    </div>
  )
}
