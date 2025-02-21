#!/bin/bash

API_URL="http://localhost:5000/api/contacts"

JSON_DATA1='{
        "name": "John",
        "email": "john@gmail.com",
        "phone": "555-555-5555",
        "designation": "Software Developer"
    }'

JSON_DATA2='{
        "name": "Sara",
        "email": "sara@gmail.com",
        "phone": "999-999-9999",
        "designation": "Software Engineer"
    }'

JSON_DATA3='{
        "name": "Brad",
        "email": "brad@gmail.com",
        "phone": "777-777-7777",
        "designation": "Web Developer"
    }'
    
JSON_DATA4='{
        "name": "Bala",
        "email": "bala@gmail.com",
        "phone": "333-333-3333",
        "designation": "Software Architect"
    }'

curl -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -d "$JSON_DATA1"

curl -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -d "$JSON_DATA2"

curl -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -d "$JSON_DATA3"
     
curl -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -d "$JSON_DATA4"
