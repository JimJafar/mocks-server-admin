import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes'
import { existsSync } from 'fs'
import { readdir, readFile, writeFile, rm } from 'fs/promises'
import { join } from 'path'
import { IReq, IRes } from './shared/types'
import { routePathFromName } from "@src/util/path-util"

// **** Variables **** //

// Paths
const paths = {
  basePath: '/',
  list: '/mocks',
  create: '/mock',
  read: '/mock/:name',
  update: '/mock/:name',
  remove: '/mock/:name',
} as const


// **** Types **** //

interface ICreateReq {
  name: string
  content: string
}

interface IUpdateReq {
  name: string
  content: string
}

// **** Functions **** //

/**
 * List mock routes.
 */
async function list(_: IReq, res: IRes) {
  const files = await readdir(join(__dirname, '../../mocks/routes'))
  return res
    .status(HttpStatusCodes.OK)
    .json(files.map(file => file.replace('.js', '')))
    .end()
}

/**
 * Get mock route.
 */
async function get(req: IReq, res: IRes) {
  const name = req.params.name
  const filePath = routePathFromName(name)
  let file

  if (!existsSync(filePath)) {
    return res.status(HttpStatusCodes.NOT_FOUND).end()
  }

  try {
    file = await readFile(filePath)
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(e)
  }

  return res
    .status(HttpStatusCodes.OK)
    .json({ content: file.toString() })
    .end()
}

/**
 * Add mock route.
 */
async function add(req: IReq<ICreateReq>, res: IRes) {
  const { name, content } = req.body
  const filePath = routePathFromName(name)

  try {
    await writeFile(filePath, content)
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(e)
  }

  return res
    .status(HttpStatusCodes.OK)
    .end()
}

/**
 * Replace mock route.
 */
async function update(req: IReq<IUpdateReq>, res: IRes) {
  const name = req.params.name
  const { content } = req.body
  const filePath = routePathFromName(name)

  if (!existsSync(filePath)) {
    return res.status(HttpStatusCodes.NOT_FOUND).end()
  }

  try {
    await writeFile(filePath, content)
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(e)
  }

  return res
    .status(HttpStatusCodes.OK)
    .end()
}

/**
 * Remove mock route.
 */
async function remove(req: IReq, res: IRes) {
  const name = req.params.name
  const filePath = routePathFromName(name)

  if (!existsSync(filePath)) {
    return res.status(HttpStatusCodes.NOT_FOUND).end()
  }

  try {
    await rm(filePath)
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(e)
  }

  return res
    .status(HttpStatusCodes.OK)
    .end()
}

export default {
  paths,
  list,
  get,
  add,
  update,
  remove,
} as const
