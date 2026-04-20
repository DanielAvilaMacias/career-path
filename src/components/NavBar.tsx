import { Avatar, Button, Text, makeStyles, tokens } from '@fluentui/react-components'
import { NavigationRegular } from '@fluentui/react-icons'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '48px',
    padding: `0 ${tokens.spacingHorizontalM}`,
    backgroundColor: tokens.colorBrandBackground,
    boxShadow: tokens.shadow4,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  title: {
    color: tokens.colorNeutralForegroundOnBrand,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase400,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  userName: {
    color: tokens.colorNeutralForegroundOnBrand,
    fontSize: tokens.fontSizeBase200,
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
})

interface NavBarProps {
  onMenuToggle: () => void
}

export function NavBar({ onMenuToggle }: NavBarProps) {
  const styles = useStyles()

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <Button
          appearance="transparent"
          icon={<NavigationRegular color="white" />}
          onClick={onMenuToggle}
        />
        <Text className={styles.title}>Career Path</Text>
      </div>
      <div className={styles.right}>
        <Text className={styles.userName}>Daniel Macias</Text>
        <Avatar name="Daniel Macias" color="dark-red" size={32} />
      </div>
    </header>
  )
}
