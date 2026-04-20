import { Text, makeStyles, tokens } from '@fluentui/react-components'

const useStyles = makeStyles({
  root: {
    height: '100%',
    overflowY: 'auto',
    padding: tokens.spacingHorizontalXXL,
  },
})

export function OpenPositions() {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Text size={700} weight="semibold" block>Open Positions</Text>
      <Text size={300} block style={{ marginTop: tokens.spacingVerticalM }}>
        Explore open roles that match your career trajectory.
      </Text>
    </div>
  )
}
