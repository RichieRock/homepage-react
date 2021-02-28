import scrollIntoView from 'scroll-into-view-if-needed'

export const getYears = (
  years: number,
  getString?: boolean
): string | number => {
  if (years === 1) {
    return getString ? '1 year' : 1
  } else if (years > 20) {
    return getString ? '20+ years' : 20
  } else if (years > 15) {
    return getString ? '15+ years' : 15
  } else if (years > 10) {
    return getString ? '10+ years' : 10
  } else {
    return getString ? years + ' years' : years
  }
}

export const scrollTo = (elementId: string) => {
  const element = document.querySelector('#' + elementId)
  if (element) {
    scrollIntoView(element, { behavior: 'smooth', scrollMode: 'if-needed' })
    /*if (this.sidebarVisible) {
            this.sidebarClose();
        }*/
  }
}
