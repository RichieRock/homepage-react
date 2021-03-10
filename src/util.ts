import scrollIntoView from 'scroll-into-view-if-needed'

export const getYears = (
  years: number,
  getString?:
    | 'long'
    | 'L'
    | 'l'
    | 'short'
    | 'S'
    | 's'
    | boolean
    | undefined
    | null
): string | number => {
  const useLong =
    getString === true ||
    String(getString).toLowerCase() === 'long' ||
    String(getString).toLowerCase() === 'l'
  const useShort =
    String(getString).toLowerCase() === 'short' ||
    String(getString).toLowerCase() === 's'
  if (years === 1) {
    return useLong ? '1 year' : useShort ? '1' : 1
  } else if (years > 20) {
    return useLong ? '20+ years' : useShort ? '20+' : 20
  } else if (years > 15) {
    return useLong ? '15+ years' : useShort ? '15+' : 15
  } else if (years > 10) {
    return useLong ? '10+ years' : useShort ? '10+' : 10
  } else {
    return useLong || useShort ? years + ' years' : years
  }
}

export const scrollTo = (elementId: string) => {
  const element = document.querySelector('#' + elementId)
  if (element) {
    scrollIntoView(element, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
      block: 'start',
    })
  }
}
