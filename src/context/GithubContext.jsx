import { createContext, useContext } from 'react'
import { useGithubPRs } from '../hooks/useGithubPRs'

const GithubContext = createContext(null)

export function GithubProvider({ children }) {
  const githubData = useGithubPRs()
  
  return (
    <GithubContext.Provider value={githubData}>
      {children}
    </GithubContext.Provider>
  )
}

export function useGithub() {
  const context = useContext(GithubContext)
  if (context === null) {
    throw new Error('useGithub must be used within a GithubProvider')
  }
  return context
} 