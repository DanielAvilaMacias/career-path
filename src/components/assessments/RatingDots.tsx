import { makeStyles, tokens } from '@fluentui/react-components'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  dot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    flexShrink: 0,
  },
})

interface RatingDotsProps {
  value: number
  max?: number
  color?: string
  emptyColor?: string
}

export function RatingDots({ value, max = 6, color, emptyColor }: RatingDotsProps) {
  const styles = useStyles()
  const filled = color ?? tokens.colorBrandBackground
  const empty = emptyColor ?? tokens.colorNeutralBackground5

  return (
    <div className={styles.row}>
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={styles.dot}
          style={{
            backgroundColor: i < value ? filled : empty,
            border: `1.5px solid ${i < value ? filled : tokens.colorNeutralStroke1}`,
          }}
        />
      ))}
      <span style={{ marginLeft: '6px', fontSize: tokens.fontSizeBase100, color: tokens.colorNeutralForeground3 }}>
        {value}/{max}
      </span>
    </div>
  )
}
