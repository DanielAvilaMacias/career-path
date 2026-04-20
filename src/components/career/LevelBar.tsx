import { makeStyles, mergeClasses, tokens, Text, Badge } from '@fluentui/react-components'
import { ChevronRightRegular } from '@fluentui/react-icons'
import type { CareerLevel } from '../../data/careerData'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    overflowX: 'auto',
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::-webkit-scrollbar': { display: 'none' },
    flexShrink: 0,
  },
  level: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    color: tokens.colorNeutralForeground3,
    whiteSpace: 'nowrap',
    flex: 1,
    transition: 'background 0.15s, color 0.15s',
    position: 'relative',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground3Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  levelSelected: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    ':hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
      color: tokens.colorNeutralForegroundOnBrand,
    },
  },
  levelTitle: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
  },
  levelTitleSelected: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
  },
  currentBadge: {
    marginTop: tokens.spacingVerticalXS,
  },
  chevron: {
    display: 'flex',
    alignItems: 'center',
    color: tokens.colorNeutralForeground4,
    padding: `0 ${tokens.spacingHorizontalXS}`,
    flexShrink: 0,
  },
})

interface LevelBarProps {
  levels: CareerLevel[]
  selectedId: string
  currentId: string
  onSelect: (id: string) => void
}

export function LevelBar({ levels, selectedId, currentId, onSelect }: LevelBarProps) {
  const styles = useStyles()

  return (
    <nav className={styles.container}>
      {levels.map((level, index) => {
        const isSelected = level.id === selectedId
        const isCurrent = level.id === currentId
        return (
          <div key={level.id} style={{ display: 'flex', alignItems: 'stretch', flex: 1, minWidth: 0 }}>
            <button
              className={mergeClasses(styles.level, isSelected && styles.levelSelected)}
              onClick={() => onSelect(level.id)}
            >
              <Text className={mergeClasses(styles.levelTitle, isSelected && styles.levelTitleSelected)}>
                {level.title}
              </Text>
              {isCurrent && (
                <Badge
                  size="small"
                  color={isSelected ? 'informative' : 'brand'}
                  className={styles.currentBadge}
                >
                  My Level
                </Badge>
              )}
            </button>
            {index < levels.length - 1 && (
              <div className={styles.chevron}>
                <ChevronRightRegular fontSize={12} />
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
