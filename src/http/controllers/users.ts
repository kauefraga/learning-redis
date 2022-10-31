import { Request, Response } from 'express';
import { ApiResponse } from '../types/ApiResponse';
import { redis } from '../../infra/redis';

export async function UsersController(
  _: Request,
  response: Response<ApiResponse>,
) {
  const user = await redis.hgetall('ana');

  return response.status(200).json({
    success: true,
    data: {
      user,
      now: new Date(),
    },
  });
}
