import { pool } from "../db.js";


export const getPeoplexDni = async (req, res) => {
    try {
        const { dni } = req.params;
        const u = dni.slice(-2)
        const [row] = await pool.query('select * from reg' + u + ' where dni=?', [dni]);

        if (row.length <= 0) {
            return res.status(404).json({ message: "Person not found" })
        }
        res.json(row[0]);

    } catch (error) {
        return res.status(500).json({ message: "Unexpected Error" })
    }
}

export const getPeoplexLast = async (req, res) => {
    try {
        const { name } = req.params;
        const { last } = req.params;
        const [row] = await pool.query('select * from reg50 where nombre=? and apellido_pat = ?', [name], [last]);

        if (row.length <= 0) {
            return res.status(404).json({ message: "Person not found" })
        }
        res.json(row[0]);

    } catch (error) {
        return res.status(500).json({ message: "Unexpected Error" })
    }
}



