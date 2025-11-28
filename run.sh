get_latest_github_raw_no_v() {
  # use it for when the link for the download doesn't have a version included in the name of the file
  # e.g.: https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh
  # usage: get_latest_github_raw_no_v "user/repo" "filename"
  version=$(curl --silent "https://api.github.com/repos/$1/releases/latest" |  # Get latest release from GitHub api
    grep '"tag_name":' |                                             # Get tag line
    sed -E 's/.*"([^"]+)".*/\1/')                                    # Pluck JSON value
  echo "https://raw.githubusercontent.com/$1/$version/"$2
}

# Install node version manager (nvm)
site=$(get_latest_github_raw_no_v "nvm-sh/nvm" "install.sh")
curl -o- $site | bash