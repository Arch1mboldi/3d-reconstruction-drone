#!/usr/bin/env bash
set -euo pipefail

CONNECTION="${1:-$(nmcli -t -f NAME,TYPE,DEVICE connection show --active | awk -F: '$2 == "802-11-wireless" && $3 == "wlan0" { print $1; exit }')}"
if [[ -z "$CONNECTION" ]]; then
  echo "No active NetworkManager Wi-Fi connection found on wlan0" >&2
  exit 1
fi

echo "Configuring '$CONNECTION' as 192.168.1.105/24 via 192.168.1.1"
sudo nmcli connection modify "$CONNECTION" \
  ipv4.method manual \
  ipv4.addresses 192.168.1.105/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns 192.168.1.1
sudo nmcli connection up "$CONNECTION"

echo "Static Wi-Fi address active: 192.168.1.105"
