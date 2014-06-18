'use strict';

describe('The SDK core', function() {
  var CamundaClient, cam, ProcessDefinition, processDefinition;

  it('does not blow when loading', function() {
    expect(function() {
      CamundaClient = require('./../../src/index');
    }).not.toThrow();
  });

  it('initializes', function() {
    expect(function() {
      cam = new CamundaClient({
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        appUri: 'camunda/api/engine/engine'
      });
    }).not.toThrow();
  });

  it('has resources', function() {
    expect(function() {
      ProcessDefinition = cam.resource('process-definition');
    }).not.toThrow();

    expect(ProcessDefinition.http).toBeDefined();


    expect(function() {
      processDefinition = new ProcessDefinition();
    }).not.toThrow();

    expect(processDefinition.http).toBeDefined();
    expect(processDefinition.http).toBe(ProcessDefinition.http);
  });


  it('can list the process process definitions', function(done) {
    ProcessDefinition.list({}, function(err, results) {
      if (err) {
        return done(err);
      }

      done();
    });
  });
});