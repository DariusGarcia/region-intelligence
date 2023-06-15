import mysql from 'mysql2'

export default async function handler(req, res) {
  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10, // Adjust this value as per your requirements
  })

  pool.getConnection((error, connection) => {
    if (error) {
      // Handle connection error
      console.error('Error connecting to database:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      const query = 'SELECT * FROM SEQA_Phase_1'

      connection.query(query, (error, results) => {
        connection.release() // Release the connection back to the pool

        if (error) {
          // Handle query error
          console.error('Error executing query:', error)
          res.status(500).json({ error: 'Internal Server Error' })
        } else {
          // Process query results
          res.json(results)
        }
      })
    }
  })
}
