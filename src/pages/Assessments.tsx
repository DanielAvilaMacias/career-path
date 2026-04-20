import { useState } from 'react'
import { makeStyles, tokens, Text, Button } from '@fluentui/react-components'
import { AddRegular } from '@fluentui/react-icons'
import { AssessmentCard } from '../components/assessments/AssessmentCard'
import { AssessmentDetail } from '../components/assessments/AssessmentDetail'
import { assessments } from '../data/assessmentData'

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalXL}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    flexShrink: 0,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    padding: tokens.spacingHorizontalXL,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: tokens.spacingHorizontalL,
  },
})

export function Assessments() {
  const styles = useStyles()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = selectedId ? assessments.find(a => a.id === selectedId) : null

  if (selected) {
    return <AssessmentDetail assessment={selected} onBack={() => setSelectedId(null)} />
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text size={600} weight="semibold">My Assessments</Text>
        <Button appearance="primary" icon={<AddRegular />}>
          New Assessment
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.grid}>
          {assessments.map(a => (
            <AssessmentCard key={a.id} assessment={a} onClick={() => setSelectedId(a.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}
