import { createPool } from 'mysql2/promise'
import '../config.js'
import { AWS_DB, AWS_HOST_DB, AWS_PASS_DB, AWS_PORT, AWS_USER_DB } from '../config.js'

export const pool = createPool({
    host: AWS_HOST_DB,
    user: AWS_USER_DB,
    password: AWS_PASS_DB,
    database: AWS_DB,
    port: AWS_PORT
})

