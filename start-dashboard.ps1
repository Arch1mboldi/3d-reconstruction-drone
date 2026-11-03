$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ServerScript = Join-Path $ProjectRoot "frontend\serve.mjs"
$IndexFile = Join-Path $ProjectRoot "frontend\dist\index.html"
$Backend = if ($args.Count -gt 0) { $args[0] } else { "http://192.168.1.105:8000" }
$Port = if ($env:DASHBOARD_PORT) { [int]$env:DASHBOARD_PORT } else { 5173 }

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js was not found. Install Node.js 20 or newer on the laptop."
}
if (-not (Test-Path -LiteralPath $IndexFile)) {
    throw "frontend/dist is missing. Run: cd frontend; npm install; npm run build"
}

$Listener = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($Listener) {
    $Owner = Get-CimInstance Win32_Process -Filter "ProcessId=$($Listener.OwningProcess)"
    $IsProjectDashboard = $Owner.Name -eq "node.exe" -and (
        $Owner.CommandLine -like "*$ProjectRoot*" -or
        $Owner.CommandLine -match "frontend[\\/]serve\.mjs"
    )
    if ($IsProjectDashboard) {
        Write-Host "Stopping an older dashboard process on port $Port (PID $($Owner.ProcessId))."
        Stop-Process -Id $Owner.ProcessId -Force
        Start-Sleep -Milliseconds 500
    } else {
        throw "Port $Port is already used by $($Owner.Name) (PID $($Listener.OwningProcess)). Stop it or set DASHBOARD_PORT to another port."
    }
}

$DashboardUrl = "http://127.0.0.1:$Port/?backend=$([uri]::EscapeDataString($Backend))"
$Server = Start-Process -FilePath node -ArgumentList $ServerScript -WorkingDirectory $ProjectRoot -NoNewWindow -PassThru
try {
    Start-Sleep -Milliseconds 700
    if ($Server.HasExited) {
        throw "The laptop dashboard server exited before opening port $Port."
    }
    $Response = Invoke-WebRequest -UseBasicParsing -TimeoutSec 5 -Uri "http://127.0.0.1:$Port/"
    if ($Response.StatusCode -ne 200) {
        throw "Dashboard startup check returned HTTP $($Response.StatusCode)."
    }
    Start-Process $DashboardUrl
    Write-Host "Dashboard ready at $DashboardUrl"
    Write-Host "Press Ctrl+C to stop the laptop frontend."
    Wait-Process -Id $Server.Id
} finally {
    if (-not $Server.HasExited) {
        Stop-Process -Id $Server.Id -Force
    }
}
