.PHONY: run compile

compile:
	npm run tsc

run: 
	BACKEND_LISTEN_PORT=3000 BACKEND_CLIENT_ID=backend-local BACKEND_BROKERS=localhost:9092,localhost:9091 npm run dev
