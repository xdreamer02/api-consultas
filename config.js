import { config } from 'dotenv'

config()

export const AWS_HOST_DB = process.env.AWS_HOST_DB
export const AWS_USER_DB = process.env.AWS_USER_DB
export const AWS_PASS_DB = process.env.AWS_PASS_DB
export const AWS_DB = process.env.AWS_DB
export const AWS_PORT = process.env.AWS_PORT

