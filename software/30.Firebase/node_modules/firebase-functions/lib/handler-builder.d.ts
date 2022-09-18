import * as express from 'express';
import { CloudFunction, EventContext, HttpsFunction } from './cloud-functions';
import * as analytics from './providers/analytics';
import * as auth from './providers/auth';
import * as database from './providers/database';
import * as firestore from './providers/firestore';
import * as https from './providers/https';
import * as pubsub from './providers/pubsub';
import * as remoteConfig from './providers/remoteConfig';
import * as storage from './providers/storage';
import * as tasks from './providers/tasks';
import * as testLab from './providers/testLab';
/**
 * The `HandlerBuilder` class facilitates the writing of functions by developers
 * building Firebase Extensions as well as developers who want to use the gcloud CLI or
 * Google Cloud Console to deploy their functions.
 *
 * **Do not use `HandlerBuilder` when writing normal functions for deployment via
 * the Firebase CLI.** For normal purposes, use
 * [`FunctionBuilder`](/docs/reference/functions/function_builder_.functionbuilder).
 */
export declare class HandlerBuilder {
    constructor();
    /**
     * Create a handler for HTTPS events.
  
     * `onRequest` handles an HTTPS request and has the same signature as an Express app.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.https.onRequest((req, res) => { ... })
     * ```
     *
     * `onCall` declares a callable function for clients to call using a Firebase SDK.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.https.onCall((data, context) => { ... })
     * ```
     */
    get https(): {
        onRequest: (handler: (req: express.Request, resp: express.Response) => void) => HttpsFunction;
        onCall: (handler: (data: any, context: https.CallableContext) => any | Promise<any>) => HttpsFunction;
    };
    /**
     * Create a handler for tasks functions.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.tasks.onDispatch((data, context) => { ... })
     * ```
     */
    /** @hidden */
    get tasks(): {
        readonly taskQueue: {
            onDispatch: (handler: (data: any, context: tasks.TaskContext) => void | Promise<void>) => HttpsFunction;
        };
    };
    /**
     * Create a handler for Firebase Realtime Database events.
     *
     * `ref.onCreate` handles the creation of new data.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.database.ref.onCreate((snap, context) => { ... })
     * ```
     *
     * `ref.onUpdate` handles updates to existing data.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.database.ref.onUpdate((change, context) => { ... })
     * ```
  
     * `ref.onDelete` handles the deletion of existing data.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.database.ref.onDelete((snap, context) => { ... })
     * ```
  
     * `ref.onWrite` handles the creation, update, or deletion of data.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.database.ref.onWrite((change, context) => { ... })
     * ```
     */
    get database(): {
        /** @hidden */
        readonly instance: {
            readonly ref: database.RefBuilder;
        };
        readonly ref: database.RefBuilder;
    };
    /**
     * Create a handler for Cloud Firestore events.
     *
     * `document.onCreate` handles the creation of new documents.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.firestore.document.onCreate((snap, context) => { ... })
     * ```
  
     * `document.onUpdate` handles updates to existing documents.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.firestore.document.onUpdate((change, context) => { ... })
     * ```
  
     * `document.onDelete` handles the deletion of existing documents.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.firestore.document.onDelete((snap, context) =>
     * { ... })
     * ```
  
     * `document.onWrite` handles the creation, update, or deletion of documents.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.firestore.document.onWrite((change, context) =>
     * { ... })
     * ```
     */
    get firestore(): {
        readonly document: firestore.DocumentBuilder;
        /** @hidden */
        readonly namespace: firestore.DocumentBuilder;
        /** @hidden */
        readonly database: firestore.DocumentBuilder;
    };
    /**
     * Create a handler for Firebase Remote Config events.
  
     * `remoteConfig.onUpdate` handles events that update a Remote Config template.
  
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.remoteConfig.onUpdate() => { ... })
     * ```
     */
    get remoteConfig(): {
        onUpdate: (handler: (version: remoteConfig.TemplateVersion, context: EventContext) => PromiseLike<any> | any) => CloudFunction<remoteConfig.TemplateVersion>;
    };
    /**
     * Create a handler for Google Analytics events.
  
     * `event.onLog` handles the logging of Analytics conversion events.
  
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.analytics.event.onLog((event) => { ... })
     * ```
     */
    get analytics(): {
        readonly event: analytics.AnalyticsEventBuilder;
    };
    /**
     * Create a handler for Cloud Storage for Firebase events.
     *
     * `object.onArchive` handles the archiving of Storage objects.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.storage.object.onArchive((object) => { ... })
     * ```
  
     * `object.onDelete` handles the deletion of Storage objects.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.storage.object.onDelete((object) => { ... })
     * ```
  
     * `object.onFinalize` handles the creation of Storage objects.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.storage.object.onFinalize((object) =>
     * { ... })
     * ```
  
     * `object.onMetadataUpdate` handles changes to the metadata of existing Storage objects.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.storage.object.onMetadataUpdate((object) =>
     * { ... })
     * ```
     */
    get storage(): {
        readonly bucket: storage.ObjectBuilder;
        readonly object: storage.ObjectBuilder;
    };
    /**
     * Create a handler for Cloud Pub/Sub events.
     *
     * `topic.onPublish` handles messages published to a Pub/Sub topic from SDKs, Cloud Console, or gcloud CLI.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.pubsub.topic.onPublish((message) => { ... })
     * ```
  
     * `schedule.onPublish` handles messages published to a Pub/Sub topic on a schedule.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.pubsub.schedule.onPublish((message) => { ... })
     * ```
     */
    get pubsub(): {
        readonly topic: pubsub.TopicBuilder;
        readonly schedule: pubsub.ScheduleBuilder;
    };
    /**
     * Create a handler for Firebase Authentication events.
     *
     * `user.onCreate` handles the creation of users.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.auth.user.onCreate((user) => { ... })
     * ```
  
     * `user.onDelete` handles the deletion of users.
     *
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.auth.user.onDelete((user => { ... })
     * ```
  
     */
    get auth(): {
        readonly user: auth.UserBuilder;
    };
    /**
     * Create a handler for Firebase Test Lab events.
  
     * `testMatrix.onComplete` handles the completion of a test matrix.
  
     * @example
     * ```javascript
     * exports.myFunction = functions.handler.testLab.testMatrix.onComplete((testMatrix) => { ... })
     * ```
     */
    get testLab(): {
        readonly testMatrix: testLab.TestMatrixBuilder;
    };
}
export declare let handler: HandlerBuilder;
