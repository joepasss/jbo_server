#!/bin/bash

SCRIPT_DIR=$(dirname "$0")
SERVER_DIR=$(dirname $(realpath "$SCRIPT_DIR"))
JBO_DIR=$(dirname "$SERVER_DIR")
WEB_CLIENT_DIR="$JBO_DIR/web_client"

cd "$WEB_CLIENT_DIR" || exit

npm run build

if [ ! -d "$SERVER_DIR/src/dist" ]; then
	mkdir -p "$SERVER_DIR/src/dist"
fi

if [ -d "$SERVER_DIR/src/dist" ]; then
	rm -rf "$SERVER_DIR/src/dist"
	mkdir -p "$SERVER_DIR/src/dist"
fi

cp -r "$WEB_CLIENT_DIR/dist"* "$SERVER_DIR/src/"

cd "$SERVER_DIR" || exit

export NODE_OPTIONS="--import ./register-hooks.js"
npm run start_with_nodemon
