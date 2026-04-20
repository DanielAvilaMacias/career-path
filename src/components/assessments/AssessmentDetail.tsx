import { useState } from 'react'
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
} from '@fluentui/react-icons'
import { RatingDots } from './RatingDots'
import type { Assessment, SkillRating } from '../../data/assessmentData'

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
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
    flexWrap: 'wrap',
  },
  title: {
    flex: 1,
    fontSize: tokens.fontSizeBase400,
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
  body: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    gap: 0,
  },
  sidebar: {
    width: '260px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingHorizontalL,
    overflowY: 'auto',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  sideSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  sideLabel: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
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
    flex: 1,
    overflowY: 'auto',
    padding: tokens.spacingHorizontalL,
  },
  tableWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr 1fr 160px 160px',
    gap: 0,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
  },
  skillRow: {
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  skillRowMain: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr 1fr 160px 160px',
    gap: 0,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    alignItems: 'center',
  },
  skillRowExpanded: {
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
    paddingLeft: '140px',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  categoryCell: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  commentText: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase300,
    whiteSpace: 'pre-line',
  },
  noComment: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground4,
    fontStyle: 'italic',
  },
})

function SkillRow({ rating }: { rating: SkillRating }) {
  const styles = useStyles()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.skillRow}>
      <div
        className={styles.skillRowMain}
        onClick={() => setExpanded(e => !e)}
      >
        <div className={styles.categoryCell}>
          {expanded
            ? <ChevronDownRegular fontSize={14} style={{ color: tokens.colorBrandForeground1 }} />
            : <ChevronRightRegular fontSize={14} style={{ color: tokens.colorNeutralForeground3 }} />
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
        <Text size={200} weight="semibold">{rating.skillName}</Text>
        <RatingDots value={rating.employeeRating} />
        {rating.managerRating !== null
          ? <RatingDots value={rating.managerRating} color={tokens.colorPaletteTealBackground2} />
          : <Text size={100} style={{ color: tokens.colorNeutralForeground4 }}>Pending</Text>
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

  return (
    <div className={styles.root}>
      <div className={styles.topBar}>
        <Button
          appearance="subtle"
          icon={<ArrowLeftRegular />}
          onClick={onBack}
        />
        <Text className={styles.title}>
          Review {assessment.scope.toLowerCase()} assessment — {assessment.careerPosition}
        </Text>
        <div className={styles.topActions}>
          <Button appearance="outline" icon={<DismissRegular />} onClick={onBack}>
            Cancel
          </Button>
          <Button appearance="outline" icon={<SaveRegular />}>
            Save
          </Button>
          <Button appearance="primary" icon={<SendRegular />}>
            Submit
          </Button>
        </div>
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Assessment</Text>
            <Text className={styles.sideValue} style={{ fontFamily: 'monospace', fontSize: tokens.fontSizeBase200 }}>
              {assessment.id}
            </Text>
          </div>

          <Divider />

          <div className={styles.sideSection}>
            <Text className={styles.sideLabel}>Scope</Text>
            <Badge appearance="outline" color="brand">{assessment.scope}</Badge>
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
              rows={5}
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
          </div>
        </main>
      </div>
    </div>
  )
}
