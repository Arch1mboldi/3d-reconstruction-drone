$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ServerScript = Join-Path $ProjectRoot "frontend\serve.mjs"
$IndexFile = Join-Path $ProjectRoot "frontend\dist\index.html"
$Backend = if ($args.Count -gt 0) { $args[0] } else { "http://192.168.1.105:8000" }

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js was not found. Install Node.js 20 or newer on the laptop."
}
if (-not (Test-Path -LiteralPath $IndexFile)) {
    throw "frontend/dist is missing. Run: cd frontend; npm install; npm run build"
}

$DashboardUrl = "http://127.0.0.1:5173/?backend=$([uri]::EscapeDataString($Backend))"
Start-Process $DashboardUrl
& node $ServerScript
