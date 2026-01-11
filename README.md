# 3D Resume

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

This will:
1. Fetch GitHub PR data and save to `public/data/github-prs.json`
2. Build the site

## GitHub PR Data

### Fetching PR Data

```bash
# Fetch PR data without building
npm run fetch:github

# Build without fetching (uses existing data)
npm run build:only
```

### Setting up GitHub Token

For higher rate limits (5000 req/hour vs 60 req/hour):

```bash
export GITHUB_TOKEN=your_github_token
```

### Featuring PRs on Home Page

1. Run `npm run fetch:github` to generate `.github-cache.json`
2. Edit `.github-cache.json` and set `"featured": true` for PRs you want to showcase
3. Run `npm run fetch:github` again to update `public/data/github-prs.json`

The script will:
- Cache all PR data in `.github-cache.json` (gitignored)
- Only fetch new/updated PRs on subsequent runs
- Preserve your `featured` flags
- Handle rate limits automatically (waits when limit is hit)
- Fetch ALL PRs with details, no matter how many you have

## Project Structure

- `/src/data/` - Static data files
- `/public/data/` - Generated data (github-prs.json)
- `/scripts/` - Build-time scripts
- `.github-cache.json` - PR cache (gitignored, edit this to feature PRs)
