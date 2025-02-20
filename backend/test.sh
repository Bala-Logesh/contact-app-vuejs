#!/bin/bash

# Script to test the API Endpoints

METHOD=$1
ID=$2

URL="http://localhost:5000/api/contacts"

if [ $METHOD == "help" ]; then
    echo "./test.sh <METHOD> <ID?>"
fi

# Get all contacts
if [[ $METHOD == 'get' && -z $ID ]]; then
    curl -X GET $URL/$ID
fi

# Get contact with ID
if [[ $METHOD == 'get' && -n $ID ]]; then
    if [ -z $ID ]; then 
        echo "ID is requried"
        exit 1
    fi

    curl -X GET $URL/$ID
fi

# Create a new contact
if [ $METHOD == 'post' ]; then
    curl -X POST $URL \
        -H "Content-Type: application/json" \
        -d '{
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "1234567890",
            "designation": "Software Engineer"
            }'
fi

# Edit a contact
if [ $METHOD == 'put' ]; then
    if [ -z $ID ]; then 
        echo "ID is requried"
        exit 1
    fi

    curl -X PUT $URL/$ID \
         -H "Content-Type: application/json" \
         -d '{
               "name": "John Doe Edited"
             }'
fi

# Delete a contact
if [ $METHOD == 'delete' ]; then
    if [ -z $ID ]; then 
        echo "ID is requried"
        exit 1
    fi

    curl -X DELETE $URL/$ID \
        -H "Content-Type: application/json"
fi

exit 0