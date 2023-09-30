#!/bin/bash

# Function to check if "Vishnu94833" is not found in the remote URL and delete the directory
function check_and_delete_directory() {
  if [ -d "$1" ]; then
    # Check if the remote URL contains "Vishnu94833"
    remote_url=$(cd "$1" && git remote -v)
    if ! echo "$remote_url" | grep -q "Vishnu94833"; then
      # Delete the directory since "Vishnu94833" is not found
      echo "Deleting directory $1"
      rm -rf "$1"
    fi
  fi
}

# Check the current directory
check_and_delete_directory "$(pwd)"

# Check subdirectories
for dir in */; do
  check_and_delete_directory "$dir"
done
