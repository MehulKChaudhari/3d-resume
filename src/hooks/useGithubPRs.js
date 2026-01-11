import { useState, useEffect } from 'react'

const transformPRData = (pr) => ({
  id: pr.id,
  title: pr.title,
  repo: pr.repository_full_name,
  repoOwner: pr.repository_owner?.toLowerCase() || '',
  status: pr.merged ? 'merged' : pr.state,
  description: pr.description || '',
  url: pr.html_url,
  createdAt: pr.created_at,
  mergedAt: pr.merged_at,
  updatedAt: pr.updated_at,
  additions: pr.additions || 0,
  deletions: pr.deletions || 0,
  changedFiles: pr.changed_files || 0,
  commits: pr.commits || 0,
  comments: pr.comments || 0,
  labels: pr.labels || [],
  featured: pr.featured || false,
  featured_order: pr.featured_order
})

export const useGithubPRs = () => {
  const [state, setState] = useState({
    contributions: [],
    isLoading: true,
    error: null
  })

  useEffect(() => {
    let mounted = true

    const loadPRs = async () => {
      try {
        const response = await fetch('/data/github-prs.json')
        if (!response.ok) throw new Error('Failed to load PR data')
        const data = await response.json()

        if (!mounted) return

        const transformedData = data.map(transformPRData)

        setState({
          contributions: transformedData,
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

    loadPRs()
    return () => { mounted = false }
  }, [])

  return state
}
