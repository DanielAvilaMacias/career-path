import { useState, useMemo } from 'react'
import {
  makeStyles,
  tokens,
  Text,
  Badge,
  Button,
  Textarea,
  Divider,
} from '@fluentui/react-components'
import {
  ArrowLeftRegular,
  DismissRegular,
  SaveRegular,
  SendRegular,
  DocumentRegular,
  AddRegular,
  ChevronRightRegular,
  ChevronDownRegular,
  PersonRegular,
  StarRegular,
} from '@fluentui/react-icons'
import { RatingDots } from './RatingDots'
import type { Assessment, SkillRating } from '../../data/assessmentData'

const COLS = '160px minmax(160px, 220px) 1fr 220px 220px'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
  },
  title: {
    flex: 1,
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  topActions: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    flexShrink: 0,
  },
  statsBar: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXL,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    flexShrink: 0,
    alignItems: 'center',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  statLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  statValue: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    flex: 1,
    minHeight: 0,
    overflow: 'hidden',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    overflowY: 'auto',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  sideSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  sideLabel: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  sideValue: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
  },
  evidenceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} 0`,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
  },
  evidenceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    overflowY: 'auto',
    padding: tokens.spacingHorizontalXL,
    display: 'flex',
    flexDirection: 'column',
  },
  tableWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: COLS,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: '0.03em',
  },
  skillRow: {
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    cursor: 'pointer',
    transition: 'background 0.1s',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  skillRowMain: {
    display: 'grid',
    gridTemplateColumns: COLS,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
    alignItems: 'center',
    minHeight: '60px',
  },
  skillRowExpanded: {
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalM}`,
    paddingLeft: '160px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  categoryCell: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  commentText: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase400,
    whiteSpace: 'pre-line',
    paddingTop: tokens.spacingVerticalS,
  },
  noComment: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground4,
    fontStyle: 'italic',
    paddingTop: tokens.spacingVerticalS,
  },
  tableFooter: {
    marginTop: 'auto',
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

function avg(vals: number[]) {
  return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '—'
}

function SkillRow({ rating }: { rating: SkillRating }) {
  const styles = useStyles()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.skillRow}>
      <div className={styles.skillRowMain} onClick={() => setExpanded(e => !e)}>
        <div className={styles.categoryCell}>
          {expanded
            ? <ChevronDownRegular fontSize={14} style={{ color: tokens.colorBrandForeground1, flexShrink: 0 }} />
            : <ChevronRightRegular fontSize={14} style={{ color: tokens.colorNeutralForeground3, flexShrink: 0 }} />
          }
          <Badge
            size="small"
            color={rating.category === 'Tech Skills' ? 'brand' : rating.category === 'Soft Skills' ? 'success' : 'warning'}
            appearance="filled"
          >
            {rating.category}
          </Badge>
        </div>
        <Text size={200} style={{ color: tokens.colorNeutralForeground2 }}>{rating.group}</Text>
        <Text size={300} weight="semibold">{rating.skillName}</Text>
        <RatingDots value={rating.employeeRating} />
        {rating.managerRating !== null
          ? <RatingDots value={rating.managerRating} color={tokens.colorPaletteTealBackground2} />
          : <Text size={100} style={{ color: tokens.colorNeutralForeground4, fontStyle: 'italic' }}>Pending</Text>
        }
      </div>

      {expanded && (
        <div className={styles.skillRowExpanded}>
          {rating.comment
            ? <Text className={styles.commentText}>{rating.comment}</Text>
            : <Text className={styles.noComment}>No comment provided</Text>
          }
        </div>
      )}
    </div>
  )
}

interface AssessmentDetailProps {
  assessment: Assessment
  onBack: () => void
}

