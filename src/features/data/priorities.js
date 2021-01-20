export const availablePriorities = [
  'low',
  'normal',
  'high',
  'critical',
]
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

export const priorityColorMatching = {
  normal: 'green',
  low: 'orange',
  high: 'purple',
  critical: 'red',
}
