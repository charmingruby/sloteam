import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  config: {
    redis: RedisOptions;
  };
  driver: string;
}

const redisPort = process.env.REDIS_PORT as unknown as number;

export default {
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: redisPort,
      password: process.env.REDIS_PASS || undefined,
    },
  },
  driver: 'redis',
} as ICacheConfig;
