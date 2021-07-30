/**
 * Rules
 *
 * @description => this service is responsible to interract with the rules,
 * and transform the rules into a form that can be consumed by the application.
 *
 * This service has two functions:
 *
 * expander => the backend API returns a JSON object directly exported by the
 * library that implements RBAC on the server. Therefore, the format of the
 * JSON object is not the same as the one that is consumed by the applicatiom,
 * as it is heavily optimized for the server library.
 *
 *
 * compressor => transforms the format used by the web application into a form
 * accepted for the backend APIs, as required by the underlying library.
 *
 * @author: Yash Kumar Verma <yk.verma2000@gmail.com>
 */
import { expander } from "./expander";
import { compressor } from "./compressor";

export { expander as expand, compressor as compress };
