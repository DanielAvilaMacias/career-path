import { useState } from 'react'
import {
  makeStyles,
  tokens,
  Text,
  Badge,
  Button,
  Divider,
} from '@fluentui/react-components'
import { ChevronDownRegular, ChevronUpRegular, CheckmarkCircleRegular } from '@fluentui/react-icons'
import type { Skill, SkillCategory } from '../../data/careerData'

const categoryColor: Record<SkillCategory, 'brand' | 'success' | 'warning'> = {
  'Tech Skills': 'brand',
  'Soft Skills': 'success',
  'Leadership': 'warning',
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: tokens.spacingHorizontalL,
    gap: tokens.spacingVerticalS,
    transition: 'box-shadow 0.15s, border-color 0.15s',
    ':hover': {
      boxShadow: tokens.shadow8,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  group: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase100,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  skillName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    lineHeight: tokens.lineHeightBase400,
  },
  definition: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase300,
  },
  actionsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    paddingTop: tokens.spacingVerticalXS,
  },
  toggleButton: {
    alignSelf: 'flex-start',
    paddingLeft: '0',
    paddingRight: '0',
  },
  actionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalXS,
  },
  actionItem: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    alignItems: 'flex-start',
  },
  actionIcon: {
    color: tokens.colorBrandForeground1,
    flexShrink: 0,
    marginTop: '2px',
  },
  actionText: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    lineHeight: tokens.lineHeightBase300,
  },
})

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const styles = useStyles()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Badge color={categoryColor[skill.category]} size="small" appearance="filled">
          {skill.category}
        </Badge>
        <Text className={styles.group}>{skill.group}</Text>
        <Text className={styles.skillName}>{skill.name}</Text>
      </div>

      <Text className={styles.definition}>{skill.definition}</Text>

      <Divider />

      <div className={styles.actionsSection}>
        <Button
          appearance="subtle"
          size="small"
          className={styles.toggleButton}
          icon={expanded ? <ChevronUpRegular /> : <ChevronDownRegular />}
          iconPosition="after"
          onClick={() => setExpanded(e => !e)}
        >
          {expanded ? 'Hide' : 'Show'} observable actions ({skill.observableActions.length})
        </Button>

        {expanded && (
          <div className={styles.actionsList}>
            {skill.observableActions.map((action, i) => (
              <div key={i} className={styles.actionItem}>
                <CheckmarkCircleRegular className={styles.actionIcon} fontSize={16} />
                <Text className={styles.actionText}>{action}</Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
