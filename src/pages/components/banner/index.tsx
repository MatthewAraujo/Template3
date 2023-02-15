import Image from 'next/image'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

import 'swiper/css'

export default function Banner() {
  return (
    <div className={styles.banner} id="home">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.image}>
            <Image
              src="/conforto.png"
              alt="Sala"
              width={1590}
              height={1081}
              loading="lazy"
            />
            <div className={styles.content}>
              <h1>aposte no</h1>
              <h1>
                <strong>conforto</strong> sem perder
              </h1>
              <h1>
                a <strong>elegância</strong>
              </h1>
              <button>
                <div>Marque uma visita</div>
                <div>
                  <Image src="/vetor.png" alt="" width={12} height={22} />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image}>
            <Image
              src="/lazer.png"
              alt="Sala"
              width={1590}
              height={1081}
              loading="lazy"
            />
            <div className={styles.content}>
              <h1>
                <strong>Lazer</strong> à um passo
              </h1>
              <button>
                <div>Marque uma visita</div>
                <div>
                  <Image src="/vetor.png" alt="" width={12} height={22} />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image}>
            <Image
              src="/memorias.png"
              alt="Sala"
              width={1590}
              height={1081}
              loading="lazy"
            />
            <div className={styles.content}>
              <h1>Crie memórias</h1>
              <h1>
                com <strong>amigos</strong>
              </h1>
              <h1>
                e <strong>família</strong>
              </h1>
              <button>
                <div>Marque uma visita</div>
                <div>
                  <Image src="/vetor.png" alt="" width={12} height={22} />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Image
        src="/frame1.png"
        alt=""
        width={683}
        height={11137}
        loading="lazy"
        className={styles.frame1}
      />
    </div>
  )
}
