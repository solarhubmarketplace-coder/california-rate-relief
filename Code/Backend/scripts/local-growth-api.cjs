// LOCAL ONLY: real intake controller + service + SQL, no provider or scheduler.
const { createGrowthDb, rpc } = require('../tests/growth-db.cjs');
const express = require('express');
(async () => {
  const db = await createGrowthDb();
  const supabasePath = require.resolve('../src/lib/supabase');
  require.cache[supabasePath] = {
    id: supabasePath,
    filename: supabasePath,
    loaded: true,
    exports: { supabaseAdmin: { rpc: (name, args) => rpc(db, name, args) } },
  };
  const controller = require('../src/controllers/intake.controller');
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3100');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    res.apiResponse = (status, message, data) =>
      res
        .status(status)
        .json({ message, data, timestamp: new Date().toISOString() });
    next();
  });
  app.post('/api/intake', (req, res, next) => {
    req.body.test = true;
    return controller.createIntake(req, res, next);
  });
  app.get('/test/stored', async (req, res) => {
    const result = await db.query(
      'select submission_id,lead_id,attribution,qualification_data,is_test from lead_submissions',
    );
    res.json(result.rows);
  });
  app.use((error, req, res, next) =>
    res.status(error.statusCode || 500).json({ message: error.message }),
  );
  app.listen(3101, '127.0.0.1', () =>
    console.log(
      'LOCAL synthetic-only intake at 127.0.0.1:3101; disposable PGlite; all rows forced is_test=true; no delivery worker.',
    ),
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
