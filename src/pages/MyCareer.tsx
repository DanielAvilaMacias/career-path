import { useState, useMemo } from 'react'
import {
  makeStyles,
  tokens,
  Text,
  Input,
  Badge,
} from '@fluentui/react-components'
import { SearchRegular } from '@fluentui/react-icons'
import { LevelBar } from '../components/career/LevelBar'
import { SkillCard } from '../components/career/SkillCard'
import { careerLevels, CURRENT_LEVEL_ID, type SkillCategory } from '../data/careerData'

const CATEGORIES: SkillCategory[] = ['Tech Skills', 'Soft Skills', 'Leadership']

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXL}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    flexWrap: 'wrap',
    flexShrink: 0,
  },
  search: {
    flex: 1,
    minWidth: '180px',
    maxWidth: '360px',
  },
  filters: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    flexWrap: 'wrap',
  },
  filterPill: {
    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    background: 'none',
    padding: 0,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    padding: tokens.spacingHorizontalXL,
    minHeight: 0,
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingHorizontalXXL,
    gap: tokens.spacingVerticalM,
    color: tokens.colorNeutralForeground3,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: tokens.spacingHorizontalL,
  },
  categorySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXL,
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalXS,
  },
  categoryTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  count: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
})

export function MyCareer() {
  const styles = useStyles()
  const [selectedLevelId, setSelectedLevelId] = useState(CURRENT_LEVEL_ID)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null)

  const selectedLevel = useMemo(
    () => careerLevels.find(l => l.id === selectedLevelId)!,
    [selectedLevelId]
  )

  const filteredSkills = useMemo(() => {
    const q = search.toLowerCase()
    return selectedLevel.skills.filter(skill => {
      const matchesSearch =
        !q ||
        skill.name.toLowerCase().includes(q) ||
        skill.definition.toLowerCase().includes(q) ||
        skill.group.toLowerCase().includes(q) ||
        skill.observableActions.some(a => a.toLowerCase().includes(q))
      const matchesCategory = !activeCategory || skill.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [selectedLevel, search, activeCategory])

  const groupedSkills = useMemo(() => {
    const groups: Partial<Record<SkillCategory, typeof filteredSkills>> = {}
    for (const skill of filteredSkills) {
      if (!groups[skill.category]) groups[skill.category] = []
      groups[skill.category]!.push(skill)
    }
    return groups
  }, [filteredSkills])

  return (
    <div className={styles.root}>
      <LevelBar
        levels={careerLevels}
        selectedId={selectedLevelId}
        currentId={CURRENT_LEVEL_ID}
        onSelect={setSelectedLevelId}
      />

      <div className={styles.toolbar}>
        <Input
          className={styles.search}
          placeholder="Search skills..."
          contentBefore={<SearchRegular />}
          value={search}
          onChange={(_, d) => setSearch(d.value)}
        />
        <div className={styles.filters}>
          <button
            className={styles.filterPill}
            onClick={() => setActiveCategory(null)}
          >
            <Badge
              appearance={activeCategory === null ? 'filled' : 'outline'}
              color="brand"
              size="medium"
            >
              All
            </Badge>
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={styles.filterPill}
              onClick={() => setActiveCategory(c => c === cat ? null : cat)}
            >
              <Badge
                appearance={activeCategory === cat ? 'filled' : 'outline'}
                color={cat === 'Tech Skills' ? 'brand' : cat === 'Soft Skills' ? 'success' : 'warning'}
                size="medium"
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {filteredSkills.length === 0 ? (
          <div className={styles.emptyState}>
            <SearchRegular fontSize={40} />
            <Text size={400} weight="semibold">No skills found</Text>
            <Text size={200}>Try adjusting your search or filters</Text>
          </div>
        ) : (
          (Object.keys(groupedSkills) as SkillCategory[]).map(category => (
            <div key={category} className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <Text className={styles.categoryTitle}>{category}</Text>
                <Text className={styles.count}>· {groupedSkills[category]!.length} skills</Text>
              </div>
              <div className={styles.grid}>
                {groupedSkills[category]!.map(skill => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
