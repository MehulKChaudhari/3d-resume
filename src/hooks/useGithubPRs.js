import { useState, useEffect } from 'react'

const fetchRepoDetails = async (repoUrl) => {
  const response = await fetch(repoUrl)
  if (!response.ok) throw new Error('Failed to fetch repository details')
  return response.json()
}

const transformPRData = (pr, repoData) => {
  const description = pr.body?.trim() || ''
  return {
    id: pr.id,
    title: pr.title,
    repo: repoData.full_name,
    repoOwner: repoData.owner.login.toLowerCase(),
    status: pr.pull_request?.merged_at ? 'merged' : pr.state,
    description,
    url: pr.html_url,
    createdAt: pr.created_at,
    mergedAt: pr.pull_request?.merged_at,
    updatedAt: pr.updated_at
  }
}

export const useGithubPRs = () => {
  const [state, setState] = useState({
    contributions: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    let mounted = true

    const fetchPRs = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/issues?q=author:mehulkchaudhari+is:pr+is:public&per_page=100`
        )
        if (!response.ok) throw new Error('Failed to fetch PRs')
        const data = await response.json()

        const prsWithRepoDetails = await Promise.all(
          data.items.map(async (pr) => {
            try {
              const repoData = await fetchRepoDetails(pr.repository_url)
              return transformPRData(pr, repoData)
            } catch (error) {
              console.error('Error fetching repo details:', error)
              return null
            }
          })
        )

        if (!mounted) return

        const filteredAndSortedPRs = prsWithRepoDetails
          .filter(pr => 
            pr !== null && 
            (pr.status === 'merged' || pr.status === 'open') &&
            pr.repoOwner !== 'mehulkchaudhari'
          )
          .sort((a, b) => {
            const dateA = a.mergedAt || a.updatedAt
            const dateB = b.mergedAt || b.updatedAt
            return new Date(dateB) - new Date(dateA)
          })

        setState({
          contributions: filteredAndSortedPRs,
          isLoading: false,
          error: null
        })
      } catch (error) {
        if (!mounted) return
        setState(prev => ({
          ...prev,
          error: error.message,
          isLoading: false
        }))
      }
    }

    fetchPRs()
    return () => { mounted = false }
  }, [])

  return state
}