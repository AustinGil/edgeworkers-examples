#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <folder_name>"
  exit 1
fi

folder_name=${@%/}
archieve_name="../$folder_name.tgz"

cd $folder_name
tar -cvzf $archieve_name *
cd ..