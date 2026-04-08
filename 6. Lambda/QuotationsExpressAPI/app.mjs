import express from 'express';
import cors from 'cors';
import db from './quotations_db.mjs';

const app = express();
const port = process.env.PORT ?? 8080;
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

// Enable CORS for ALL origins
app.use(cors());  // Defaults to { origin: '*' }

// Parse incoming JSON request bodies, parsed data is available in req.body
app.use(express.json());

app.get('/', async (req, res) => {
  res.redirect('/quotations');
});

// Get all quotations
app.get('/quotations', async (req, res) => {
  let connection;

  try {
    connection = await db.connect();
    let url;
    if (process.env.AWS_LAMBDA_FUNCTION_NAME === undefined) {
      url = `http://${ ipAddress }:${ port }`;
    } else {
      url = `https://${ req.hostname }`;
    }
    const result = await db.getAll(connection, url);
    res.json(result);

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Get a specific quotation by ID
app.get('/quotations/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await db.connect();
    const result = await db.getOne(connection, id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: `Resource with ID = ${ id } not found.`});
    }

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Create a new quotation
app.post('/quotations', async (req, res) => {
  let connection;

  try {
    connection = await db.connect();
    const id = await db.post(connection, req.body);
    res.status(201).json({ message: `Resource created with ID = ${ id }.`});

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Update a quotation by ID
app.put('/quotations/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await db.connect();
    const result = await db.put(connection, id, req.body);
    if (result) {
      res.json({ message: `Resource with ID = ${ id } updated.`});
    } else {
      res.status(400).json({
        message: `Unable to update resource with ID = ${ id }.`
      });
    }

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Delete all quotations
app.delete('/quotations', async (req, res) => {
  let connection;

  try {
    connection = await db.connect();
    const result = await db.deleteAll(connection);
    if (result > 0) {
      res.json({ message: `${ result } resource(s) deleted.`});
    } else {
      res.status(404).json({ message: `No resources found.`});
    }

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Delete a specific quotation by ID
app.delete('/quotations/:id', async (req, res) => {
  const id = req.params.id;
  let connection;

  try {
    connection = await db.connect();
    const result = await db.deleteOne(connection, id);
    if (result === 1) {
      res.json({ message: `Resource with ID = ${ id } deleted.`});
    } else {
      res.status(404).json({
        message: `Resource with ID = ${ id } not found.`
      });
    }

  } catch (err) {
    const { name, message } = err;
    res.status(500).json({ name, message });

  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Resource not found (status code 404)
app.use((req, res) => {
  const url = req.originalUrl;
  res.status(404).json({ message: `Not Found: ${ url }` });
});

if (process.env.AWS_LAMBDA_FUNCTION_NAME === undefined) {
  app.listen(port, () => {
    console.log(
      `Server listening at http://${ ipAddress }:${ port }`);
  });
}

export default app;
