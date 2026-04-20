import {
  OverlayDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  makeStyles,
  tokens,
} from '@fluentui/react-components'
import { PersonRegular, ClipboardTaskRegular, BriefcaseRegular } from '@fluentui/react-icons'
import { NavItem } from './NavItem.tsx'

const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '220px',
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground2,
    padding: tokens.spacingVerticalS,
    gap: tokens.spacingVerticalXS,
    boxSizing: 'border-box',
  },
  overlayDrawer: {
    width: '220px',
  },
  overlayBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    padding: tokens.spacingVerticalS,
  },
})

export type NavPage = 'my-career' | 'assessments' | 'open-positions'

interface AppDrawerProps {
  open: boolean
  overlay: boolean
  activePage: NavPage
  onNavigate: (page: NavPage) => void
  onDismiss: () => void
}

const navItems = (
  activePage: NavPage,
  onNavigate: (page: NavPage) => void
) => (
  <>
    <NavItem
      icon={<PersonRegular />}
      label="My Career"
      active={activePage === 'my-career'}
      onClick={() => onNavigate('my-career')}
    />
    <NavItem
      icon={<ClipboardTaskRegular />}
      label="Assessments"
      active={activePage === 'assessments'}
      onClick={() => onNavigate('assessments')}
    />
    <NavItem
      icon={<BriefcaseRegular />}
      label="Open Positions"
      active={activePage === 'open-positions'}
      onClick={() => onNavigate('open-positions')}
    />
  </>
)

export function AppDrawer({ open, overlay, activePage, onNavigate, onDismiss }: AppDrawerProps) {
  const styles = useStyles()

  if (!open && !overlay) return null

  if (overlay) {
    return (
      <OverlayDrawer
        open={open}
        onOpenChange={(_, { open: o }) => !o && onDismiss()}
        className={styles.overlayDrawer}
      >
        <DrawerHeader>
          <DrawerHeaderTitle>Menu</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody className={styles.overlayBody}>
          {navItems(activePage, onNavigate)}
        </DrawerBody>
      </OverlayDrawer>
    )
  }

  return (
    <aside className={styles.sidebar}>
      {navItems(activePage, onNavigate)}
    </aside>
  )
}
