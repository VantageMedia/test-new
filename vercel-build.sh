#!/bin/sh
set -e
if ! command -v git-lfs >/dev/null 2>&1; then
  echo "Installing Git LFS..."
  curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
  apt-get install -y git-lfs
fi
git lfs install
git lfs pull
npm install
npm run build 