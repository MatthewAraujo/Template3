import Image from 'next/image'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Menu from './menu'
import styles from './styles.module.scss'

const links = [
  {
    id: 0,
    href: '#home',
    text: 'Home',
  },
  {
    id: 1,
    href: '#empreendimento',
    text: 'Empreendimento',
  },
  {
    id: 2,
    href: '#localizacao',
    text: 'Localização',
  },
  {
    id: 3,
    href: '#plantas',
    text: 'Plantas',
  },
  {
    id: 4,
    href: '#contato',
    text: 'Contato',
  },
]

export default function Header() {
  const [modal, setModal] = useState(false)
  const [isActive, setIsActive] = useState(0)
  useEffect(() => {
    const map = {
      home: 0,
      empreendimento: 1,
      lazer: 2,
      localizacao: 3,
      plantas: 4,
      contato: 5,
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(map[entry.target.id])
        }
      })
    })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })
  })

  function handleOpenModal() {
    setModal(!modal)
  }
  function handleCloseModal() {
    setModal(!modal)
  }

  return (
    <header className={styles.container}>
      <Image
        src="/logomobile.png"
        alt="logo"
        width={170}
        height={60}
        loading="lazy"
      />
      <nav className={!modal ? styles.nav : styles.active}>
        <Image
          src="/logomenu.png"
          alt="logo"
          width={170}
          height={60}
          loading="lazy"
        />
        {links.map((link) => (
          <Menu
            key={link.id}
            id={link.id}
            href={link.href}
            isActive={link.id === isActive}
            setIsActive={setIsActive}
            setModal={setModal}
          >
            {link.text}
          </Menu>
        ))}
      </nav>
      {!modal ? (
        <Image
          src="/Modal.png"
          alt="modal"
          width={40}
          height={40}
          loading="lazy"
          onClick={handleOpenModal}
        />
      ) : (
        <X className={styles.xis} size={30} onClick={handleCloseModal} />
      )}
    </header>
  )
}
