import { pool } from "../db.js";

export const getPeoples = async (req,res) => {
   
    const [row] = await pool.query('select * from reg17 limit 10')
    res.json(row)
}
//sin procedure
// export const getPeoplexDni = async (req, res) => {
//     try {
//         const { dni } = req.params;
//         const u = dni.slice(-2)
//         const [row] = await pool.query('select * from reg' + u + ' where dni=?', [dni]);

//         if (row.length <= 0) {
//             return res.status(404).json({ message: "Person not found" })
//         }
//         res.json(row[0]);

//     } catch (error) {
//         return res.status(500).json({ message: "Unexpected Error" })
//     }
// }

//con procedure
export const getPeoplexDni = async (req, res) => {
    try {
        const { dni } = req.params;
        const [row] = await pool.query('CALL buscarxDNI(?)', [dni]);
        if (row.length <= 0) {
            return res.status(404).json({ message: "Person not found" });
        }
        res.json(row[0]);
    } catch (error) {
        return res.status(500).json({ message: "Unexpected Error" });
    }
}


//POST con procedure
export const postPeople= async (req, res) => {
    try {
    const { apellido_pat, apellido_mat, nombres } = req.body;
  
    // Realizar la inserción en la base de datos
    const [rows] = await pool.execute('CALL buscarxNombres(?,?,?)', [apellido_pat, apellido_mat,nombres]);
        if (rows.length <= 0) {
            return res.status(404).json({ message: "Person not found" });
        }
        res.json(rows[0]);
        //res.status(201).json({ message: 'Persona insertada correctamente' });
    }catch(e){
        return res.status(500).json({ message: "Unexpected Error" });
    }
};

//sin procedure
// export const getPeoplexLast = async (req, res) => {
//     try {
//         const { name } = req.params;
//         const { last } = req.params;
//         const [row] = await pool.query('select * from reg50 where nombre=? and apellido_pat = ?', [name], [last]);

//         if (row.length <= 0) {
//             return res.status(404).json({ message: "Person not found" })
//         }
//         res.json(row[0]);

//     } catch (error) {
//         return res.status(500).json({ message: "Unexpected Error" })
//     }
// }


