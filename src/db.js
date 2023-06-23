import { createPool } from 'mysql2/promise'
import '../config.js'
import { AWS_DB, AWS_HOST_DB, AWS_PASS_DB, AWS_PORT, AWS_USER_DB } from '../config.js'

/**
 * BASE DE DATOS PRODUCCION
 
export const pool = createPool({
    host: AWS_HOST_DB,
    user: AWS_USER_DB,
    password: AWS_PASS_DB,
    database: AWS_DB,
    port: AWS_PORT
})
*/

/**
 * BASE DE DATOS LOCAL
 */

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'soporte2023',
    database: 'registro_nacional012022', //demopersonas
    port: '3306'
})