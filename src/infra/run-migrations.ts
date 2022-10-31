import { redis } from './redis';
import { User } from '../models/user';

const names = [
  'ana',
  'carlos',
  'jonas',
  'kaue',
  'aron',
];

async function migrationsRunner() {
  names.forEach(async (name) => {
    const user = new User({ name });

    await redis.hset(user.name, {
      id: user.id,
      name: user.name,
    });
  });
}

try {
  migrationsRunner();
} catch (e: any) {
  console.error(e.message);
}
