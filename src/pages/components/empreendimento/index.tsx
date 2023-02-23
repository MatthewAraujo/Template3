import Image from 'next/image'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/scrollbar'

import styles from './styles.module.scss'

import 'swiper/scss'

export default function Empreendimento() {
  return (
    <div className={styles.container} id="empreendimento">
      <div className={styles.containerLeft}>
        <div className={styles.title}>
          <h1>Empreendimento</h1>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            viverra nisl, id nullam et morbi. Ornare ut est faucibus nec ut
            curabitur sagittis. Dui risus amet, sit morbi aliquet. In
            consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis.
            Bibendum nulla cursus urna habitant integer in orci, amet. Elementum
            habitasse sem amet sit mi est. Aenean dui, odio malesuada
            ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis
            diam leo duis. Amet massa, sit rhoncus leo laoreet habitant. Aliquam
            nullam risus duis curabitur.
          </p>
        </div>
        <div className={styles.containerSwiper}>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            scrollbar={{
              draggable: true,
              snapOnRelease: true,
            }}
            modules={[Scrollbar]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src="/conforto.png"
                alt="Sala"
                width={194}
                height={341}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src="/estar.png"
                alt="Sala"
                width={194}
                height={341}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src="/sala2.png"
                alt="Sala"
                width={194}
                height={341}
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.containerRight}>
        <Swiper spaceBetween={0} slidesPerView={1} className={styles.swiper}>
          <SwiperSlide>
            <Image
              src="/conforto.png"
              alt="Sala"
              width={194}
              height={341}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/estar.png"
              alt="Sala"
              width={194}
              height={341}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/sala2.png"
              alt="Sala"
              width={194}
              height={341}
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
