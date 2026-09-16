# install-site-files.ps1
param(
  [Parameter(Mandatory=$true)]
  [string]$DocsFile,

  [string]$ProjectPath = (Get-Location).Path
)

$DocsFile = (Resolve-Path $DocsFile).Path
$ProjectPath = (Resolve-Path $ProjectPath).Path
$content = Get-Content -LiteralPath $DocsFile -Raw

# Matches sections like: ## `src/components/Header.astro`
$pattern = '(?ms)^##\s+`([^`]+)`\s*\r?\n\r?\n```[^\r\n]*\r?\n(.*?)\r?\n```'
$matches = [regex]::Matches($content, $pattern)

if ($matches.Count -eq 0) {
  throw "No file/code sections were found. Make sure you selected the site-structure-docs.md file."
}

$created = @()

foreach ($m in $matches) {
  $relativePath = $m.Groups[1].Value.Trim()

  # Safety: preserve the existing homepage exactly as requested.
  if ($relativePath -eq 'src/pages/index.astro') {
    Write-Host "Skipping existing homepage: $relativePath"
    continue
  }

  $code = $m.Groups[2].Value
  $target = Join-Path $ProjectPath ($relativePath -replace '/', '\')
  $folder = Split-Path -Parent $target

  New-Item -ItemType Directory -Force -Path $folder | Out-Null
  [System.IO.File]::WriteAllText(
    $target,
    $code,
    (New-Object System.Text.UTF8Encoding($false))
  )

  $created += $relativePath
  Write-Host "Created: $relativePath"
}

Write-Host ""
Write-Host "DONE! $($created.Count) files created."
Write-Host "Homepage was not modified."
Write-Host ""
Write-Host "Next:"
Write-Host "  cd `"$ProjectPath`""
Write-Host "  npm run dev"
