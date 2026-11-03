@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-dashboard.ps1" %*
if errorlevel 1 (
  echo.
  echo Dashboard startup failed. Review the error above.
  pause
)
