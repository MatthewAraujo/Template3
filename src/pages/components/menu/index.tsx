import styles from './styles.module.scss'
interface MenuProps {
  id: number
  href: string
  children: string
  isActive: boolean
  setIsActive: (id: number) => void
  setModal: (modal: boolean) => void
}
export default function Menu({
  id,
  href,
  children,
  isActive,
  setIsActive,
  setModal,
}: MenuProps) {
  return (
    <a
      className={`${isActive ? styles.active : ''} ${styles.link}`}
      onClick={() => {
        setIsActive(id)
        setModal(false)
      }}
      href={href}
    >
      {children}
    </a>
  )
}
