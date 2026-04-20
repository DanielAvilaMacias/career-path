import { useState, useEffect, type ReactElement } from 'react'
import { makeStyles } from '@fluentui/react-components'
import { NavBar } from './components/NavBar.tsx'
import { AppDrawer, type NavPage } from './components/AppDrawer.tsx'
import { MyCareer } from './pages/MyCareer.tsx'
import { Assessments } from './pages/Assessments.tsx'
import { OpenPositions } from './pages/OpenPositions.tsx'

const MOBILE_BREAKPOINT = 768

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    overflow: 'hidden',
    minHeight: 0,
  },
  content: {
    overflow: 'hidden',
    minWidth: 0,
  },
})

const pages: Record<NavPage, ReactElement> = {
  'my-career': <MyCareer />,
  'assessments': <Assessments />,
  'open-positions': <OpenPositions />,
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

function App() {
  const styles = useStyles()
  const isMobile = useIsMobile()
  const [drawerOpen, setDrawerOpen] = useState(!isMobile)
  const [activePage, setActivePage] = useState<NavPage>('my-career')

  useEffect(() => {
    setDrawerOpen(!isMobile)
  }, [isMobile])

  return (
    <div className={styles.root}>
      <NavBar onMenuToggle={() => setDrawerOpen(o => !o)} />
      <div className={styles.body}>
        <AppDrawer
          open={drawerOpen}
          overlay={isMobile}
          activePage={activePage}
          onNavigate={(page) => {
            setActivePage(page)
            if (isMobile) setDrawerOpen(false)
          }}
          onDismiss={() => setDrawerOpen(false)}
        />
        <main className={styles.content}>
          {pages[activePage]}
        </main>
      </div>
    </div>
  )
}

export default App
