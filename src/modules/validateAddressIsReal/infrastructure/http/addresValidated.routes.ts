import { response, Router } from 'express';
import { getAddressValidatedController } from '../../useCases/index';
import { createClient } from 'redis';

const router = Router();

router.get('/address', (req, res) =>
  getAddressValidatedController.execute(req, res)
);

// const client = createClient();

// client.on('error', (err: any) => console.log('Redis Client Error', err));

// await client.connect();
// await client.set('address', JSON.stringify(response));
// const value = await client.get('address');

export { router as validateAddressRouter };
