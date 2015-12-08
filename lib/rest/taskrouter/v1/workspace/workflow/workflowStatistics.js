'use strict';

var ListResource = require('../../../../../base/ListResource');

var WorkflowStatisticsList;
var WorkflowStatisticsInstance;
var WorkflowStatisticsContext;

/**
 * Initialize the WorkflowStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param workflowSid: The workflow_sid
 *
 * @returns WorkflowStatisticsList
 */
function WorkflowStatisticsList(version, workspaceSid, workflowSid) {
  function WorkflowStatisticsListInstance() {
  }

  WorkflowStatisticsListInstance._version = version;
  // Path Solution
  WorkflowStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
  /**
   * Constructs a WorkflowStatisticsContext
   *
   * @returns WorkflowStatisticsContext
   */
  function get() {
    return new WorkflowStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workflowSid
    );
  }

  return WorkflowStatisticsListInstance;
}

module.exports = {
  WorkflowStatisticsList: WorkflowStatisticsList,
  WorkflowStatisticsInstance: WorkflowStatisticsInstance,
  WorkflowStatisticsContext: WorkflowStatisticsContext
};