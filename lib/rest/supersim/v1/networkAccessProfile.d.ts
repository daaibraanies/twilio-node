/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { NetworkAccessProfileNetworkList } from './networkAccessProfile/networkAccessProfileNetwork';
import { NetworkAccessProfileNetworkListInstance } from './networkAccessProfile/networkAccessProfileNetwork';
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the NetworkAccessProfileList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function NetworkAccessProfileList(version: V1): NetworkAccessProfileListInstance;

/**
 * Options to pass to update
 *
 * @property uniqueName - The new unique name of the resource
 */
interface NetworkAccessProfileInstanceUpdateOptions {
  uniqueName?: string;
}

interface NetworkAccessProfileListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): NetworkAccessProfileContext;
  /**
   * create a NetworkAccessProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * create a NetworkAccessProfileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NetworkAccessProfileListInstanceCreateOptions, callback?: (error: Error | null, item: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * Streams NetworkAccessProfileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NetworkAccessProfileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: NetworkAccessProfileListInstanceEachOptions, callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a network_access_profile
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): NetworkAccessProfileContext;
  /**
   * Retrieve a single target page of NetworkAccessProfileInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Retrieve a single target page of NetworkAccessProfileInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Lists NetworkAccessProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
  /**
   * Lists NetworkAccessProfileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NetworkAccessProfileListInstanceOptions, callback?: (error: Error | null, items: NetworkAccessProfileInstance[]) => any): Promise<NetworkAccessProfileInstance[]>;
  /**
   * Retrieve a single page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Retrieve a single page of NetworkAccessProfileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NetworkAccessProfileListInstancePageOptions, callback?: (error: Error | null, items: NetworkAccessProfilePage) => any): Promise<NetworkAccessProfilePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property networks - List of Network SIDs that this Network Access Profile will allow connections to
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface NetworkAccessProfileListInstanceCreateOptions {
  networks?: string | string[];
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface NetworkAccessProfileListInstanceEachOptions {
  callback?: (item: NetworkAccessProfileInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface NetworkAccessProfileListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface NetworkAccessProfileListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface NetworkAccessProfilePayload extends NetworkAccessProfileResource, Page.TwilioResponsePayload {
}

interface NetworkAccessProfileResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface NetworkAccessProfileSolution {
}


declare class NetworkAccessProfileContext {
  /**
   * Initialize the NetworkAccessProfileContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a NetworkAccessProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  networks: NetworkAccessProfileNetworkListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a NetworkAccessProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * update a NetworkAccessProfileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: NetworkAccessProfileInstanceUpdateOptions, callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
}


declare class NetworkAccessProfileInstance extends SerializableClass {
  /**
   * Initialize the NetworkAccessProfileContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: NetworkAccessProfilePayload, sid: string);

  private _proxy: NetworkAccessProfileContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a NetworkAccessProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  links: string;
  /**
   * Access the networks
   */
  networks(): NetworkAccessProfileNetworkListInstance;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a NetworkAccessProfileInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  /**
   * update a NetworkAccessProfileInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: NetworkAccessProfileInstanceUpdateOptions, callback?: (error: Error | null, items: NetworkAccessProfileInstance) => any): Promise<NetworkAccessProfileInstance>;
  url: string;
}


declare class NetworkAccessProfilePage extends Page<V1, NetworkAccessProfilePayload, NetworkAccessProfileResource, NetworkAccessProfileInstance> {
  /**
   * Initialize the NetworkAccessProfilePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NetworkAccessProfileSolution);

  /**
   * Build an instance of NetworkAccessProfileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NetworkAccessProfilePayload): NetworkAccessProfileInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NetworkAccessProfileContext, NetworkAccessProfileInstance, NetworkAccessProfileInstanceUpdateOptions, NetworkAccessProfileList, NetworkAccessProfileListInstance, NetworkAccessProfileListInstanceCreateOptions, NetworkAccessProfileListInstanceEachOptions, NetworkAccessProfileListInstanceOptions, NetworkAccessProfileListInstancePageOptions, NetworkAccessProfilePage, NetworkAccessProfilePayload, NetworkAccessProfileResource, NetworkAccessProfileSolution }
