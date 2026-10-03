@echo off
cd /d %~dp0
start "" http://localhost:4321
py -m http.server 4321
pause