export function AssessmentDetail({ assessment, onBack }: AssessmentDetailProps) {
  const styles = useStyles()
  const [comments, setComments] = useState(assessment.reviewerComments)

  const empAvg = useMemo(() =>
    avg(assessment.skillRatings.map(r => r.employeeRating)), [assessment])
  const mgrAvg = useMemo(() =>
    avg(assessment.skillRatings.filter(r => r.managerRating !== null).map(r => r.managerRating!)), [assessment])

  return (
    <div className={styles.root}>
      <div className={styles.topBar}>
        <Button appearance="subtle" icon={<ArrowLeftRegular />} onClick={onBack} />
        <Text className={styles.title}>
          Review {assessment.scope.toLowerCase()} assessment — {assessment.careerPosition}
        </Text>
        <div className={styles.topActions}>
          <Button appearance="outline" icon={<DismissRegular />} onClick={onBack}>Cancel</Button>
          <Button appearance="outline" icon={<SaveRegular />}>Save</Button>
          <Button appearance="primary" icon={<SendRegular />}>Submit</Button>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <StarRegular fontSize={16} style={{ color: tokens.colorPaletteGoldForeground2 }} />
          <Text className={styles.statLabel}>Employee avg</Text>
          <Text className={styles.statValue}>{empAvg}/6</Text>
        </div>
        <div className={styles.statItem}>
          <PersonRegular fontSize={16} style={{ color: tokens.colorPaletteTealForeground2 }} />
          <Text className={styles.statLabel}>Manager avg</Text>
          <Text className={styles.statValue}>{mgrAvg}/6</Text>
        </div>
        <div className={styles.statItem}>
          <Text className={styles.statLabel}>Skills reviewed</Text>
          <Text className={styles.statValue}>{assessment.skillRatings.length}</Text>
        </div>
        <div className={styles.statItem}>
          <Text className={styles.statLabel}>Evidence</Text>
          <Text className={styles.statValue}>{assessment.evidence.length} file{assessment.evidence.length !== 1 ? 's' : ''}</Text>
        </div>
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Assessment</Text>
            <Text className={styles.sideValue} style={{ fontFamily: 'monospace' }}>{assessment.id}</Text>
          </div>

          <Divider />

          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Scope</Text>
            <div><Badge appearance="outline" color="brand">{assessment.scope}</Badge></div>
          </div>

          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Career Position</Text>
            <Text className={styles.sideValue}>{assessment.careerPosition}</Text>
          </div>

          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Reviewer</Text>
            <Text className={styles.sideValue}>{assessment.reviewer}</Text>
          </div>

          <Divider />

          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Comments</Text>
            <Textarea
              value={comments}
              onChange={(_, d) => setComments(d.value)}
              placeholder="Add reviewer comments..."
              rows={6}
              resize="vertical"
            />
          </div>

          <Divider />

          <div className={styles.sideSection}>
            <div className={styles.evidenceHeader}>
              <Text className={styles.sideLabel}>Evidence ({assessment.evidence.length})</Text>
              <Button appearance="subtle" size="small" icon={<AddRegular />} />
            </div>
            {assessment.evidence.length === 0 && (
              <Text size={200} style={{ color: tokens.colorNeutralForeground4, fontStyle: 'italic' }}>
                No evidence attached
              </Text>
            )}
            {assessment.evidence.map(ev => (
              <div key={ev.id} className={styles.evidenceRow}>
                <DocumentRegular fontSize={16} style={{ color: tokens.colorBrandForeground1 }} />
                <Text size={200}>{ev.name}</Text>
              </div>
            ))}
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.tableWrapper}>
            <div className={styles.tableHeader}>
              <span>Skill Category</span>
              <span>Skill Group</span>
              <span>Skill</span>
              <span>Employee Rating</span>
              <span>Manager Rating</span>
            </div>
            {assessment.skillRatings.map(rating => (
              <SkillRow key={rating.skillId} rating={rating} />
            ))}
            <div className={styles.tableFooter}>
              <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>
                {assessment.skillRatings.length} skill{assessment.skillRatings.length !== 1 ? 's' : ''}
              </Text>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
