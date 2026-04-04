const { execute } = require('./src/config/db');

async function alter() {
  try {
    await execute('ALTER TABLE airports ADD COLUMN note TEXT');
    console.log('Added note column successfully');
  } catch (err) {
    if (err.code === 'ER_DUP_FIELDNAME') {
      console.log('Column note already exists');
    } else {
      console.error(err);
    }
  }
  process.exit();
}
alter();
