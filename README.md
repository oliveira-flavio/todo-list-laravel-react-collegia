
## Todo List Test - Collegia

This is a project part of a assessment task provided by the company Collegia.
Stack used:

- Docker
- Postgres
- Laravel
- React

## To run this project, follow the steps below:

- You must have Docker installed and running
- Clone this repo in a Linux ou Mac machine
- ** If you're using a windows system, make sure you're cloning this repo on WSL(distro) and Docker desktop is running.
- After clonning, cd into project folder and run ./vendor/bin/sail up
- Use your favourite IDE and open the project
- Inside project folder, type npm run dev

When you open the project, you should creat a .env file and paste the bellow code:

``` APP_NAME="Todo List Collegia"
APP_ENV=local
APP_KEY=base64:2H4TCfutNDnIZtxjtRS1iGHYZXjcLfqHAOz8FcMXrqk=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=pgsql
DB_HOST=pgsql
DB_PORT=5432
DB_DATABASE=todo_list_laravel_react
DB_USERNAME=sail
DB_PASSWORD=password

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=memcached

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
## Troubleshoot

If you have Postgress already installed in you local machine, you must face some issues related to ports when connecting with a database IDE, like DBeaver.
A workaround it to kill the Postgress process running in your local machine or, you can change the ports connection. 

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
