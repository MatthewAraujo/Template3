import { Bicycle, MapPin, PawPrint, Storefront } from 'phosphor-react'
import { Bank, Park, Train } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export default function Localizacao() {
  return (
    <div className={styles.container} id="localizacao">
      <div className={styles.title}>
        <h1>Localização</h1>
        <span></span>
        <p>
          Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4185935185296!2d-43.106552582375464!3d-22.897926385798705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983f238c0e803%3A0x36d8501864605205!2sR.%20Itaperuna%2C%20100%20-%20P%C3%A9%20Pequeno%2C%20Niter%C3%B3i%20-%20RJ%2C%2024240-070!5e0!3m2!1spt-BR!2sbr!4v1679511628177!5m2!1spt-BR!2sbr" 
          referrerPolicy="no-referrer-when-downgrade"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.itens}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Storefront size={32} />
          </div>
          <div className={styles.text}>
            <span>mercado</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Park size={32} />
          </div>
          <div className={styles.text}>
            <span>parque</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <PawPrint size={32} />
          </div>
          <div className={styles.text}>
            <span>PETSHOP</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Bank size={32} />
          </div>
          <div className={styles.text}>
            <span>banco</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Bicycle size={32} />
          </div>
          <div className={styles.text}>
            <span>BICICLETÁRIO</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Train size={32} />
          </div>
          <div className={styles.text}>
            <span>estação de metrô</span>
          </div>
        </div>
      </div>
    </div>
  )
}
