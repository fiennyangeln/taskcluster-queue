var testing     = require('taskcluster-lib-testing');
var path        = require('path');

suite('validate', () => {
  // Run test cases using schemas testing utility from taskcluster-base
  testing.schemas({
    validator: {
      prefix:   'queue/v1/',
    },
    basePath:       path.join(__dirname, 'validate_test'),
    schemaPrefix:   'http://schemas.taskcluster.net/',
    cases: [
      {
        schema:   'queue/v1/create-task-request.json#',
        path:     'task.json',
        success:  true,
      },
    ],
  });
});
