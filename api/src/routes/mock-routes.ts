import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';
import * as fs from 'fs';
import * as path from 'path';
import { IReq, IRes } from './shared/types';


// **** Variables **** //

// Paths
const paths = {
  basePath: '/mock',
  list: 's',
  create: '',
  read: '/:name',
  update: '/:name',
  delete: '/:name',
} as const;


// **** Types **** //


// **** Functions **** //

/**
 * List mock routes.
 */
async function list(req: IReq, res: IRes) {
  const files = fs.readdirSync(path.join(__dirname, '../../mocks/routes'))
  return res
    .status(HttpStatusCodes.OK)
    .json(files)
    .end();
}

/**
 * Get mock route.
 */
async function get(req: IReq, res: IRes) {
  const name = +req.params.name;
  const filePath = path.join(__dirname, '../../mocks/routes', `${name}.js`)
  if (!fs.existsSync(filePath)) {
    return res.status(HttpStatusCodes.NOT_FOUND).end()
  }
  const file = fs.readFileSync(filePath)
  return res
    .status(HttpStatusCodes.OK)
    .json(file)
    .end();
}

export default {
  paths,
  list,
  get,
} as const;
