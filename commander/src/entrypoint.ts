import { KafkaClient } from "@home-porn/kafka";

import { startConsumer } from "./kafkaConsumer";
import { Client } from "./client";
import { Commander } from "./commander";
import { Repository } from "./repository";
import { Settings } from "./settings";

const settings = new Settings();
const kafkaClient = new KafkaClient(settings.kafkaClientId, settings.kafkaBrokers);
const commander = new Commander();
const repository = new Repository();
const client = new Client(kafkaClient, commander, repository);

startConsumer(kafkaClient, client);
