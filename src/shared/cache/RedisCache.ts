import Redis from 'ioredis';
import cacheConfig from '../../config/cache';
import { promisify } from 'util';

const redisClient = new Redis(cacheConfig.config.redis);

async function getRedis<T>(value: string): Promise<T | null> {
  const syncRedisGet = promisify(redisClient.get.bind(redisClient));
  const data = await syncRedisGet(value);

  if(!data) {
    return null;
  }

  const parsedData = JSON.parse(data) ;

  return parsedData as T;
}

async function setRedis(key: string, value: any): Promise<void> {
  const syncRedisSet = promisify(redisClient.set.bind(redisClient));
  return syncRedisSet(key, JSON.stringify(value), 'ex', 300);
}

async function invalidateRedis(key: string): Promise<void> {
  const syncRedisDel = promisify(redisClient.del.bind(redisClient));
  await syncRedisDel(key);
}

export { redisClient, setRedis, getRedis, invalidateRedis};
