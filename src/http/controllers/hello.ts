import { Request, Response } from 'express';
import { ApiResponse } from '../types/ApiResponse';
import { redis } from '../../infra/redis';

export async function HelloController(
  _: Request,
  response: Response<ApiResponse>,
) {
  const message = await redis.get('hello');

  return response.status(200).json({
    success: true,
    data: {
      message,
      now: new Date(),
    },
  });
}
