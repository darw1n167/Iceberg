const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const postgres = require('postgres');

const app = express();

dotenv.config();

app.use(cors('*'));
app.use(express.static('../iceberg/dist'));
app.use(morgan('tiny'));

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);

app.get('/company', async (req, res) => {
	try {
		const data = await sql`SELECT * FROM company;`;
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: 'server error' });
	}
});

app.get('/connections', async (req, res) => {
	try {
		const data = await sql`SELECT * FROM poss_connections`;
		res.json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
});

app.get('/viewed', async (req, res) => {
	try {
		const data = await sql`SELECT * FROM people_viewed`;
		res.json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
});

app.get('/all', async (req, res) => {
   try {
      const data = await sql`SELECT * FROM skill`
      res.json(data)
   } catch (error) {
      res.status(500).json({error})
   }
})

app.get("/company", async (req, res) => {
   try {
     const data = await sql`SELECT * FROM company;`;
     res.status(200).json(data);
   } catch (error) {
     res.status(500).json({ error: "server error" });
   }
 });

 app.get("/profile", async (req, res) => {
   try {
     const result =
       await sql`SELECT * FROM experience JOIN company ON experience.company_id = company.id;;`;
     res.json(result);
     console.log(result);
   } catch (error) {
     res.status(500).json({ error });
   }
 });
 
 app.get("/skills", async (req, res) => {
   try {
     const data = await sql`SELECT * FROM skill`;
     res.json(data);
   } catch (error) {
     res.status(500).json({ error: "server error" });
   }
 });
 
 app.listen(PORT, () => {
   console.log(`listening on port: ${PORT}`);
 });