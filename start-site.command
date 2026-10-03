#!/bin/bash
cd "$(dirname "$0")"
python3 -m http.server 4321 &
sleep 1
open http://localhost:4321
wait
