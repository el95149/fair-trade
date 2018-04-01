#!/usr/bin/env bash
echo "Replacing URL"
sed -i "s|http://127.0.0.1:8080/|/|g" ../fair-trade-client/dist/static/js/app*