/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model activity_log
 *
 */
export type activity_log = $Result.DefaultSelection<Prisma.$activity_logPayload>;
/**
 * Model client
 *
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>;
/**
 * Model content
 *
 */
export type content = $Result.DefaultSelection<Prisma.$contentPayload>;
/**
 * Model seo_analysis
 *
 */
export type seo_analysis = $Result.DefaultSelection<Prisma.$seo_analysisPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activity_logs
 * const activity_logs = await prisma.activity_log.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Activity_logs
   * const activity_logs = await prisma.activity_log.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.activity_log`: Exposes CRUD operations for the **activity_log** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Activity_logs
   * const activity_logs = await prisma.activity_log.findMany()
   * ```
   */
  get activity_log(): Prisma.activity_logDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.clientDelegate<ExtArgs>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **content** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Contents
   * const contents = await prisma.content.findMany()
   * ```
   */
  get content(): Prisma.contentDelegate<ExtArgs>;

  /**
   * `prisma.seo_analysis`: Exposes CRUD operations for the **seo_analysis** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Seo_analyses
   * const seo_analyses = await prisma.seo_analysis.findMany()
   * ```
   */
  get seo_analysis(): Prisma.seo_analysisDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    activity_log: 'activity_log';
    client: 'client';
    content: 'content';
    seo_analysis: 'seo_analysis';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'activity_log' | 'client' | 'content' | 'seo_analysis' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      activity_log: {
        payload: Prisma.$activity_logPayload<ExtArgs>;
        fields: Prisma.activity_logFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.activity_logFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.activity_logFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          findFirst: {
            args: Prisma.activity_logFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.activity_logFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          findMany: {
            args: Prisma.activity_logFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>[];
          };
          create: {
            args: Prisma.activity_logCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          createMany: {
            args: Prisma.activity_logCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.activity_logDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          update: {
            args: Prisma.activity_logUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          deleteMany: {
            args: Prisma.activity_logDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.activity_logUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.activity_logUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$activity_logPayload>;
          };
          aggregate: {
            args: Prisma.Activity_logAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateActivity_log>;
          };
          groupBy: {
            args: Prisma.activity_logGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Activity_logGroupByOutputType>[];
          };
          count: {
            args: Prisma.activity_logCountArgs<ExtArgs>;
            result: $Utils.Optional<Activity_logCountAggregateOutputType> | number;
          };
        };
      };
      client: {
        payload: Prisma.$clientPayload<ExtArgs>;
        fields: Prisma.clientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[];
          };
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient>;
          };
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClientGroupByOutputType>[];
          };
          count: {
            args: Prisma.clientCountArgs<ExtArgs>;
            result: $Utils.Optional<ClientCountAggregateOutputType> | number;
          };
        };
      };
      content: {
        payload: Prisma.$contentPayload<ExtArgs>;
        fields: Prisma.contentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.contentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.contentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findFirst: {
            args: Prisma.contentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.contentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          findMany: {
            args: Prisma.contentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>[];
          };
          create: {
            args: Prisma.contentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          createMany: {
            args: Prisma.contentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.contentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          update: {
            args: Prisma.contentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          deleteMany: {
            args: Prisma.contentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.contentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.contentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$contentPayload>;
          };
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateContent>;
          };
          groupBy: {
            args: Prisma.contentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ContentGroupByOutputType>[];
          };
          count: {
            args: Prisma.contentCountArgs<ExtArgs>;
            result: $Utils.Optional<ContentCountAggregateOutputType> | number;
          };
        };
      };
      seo_analysis: {
        payload: Prisma.$seo_analysisPayload<ExtArgs>;
        fields: Prisma.seo_analysisFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.seo_analysisFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.seo_analysisFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          findFirst: {
            args: Prisma.seo_analysisFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.seo_analysisFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          findMany: {
            args: Prisma.seo_analysisFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>[];
          };
          create: {
            args: Prisma.seo_analysisCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          createMany: {
            args: Prisma.seo_analysisCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.seo_analysisDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          update: {
            args: Prisma.seo_analysisUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          deleteMany: {
            args: Prisma.seo_analysisDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.seo_analysisUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.seo_analysisUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$seo_analysisPayload>;
          };
          aggregate: {
            args: Prisma.Seo_analysisAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSeo_analysis>;
          };
          groupBy: {
            args: Prisma.seo_analysisGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Seo_analysisGroupByOutputType>[];
          };
          count: {
            args: Prisma.seo_analysisCountArgs<ExtArgs>;
            result: $Utils.Optional<Seo_analysisCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    content: number;
  };

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ClientCountOutputTypeCountContentArgs;
  };

  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountContentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: contentWhereInput;
  };

  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    seo_analysis: number;
  };

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo_analysis?: boolean | ContentCountOutputTypeCountSeo_analysisArgs;
  };

  // Custom InputTypes

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountSeo_analysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: seo_analysisWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activity_log: number;
    client: number;
    content: number;
    seo_analysis: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_log?: boolean | UserCountOutputTypeCountActivity_logArgs;
    client?: boolean | UserCountOutputTypeCountClientArgs;
    content?: boolean | UserCountOutputTypeCountContentArgs;
    seo_analysis?: boolean | UserCountOutputTypeCountSeo_analysisArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivity_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: activity_logWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: contentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeo_analysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: seo_analysisWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model activity_log
   */

  export type AggregateActivity_log = {
    _count: Activity_logCountAggregateOutputType | null;
    _min: Activity_logMinAggregateOutputType | null;
    _max: Activity_logMaxAggregateOutputType | null;
  };

  export type Activity_logMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    activity: string | null;
    ip_address: string | null;
    browser_info: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Activity_logMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    activity: string | null;
    ip_address: string | null;
    browser_info: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Activity_logCountAggregateOutputType = {
    id: number;
    user_id: number;
    activity: number;
    ip_address: number;
    browser_info: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Activity_logMinAggregateInputType = {
    id?: true;
    user_id?: true;
    activity?: true;
    ip_address?: true;
    browser_info?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Activity_logMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    activity?: true;
    ip_address?: true;
    browser_info?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Activity_logCountAggregateInputType = {
    id?: true;
    user_id?: true;
    activity?: true;
    ip_address?: true;
    browser_info?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Activity_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_log to aggregate.
     */
    where?: activity_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logOrderByWithRelationInput | activity_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: activity_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` activity_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned activity_logs
     **/
    _count?: true | Activity_logCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Activity_logMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Activity_logMaxAggregateInputType;
  };

  export type GetActivity_logAggregateType<T extends Activity_logAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity_log[P]>
      : GetScalarType<T[P], AggregateActivity_log[P]>;
  };

  export type activity_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logWhereInput;
    orderBy?: activity_logOrderByWithAggregationInput | activity_logOrderByWithAggregationInput[];
    by: Activity_logScalarFieldEnum[] | Activity_logScalarFieldEnum;
    having?: activity_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Activity_logCountAggregateInputType | true;
    _min?: Activity_logMinAggregateInputType;
    _max?: Activity_logMaxAggregateInputType;
  };

  export type Activity_logGroupByOutputType = {
    id: string;
    user_id: string;
    activity: string | null;
    ip_address: string | null;
    browser_info: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Activity_logCountAggregateOutputType | null;
    _min: Activity_logMinAggregateOutputType | null;
    _max: Activity_logMaxAggregateOutputType | null;
  };

  type GetActivity_logGroupByPayload<T extends activity_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activity_logGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Activity_logGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Activity_logGroupByOutputType[P]>
          : GetScalarType<T[P], Activity_logGroupByOutputType[P]>;
      }
    >
  >;

  export type activity_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        activity?: boolean;
        ip_address?: boolean;
        browser_info?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['activity_log']
    >;

  export type activity_logSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    activity?: boolean;
    ip_address?: boolean;
    browser_info?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type activity_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $activity_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'activity_log';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        activity: string | null;
        ip_address: string | null;
        browser_info: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['activity_log']
    >;
    composites: {};
  };

  type activity_logGetPayload<S extends boolean | null | undefined | activity_logDefaultArgs> = $Result.GetResult<
    Prisma.$activity_logPayload,
    S
  >;

  type activity_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    activity_logFindManyArgs,
    'select' | 'include'
  > & {
    select?: Activity_logCountAggregateInputType | true;
  };

  export interface activity_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity_log']; meta: { name: 'activity_log' } };
    /**
     * Find zero or one Activity_log that matches the filter.
     * @param {activity_logFindUniqueArgs} args - Arguments to find a Activity_log
     * @example
     * // Get one Activity_log
     * const activity_log = await prisma.activity_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends activity_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logFindUniqueArgs<ExtArgs>>,
    ): Prisma__activity_logClient<
      $Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Activity_log that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {activity_logFindUniqueOrThrowArgs} args - Arguments to find a Activity_log
     * @example
     * // Get one Activity_log
     * const activity_log = await prisma.activity_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends activity_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__activity_logClient<
      $Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Activity_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logFindFirstArgs} args - Arguments to find a Activity_log
     * @example
     * // Get one Activity_log
     * const activity_log = await prisma.activity_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends activity_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logFindFirstArgs<ExtArgs>>,
    ): Prisma__activity_logClient<
      $Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Activity_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logFindFirstOrThrowArgs} args - Arguments to find a Activity_log
     * @example
     * // Get one Activity_log
     * const activity_log = await prisma.activity_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends activity_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__activity_logClient<
      $Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activity_logs
     * const activity_logs = await prisma.activity_log.findMany()
     *
     * // Get first 10 Activity_logs
     * const activity_logs = await prisma.activity_log.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const activity_logWithIdOnly = await prisma.activity_log.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends activity_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Activity_log.
     * @param {activity_logCreateArgs} args - Arguments to create a Activity_log.
     * @example
     * // Create one Activity_log
     * const Activity_log = await prisma.activity_log.create({
     *   data: {
     *     // ... data to create a Activity_log
     *   }
     * })
     *
     **/
    create<T extends activity_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logCreateArgs<ExtArgs>>,
    ): Prisma__activity_logClient<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Activity_logs.
     *     @param {activity_logCreateManyArgs} args - Arguments to create many Activity_logs.
     *     @example
     *     // Create many Activity_logs
     *     const activity_log = await prisma.activity_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends activity_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Activity_log.
     * @param {activity_logDeleteArgs} args - Arguments to delete one Activity_log.
     * @example
     * // Delete one Activity_log
     * const Activity_log = await prisma.activity_log.delete({
     *   where: {
     *     // ... filter to delete one Activity_log
     *   }
     * })
     *
     **/
    delete<T extends activity_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logDeleteArgs<ExtArgs>>,
    ): Prisma__activity_logClient<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Activity_log.
     * @param {activity_logUpdateArgs} args - Arguments to update one Activity_log.
     * @example
     * // Update one Activity_log
     * const activity_log = await prisma.activity_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends activity_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logUpdateArgs<ExtArgs>>,
    ): Prisma__activity_logClient<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Activity_logs.
     * @param {activity_logDeleteManyArgs} args - Arguments to filter Activity_logs to delete.
     * @example
     * // Delete a few Activity_logs
     * const { count } = await prisma.activity_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends activity_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_logDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activity_logs
     * const activity_log = await prisma.activity_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends activity_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Activity_log.
     * @param {activity_logUpsertArgs} args - Arguments to update or create a Activity_log.
     * @example
     * // Update or create a Activity_log
     * const activity_log = await prisma.activity_log.upsert({
     *   create: {
     *     // ... data to create a Activity_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity_log we want to update
     *   }
     * })
     **/
    upsert<T extends activity_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, activity_logUpsertArgs<ExtArgs>>,
    ): Prisma__activity_logClient<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logCountArgs} args - Arguments to filter Activity_logs to count.
     * @example
     * // Count the number of Activity_logs
     * const count = await prisma.activity_log.count({
     *   where: {
     *     // ... the filter for the Activity_logs we want to count
     *   }
     * })
     **/
    count<T extends activity_logCountArgs>(
      args?: Subset<T, activity_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activity_logCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Activity_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activity_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Activity_logAggregateArgs>(
      args: Subset<T, Activity_logAggregateArgs>,
    ): Prisma.PrismaPromise<GetActivity_logAggregateType<T>>;

    /**
     * Group by Activity_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends activity_logGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activity_logGroupByArgs['orderBy'] }
        : { orderBy?: activity_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, activity_logGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetActivity_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the activity_log model
     */
    readonly fields: activity_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activity_logClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the activity_log model
   */
  interface activity_logFieldRefs {
    readonly id: FieldRef<'activity_log', 'String'>;
    readonly user_id: FieldRef<'activity_log', 'String'>;
    readonly activity: FieldRef<'activity_log', 'String'>;
    readonly ip_address: FieldRef<'activity_log', 'String'>;
    readonly browser_info: FieldRef<'activity_log', 'String'>;
    readonly created_at: FieldRef<'activity_log', 'DateTime'>;
    readonly updated_at: FieldRef<'activity_log', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * activity_log findUnique
   */
  export type activity_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter, which activity_log to fetch.
     */
    where: activity_logWhereUniqueInput;
  };

  /**
   * activity_log findUniqueOrThrow
   */
  export type activity_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter, which activity_log to fetch.
     */
    where: activity_logWhereUniqueInput;
  };

  /**
   * activity_log findFirst
   */
  export type activity_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter, which activity_log to fetch.
     */
    where?: activity_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logOrderByWithRelationInput | activity_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` activity_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logScalarFieldEnum | Activity_logScalarFieldEnum[];
  };

  /**
   * activity_log findFirstOrThrow
   */
  export type activity_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter, which activity_log to fetch.
     */
    where?: activity_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logOrderByWithRelationInput | activity_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` activity_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logScalarFieldEnum | Activity_logScalarFieldEnum[];
  };

  /**
   * activity_log findMany
   */
  export type activity_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logOrderByWithRelationInput | activity_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing activity_logs.
     */
    cursor?: activity_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` activity_logs.
     */
    skip?: number;
    distinct?: Activity_logScalarFieldEnum | Activity_logScalarFieldEnum[];
  };

  /**
   * activity_log create
   */
  export type activity_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * The data needed to create a activity_log.
     */
    data: XOR<activity_logCreateInput, activity_logUncheckedCreateInput>;
  };

  /**
   * activity_log createMany
   */
  export type activity_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logCreateManyInput | activity_logCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * activity_log update
   */
  export type activity_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * The data needed to update a activity_log.
     */
    data: XOR<activity_logUpdateInput, activity_logUncheckedUpdateInput>;
    /**
     * Choose, which activity_log to update.
     */
    where: activity_logWhereUniqueInput;
  };

  /**
   * activity_log updateMany
   */
  export type activity_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logUpdateManyMutationInput, activity_logUncheckedUpdateManyInput>;
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logWhereInput;
  };

  /**
   * activity_log upsert
   */
  export type activity_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * The filter to search for the activity_log to update in case it exists.
     */
    where: activity_logWhereUniqueInput;
    /**
     * In case the activity_log found by the `where` argument doesn't exist, create a new activity_log with this data.
     */
    create: XOR<activity_logCreateInput, activity_logUncheckedCreateInput>;
    /**
     * In case the activity_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activity_logUpdateInput, activity_logUncheckedUpdateInput>;
  };

  /**
   * activity_log delete
   */
  export type activity_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    /**
     * Filter which activity_log to delete.
     */
    where: activity_logWhereUniqueInput;
  };

  /**
   * activity_log deleteMany
   */
  export type activity_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to delete
     */
    where?: activity_logWhereInput;
  };

  /**
   * activity_log without action
   */
  export type activity_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
  };

  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  export type ClientMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClientMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClientCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ClientMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClientMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClientCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clients
     **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType;
  };

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>;
  };

  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput;
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[];
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum;
    having?: clientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
  };

  export type ClientGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
          : GetScalarType<T[P], ClientGroupByOutputType[P]>;
      }
    >
  >;

  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      content?: boolean | client$contentArgs<ExtArgs>;
      _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type clientSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    content?: boolean | client$contentArgs<ExtArgs>;
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'client';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      content: Prisma.$contentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['client']
    >;
    composites: {};
  };

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<
    Prisma.$clientPayload,
    S
  >;

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clientFindManyArgs,
    'select' | 'include'
  > & {
    select?: ClientCountAggregateInputType | true;
  };

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client']; meta: { name: 'client' } };
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     **/
    create<T extends clientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientCreateArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clients.
     *     @param {clientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     **/
    delete<T extends clientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientDeleteArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     **/
    upsert<T extends clientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpsertArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>,
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>;

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the client model
     */
    readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    content<T extends client$contentArgs<ExtArgs> = {}>(
      args?: Subset<T, client$contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the client model
   */
  interface clientFieldRefs {
    readonly id: FieldRef<'client', 'String'>;
    readonly description: FieldRef<'client', 'String'>;
    readonly address: FieldRef<'client', 'String'>;
    readonly phone_number: FieldRef<'client', 'String'>;
    readonly name: FieldRef<'client', 'String'>;
    readonly created_at: FieldRef<'client', 'DateTime'>;
    readonly updated_at: FieldRef<'client', 'DateTime'>;
    readonly user_id: FieldRef<'client', 'String'>;
    readonly tenant_id: FieldRef<'client', 'String'>;
  }

  // Custom InputTypes

  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>;
  };

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>;
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>;
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput;
  };

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput;
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>;
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>;
  };

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput;
  };

  /**
   * client.content
   */
  export type client$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    where?: contentWhereInput;
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    cursor?: contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
  };

  /**
   * Model content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  export type ContentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    body: string | null;
    keywords: string | null;
    publish_date: Date | null;
    writer_id: string | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    body: string | null;
    keywords: string | null;
    publish_date: Date | null;
    writer_id: string | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ContentCountAggregateOutputType = {
    id: number;
    title: number;
    body: number;
    keywords: number;
    publish_date: number;
    writer_id: number;
    client_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ContentMinAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    keywords?: true;
    publish_date?: true;
    writer_id?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentMaxAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    keywords?: true;
    publish_date?: true;
    writer_id?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ContentCountAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    keywords?: true;
    publish_date?: true;
    writer_id?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which content to aggregate.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contents
     **/
    _count?: true | ContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ContentMaxAggregateInputType;
  };

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>;
  };

  export type contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contentWhereInput;
    orderBy?: contentOrderByWithAggregationInput | contentOrderByWithAggregationInput[];
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum;
    having?: contentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
  };

  export type ContentGroupByOutputType = {
    id: string;
    title: string;
    body: string;
    keywords: string | null;
    publish_date: Date | null;
    writer_id: string;
    client_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
  };

  type GetContentGroupByPayload<T extends contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ContentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
          : GetScalarType<T[P], ContentGroupByOutputType[P]>;
      }
    >
  >;

  export type contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      body?: boolean;
      keywords?: boolean;
      publish_date?: boolean;
      writer_id?: boolean;
      client_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      client?: boolean | clientDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      seo_analysis?: boolean | content$seo_analysisArgs<ExtArgs>;
      _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['content']
  >;

  export type contentSelectScalar = {
    id?: boolean;
    title?: boolean;
    body?: boolean;
    keywords?: boolean;
    publish_date?: boolean;
    writer_id?: boolean;
    client_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    seo_analysis?: boolean | content$seo_analysisArgs<ExtArgs>;
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'content';
    objects: {
      client: Prisma.$clientPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      seo_analysis: Prisma.$seo_analysisPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        body: string;
        keywords: string | null;
        publish_date: Date | null;
        writer_id: string;
        client_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['content']
    >;
    composites: {};
  };

  type contentGetPayload<S extends boolean | null | undefined | contentDefaultArgs> = $Result.GetResult<
    Prisma.$contentPayload,
    S
  >;

  type contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    contentFindManyArgs,
    'select' | 'include'
  > & {
    select?: ContentCountAggregateInputType | true;
  };

  export interface contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['content']; meta: { name: 'content' } };
    /**
     * Find zero or one Content that matches the filter.
     * @param {contentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends contentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contentFindUniqueArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Content that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {contentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends contentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends contentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends contentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     *
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends contentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Content.
     * @param {contentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     *
     **/
    create<T extends contentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contentCreateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Contents.
     *     @param {contentCreateManyArgs} args - Arguments to create many Contents.
     *     @example
     *     // Create many Contents
     *     const content = await prisma.content.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends contentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Content.
     * @param {contentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     *
     **/
    delete<T extends contentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contentDeleteArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Content.
     * @param {contentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends contentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Contents.
     * @param {contentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends contentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends contentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Content.
     * @param {contentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     **/
    upsert<T extends contentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contentUpsertArgs<ExtArgs>>,
    ): Prisma__contentClient<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
     **/
    count<T extends contentCountArgs>(
      args?: Subset<T, contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ContentAggregateArgs>(
      args: Subset<T, ContentAggregateArgs>,
    ): Prisma.PrismaPromise<GetContentAggregateType<T>>;

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends contentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contentGroupByArgs['orderBy'] }
        : { orderBy?: contentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, contentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the content model
     */
    readonly fields: contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends clientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clientDefaultArgs<ExtArgs>>,
    ): Prisma__clientClient<
      $Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    seo_analysis<T extends content$seo_analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, content$seo_analysisArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the content model
   */
  interface contentFieldRefs {
    readonly id: FieldRef<'content', 'String'>;
    readonly title: FieldRef<'content', 'String'>;
    readonly body: FieldRef<'content', 'String'>;
    readonly keywords: FieldRef<'content', 'String'>;
    readonly publish_date: FieldRef<'content', 'DateTime'>;
    readonly writer_id: FieldRef<'content', 'String'>;
    readonly client_id: FieldRef<'content', 'String'>;
    readonly created_at: FieldRef<'content', 'DateTime'>;
    readonly updated_at: FieldRef<'content', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * content findUnique
   */
  export type contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findUniqueOrThrow
   */
  export type contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content findFirst
   */
  export type contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findFirstOrThrow
   */
  export type contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which content to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content findMany
   */
  export type contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter, which contents to fetch.
     */
    where?: contentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contents to fetch.
     */
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contents.
     */
    cursor?: contentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contents.
     */
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * content create
   */
  export type contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to create a content.
     */
    data: XOR<contentCreateInput, contentUncheckedCreateInput>;
  };

  /**
   * content createMany
   */
  export type contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contents.
     */
    data: contentCreateManyInput | contentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * content update
   */
  export type contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The data needed to update a content.
     */
    data: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
    /**
     * Choose, which content to update.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content updateMany
   */
  export type contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contents.
     */
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyInput>;
    /**
     * Filter which contents to update
     */
    where?: contentWhereInput;
  };

  /**
   * content upsert
   */
  export type contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * The filter to search for the content to update in case it exists.
     */
    where: contentWhereUniqueInput;
    /**
     * In case the content found by the `where` argument doesn't exist, create a new content with this data.
     */
    create: XOR<contentCreateInput, contentUncheckedCreateInput>;
    /**
     * In case the content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contentUpdateInput, contentUncheckedUpdateInput>;
  };

  /**
   * content delete
   */
  export type contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    /**
     * Filter which content to delete.
     */
    where: contentWhereUniqueInput;
  };

  /**
   * content deleteMany
   */
  export type contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contents to delete
     */
    where?: contentWhereInput;
  };

  /**
   * content.seo_analysis
   */
  export type content$seo_analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    where?: seo_analysisWhereInput;
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    cursor?: seo_analysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Seo_analysisScalarFieldEnum | Seo_analysisScalarFieldEnum[];
  };

  /**
   * content without action
   */
  export type contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
  };

  /**
   * Model seo_analysis
   */

  export type AggregateSeo_analysis = {
    _count: Seo_analysisCountAggregateOutputType | null;
    _avg: Seo_analysisAvgAggregateOutputType | null;
    _sum: Seo_analysisSumAggregateOutputType | null;
    _min: Seo_analysisMinAggregateOutputType | null;
    _max: Seo_analysisMaxAggregateOutputType | null;
  };

  export type Seo_analysisAvgAggregateOutputType = {
    seo_score: number | null;
  };

  export type Seo_analysisSumAggregateOutputType = {
    seo_score: number | null;
  };

  export type Seo_analysisMinAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    seo_score: number | null;
    seo_report: string | null;
    analyst_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Seo_analysisMaxAggregateOutputType = {
    id: string | null;
    content_id: string | null;
    seo_score: number | null;
    seo_report: string | null;
    analyst_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Seo_analysisCountAggregateOutputType = {
    id: number;
    content_id: number;
    seo_score: number;
    seo_report: number;
    analyst_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Seo_analysisAvgAggregateInputType = {
    seo_score?: true;
  };

  export type Seo_analysisSumAggregateInputType = {
    seo_score?: true;
  };

  export type Seo_analysisMinAggregateInputType = {
    id?: true;
    content_id?: true;
    seo_score?: true;
    seo_report?: true;
    analyst_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Seo_analysisMaxAggregateInputType = {
    id?: true;
    content_id?: true;
    seo_score?: true;
    seo_report?: true;
    analyst_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Seo_analysisCountAggregateInputType = {
    id?: true;
    content_id?: true;
    seo_score?: true;
    seo_report?: true;
    analyst_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Seo_analysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seo_analysis to aggregate.
     */
    where?: seo_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seo_analyses to fetch.
     */
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: seo_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seo_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seo_analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned seo_analyses
     **/
    _count?: true | Seo_analysisCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Seo_analysisAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Seo_analysisSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Seo_analysisMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Seo_analysisMaxAggregateInputType;
  };

  export type GetSeo_analysisAggregateType<T extends Seo_analysisAggregateArgs> = {
    [P in keyof T & keyof AggregateSeo_analysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeo_analysis[P]>
      : GetScalarType<T[P], AggregateSeo_analysis[P]>;
  };

  export type seo_analysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seo_analysisWhereInput;
    orderBy?: seo_analysisOrderByWithAggregationInput | seo_analysisOrderByWithAggregationInput[];
    by: Seo_analysisScalarFieldEnum[] | Seo_analysisScalarFieldEnum;
    having?: seo_analysisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Seo_analysisCountAggregateInputType | true;
    _avg?: Seo_analysisAvgAggregateInputType;
    _sum?: Seo_analysisSumAggregateInputType;
    _min?: Seo_analysisMinAggregateInputType;
    _max?: Seo_analysisMaxAggregateInputType;
  };

  export type Seo_analysisGroupByOutputType = {
    id: string;
    content_id: string;
    seo_score: number | null;
    seo_report: string | null;
    analyst_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Seo_analysisCountAggregateOutputType | null;
    _avg: Seo_analysisAvgAggregateOutputType | null;
    _sum: Seo_analysisSumAggregateOutputType | null;
    _min: Seo_analysisMinAggregateOutputType | null;
    _max: Seo_analysisMaxAggregateOutputType | null;
  };

  type GetSeo_analysisGroupByPayload<T extends seo_analysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seo_analysisGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Seo_analysisGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Seo_analysisGroupByOutputType[P]>
          : GetScalarType<T[P], Seo_analysisGroupByOutputType[P]>;
      }
    >
  >;

  export type seo_analysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content_id?: boolean;
        seo_score?: boolean;
        seo_report?: boolean;
        analyst_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        content?: boolean | contentDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['seo_analysis']
    >;

  export type seo_analysisSelectScalar = {
    id?: boolean;
    content_id?: boolean;
    seo_score?: boolean;
    seo_report?: boolean;
    analyst_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type seo_analysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    content?: boolean | contentDefaultArgs<ExtArgs>;
  };

  export type $seo_analysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'seo_analysis';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      content: Prisma.$contentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content_id: string;
        seo_score: number | null;
        seo_report: string | null;
        analyst_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['seo_analysis']
    >;
    composites: {};
  };

  type seo_analysisGetPayload<S extends boolean | null | undefined | seo_analysisDefaultArgs> = $Result.GetResult<
    Prisma.$seo_analysisPayload,
    S
  >;

  type seo_analysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    seo_analysisFindManyArgs,
    'select' | 'include'
  > & {
    select?: Seo_analysisCountAggregateInputType | true;
  };

  export interface seo_analysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seo_analysis']; meta: { name: 'seo_analysis' } };
    /**
     * Find zero or one Seo_analysis that matches the filter.
     * @param {seo_analysisFindUniqueArgs} args - Arguments to find a Seo_analysis
     * @example
     * // Get one Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends seo_analysisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisFindUniqueArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<
      $Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Seo_analysis that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {seo_analysisFindUniqueOrThrowArgs} args - Arguments to find a Seo_analysis
     * @example
     * // Get one Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends seo_analysisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<
      $Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Seo_analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisFindFirstArgs} args - Arguments to find a Seo_analysis
     * @example
     * // Get one Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends seo_analysisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisFindFirstArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<
      $Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Seo_analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisFindFirstOrThrowArgs} args - Arguments to find a Seo_analysis
     * @example
     * // Get one Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends seo_analysisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<
      $Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Seo_analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seo_analyses
     * const seo_analyses = await prisma.seo_analysis.findMany()
     *
     * // Get first 10 Seo_analyses
     * const seo_analyses = await prisma.seo_analysis.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const seo_analysisWithIdOnly = await prisma.seo_analysis.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends seo_analysisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Seo_analysis.
     * @param {seo_analysisCreateArgs} args - Arguments to create a Seo_analysis.
     * @example
     * // Create one Seo_analysis
     * const Seo_analysis = await prisma.seo_analysis.create({
     *   data: {
     *     // ... data to create a Seo_analysis
     *   }
     * })
     *
     **/
    create<T extends seo_analysisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisCreateArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Seo_analyses.
     *     @param {seo_analysisCreateManyArgs} args - Arguments to create many Seo_analyses.
     *     @example
     *     // Create many Seo_analyses
     *     const seo_analysis = await prisma.seo_analysis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends seo_analysisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Seo_analysis.
     * @param {seo_analysisDeleteArgs} args - Arguments to delete one Seo_analysis.
     * @example
     * // Delete one Seo_analysis
     * const Seo_analysis = await prisma.seo_analysis.delete({
     *   where: {
     *     // ... filter to delete one Seo_analysis
     *   }
     * })
     *
     **/
    delete<T extends seo_analysisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisDeleteArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Seo_analysis.
     * @param {seo_analysisUpdateArgs} args - Arguments to update one Seo_analysis.
     * @example
     * // Update one Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends seo_analysisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisUpdateArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Seo_analyses.
     * @param {seo_analysisDeleteManyArgs} args - Arguments to filter Seo_analyses to delete.
     * @example
     * // Delete a few Seo_analyses
     * const { count } = await prisma.seo_analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends seo_analysisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seo_analysisDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Seo_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seo_analyses
     * const seo_analysis = await prisma.seo_analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends seo_analysisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Seo_analysis.
     * @param {seo_analysisUpsertArgs} args - Arguments to update or create a Seo_analysis.
     * @example
     * // Update or create a Seo_analysis
     * const seo_analysis = await prisma.seo_analysis.upsert({
     *   create: {
     *     // ... data to create a Seo_analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seo_analysis we want to update
     *   }
     * })
     **/
    upsert<T extends seo_analysisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, seo_analysisUpsertArgs<ExtArgs>>,
    ): Prisma__seo_analysisClient<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Seo_analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisCountArgs} args - Arguments to filter Seo_analyses to count.
     * @example
     * // Count the number of Seo_analyses
     * const count = await prisma.seo_analysis.count({
     *   where: {
     *     // ... the filter for the Seo_analyses we want to count
     *   }
     * })
     **/
    count<T extends seo_analysisCountArgs>(
      args?: Subset<T, seo_analysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seo_analysisCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Seo_analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seo_analysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Seo_analysisAggregateArgs>(
      args: Subset<T, Seo_analysisAggregateArgs>,
    ): Prisma.PrismaPromise<GetSeo_analysisAggregateType<T>>;

    /**
     * Group by Seo_analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seo_analysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends seo_analysisGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seo_analysisGroupByArgs['orderBy'] }
        : { orderBy?: seo_analysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, seo_analysisGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSeo_analysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the seo_analysis model
     */
    readonly fields: seo_analysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seo_analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seo_analysisClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    content<T extends contentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, contentDefaultArgs<ExtArgs>>,
    ): Prisma__contentClient<
      $Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the seo_analysis model
   */
  interface seo_analysisFieldRefs {
    readonly id: FieldRef<'seo_analysis', 'String'>;
    readonly content_id: FieldRef<'seo_analysis', 'String'>;
    readonly seo_score: FieldRef<'seo_analysis', 'Int'>;
    readonly seo_report: FieldRef<'seo_analysis', 'String'>;
    readonly analyst_id: FieldRef<'seo_analysis', 'String'>;
    readonly created_at: FieldRef<'seo_analysis', 'DateTime'>;
    readonly updated_at: FieldRef<'seo_analysis', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * seo_analysis findUnique
   */
  export type seo_analysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which seo_analysis to fetch.
     */
    where: seo_analysisWhereUniqueInput;
  };

  /**
   * seo_analysis findUniqueOrThrow
   */
  export type seo_analysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which seo_analysis to fetch.
     */
    where: seo_analysisWhereUniqueInput;
  };

  /**
   * seo_analysis findFirst
   */
  export type seo_analysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which seo_analysis to fetch.
     */
    where?: seo_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seo_analyses to fetch.
     */
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for seo_analyses.
     */
    cursor?: seo_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seo_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seo_analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of seo_analyses.
     */
    distinct?: Seo_analysisScalarFieldEnum | Seo_analysisScalarFieldEnum[];
  };

  /**
   * seo_analysis findFirstOrThrow
   */
  export type seo_analysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which seo_analysis to fetch.
     */
    where?: seo_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seo_analyses to fetch.
     */
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for seo_analyses.
     */
    cursor?: seo_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seo_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seo_analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of seo_analyses.
     */
    distinct?: Seo_analysisScalarFieldEnum | Seo_analysisScalarFieldEnum[];
  };

  /**
   * seo_analysis findMany
   */
  export type seo_analysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter, which seo_analyses to fetch.
     */
    where?: seo_analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seo_analyses to fetch.
     */
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing seo_analyses.
     */
    cursor?: seo_analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seo_analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seo_analyses.
     */
    skip?: number;
    distinct?: Seo_analysisScalarFieldEnum | Seo_analysisScalarFieldEnum[];
  };

  /**
   * seo_analysis create
   */
  export type seo_analysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * The data needed to create a seo_analysis.
     */
    data: XOR<seo_analysisCreateInput, seo_analysisUncheckedCreateInput>;
  };

  /**
   * seo_analysis createMany
   */
  export type seo_analysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seo_analyses.
     */
    data: seo_analysisCreateManyInput | seo_analysisCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * seo_analysis update
   */
  export type seo_analysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * The data needed to update a seo_analysis.
     */
    data: XOR<seo_analysisUpdateInput, seo_analysisUncheckedUpdateInput>;
    /**
     * Choose, which seo_analysis to update.
     */
    where: seo_analysisWhereUniqueInput;
  };

  /**
   * seo_analysis updateMany
   */
  export type seo_analysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seo_analyses.
     */
    data: XOR<seo_analysisUpdateManyMutationInput, seo_analysisUncheckedUpdateManyInput>;
    /**
     * Filter which seo_analyses to update
     */
    where?: seo_analysisWhereInput;
  };

  /**
   * seo_analysis upsert
   */
  export type seo_analysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * The filter to search for the seo_analysis to update in case it exists.
     */
    where: seo_analysisWhereUniqueInput;
    /**
     * In case the seo_analysis found by the `where` argument doesn't exist, create a new seo_analysis with this data.
     */
    create: XOR<seo_analysisCreateInput, seo_analysisUncheckedCreateInput>;
    /**
     * In case the seo_analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seo_analysisUpdateInput, seo_analysisUncheckedUpdateInput>;
  };

  /**
   * seo_analysis delete
   */
  export type seo_analysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    /**
     * Filter which seo_analysis to delete.
     */
    where: seo_analysisWhereUniqueInput;
  };

  /**
   * seo_analysis deleteMany
   */
  export type seo_analysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seo_analyses to delete
     */
    where?: seo_analysisWhereInput;
  };

  /**
   * seo_analysis without action
   */
  export type seo_analysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      activity_log?: boolean | user$activity_logArgs<ExtArgs>;
      client?: boolean | user$clientArgs<ExtArgs>;
      content?: boolean | user$contentArgs<ExtArgs>;
      seo_analysis?: boolean | user$seo_analysisArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_log?: boolean | user$activity_logArgs<ExtArgs>;
    client?: boolean | user$clientArgs<ExtArgs>;
    content?: boolean | user$contentArgs<ExtArgs>;
    seo_analysis?: boolean | user$seo_analysisArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      activity_log: Prisma.$activity_logPayload<ExtArgs>[];
      client: Prisma.$clientPayload<ExtArgs>[];
      content: Prisma.$contentPayload<ExtArgs>[];
      seo_analysis: Prisma.$seo_analysisPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activity_log<T extends user$activity_logArgs<ExtArgs> = {}>(
      args?: Subset<T, user$activity_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    client<T extends user$clientArgs<ExtArgs> = {}>(
      args?: Subset<T, user$clientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'> | Null>;

    content<T extends user$contentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$contentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contentPayload<ExtArgs>, T, 'findMany'> | Null>;

    seo_analysis<T extends user$seo_analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, user$seo_analysisArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seo_analysisPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.activity_log
   */
  export type user$activity_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_log
     */
    select?: activity_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_logInclude<ExtArgs> | null;
    where?: activity_logWhereInput;
    orderBy?: activity_logOrderByWithRelationInput | activity_logOrderByWithRelationInput[];
    cursor?: activity_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Activity_logScalarFieldEnum | Activity_logScalarFieldEnum[];
  };

  /**
   * user.client
   */
  export type user$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    where?: clientWhereInput;
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    cursor?: clientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * user.content
   */
  export type user$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the content
     */
    select?: contentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: contentInclude<ExtArgs> | null;
    where?: contentWhereInput;
    orderBy?: contentOrderByWithRelationInput | contentOrderByWithRelationInput[];
    cursor?: contentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[];
  };

  /**
   * user.seo_analysis
   */
  export type user$seo_analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo_analysis
     */
    select?: seo_analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seo_analysisInclude<ExtArgs> | null;
    where?: seo_analysisWhereInput;
    orderBy?: seo_analysisOrderByWithRelationInput | seo_analysisOrderByWithRelationInput[];
    cursor?: seo_analysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Seo_analysisScalarFieldEnum | Seo_analysisScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Activity_logScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    activity: 'activity';
    ip_address: 'ip_address';
    browser_info: 'browser_info';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Activity_logScalarFieldEnum =
    (typeof Activity_logScalarFieldEnum)[keyof typeof Activity_logScalarFieldEnum];

  export const ClientScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];

  export const ContentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    body: 'body';
    keywords: 'keywords';
    publish_date: 'publish_date';
    writer_id: 'writer_id';
    client_id: 'client_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];

  export const Seo_analysisScalarFieldEnum: {
    id: 'id';
    content_id: 'content_id';
    seo_score: 'seo_score';
    seo_report: 'seo_report';
    analyst_id: 'analyst_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Seo_analysisScalarFieldEnum =
    (typeof Seo_analysisScalarFieldEnum)[keyof typeof Seo_analysisScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type activity_logWhereInput = {
    AND?: activity_logWhereInput | activity_logWhereInput[];
    OR?: activity_logWhereInput[];
    NOT?: activity_logWhereInput | activity_logWhereInput[];
    id?: UuidFilter<'activity_log'> | string;
    user_id?: UuidFilter<'activity_log'> | string;
    activity?: StringNullableFilter<'activity_log'> | string | null;
    ip_address?: StringNullableFilter<'activity_log'> | string | null;
    browser_info?: StringNullableFilter<'activity_log'> | string | null;
    created_at?: DateTimeFilter<'activity_log'> | Date | string;
    updated_at?: DateTimeFilter<'activity_log'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type activity_logOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    activity?: SortOrderInput | SortOrder;
    ip_address?: SortOrderInput | SortOrder;
    browser_info?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type activity_logWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: activity_logWhereInput | activity_logWhereInput[];
      OR?: activity_logWhereInput[];
      NOT?: activity_logWhereInput | activity_logWhereInput[];
      user_id?: UuidFilter<'activity_log'> | string;
      activity?: StringNullableFilter<'activity_log'> | string | null;
      ip_address?: StringNullableFilter<'activity_log'> | string | null;
      browser_info?: StringNullableFilter<'activity_log'> | string | null;
      created_at?: DateTimeFilter<'activity_log'> | Date | string;
      updated_at?: DateTimeFilter<'activity_log'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type activity_logOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    activity?: SortOrderInput | SortOrder;
    ip_address?: SortOrderInput | SortOrder;
    browser_info?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: activity_logCountOrderByAggregateInput;
    _max?: activity_logMaxOrderByAggregateInput;
    _min?: activity_logMinOrderByAggregateInput;
  };

  export type activity_logScalarWhereWithAggregatesInput = {
    AND?: activity_logScalarWhereWithAggregatesInput | activity_logScalarWhereWithAggregatesInput[];
    OR?: activity_logScalarWhereWithAggregatesInput[];
    NOT?: activity_logScalarWhereWithAggregatesInput | activity_logScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'activity_log'> | string;
    user_id?: UuidWithAggregatesFilter<'activity_log'> | string;
    activity?: StringNullableWithAggregatesFilter<'activity_log'> | string | null;
    ip_address?: StringNullableWithAggregatesFilter<'activity_log'> | string | null;
    browser_info?: StringNullableWithAggregatesFilter<'activity_log'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'activity_log'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'activity_log'> | Date | string;
  };

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[];
    OR?: clientWhereInput[];
    NOT?: clientWhereInput | clientWhereInput[];
    id?: UuidFilter<'client'> | string;
    description?: StringNullableFilter<'client'> | string | null;
    address?: StringNullableFilter<'client'> | string | null;
    phone_number?: StringNullableFilter<'client'> | string | null;
    name?: StringFilter<'client'> | string;
    created_at?: DateTimeFilter<'client'> | Date | string;
    updated_at?: DateTimeFilter<'client'> | Date | string;
    user_id?: UuidFilter<'client'> | string;
    tenant_id?: StringFilter<'client'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    content?: ContentListRelationFilter;
  };

  export type clientOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    content?: contentOrderByRelationAggregateInput;
  };

  export type clientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: clientWhereInput | clientWhereInput[];
      OR?: clientWhereInput[];
      NOT?: clientWhereInput | clientWhereInput[];
      description?: StringNullableFilter<'client'> | string | null;
      address?: StringNullableFilter<'client'> | string | null;
      phone_number?: StringNullableFilter<'client'> | string | null;
      name?: StringFilter<'client'> | string;
      created_at?: DateTimeFilter<'client'> | Date | string;
      updated_at?: DateTimeFilter<'client'> | Date | string;
      user_id?: UuidFilter<'client'> | string;
      tenant_id?: StringFilter<'client'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      content?: ContentListRelationFilter;
    },
    'id'
  >;

  export type clientOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clientCountOrderByAggregateInput;
    _max?: clientMaxOrderByAggregateInput;
    _min?: clientMinOrderByAggregateInput;
  };

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[];
    OR?: clientScalarWhereWithAggregatesInput[];
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'client'> | string;
    description?: StringNullableWithAggregatesFilter<'client'> | string | null;
    address?: StringNullableWithAggregatesFilter<'client'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'client'> | string | null;
    name?: StringWithAggregatesFilter<'client'> | string;
    created_at?: DateTimeWithAggregatesFilter<'client'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'client'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'client'> | string;
    tenant_id?: StringWithAggregatesFilter<'client'> | string;
  };

  export type contentWhereInput = {
    AND?: contentWhereInput | contentWhereInput[];
    OR?: contentWhereInput[];
    NOT?: contentWhereInput | contentWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    body?: StringFilter<'content'> | string;
    keywords?: StringNullableFilter<'content'> | string | null;
    publish_date?: DateTimeNullableFilter<'content'> | Date | string | null;
    writer_id?: UuidFilter<'content'> | string;
    client_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
    client?: XOR<ClientRelationFilter, clientWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    seo_analysis?: Seo_analysisListRelationFilter;
  };

  export type contentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    body?: SortOrder;
    keywords?: SortOrderInput | SortOrder;
    publish_date?: SortOrderInput | SortOrder;
    writer_id?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    client?: clientOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    seo_analysis?: seo_analysisOrderByRelationAggregateInput;
  };

  export type contentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: contentWhereInput | contentWhereInput[];
      OR?: contentWhereInput[];
      NOT?: contentWhereInput | contentWhereInput[];
      title?: StringFilter<'content'> | string;
      body?: StringFilter<'content'> | string;
      keywords?: StringNullableFilter<'content'> | string | null;
      publish_date?: DateTimeNullableFilter<'content'> | Date | string | null;
      writer_id?: UuidFilter<'content'> | string;
      client_id?: UuidFilter<'content'> | string;
      created_at?: DateTimeFilter<'content'> | Date | string;
      updated_at?: DateTimeFilter<'content'> | Date | string;
      client?: XOR<ClientRelationFilter, clientWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      seo_analysis?: Seo_analysisListRelationFilter;
    },
    'id'
  >;

  export type contentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    body?: SortOrder;
    keywords?: SortOrderInput | SortOrder;
    publish_date?: SortOrderInput | SortOrder;
    writer_id?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: contentCountOrderByAggregateInput;
    _max?: contentMaxOrderByAggregateInput;
    _min?: contentMinOrderByAggregateInput;
  };

  export type contentScalarWhereWithAggregatesInput = {
    AND?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    OR?: contentScalarWhereWithAggregatesInput[];
    NOT?: contentScalarWhereWithAggregatesInput | contentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'content'> | string;
    title?: StringWithAggregatesFilter<'content'> | string;
    body?: StringWithAggregatesFilter<'content'> | string;
    keywords?: StringNullableWithAggregatesFilter<'content'> | string | null;
    publish_date?: DateTimeNullableWithAggregatesFilter<'content'> | Date | string | null;
    writer_id?: UuidWithAggregatesFilter<'content'> | string;
    client_id?: UuidWithAggregatesFilter<'content'> | string;
    created_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'content'> | Date | string;
  };

  export type seo_analysisWhereInput = {
    AND?: seo_analysisWhereInput | seo_analysisWhereInput[];
    OR?: seo_analysisWhereInput[];
    NOT?: seo_analysisWhereInput | seo_analysisWhereInput[];
    id?: UuidFilter<'seo_analysis'> | string;
    content_id?: UuidFilter<'seo_analysis'> | string;
    seo_score?: IntNullableFilter<'seo_analysis'> | number | null;
    seo_report?: StringNullableFilter<'seo_analysis'> | string | null;
    analyst_id?: UuidFilter<'seo_analysis'> | string;
    created_at?: DateTimeFilter<'seo_analysis'> | Date | string;
    updated_at?: DateTimeFilter<'seo_analysis'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    content?: XOR<ContentRelationFilter, contentWhereInput>;
  };

  export type seo_analysisOrderByWithRelationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    seo_score?: SortOrderInput | SortOrder;
    seo_report?: SortOrderInput | SortOrder;
    analyst_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    content?: contentOrderByWithRelationInput;
  };

  export type seo_analysisWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: seo_analysisWhereInput | seo_analysisWhereInput[];
      OR?: seo_analysisWhereInput[];
      NOT?: seo_analysisWhereInput | seo_analysisWhereInput[];
      content_id?: UuidFilter<'seo_analysis'> | string;
      seo_score?: IntNullableFilter<'seo_analysis'> | number | null;
      seo_report?: StringNullableFilter<'seo_analysis'> | string | null;
      analyst_id?: UuidFilter<'seo_analysis'> | string;
      created_at?: DateTimeFilter<'seo_analysis'> | Date | string;
      updated_at?: DateTimeFilter<'seo_analysis'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      content?: XOR<ContentRelationFilter, contentWhereInput>;
    },
    'id'
  >;

  export type seo_analysisOrderByWithAggregationInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    seo_score?: SortOrderInput | SortOrder;
    seo_report?: SortOrderInput | SortOrder;
    analyst_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: seo_analysisCountOrderByAggregateInput;
    _avg?: seo_analysisAvgOrderByAggregateInput;
    _max?: seo_analysisMaxOrderByAggregateInput;
    _min?: seo_analysisMinOrderByAggregateInput;
    _sum?: seo_analysisSumOrderByAggregateInput;
  };

  export type seo_analysisScalarWhereWithAggregatesInput = {
    AND?: seo_analysisScalarWhereWithAggregatesInput | seo_analysisScalarWhereWithAggregatesInput[];
    OR?: seo_analysisScalarWhereWithAggregatesInput[];
    NOT?: seo_analysisScalarWhereWithAggregatesInput | seo_analysisScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'seo_analysis'> | string;
    content_id?: UuidWithAggregatesFilter<'seo_analysis'> | string;
    seo_score?: IntNullableWithAggregatesFilter<'seo_analysis'> | number | null;
    seo_report?: StringNullableWithAggregatesFilter<'seo_analysis'> | string | null;
    analyst_id?: UuidWithAggregatesFilter<'seo_analysis'> | string;
    created_at?: DateTimeWithAggregatesFilter<'seo_analysis'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'seo_analysis'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    activity_log?: Activity_logListRelationFilter;
    client?: ClientListRelationFilter;
    content?: ContentListRelationFilter;
    seo_analysis?: Seo_analysisListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    activity_log?: activity_logOrderByRelationAggregateInput;
    client?: clientOrderByRelationAggregateInput;
    content?: contentOrderByRelationAggregateInput;
    seo_analysis?: seo_analysisOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      activity_log?: Activity_logListRelationFilter;
      client?: ClientListRelationFilter;
      content?: ContentListRelationFilter;
      seo_analysis?: Seo_analysisListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type activity_logCreateInput = {
    id?: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutActivity_logInput;
  };

  export type activity_logUncheckedCreateInput = {
    id?: string;
    user_id: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type activity_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutActivity_logNestedInput;
  };

  export type activity_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logCreateManyInput = {
    id?: string;
    user_id: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type activity_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clientCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClientInput;
    content?: contentCreateNestedManyWithoutClientInput;
  };

  export type clientUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    content?: contentUncheckedCreateNestedManyWithoutClientInput;
  };

  export type clientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClientNestedInput;
    content?: contentUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    content?: contentUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type clientCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contentCreateInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: clientCreateNestedOneWithoutContentInput;
    user: userCreateNestedOneWithoutContentInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    writer_id: string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateOneRequiredWithoutContentNestedInput;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writer_id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentCreateManyInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    writer_id: string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writer_id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisCreateInput = {
    id?: string;
    seo_score?: number | null;
    seo_report?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutSeo_analysisInput;
    content: contentCreateNestedOneWithoutSeo_analysisInput;
  };

  export type seo_analysisUncheckedCreateInput = {
    id?: string;
    content_id: string;
    seo_score?: number | null;
    seo_report?: string | null;
    analyst_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutSeo_analysisNestedInput;
    content?: contentUpdateOneRequiredWithoutSeo_analysisNestedInput;
  };

  export type seo_analysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisCreateManyInput = {
    id?: string;
    content_id: string;
    seo_score?: number | null;
    seo_report?: string | null;
    analyst_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logCreateNestedManyWithoutUserInput;
    client?: clientCreateNestedManyWithoutUserInput;
    content?: contentCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logUncheckedCreateNestedManyWithoutUserInput;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUpdateManyWithoutUserNestedInput;
    client?: clientUpdateManyWithoutUserNestedInput;
    content?: contentUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUncheckedUpdateManyWithoutUserNestedInput;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type activity_logCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    activity?: SortOrder;
    ip_address?: SortOrder;
    browser_info?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type activity_logMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    activity?: SortOrder;
    ip_address?: SortOrder;
    browser_info?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type activity_logMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    activity?: SortOrder;
    ip_address?: SortOrder;
    browser_info?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ContentListRelationFilter = {
    every?: contentWhereInput;
    some?: contentWhereInput;
    none?: contentWhereInput;
  };

  export type contentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clientCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clientMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clientMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ClientRelationFilter = {
    is?: clientWhereInput;
    isNot?: clientWhereInput;
  };

  export type Seo_analysisListRelationFilter = {
    every?: seo_analysisWhereInput;
    some?: seo_analysisWhereInput;
    none?: seo_analysisWhereInput;
  };

  export type seo_analysisOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type contentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    body?: SortOrder;
    keywords?: SortOrder;
    publish_date?: SortOrder;
    writer_id?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    body?: SortOrder;
    keywords?: SortOrder;
    publish_date?: SortOrder;
    writer_id?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type contentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    body?: SortOrder;
    keywords?: SortOrder;
    publish_date?: SortOrder;
    writer_id?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ContentRelationFilter = {
    is?: contentWhereInput;
    isNot?: contentWhereInput;
  };

  export type seo_analysisCountOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    seo_score?: SortOrder;
    seo_report?: SortOrder;
    analyst_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seo_analysisAvgOrderByAggregateInput = {
    seo_score?: SortOrder;
  };

  export type seo_analysisMaxOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    seo_score?: SortOrder;
    seo_report?: SortOrder;
    analyst_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seo_analysisMinOrderByAggregateInput = {
    id?: SortOrder;
    content_id?: SortOrder;
    seo_score?: SortOrder;
    seo_report?: SortOrder;
    analyst_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type seo_analysisSumOrderByAggregateInput = {
    seo_score?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type Activity_logListRelationFilter = {
    every?: activity_logWhereInput;
    some?: activity_logWhereInput;
    none?: activity_logWhereInput;
  };

  export type ClientListRelationFilter = {
    every?: clientWhereInput;
    some?: clientWhereInput;
    none?: clientWhereInput;
  };

  export type activity_logOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutActivity_logInput = {
    create?: XOR<userCreateWithoutActivity_logInput, userUncheckedCreateWithoutActivity_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutActivity_logInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutActivity_logNestedInput = {
    create?: XOR<userCreateWithoutActivity_logInput, userUncheckedCreateWithoutActivity_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutActivity_logInput;
    upsert?: userUpsertWithoutActivity_logInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutActivity_logInput, userUpdateWithoutActivity_logInput>,
      userUncheckedUpdateWithoutActivity_logInput
    >;
  };

  export type userCreateNestedOneWithoutClientInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    connectOrCreate?: userCreateOrConnectWithoutClientInput;
    connect?: userWhereUniqueInput;
  };

  export type contentCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>
      | contentCreateWithoutClientInput[]
      | contentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: contentCreateOrConnectWithoutClientInput | contentCreateOrConnectWithoutClientInput[];
    createMany?: contentCreateManyClientInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type contentUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>
      | contentCreateWithoutClientInput[]
      | contentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: contentCreateOrConnectWithoutClientInput | contentCreateOrConnectWithoutClientInput[];
    createMany?: contentCreateManyClientInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    connectOrCreate?: userCreateOrConnectWithoutClientInput;
    upsert?: userUpsertWithoutClientInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClientInput, userUpdateWithoutClientInput>,
      userUncheckedUpdateWithoutClientInput
    >;
  };

  export type contentUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>
      | contentCreateWithoutClientInput[]
      | contentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: contentCreateOrConnectWithoutClientInput | contentCreateOrConnectWithoutClientInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutClientInput | contentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: contentCreateManyClientInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutClientInput | contentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: contentUpdateManyWithWhereWithoutClientInput | contentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type contentUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>
      | contentCreateWithoutClientInput[]
      | contentUncheckedCreateWithoutClientInput[];
    connectOrCreate?: contentCreateOrConnectWithoutClientInput | contentCreateOrConnectWithoutClientInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutClientInput | contentUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: contentCreateManyClientInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutClientInput | contentUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: contentUpdateManyWithWhereWithoutClientInput | contentUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type clientCreateNestedOneWithoutContentInput = {
    create?: XOR<clientCreateWithoutContentInput, clientUncheckedCreateWithoutContentInput>;
    connectOrCreate?: clientCreateOrConnectWithoutContentInput;
    connect?: clientWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutContentInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    connect?: userWhereUniqueInput;
  };

  export type seo_analysisCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>
      | seo_analysisCreateWithoutContentInput[]
      | seo_analysisUncheckedCreateWithoutContentInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutContentInput | seo_analysisCreateOrConnectWithoutContentInput[];
    createMany?: seo_analysisCreateManyContentInputEnvelope;
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
  };

  export type seo_analysisUncheckedCreateNestedManyWithoutContentInput = {
    create?:
      | XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>
      | seo_analysisCreateWithoutContentInput[]
      | seo_analysisUncheckedCreateWithoutContentInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutContentInput | seo_analysisCreateOrConnectWithoutContentInput[];
    createMany?: seo_analysisCreateManyContentInputEnvelope;
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type clientUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<clientCreateWithoutContentInput, clientUncheckedCreateWithoutContentInput>;
    connectOrCreate?: clientCreateOrConnectWithoutContentInput;
    upsert?: clientUpsertWithoutContentInput;
    connect?: clientWhereUniqueInput;
    update?: XOR<
      XOR<clientUpdateToOneWithWhereWithoutContentInput, clientUpdateWithoutContentInput>,
      clientUncheckedUpdateWithoutContentInput
    >;
  };

  export type userUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    connectOrCreate?: userCreateOrConnectWithoutContentInput;
    upsert?: userUpsertWithoutContentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutContentInput, userUpdateWithoutContentInput>,
      userUncheckedUpdateWithoutContentInput
    >;
  };

  export type seo_analysisUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>
      | seo_analysisCreateWithoutContentInput[]
      | seo_analysisUncheckedCreateWithoutContentInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutContentInput | seo_analysisCreateOrConnectWithoutContentInput[];
    upsert?:
      | seo_analysisUpsertWithWhereUniqueWithoutContentInput
      | seo_analysisUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: seo_analysisCreateManyContentInputEnvelope;
    set?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    disconnect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    delete?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    update?:
      | seo_analysisUpdateWithWhereUniqueWithoutContentInput
      | seo_analysisUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | seo_analysisUpdateManyWithWhereWithoutContentInput
      | seo_analysisUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
  };

  export type seo_analysisUncheckedUpdateManyWithoutContentNestedInput = {
    create?:
      | XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>
      | seo_analysisCreateWithoutContentInput[]
      | seo_analysisUncheckedCreateWithoutContentInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutContentInput | seo_analysisCreateOrConnectWithoutContentInput[];
    upsert?:
      | seo_analysisUpsertWithWhereUniqueWithoutContentInput
      | seo_analysisUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: seo_analysisCreateManyContentInputEnvelope;
    set?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    disconnect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    delete?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    update?:
      | seo_analysisUpdateWithWhereUniqueWithoutContentInput
      | seo_analysisUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?:
      | seo_analysisUpdateManyWithWhereWithoutContentInput
      | seo_analysisUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutSeo_analysisInput = {
    create?: XOR<userCreateWithoutSeo_analysisInput, userUncheckedCreateWithoutSeo_analysisInput>;
    connectOrCreate?: userCreateOrConnectWithoutSeo_analysisInput;
    connect?: userWhereUniqueInput;
  };

  export type contentCreateNestedOneWithoutSeo_analysisInput = {
    create?: XOR<contentCreateWithoutSeo_analysisInput, contentUncheckedCreateWithoutSeo_analysisInput>;
    connectOrCreate?: contentCreateOrConnectWithoutSeo_analysisInput;
    connect?: contentWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutSeo_analysisNestedInput = {
    create?: XOR<userCreateWithoutSeo_analysisInput, userUncheckedCreateWithoutSeo_analysisInput>;
    connectOrCreate?: userCreateOrConnectWithoutSeo_analysisInput;
    upsert?: userUpsertWithoutSeo_analysisInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSeo_analysisInput, userUpdateWithoutSeo_analysisInput>,
      userUncheckedUpdateWithoutSeo_analysisInput
    >;
  };

  export type contentUpdateOneRequiredWithoutSeo_analysisNestedInput = {
    create?: XOR<contentCreateWithoutSeo_analysisInput, contentUncheckedCreateWithoutSeo_analysisInput>;
    connectOrCreate?: contentCreateOrConnectWithoutSeo_analysisInput;
    upsert?: contentUpsertWithoutSeo_analysisInput;
    connect?: contentWhereUniqueInput;
    update?: XOR<
      XOR<contentUpdateToOneWithWhereWithoutSeo_analysisInput, contentUpdateWithoutSeo_analysisInput>,
      contentUncheckedUpdateWithoutSeo_analysisInput
    >;
  };

  export type activity_logCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>
      | activity_logCreateWithoutUserInput[]
      | activity_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: activity_logCreateOrConnectWithoutUserInput | activity_logCreateOrConnectWithoutUserInput[];
    createMany?: activity_logCreateManyUserInputEnvelope;
    connect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
  };

  export type clientCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
  };

  export type contentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type seo_analysisCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>
      | seo_analysisCreateWithoutUserInput[]
      | seo_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutUserInput | seo_analysisCreateOrConnectWithoutUserInput[];
    createMany?: seo_analysisCreateManyUserInputEnvelope;
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
  };

  export type activity_logUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>
      | activity_logCreateWithoutUserInput[]
      | activity_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: activity_logCreateOrConnectWithoutUserInput | activity_logCreateOrConnectWithoutUserInput[];
    createMany?: activity_logCreateManyUserInputEnvelope;
    connect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
  };

  export type clientUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
  };

  export type contentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
  };

  export type seo_analysisUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>
      | seo_analysisCreateWithoutUserInput[]
      | seo_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutUserInput | seo_analysisCreateOrConnectWithoutUserInput[];
    createMany?: seo_analysisCreateManyUserInputEnvelope;
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
  };

  export type activity_logUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>
      | activity_logCreateWithoutUserInput[]
      | activity_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: activity_logCreateOrConnectWithoutUserInput | activity_logCreateOrConnectWithoutUserInput[];
    upsert?: activity_logUpsertWithWhereUniqueWithoutUserInput | activity_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: activity_logCreateManyUserInputEnvelope;
    set?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    disconnect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    delete?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    connect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    update?: activity_logUpdateWithWhereUniqueWithoutUserInput | activity_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: activity_logUpdateManyWithWhereWithoutUserInput | activity_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: activity_logScalarWhereInput | activity_logScalarWhereInput[];
  };

  export type clientUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    set?: clientWhereUniqueInput | clientWhereUniqueInput[];
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[];
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[];
  };

  export type contentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type seo_analysisUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>
      | seo_analysisCreateWithoutUserInput[]
      | seo_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutUserInput | seo_analysisCreateOrConnectWithoutUserInput[];
    upsert?: seo_analysisUpsertWithWhereUniqueWithoutUserInput | seo_analysisUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: seo_analysisCreateManyUserInputEnvelope;
    set?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    disconnect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    delete?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    update?: seo_analysisUpdateWithWhereUniqueWithoutUserInput | seo_analysisUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: seo_analysisUpdateManyWithWhereWithoutUserInput | seo_analysisUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
  };

  export type activity_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>
      | activity_logCreateWithoutUserInput[]
      | activity_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: activity_logCreateOrConnectWithoutUserInput | activity_logCreateOrConnectWithoutUserInput[];
    upsert?: activity_logUpsertWithWhereUniqueWithoutUserInput | activity_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: activity_logCreateManyUserInputEnvelope;
    set?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    disconnect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    delete?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    connect?: activity_logWhereUniqueInput | activity_logWhereUniqueInput[];
    update?: activity_logUpdateWithWhereUniqueWithoutUserInput | activity_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: activity_logUpdateManyWithWhereWithoutUserInput | activity_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: activity_logScalarWhereInput | activity_logScalarWhereInput[];
  };

  export type clientUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    set?: clientWhereUniqueInput | clientWhereUniqueInput[];
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[];
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[];
  };

  export type contentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>
      | contentCreateWithoutUserInput[]
      | contentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: contentCreateOrConnectWithoutUserInput | contentCreateOrConnectWithoutUserInput[];
    upsert?: contentUpsertWithWhereUniqueWithoutUserInput | contentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: contentCreateManyUserInputEnvelope;
    set?: contentWhereUniqueInput | contentWhereUniqueInput[];
    disconnect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    delete?: contentWhereUniqueInput | contentWhereUniqueInput[];
    connect?: contentWhereUniqueInput | contentWhereUniqueInput[];
    update?: contentUpdateWithWhereUniqueWithoutUserInput | contentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: contentUpdateManyWithWhereWithoutUserInput | contentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: contentScalarWhereInput | contentScalarWhereInput[];
  };

  export type seo_analysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>
      | seo_analysisCreateWithoutUserInput[]
      | seo_analysisUncheckedCreateWithoutUserInput[];
    connectOrCreate?: seo_analysisCreateOrConnectWithoutUserInput | seo_analysisCreateOrConnectWithoutUserInput[];
    upsert?: seo_analysisUpsertWithWhereUniqueWithoutUserInput | seo_analysisUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: seo_analysisCreateManyUserInputEnvelope;
    set?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    disconnect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    delete?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    connect?: seo_analysisWhereUniqueInput | seo_analysisWhereUniqueInput[];
    update?: seo_analysisUpdateWithWhereUniqueWithoutUserInput | seo_analysisUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: seo_analysisUpdateManyWithWhereWithoutUserInput | seo_analysisUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutActivity_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: clientCreateNestedManyWithoutUserInput;
    content?: contentCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutActivity_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutActivity_logInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutActivity_logInput, userUncheckedCreateWithoutActivity_logInput>;
  };

  export type userUpsertWithoutActivity_logInput = {
    update: XOR<userUpdateWithoutActivity_logInput, userUncheckedUpdateWithoutActivity_logInput>;
    create: XOR<userCreateWithoutActivity_logInput, userUncheckedCreateWithoutActivity_logInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutActivity_logInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutActivity_logInput, userUncheckedUpdateWithoutActivity_logInput>;
  };

  export type userUpdateWithoutActivity_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateManyWithoutUserNestedInput;
    content?: contentUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutActivity_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutClientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logCreateNestedManyWithoutUserInput;
    content?: contentCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logUncheckedCreateNestedManyWithoutUserInput;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClientInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
  };

  export type contentCreateWithoutClientInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutContentInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutClientInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    writer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutClientInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>;
  };

  export type contentCreateManyClientInputEnvelope = {
    data: contentCreateManyClientInput | contentCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutClientInput = {
    update: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>;
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClientInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>;
  };

  export type userUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUpdateManyWithoutUserNestedInput;
    content?: contentUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUncheckedUpdateManyWithoutUserNestedInput;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentUpsertWithWhereUniqueWithoutClientInput = {
    where: contentWhereUniqueInput;
    update: XOR<contentUpdateWithoutClientInput, contentUncheckedUpdateWithoutClientInput>;
    create: XOR<contentCreateWithoutClientInput, contentUncheckedCreateWithoutClientInput>;
  };

  export type contentUpdateWithWhereUniqueWithoutClientInput = {
    where: contentWhereUniqueInput;
    data: XOR<contentUpdateWithoutClientInput, contentUncheckedUpdateWithoutClientInput>;
  };

  export type contentUpdateManyWithWhereWithoutClientInput = {
    where: contentScalarWhereInput;
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyWithoutClientInput>;
  };

  export type contentScalarWhereInput = {
    AND?: contentScalarWhereInput | contentScalarWhereInput[];
    OR?: contentScalarWhereInput[];
    NOT?: contentScalarWhereInput | contentScalarWhereInput[];
    id?: UuidFilter<'content'> | string;
    title?: StringFilter<'content'> | string;
    body?: StringFilter<'content'> | string;
    keywords?: StringNullableFilter<'content'> | string | null;
    publish_date?: DateTimeNullableFilter<'content'> | Date | string | null;
    writer_id?: UuidFilter<'content'> | string;
    client_id?: UuidFilter<'content'> | string;
    created_at?: DateTimeFilter<'content'> | Date | string;
    updated_at?: DateTimeFilter<'content'> | Date | string;
  };

  export type clientCreateWithoutContentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClientInput;
  };

  export type clientUncheckedCreateWithoutContentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clientCreateOrConnectWithoutContentInput = {
    where: clientWhereUniqueInput;
    create: XOR<clientCreateWithoutContentInput, clientUncheckedCreateWithoutContentInput>;
  };

  export type userCreateWithoutContentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logCreateNestedManyWithoutUserInput;
    client?: clientCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutContentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logUncheckedCreateNestedManyWithoutUserInput;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutContentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
  };

  export type seo_analysisCreateWithoutContentInput = {
    id?: string;
    seo_score?: number | null;
    seo_report?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutSeo_analysisInput;
  };

  export type seo_analysisUncheckedCreateWithoutContentInput = {
    id?: string;
    seo_score?: number | null;
    seo_report?: string | null;
    analyst_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisCreateOrConnectWithoutContentInput = {
    where: seo_analysisWhereUniqueInput;
    create: XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>;
  };

  export type seo_analysisCreateManyContentInputEnvelope = {
    data: seo_analysisCreateManyContentInput | seo_analysisCreateManyContentInput[];
    skipDuplicates?: boolean;
  };

  export type clientUpsertWithoutContentInput = {
    update: XOR<clientUpdateWithoutContentInput, clientUncheckedUpdateWithoutContentInput>;
    create: XOR<clientCreateWithoutContentInput, clientUncheckedCreateWithoutContentInput>;
    where?: clientWhereInput;
  };

  export type clientUpdateToOneWithWhereWithoutContentInput = {
    where?: clientWhereInput;
    data: XOR<clientUpdateWithoutContentInput, clientUncheckedUpdateWithoutContentInput>;
  };

  export type clientUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutContentInput = {
    update: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
    create: XOR<userCreateWithoutContentInput, userUncheckedCreateWithoutContentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutContentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutContentInput, userUncheckedUpdateWithoutContentInput>;
  };

  export type userUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUpdateManyWithoutUserNestedInput;
    client?: clientUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUncheckedUpdateManyWithoutUserNestedInput;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type seo_analysisUpsertWithWhereUniqueWithoutContentInput = {
    where: seo_analysisWhereUniqueInput;
    update: XOR<seo_analysisUpdateWithoutContentInput, seo_analysisUncheckedUpdateWithoutContentInput>;
    create: XOR<seo_analysisCreateWithoutContentInput, seo_analysisUncheckedCreateWithoutContentInput>;
  };

  export type seo_analysisUpdateWithWhereUniqueWithoutContentInput = {
    where: seo_analysisWhereUniqueInput;
    data: XOR<seo_analysisUpdateWithoutContentInput, seo_analysisUncheckedUpdateWithoutContentInput>;
  };

  export type seo_analysisUpdateManyWithWhereWithoutContentInput = {
    where: seo_analysisScalarWhereInput;
    data: XOR<seo_analysisUpdateManyMutationInput, seo_analysisUncheckedUpdateManyWithoutContentInput>;
  };

  export type seo_analysisScalarWhereInput = {
    AND?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
    OR?: seo_analysisScalarWhereInput[];
    NOT?: seo_analysisScalarWhereInput | seo_analysisScalarWhereInput[];
    id?: UuidFilter<'seo_analysis'> | string;
    content_id?: UuidFilter<'seo_analysis'> | string;
    seo_score?: IntNullableFilter<'seo_analysis'> | number | null;
    seo_report?: StringNullableFilter<'seo_analysis'> | string | null;
    analyst_id?: UuidFilter<'seo_analysis'> | string;
    created_at?: DateTimeFilter<'seo_analysis'> | Date | string;
    updated_at?: DateTimeFilter<'seo_analysis'> | Date | string;
  };

  export type userCreateWithoutSeo_analysisInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logCreateNestedManyWithoutUserInput;
    client?: clientCreateNestedManyWithoutUserInput;
    content?: contentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSeo_analysisInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    activity_log?: activity_logUncheckedCreateNestedManyWithoutUserInput;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    content?: contentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSeo_analysisInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSeo_analysisInput, userUncheckedCreateWithoutSeo_analysisInput>;
  };

  export type contentCreateWithoutSeo_analysisInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: clientCreateNestedOneWithoutContentInput;
    user: userCreateNestedOneWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutSeo_analysisInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    writer_id: string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentCreateOrConnectWithoutSeo_analysisInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutSeo_analysisInput, contentUncheckedCreateWithoutSeo_analysisInput>;
  };

  export type userUpsertWithoutSeo_analysisInput = {
    update: XOR<userUpdateWithoutSeo_analysisInput, userUncheckedUpdateWithoutSeo_analysisInput>;
    create: XOR<userCreateWithoutSeo_analysisInput, userUncheckedCreateWithoutSeo_analysisInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSeo_analysisInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSeo_analysisInput, userUncheckedUpdateWithoutSeo_analysisInput>;
  };

  export type userUpdateWithoutSeo_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUpdateManyWithoutUserNestedInput;
    client?: clientUpdateManyWithoutUserNestedInput;
    content?: contentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSeo_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    activity_log?: activity_logUncheckedUpdateManyWithoutUserNestedInput;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    content?: contentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type contentUpsertWithoutSeo_analysisInput = {
    update: XOR<contentUpdateWithoutSeo_analysisInput, contentUncheckedUpdateWithoutSeo_analysisInput>;
    create: XOR<contentCreateWithoutSeo_analysisInput, contentUncheckedCreateWithoutSeo_analysisInput>;
    where?: contentWhereInput;
  };

  export type contentUpdateToOneWithWhereWithoutSeo_analysisInput = {
    where?: contentWhereInput;
    data: XOR<contentUpdateWithoutSeo_analysisInput, contentUncheckedUpdateWithoutSeo_analysisInput>;
  };

  export type contentUpdateWithoutSeo_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateOneRequiredWithoutContentNestedInput;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutSeo_analysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writer_id?: StringFieldUpdateOperationsInput | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logCreateWithoutUserInput = {
    id?: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type activity_logUncheckedCreateWithoutUserInput = {
    id?: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type activity_logCreateOrConnectWithoutUserInput = {
    where: activity_logWhereUniqueInput;
    create: XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>;
  };

  export type activity_logCreateManyUserInputEnvelope = {
    data: activity_logCreateManyUserInput | activity_logCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type clientCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    content?: contentCreateNestedManyWithoutClientInput;
  };

  export type clientUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    content?: contentUncheckedCreateNestedManyWithoutClientInput;
  };

  export type clientCreateOrConnectWithoutUserInput = {
    where: clientWhereUniqueInput;
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>;
  };

  export type clientCreateManyUserInputEnvelope = {
    data: clientCreateManyUserInput | clientCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type contentCreateWithoutUserInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: clientCreateNestedOneWithoutContentInput;
    seo_analysis?: seo_analysisCreateNestedManyWithoutContentInput;
  };

  export type contentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    seo_analysis?: seo_analysisUncheckedCreateNestedManyWithoutContentInput;
  };

  export type contentCreateOrConnectWithoutUserInput = {
    where: contentWhereUniqueInput;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentCreateManyUserInputEnvelope = {
    data: contentCreateManyUserInput | contentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type seo_analysisCreateWithoutUserInput = {
    id?: string;
    seo_score?: number | null;
    seo_report?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: contentCreateNestedOneWithoutSeo_analysisInput;
  };

  export type seo_analysisUncheckedCreateWithoutUserInput = {
    id?: string;
    content_id: string;
    seo_score?: number | null;
    seo_report?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisCreateOrConnectWithoutUserInput = {
    where: seo_analysisWhereUniqueInput;
    create: XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>;
  };

  export type seo_analysisCreateManyUserInputEnvelope = {
    data: seo_analysisCreateManyUserInput | seo_analysisCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type activity_logUpsertWithWhereUniqueWithoutUserInput = {
    where: activity_logWhereUniqueInput;
    update: XOR<activity_logUpdateWithoutUserInput, activity_logUncheckedUpdateWithoutUserInput>;
    create: XOR<activity_logCreateWithoutUserInput, activity_logUncheckedCreateWithoutUserInput>;
  };

  export type activity_logUpdateWithWhereUniqueWithoutUserInput = {
    where: activity_logWhereUniqueInput;
    data: XOR<activity_logUpdateWithoutUserInput, activity_logUncheckedUpdateWithoutUserInput>;
  };

  export type activity_logUpdateManyWithWhereWithoutUserInput = {
    where: activity_logScalarWhereInput;
    data: XOR<activity_logUpdateManyMutationInput, activity_logUncheckedUpdateManyWithoutUserInput>;
  };

  export type activity_logScalarWhereInput = {
    AND?: activity_logScalarWhereInput | activity_logScalarWhereInput[];
    OR?: activity_logScalarWhereInput[];
    NOT?: activity_logScalarWhereInput | activity_logScalarWhereInput[];
    id?: UuidFilter<'activity_log'> | string;
    user_id?: UuidFilter<'activity_log'> | string;
    activity?: StringNullableFilter<'activity_log'> | string | null;
    ip_address?: StringNullableFilter<'activity_log'> | string | null;
    browser_info?: StringNullableFilter<'activity_log'> | string | null;
    created_at?: DateTimeFilter<'activity_log'> | Date | string;
    updated_at?: DateTimeFilter<'activity_log'> | Date | string;
  };

  export type clientUpsertWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput;
    update: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>;
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>;
  };

  export type clientUpdateWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput;
    data: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>;
  };

  export type clientUpdateManyWithWhereWithoutUserInput = {
    where: clientScalarWhereInput;
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyWithoutUserInput>;
  };

  export type clientScalarWhereInput = {
    AND?: clientScalarWhereInput | clientScalarWhereInput[];
    OR?: clientScalarWhereInput[];
    NOT?: clientScalarWhereInput | clientScalarWhereInput[];
    id?: UuidFilter<'client'> | string;
    description?: StringNullableFilter<'client'> | string | null;
    address?: StringNullableFilter<'client'> | string | null;
    phone_number?: StringNullableFilter<'client'> | string | null;
    name?: StringFilter<'client'> | string;
    created_at?: DateTimeFilter<'client'> | Date | string;
    updated_at?: DateTimeFilter<'client'> | Date | string;
    user_id?: UuidFilter<'client'> | string;
    tenant_id?: StringFilter<'client'> | string;
  };

  export type contentUpsertWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    update: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
    create: XOR<contentCreateWithoutUserInput, contentUncheckedCreateWithoutUserInput>;
  };

  export type contentUpdateWithWhereUniqueWithoutUserInput = {
    where: contentWhereUniqueInput;
    data: XOR<contentUpdateWithoutUserInput, contentUncheckedUpdateWithoutUserInput>;
  };

  export type contentUpdateManyWithWhereWithoutUserInput = {
    where: contentScalarWhereInput;
    data: XOR<contentUpdateManyMutationInput, contentUncheckedUpdateManyWithoutUserInput>;
  };

  export type seo_analysisUpsertWithWhereUniqueWithoutUserInput = {
    where: seo_analysisWhereUniqueInput;
    update: XOR<seo_analysisUpdateWithoutUserInput, seo_analysisUncheckedUpdateWithoutUserInput>;
    create: XOR<seo_analysisCreateWithoutUserInput, seo_analysisUncheckedCreateWithoutUserInput>;
  };

  export type seo_analysisUpdateWithWhereUniqueWithoutUserInput = {
    where: seo_analysisWhereUniqueInput;
    data: XOR<seo_analysisUpdateWithoutUserInput, seo_analysisUncheckedUpdateWithoutUserInput>;
  };

  export type seo_analysisUpdateManyWithWhereWithoutUserInput = {
    where: seo_analysisScalarWhereInput;
    data: XOR<seo_analysisUpdateManyMutationInput, seo_analysisUncheckedUpdateManyWithoutUserInput>;
  };

  export type contentCreateManyClientInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    writer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type contentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutContentNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisCreateManyContentInput = {
    id?: string;
    seo_score?: number | null;
    seo_report?: string | null;
    analyst_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutSeo_analysisNestedInput;
  };

  export type seo_analysisUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    analyst_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logCreateManyUserInput = {
    id?: string;
    activity?: string | null;
    ip_address?: string | null;
    browser_info?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type clientCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type contentCreateManyUserInput = {
    id?: string;
    title: string;
    body: string;
    keywords?: string | null;
    publish_date?: Date | string | null;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type seo_analysisCreateManyUserInput = {
    id?: string;
    content_id: string;
    seo_score?: number | null;
    seo_report?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type activity_logUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type activity_logUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    activity?: NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null;
    browser_info?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    content?: contentUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    content?: contentUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type contentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateOneRequiredWithoutContentNestedInput;
    seo_analysis?: seo_analysisUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    seo_analysis?: seo_analysisUncheckedUpdateManyWithoutContentNestedInput;
  };

  export type contentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    body?: StringFieldUpdateOperationsInput | string;
    keywords?: NullableStringFieldUpdateOperationsInput | string | null;
    publish_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    content?: contentUpdateOneRequiredWithoutSeo_analysisNestedInput;
  };

  export type seo_analysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type seo_analysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content_id?: StringFieldUpdateOperationsInput | string;
    seo_score?: NullableIntFieldUpdateOperationsInput | number | null;
    seo_report?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ClientCountOutputTypeDefaultArgs instead
   */
  export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClientCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ContentCountOutputTypeDefaultArgs instead
   */
  export type ContentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ContentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use activity_logDefaultArgs instead
   */
  export type activity_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    activity_logDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clientDefaultArgs instead
   */
  export type clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use contentDefaultArgs instead
   */
  export type contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    contentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use seo_analysisDefaultArgs instead
   */
  export type seo_analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    seo_analysisDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
