import { makeStyles, tokens, Text, Badge } from '@fluentui/react-components'
import { StarRegular, CalendarRegular, PersonRegular } from '@fluentui/react-icons'
import type { Assessment, ReviewStatus } from '../../data/assessmentData'

const statusColor: Record<ReviewStatus, 'subtle' | 'success' | 'informative' | 'brand'> = {
  Draft: 'subtle',
  'Review ready': 'success',
  Reviewed: 'informative',
  Submitted: 'brand',
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    cursor: 'pointer',
    transition: 'box-shadow 0.15s, transform 0.1s',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  id: {
    fontFamily: 'monospace',
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  position: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    marginTop: tokens.spacingVerticalXS,
  },
  badges: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    flexWrap: 'wrap',
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    paddingTop: tokens.spacingVerticalS,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorPaletteGoldForeground2,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase300,
  },
})

interface AssessmentCardProps {
  assessment: Assessment
  onClick: () => void
}

export function AssessmentCard({ assessment, onClick }: AssessmentCardProps) {
  const styles = useStyles()

  return (
    <div className={styles.card} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.top}>
        <div>
          <Text className={styles.id}>{assessment.id}</Text>
          <Text className={styles.position} block>{assessment.careerPosition}</Text>
        </div>
        <Badge color={statusColor[assessment.reviewStatus]} appearance="filled">
          {assessment.reviewStatus}
        </Badge>
      </div>

      <div className={styles.badges}>
        <Badge appearance="outline" color="brand">{assessment.scope}</Badge>
        <Badge appearance="outline" color="subtle">{assessment.careerPath}</Badge>
        <Badge appearance="outline" color="subtle">{assessment.icpm}</Badge>
      </div>

      <div className={styles.meta}>
        <div className={styles.rating}>
          <StarRegular fontSize={16} />
          <span>{assessment.rating.toFixed(1)}</span>
        </div>
        <div className={styles.metaRow}>
          <PersonRegular fontSize={14} />
          <Text size={200}>{assessment.reviewer}</Text>
        </div>
        <div className={styles.metaRow}>
          <CalendarRegular fontSize={14} />
          <Text size={200}>{assessment.modified}</Text>
        </div>
      </div>
    </div>
  )
}
