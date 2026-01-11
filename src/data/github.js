import githubData from '../../public/data/github-prs.json'

export const githubPRs = githubData

export const featuredPRs = githubData.filter(pr => pr.featured === true).slice(0, 3)

