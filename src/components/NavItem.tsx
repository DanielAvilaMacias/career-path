import { Button, makeStyles, tokens } from '@fluentui/react-components'
import type { ReactElement } from 'react'

const useStyles = makeStyles({
  active: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
})

interface NavItemProps {
  icon: ReactElement
  label: string
  active: boolean
  onClick: () => void
}

export function NavItem({ icon, label, active, onClick }: NavItemProps) {
  const styles = useStyles()

  return (
    <Button
      appearance={active ? 'subtle' : 'subtle'}
      icon={icon}
      className={active ? styles.active : undefined}
      onClick={onClick}
      style={{ justifyContent: 'flex-start', width: '100%' }}
    >
      {label}
    </Button>
  )
}
