#!/bin/bash

python ./manage.py migrate
# run collectstatic django management command
python ./manage.py collectstatic --clear --noinput 

python ./manage.py runserver 0.0.0.0:8000