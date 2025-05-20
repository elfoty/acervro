
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>
/**
 * Model LivroAutor
 * 
 */
export type LivroAutor = $Result.DefaultSelection<Prisma.$LivroAutorPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model CategoriaLivro
 * 
 */
export type CategoriaLivro = $Result.DefaultSelection<Prisma.$CategoriaLivroPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permissao: {
  COMUM: 'COMUM',
  ADMIN: 'ADMIN',
  AUTOR: 'AUTOR',
  CURAD: 'CURAD',
  DESEN: 'DESEN'
};

export type Permissao = (typeof Permissao)[keyof typeof Permissao]

}

export type Permissao = $Enums.Permissao

export const Permissao: typeof $Enums.Permissao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Livros
 * const livros = await prisma.livro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Livros
   * const livros = await prisma.livro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livroAutor`: Exposes CRUD operations for the **LivroAutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LivroAutors
    * const livroAutors = await prisma.livroAutor.findMany()
    * ```
    */
  get livroAutor(): Prisma.LivroAutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriaLivro`: Exposes CRUD operations for the **CategoriaLivro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriaLivros
    * const categoriaLivros = await prisma.categoriaLivro.findMany()
    * ```
    */
  get categoriaLivro(): Prisma.CategoriaLivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Livro: 'Livro',
    Autor: 'Autor',
    LivroAutor: 'LivroAutor',
    Usuario: 'Usuario',
    CategoriaLivro: 'CategoriaLivro',
    Categoria: 'Categoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "livro" | "autor" | "livroAutor" | "usuario" | "categoriaLivro" | "categoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      LivroAutor: {
        payload: Prisma.$LivroAutorPayload<ExtArgs>
        fields: Prisma.LivroAutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroAutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroAutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          findFirst: {
            args: Prisma.LivroAutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroAutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          findMany: {
            args: Prisma.LivroAutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>[]
          }
          create: {
            args: Prisma.LivroAutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          createMany: {
            args: Prisma.LivroAutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroAutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>[]
          }
          delete: {
            args: Prisma.LivroAutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          update: {
            args: Prisma.LivroAutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          deleteMany: {
            args: Prisma.LivroAutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroAutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroAutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>[]
          }
          upsert: {
            args: Prisma.LivroAutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroAutorPayload>
          }
          aggregate: {
            args: Prisma.LivroAutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivroAutor>
          }
          groupBy: {
            args: Prisma.LivroAutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroAutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroAutorCountArgs<ExtArgs>
            result: $Utils.Optional<LivroAutorCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      CategoriaLivro: {
        payload: Prisma.$CategoriaLivroPayload<ExtArgs>
        fields: Prisma.CategoriaLivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaLivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaLivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          findFirst: {
            args: Prisma.CategoriaLivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaLivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          findMany: {
            args: Prisma.CategoriaLivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>[]
          }
          create: {
            args: Prisma.CategoriaLivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          createMany: {
            args: Prisma.CategoriaLivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaLivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>[]
          }
          delete: {
            args: Prisma.CategoriaLivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          update: {
            args: Prisma.CategoriaLivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaLivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaLivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaLivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaLivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaLivroPayload>
          }
          aggregate: {
            args: Prisma.CategoriaLivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriaLivro>
          }
          groupBy: {
            args: Prisma.CategoriaLivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaLivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaLivroCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaLivroCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    livro?: LivroOmit
    autor?: AutorOmit
    livroAutor?: LivroAutorOmit
    usuario?: UsuarioOmit
    categoriaLivro?: CategoriaLivroOmit
    categoria?: CategoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    autores: number
    categoria: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | LivroCountOutputTypeCountAutoresArgs
    categoria?: boolean | LivroCountOutputTypeCountCategoriaArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountAutoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroAutorWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaLivroWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    livros: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | AutorCountOutputTypeCountLivrosArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroAutorWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    livros: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | CategoriaCountOutputTypeCountLivrosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaLivroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
    paginas: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    paginas: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    nome: string | null
    ISBN: string | null
    paginas: number | null
    lancamento: Date | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    ISBN: string | null
    paginas: number | null
    lancamento: Date | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    nome: number
    ISBN: number
    paginas: number
    lancamento: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    paginas?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    paginas?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    nome?: true
    ISBN?: true
    paginas?: true
    lancamento?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    nome?: true
    ISBN?: true
    paginas?: true
    lancamento?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    nome?: true
    ISBN?: true
    paginas?: true
    lancamento?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ISBN?: boolean
    paginas?: boolean
    lancamento?: boolean
    autores?: boolean | Livro$autoresArgs<ExtArgs>
    categoria?: boolean | Livro$categoriaArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ISBN?: boolean
    paginas?: boolean
    lancamento?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ISBN?: boolean
    paginas?: boolean
    lancamento?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    id?: boolean
    nome?: boolean
    ISBN?: boolean
    paginas?: boolean
    lancamento?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ISBN" | "paginas" | "lancamento", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | Livro$autoresArgs<ExtArgs>
    categoria?: boolean | Livro$categoriaArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      autores: Prisma.$LivroAutorPayload<ExtArgs>[]
      categoria: Prisma.$CategoriaLivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      ISBN: string
      paginas: number
      lancamento: Date
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
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
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autores<T extends Livro$autoresArgs<ExtArgs> = {}>(args?: Subset<T, Livro$autoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends Livro$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Livro$categoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly nome: FieldRef<"Livro", 'String'>
    readonly ISBN: FieldRef<"Livro", 'String'>
    readonly paginas: FieldRef<"Livro", 'Int'>
    readonly lancamento: FieldRef<"Livro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.autores
   */
  export type Livro$autoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    where?: LivroAutorWhereInput
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    cursor?: LivroAutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroAutorScalarFieldEnum | LivroAutorScalarFieldEnum[]
  }

  /**
   * Livro.categoria
   */
  export type Livro$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    where?: CategoriaLivroWhereInput
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    cursor?: CategoriaLivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaLivroScalarFieldEnum | CategoriaLivroScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    bio: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    bio: string | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nome: number
    nascimento: number
    bio: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    bio?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    bio?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    bio?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nome: string
    nascimento: Date
    bio: string
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    bio?: boolean
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    bio?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    bio?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    bio?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nascimento" | "bio", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      livros: Prisma.$LivroAutorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nascimento: Date
      bio: string
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
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
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Autor$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Autor$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nome: FieldRef<"Autor", 'String'>
    readonly nascimento: FieldRef<"Autor", 'DateTime'>
    readonly bio: FieldRef<"Autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.livros
   */
  export type Autor$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    where?: LivroAutorWhereInput
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    cursor?: LivroAutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroAutorScalarFieldEnum | LivroAutorScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Model LivroAutor
   */

  export type AggregateLivroAutor = {
    _count: LivroAutorCountAggregateOutputType | null
    _avg: LivroAutorAvgAggregateOutputType | null
    _sum: LivroAutorSumAggregateOutputType | null
    _min: LivroAutorMinAggregateOutputType | null
    _max: LivroAutorMaxAggregateOutputType | null
  }

  export type LivroAutorAvgAggregateOutputType = {
    livroId: number | null
    autorId: number | null
  }

  export type LivroAutorSumAggregateOutputType = {
    livroId: number | null
    autorId: number | null
  }

  export type LivroAutorMinAggregateOutputType = {
    livroId: number | null
    autorId: number | null
  }

  export type LivroAutorMaxAggregateOutputType = {
    livroId: number | null
    autorId: number | null
  }

  export type LivroAutorCountAggregateOutputType = {
    livroId: number
    autorId: number
    _all: number
  }


  export type LivroAutorAvgAggregateInputType = {
    livroId?: true
    autorId?: true
  }

  export type LivroAutorSumAggregateInputType = {
    livroId?: true
    autorId?: true
  }

  export type LivroAutorMinAggregateInputType = {
    livroId?: true
    autorId?: true
  }

  export type LivroAutorMaxAggregateInputType = {
    livroId?: true
    autorId?: true
  }

  export type LivroAutorCountAggregateInputType = {
    livroId?: true
    autorId?: true
    _all?: true
  }

  export type LivroAutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LivroAutor to aggregate.
     */
    where?: LivroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivroAutors to fetch.
     */
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LivroAutors
    **/
    _count?: true | LivroAutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroAutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroAutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroAutorMaxAggregateInputType
  }

  export type GetLivroAutorAggregateType<T extends LivroAutorAggregateArgs> = {
        [P in keyof T & keyof AggregateLivroAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivroAutor[P]>
      : GetScalarType<T[P], AggregateLivroAutor[P]>
  }




  export type LivroAutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroAutorWhereInput
    orderBy?: LivroAutorOrderByWithAggregationInput | LivroAutorOrderByWithAggregationInput[]
    by: LivroAutorScalarFieldEnum[] | LivroAutorScalarFieldEnum
    having?: LivroAutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroAutorCountAggregateInputType | true
    _avg?: LivroAutorAvgAggregateInputType
    _sum?: LivroAutorSumAggregateInputType
    _min?: LivroAutorMinAggregateInputType
    _max?: LivroAutorMaxAggregateInputType
  }

  export type LivroAutorGroupByOutputType = {
    livroId: number
    autorId: number
    _count: LivroAutorCountAggregateOutputType | null
    _avg: LivroAutorAvgAggregateOutputType | null
    _sum: LivroAutorSumAggregateOutputType | null
    _min: LivroAutorMinAggregateOutputType | null
    _max: LivroAutorMaxAggregateOutputType | null
  }

  type GetLivroAutorGroupByPayload<T extends LivroAutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroAutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroAutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroAutorGroupByOutputType[P]>
            : GetScalarType<T[P], LivroAutorGroupByOutputType[P]>
        }
      >
    >


  export type LivroAutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    autorId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livroAutor"]>

  export type LivroAutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    autorId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livroAutor"]>

  export type LivroAutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    autorId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livroAutor"]>

  export type LivroAutorSelectScalar = {
    livroId?: boolean
    autorId?: boolean
  }

  export type LivroAutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"livroId" | "autorId", ExtArgs["result"]["livroAutor"]>
  export type LivroAutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }
  export type LivroAutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }
  export type LivroAutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    autor?: boolean | AutorDefaultArgs<ExtArgs>
  }

  export type $LivroAutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LivroAutor"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      autor: Prisma.$AutorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      livroId: number
      autorId: number
    }, ExtArgs["result"]["livroAutor"]>
    composites: {}
  }

  type LivroAutorGetPayload<S extends boolean | null | undefined | LivroAutorDefaultArgs> = $Result.GetResult<Prisma.$LivroAutorPayload, S>

  type LivroAutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroAutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroAutorCountAggregateInputType | true
    }

  export interface LivroAutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LivroAutor'], meta: { name: 'LivroAutor' } }
    /**
     * Find zero or one LivroAutor that matches the filter.
     * @param {LivroAutorFindUniqueArgs} args - Arguments to find a LivroAutor
     * @example
     * // Get one LivroAutor
     * const livroAutor = await prisma.livroAutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroAutorFindUniqueArgs>(args: SelectSubset<T, LivroAutorFindUniqueArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LivroAutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroAutorFindUniqueOrThrowArgs} args - Arguments to find a LivroAutor
     * @example
     * // Get one LivroAutor
     * const livroAutor = await prisma.livroAutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroAutorFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroAutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivroAutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorFindFirstArgs} args - Arguments to find a LivroAutor
     * @example
     * // Get one LivroAutor
     * const livroAutor = await prisma.livroAutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroAutorFindFirstArgs>(args?: SelectSubset<T, LivroAutorFindFirstArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivroAutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorFindFirstOrThrowArgs} args - Arguments to find a LivroAutor
     * @example
     * // Get one LivroAutor
     * const livroAutor = await prisma.livroAutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroAutorFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroAutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LivroAutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LivroAutors
     * const livroAutors = await prisma.livroAutor.findMany()
     * 
     * // Get first 10 LivroAutors
     * const livroAutors = await prisma.livroAutor.findMany({ take: 10 })
     * 
     * // Only select the `livroId`
     * const livroAutorWithLivroIdOnly = await prisma.livroAutor.findMany({ select: { livroId: true } })
     * 
     */
    findMany<T extends LivroAutorFindManyArgs>(args?: SelectSubset<T, LivroAutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LivroAutor.
     * @param {LivroAutorCreateArgs} args - Arguments to create a LivroAutor.
     * @example
     * // Create one LivroAutor
     * const LivroAutor = await prisma.livroAutor.create({
     *   data: {
     *     // ... data to create a LivroAutor
     *   }
     * })
     * 
     */
    create<T extends LivroAutorCreateArgs>(args: SelectSubset<T, LivroAutorCreateArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LivroAutors.
     * @param {LivroAutorCreateManyArgs} args - Arguments to create many LivroAutors.
     * @example
     * // Create many LivroAutors
     * const livroAutor = await prisma.livroAutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroAutorCreateManyArgs>(args?: SelectSubset<T, LivroAutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LivroAutors and returns the data saved in the database.
     * @param {LivroAutorCreateManyAndReturnArgs} args - Arguments to create many LivroAutors.
     * @example
     * // Create many LivroAutors
     * const livroAutor = await prisma.livroAutor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LivroAutors and only return the `livroId`
     * const livroAutorWithLivroIdOnly = await prisma.livroAutor.createManyAndReturn({
     *   select: { livroId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroAutorCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroAutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LivroAutor.
     * @param {LivroAutorDeleteArgs} args - Arguments to delete one LivroAutor.
     * @example
     * // Delete one LivroAutor
     * const LivroAutor = await prisma.livroAutor.delete({
     *   where: {
     *     // ... filter to delete one LivroAutor
     *   }
     * })
     * 
     */
    delete<T extends LivroAutorDeleteArgs>(args: SelectSubset<T, LivroAutorDeleteArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LivroAutor.
     * @param {LivroAutorUpdateArgs} args - Arguments to update one LivroAutor.
     * @example
     * // Update one LivroAutor
     * const livroAutor = await prisma.livroAutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroAutorUpdateArgs>(args: SelectSubset<T, LivroAutorUpdateArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LivroAutors.
     * @param {LivroAutorDeleteManyArgs} args - Arguments to filter LivroAutors to delete.
     * @example
     * // Delete a few LivroAutors
     * const { count } = await prisma.livroAutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroAutorDeleteManyArgs>(args?: SelectSubset<T, LivroAutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivroAutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LivroAutors
     * const livroAutor = await prisma.livroAutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroAutorUpdateManyArgs>(args: SelectSubset<T, LivroAutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivroAutors and returns the data updated in the database.
     * @param {LivroAutorUpdateManyAndReturnArgs} args - Arguments to update many LivroAutors.
     * @example
     * // Update many LivroAutors
     * const livroAutor = await prisma.livroAutor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LivroAutors and only return the `livroId`
     * const livroAutorWithLivroIdOnly = await prisma.livroAutor.updateManyAndReturn({
     *   select: { livroId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroAutorUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroAutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LivroAutor.
     * @param {LivroAutorUpsertArgs} args - Arguments to update or create a LivroAutor.
     * @example
     * // Update or create a LivroAutor
     * const livroAutor = await prisma.livroAutor.upsert({
     *   create: {
     *     // ... data to create a LivroAutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LivroAutor we want to update
     *   }
     * })
     */
    upsert<T extends LivroAutorUpsertArgs>(args: SelectSubset<T, LivroAutorUpsertArgs<ExtArgs>>): Prisma__LivroAutorClient<$Result.GetResult<Prisma.$LivroAutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LivroAutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorCountArgs} args - Arguments to filter LivroAutors to count.
     * @example
     * // Count the number of LivroAutors
     * const count = await prisma.livroAutor.count({
     *   where: {
     *     // ... the filter for the LivroAutors we want to count
     *   }
     * })
    **/
    count<T extends LivroAutorCountArgs>(
      args?: Subset<T, LivroAutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroAutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LivroAutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAutorAggregateArgs>(args: Subset<T, LivroAutorAggregateArgs>): Prisma.PrismaPromise<GetLivroAutorAggregateType<T>>

    /**
     * Group by LivroAutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAutorGroupByArgs} args - Group by arguments.
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
      T extends LivroAutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroAutorGroupByArgs['orderBy'] }
        : { orderBy?: LivroAutorGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroAutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LivroAutor model
   */
  readonly fields: LivroAutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LivroAutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroAutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    autor<T extends AutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorDefaultArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LivroAutor model
   */
  interface LivroAutorFieldRefs {
    readonly livroId: FieldRef<"LivroAutor", 'Int'>
    readonly autorId: FieldRef<"LivroAutor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LivroAutor findUnique
   */
  export type LivroAutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LivroAutor to fetch.
     */
    where: LivroAutorWhereUniqueInput
  }

  /**
   * LivroAutor findUniqueOrThrow
   */
  export type LivroAutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LivroAutor to fetch.
     */
    where: LivroAutorWhereUniqueInput
  }

  /**
   * LivroAutor findFirst
   */
  export type LivroAutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LivroAutor to fetch.
     */
    where?: LivroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivroAutors to fetch.
     */
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LivroAutors.
     */
    cursor?: LivroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LivroAutors.
     */
    distinct?: LivroAutorScalarFieldEnum | LivroAutorScalarFieldEnum[]
  }

  /**
   * LivroAutor findFirstOrThrow
   */
  export type LivroAutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LivroAutor to fetch.
     */
    where?: LivroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivroAutors to fetch.
     */
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LivroAutors.
     */
    cursor?: LivroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivroAutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LivroAutors.
     */
    distinct?: LivroAutorScalarFieldEnum | LivroAutorScalarFieldEnum[]
  }

  /**
   * LivroAutor findMany
   */
  export type LivroAutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter, which LivroAutors to fetch.
     */
    where?: LivroAutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivroAutors to fetch.
     */
    orderBy?: LivroAutorOrderByWithRelationInput | LivroAutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LivroAutors.
     */
    cursor?: LivroAutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivroAutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivroAutors.
     */
    skip?: number
    distinct?: LivroAutorScalarFieldEnum | LivroAutorScalarFieldEnum[]
  }

  /**
   * LivroAutor create
   */
  export type LivroAutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * The data needed to create a LivroAutor.
     */
    data: XOR<LivroAutorCreateInput, LivroAutorUncheckedCreateInput>
  }

  /**
   * LivroAutor createMany
   */
  export type LivroAutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LivroAutors.
     */
    data: LivroAutorCreateManyInput | LivroAutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LivroAutor createManyAndReturn
   */
  export type LivroAutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * The data used to create many LivroAutors.
     */
    data: LivroAutorCreateManyInput | LivroAutorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LivroAutor update
   */
  export type LivroAutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * The data needed to update a LivroAutor.
     */
    data: XOR<LivroAutorUpdateInput, LivroAutorUncheckedUpdateInput>
    /**
     * Choose, which LivroAutor to update.
     */
    where: LivroAutorWhereUniqueInput
  }

  /**
   * LivroAutor updateMany
   */
  export type LivroAutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LivroAutors.
     */
    data: XOR<LivroAutorUpdateManyMutationInput, LivroAutorUncheckedUpdateManyInput>
    /**
     * Filter which LivroAutors to update
     */
    where?: LivroAutorWhereInput
    /**
     * Limit how many LivroAutors to update.
     */
    limit?: number
  }

  /**
   * LivroAutor updateManyAndReturn
   */
  export type LivroAutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * The data used to update LivroAutors.
     */
    data: XOR<LivroAutorUpdateManyMutationInput, LivroAutorUncheckedUpdateManyInput>
    /**
     * Filter which LivroAutors to update
     */
    where?: LivroAutorWhereInput
    /**
     * Limit how many LivroAutors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LivroAutor upsert
   */
  export type LivroAutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * The filter to search for the LivroAutor to update in case it exists.
     */
    where: LivroAutorWhereUniqueInput
    /**
     * In case the LivroAutor found by the `where` argument doesn't exist, create a new LivroAutor with this data.
     */
    create: XOR<LivroAutorCreateInput, LivroAutorUncheckedCreateInput>
    /**
     * In case the LivroAutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroAutorUpdateInput, LivroAutorUncheckedUpdateInput>
  }

  /**
   * LivroAutor delete
   */
  export type LivroAutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
    /**
     * Filter which LivroAutor to delete.
     */
    where: LivroAutorWhereUniqueInput
  }

  /**
   * LivroAutor deleteMany
   */
  export type LivroAutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LivroAutors to delete
     */
    where?: LivroAutorWhereInput
    /**
     * Limit how many LivroAutors to delete.
     */
    limit?: number
  }

  /**
   * LivroAutor without action
   */
  export type LivroAutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroAutor
     */
    select?: LivroAutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivroAutor
     */
    omit?: LivroAutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroAutorInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    telefone: string | null
    senha: string | null
    nascimento: Date | null
    permissoes: $Enums.Permissao | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    telefone: string | null
    senha: string | null
    nascimento: Date | null
    permissoes: $Enums.Permissao | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    email: number
    telefone: number
    senha: number
    nascimento: number
    permissoes: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    telefone?: true
    senha?: true
    nascimento?: true
    permissoes?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    telefone?: true
    senha?: true
    nascimento?: true
    permissoes?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    telefone?: true
    senha?: true
    nascimento?: true
    permissoes?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    sobrenome: string
    email: string
    telefone: string
    senha: string
    nascimento: Date
    permissoes: $Enums.Permissao
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    nascimento?: boolean
    permissoes?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    nascimento?: boolean
    permissoes?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    nascimento?: boolean
    permissoes?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    nascimento?: boolean
    permissoes?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "email" | "telefone" | "senha" | "nascimento" | "permissoes", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sobrenome: string
      email: string
      telefone: string
      senha: string
      nascimento: Date
      permissoes: $Enums.Permissao
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly sobrenome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nascimento: FieldRef<"Usuario", 'DateTime'>
    readonly permissoes: FieldRef<"Usuario", 'Permissao'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model CategoriaLivro
   */

  export type AggregateCategoriaLivro = {
    _count: CategoriaLivroCountAggregateOutputType | null
    _avg: CategoriaLivroAvgAggregateOutputType | null
    _sum: CategoriaLivroSumAggregateOutputType | null
    _min: CategoriaLivroMinAggregateOutputType | null
    _max: CategoriaLivroMaxAggregateOutputType | null
  }

  export type CategoriaLivroAvgAggregateOutputType = {
    livroId: number | null
    categoriaId: number | null
  }

  export type CategoriaLivroSumAggregateOutputType = {
    livroId: number | null
    categoriaId: number | null
  }

  export type CategoriaLivroMinAggregateOutputType = {
    livroId: number | null
    categoriaId: number | null
  }

  export type CategoriaLivroMaxAggregateOutputType = {
    livroId: number | null
    categoriaId: number | null
  }

  export type CategoriaLivroCountAggregateOutputType = {
    livroId: number
    categoriaId: number
    _all: number
  }


  export type CategoriaLivroAvgAggregateInputType = {
    livroId?: true
    categoriaId?: true
  }

  export type CategoriaLivroSumAggregateInputType = {
    livroId?: true
    categoriaId?: true
  }

  export type CategoriaLivroMinAggregateInputType = {
    livroId?: true
    categoriaId?: true
  }

  export type CategoriaLivroMaxAggregateInputType = {
    livroId?: true
    categoriaId?: true
  }

  export type CategoriaLivroCountAggregateInputType = {
    livroId?: true
    categoriaId?: true
    _all?: true
  }

  export type CategoriaLivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaLivro to aggregate.
     */
    where?: CategoriaLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaLivros to fetch.
     */
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriaLivros
    **/
    _count?: true | CategoriaLivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaLivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaLivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaLivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaLivroMaxAggregateInputType
  }

  export type GetCategoriaLivroAggregateType<T extends CategoriaLivroAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaLivro[P]>
      : GetScalarType<T[P], AggregateCategoriaLivro[P]>
  }




  export type CategoriaLivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaLivroWhereInput
    orderBy?: CategoriaLivroOrderByWithAggregationInput | CategoriaLivroOrderByWithAggregationInput[]
    by: CategoriaLivroScalarFieldEnum[] | CategoriaLivroScalarFieldEnum
    having?: CategoriaLivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaLivroCountAggregateInputType | true
    _avg?: CategoriaLivroAvgAggregateInputType
    _sum?: CategoriaLivroSumAggregateInputType
    _min?: CategoriaLivroMinAggregateInputType
    _max?: CategoriaLivroMaxAggregateInputType
  }

  export type CategoriaLivroGroupByOutputType = {
    livroId: number
    categoriaId: number
    _count: CategoriaLivroCountAggregateOutputType | null
    _avg: CategoriaLivroAvgAggregateOutputType | null
    _sum: CategoriaLivroSumAggregateOutputType | null
    _min: CategoriaLivroMinAggregateOutputType | null
    _max: CategoriaLivroMaxAggregateOutputType | null
  }

  type GetCategoriaLivroGroupByPayload<T extends CategoriaLivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaLivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaLivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaLivroGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaLivroGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaLivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    categoriaId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaLivro"]>

  export type CategoriaLivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    categoriaId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaLivro"]>

  export type CategoriaLivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livroId?: boolean
    categoriaId?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaLivro"]>

  export type CategoriaLivroSelectScalar = {
    livroId?: boolean
    categoriaId?: boolean
  }

  export type CategoriaLivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"livroId" | "categoriaId", ExtArgs["result"]["categoriaLivro"]>
  export type CategoriaLivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type CategoriaLivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type CategoriaLivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $CategoriaLivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriaLivro"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      livroId: number
      categoriaId: number
    }, ExtArgs["result"]["categoriaLivro"]>
    composites: {}
  }

  type CategoriaLivroGetPayload<S extends boolean | null | undefined | CategoriaLivroDefaultArgs> = $Result.GetResult<Prisma.$CategoriaLivroPayload, S>

  type CategoriaLivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaLivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaLivroCountAggregateInputType | true
    }

  export interface CategoriaLivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriaLivro'], meta: { name: 'CategoriaLivro' } }
    /**
     * Find zero or one CategoriaLivro that matches the filter.
     * @param {CategoriaLivroFindUniqueArgs} args - Arguments to find a CategoriaLivro
     * @example
     * // Get one CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaLivroFindUniqueArgs>(args: SelectSubset<T, CategoriaLivroFindUniqueArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriaLivro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaLivroFindUniqueOrThrowArgs} args - Arguments to find a CategoriaLivro
     * @example
     * // Get one CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaLivroFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaLivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaLivro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroFindFirstArgs} args - Arguments to find a CategoriaLivro
     * @example
     * // Get one CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaLivroFindFirstArgs>(args?: SelectSubset<T, CategoriaLivroFindFirstArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaLivro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroFindFirstOrThrowArgs} args - Arguments to find a CategoriaLivro
     * @example
     * // Get one CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaLivroFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaLivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriaLivros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriaLivros
     * const categoriaLivros = await prisma.categoriaLivro.findMany()
     * 
     * // Get first 10 CategoriaLivros
     * const categoriaLivros = await prisma.categoriaLivro.findMany({ take: 10 })
     * 
     * // Only select the `livroId`
     * const categoriaLivroWithLivroIdOnly = await prisma.categoriaLivro.findMany({ select: { livroId: true } })
     * 
     */
    findMany<T extends CategoriaLivroFindManyArgs>(args?: SelectSubset<T, CategoriaLivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriaLivro.
     * @param {CategoriaLivroCreateArgs} args - Arguments to create a CategoriaLivro.
     * @example
     * // Create one CategoriaLivro
     * const CategoriaLivro = await prisma.categoriaLivro.create({
     *   data: {
     *     // ... data to create a CategoriaLivro
     *   }
     * })
     * 
     */
    create<T extends CategoriaLivroCreateArgs>(args: SelectSubset<T, CategoriaLivroCreateArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriaLivros.
     * @param {CategoriaLivroCreateManyArgs} args - Arguments to create many CategoriaLivros.
     * @example
     * // Create many CategoriaLivros
     * const categoriaLivro = await prisma.categoriaLivro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaLivroCreateManyArgs>(args?: SelectSubset<T, CategoriaLivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoriaLivros and returns the data saved in the database.
     * @param {CategoriaLivroCreateManyAndReturnArgs} args - Arguments to create many CategoriaLivros.
     * @example
     * // Create many CategoriaLivros
     * const categoriaLivro = await prisma.categoriaLivro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoriaLivros and only return the `livroId`
     * const categoriaLivroWithLivroIdOnly = await prisma.categoriaLivro.createManyAndReturn({
     *   select: { livroId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaLivroCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaLivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoriaLivro.
     * @param {CategoriaLivroDeleteArgs} args - Arguments to delete one CategoriaLivro.
     * @example
     * // Delete one CategoriaLivro
     * const CategoriaLivro = await prisma.categoriaLivro.delete({
     *   where: {
     *     // ... filter to delete one CategoriaLivro
     *   }
     * })
     * 
     */
    delete<T extends CategoriaLivroDeleteArgs>(args: SelectSubset<T, CategoriaLivroDeleteArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriaLivro.
     * @param {CategoriaLivroUpdateArgs} args - Arguments to update one CategoriaLivro.
     * @example
     * // Update one CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaLivroUpdateArgs>(args: SelectSubset<T, CategoriaLivroUpdateArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriaLivros.
     * @param {CategoriaLivroDeleteManyArgs} args - Arguments to filter CategoriaLivros to delete.
     * @example
     * // Delete a few CategoriaLivros
     * const { count } = await prisma.categoriaLivro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaLivroDeleteManyArgs>(args?: SelectSubset<T, CategoriaLivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaLivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriaLivros
     * const categoriaLivro = await prisma.categoriaLivro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaLivroUpdateManyArgs>(args: SelectSubset<T, CategoriaLivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaLivros and returns the data updated in the database.
     * @param {CategoriaLivroUpdateManyAndReturnArgs} args - Arguments to update many CategoriaLivros.
     * @example
     * // Update many CategoriaLivros
     * const categoriaLivro = await prisma.categoriaLivro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoriaLivros and only return the `livroId`
     * const categoriaLivroWithLivroIdOnly = await prisma.categoriaLivro.updateManyAndReturn({
     *   select: { livroId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaLivroUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaLivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoriaLivro.
     * @param {CategoriaLivroUpsertArgs} args - Arguments to update or create a CategoriaLivro.
     * @example
     * // Update or create a CategoriaLivro
     * const categoriaLivro = await prisma.categoriaLivro.upsert({
     *   create: {
     *     // ... data to create a CategoriaLivro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriaLivro we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaLivroUpsertArgs>(args: SelectSubset<T, CategoriaLivroUpsertArgs<ExtArgs>>): Prisma__CategoriaLivroClient<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriaLivros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroCountArgs} args - Arguments to filter CategoriaLivros to count.
     * @example
     * // Count the number of CategoriaLivros
     * const count = await prisma.categoriaLivro.count({
     *   where: {
     *     // ... the filter for the CategoriaLivros we want to count
     *   }
     * })
    **/
    count<T extends CategoriaLivroCountArgs>(
      args?: Subset<T, CategoriaLivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaLivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriaLivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaLivroAggregateArgs>(args: Subset<T, CategoriaLivroAggregateArgs>): Prisma.PrismaPromise<GetCategoriaLivroAggregateType<T>>

    /**
     * Group by CategoriaLivro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaLivroGroupByArgs} args - Group by arguments.
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
      T extends CategoriaLivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaLivroGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaLivroGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaLivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriaLivro model
   */
  readonly fields: CategoriaLivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriaLivro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaLivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoriaLivro model
   */
  interface CategoriaLivroFieldRefs {
    readonly livroId: FieldRef<"CategoriaLivro", 'Int'>
    readonly categoriaId: FieldRef<"CategoriaLivro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoriaLivro findUnique
   */
  export type CategoriaLivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaLivro to fetch.
     */
    where: CategoriaLivroWhereUniqueInput
  }

  /**
   * CategoriaLivro findUniqueOrThrow
   */
  export type CategoriaLivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaLivro to fetch.
     */
    where: CategoriaLivroWhereUniqueInput
  }

  /**
   * CategoriaLivro findFirst
   */
  export type CategoriaLivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaLivro to fetch.
     */
    where?: CategoriaLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaLivros to fetch.
     */
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaLivros.
     */
    cursor?: CategoriaLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaLivros.
     */
    distinct?: CategoriaLivroScalarFieldEnum | CategoriaLivroScalarFieldEnum[]
  }

  /**
   * CategoriaLivro findFirstOrThrow
   */
  export type CategoriaLivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaLivro to fetch.
     */
    where?: CategoriaLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaLivros to fetch.
     */
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaLivros.
     */
    cursor?: CategoriaLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaLivros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaLivros.
     */
    distinct?: CategoriaLivroScalarFieldEnum | CategoriaLivroScalarFieldEnum[]
  }

  /**
   * CategoriaLivro findMany
   */
  export type CategoriaLivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaLivros to fetch.
     */
    where?: CategoriaLivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaLivros to fetch.
     */
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriaLivros.
     */
    cursor?: CategoriaLivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaLivros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaLivros.
     */
    skip?: number
    distinct?: CategoriaLivroScalarFieldEnum | CategoriaLivroScalarFieldEnum[]
  }

  /**
   * CategoriaLivro create
   */
  export type CategoriaLivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriaLivro.
     */
    data: XOR<CategoriaLivroCreateInput, CategoriaLivroUncheckedCreateInput>
  }

  /**
   * CategoriaLivro createMany
   */
  export type CategoriaLivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriaLivros.
     */
    data: CategoriaLivroCreateManyInput | CategoriaLivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaLivro createManyAndReturn
   */
  export type CategoriaLivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * The data used to create many CategoriaLivros.
     */
    data: CategoriaLivroCreateManyInput | CategoriaLivroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoriaLivro update
   */
  export type CategoriaLivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriaLivro.
     */
    data: XOR<CategoriaLivroUpdateInput, CategoriaLivroUncheckedUpdateInput>
    /**
     * Choose, which CategoriaLivro to update.
     */
    where: CategoriaLivroWhereUniqueInput
  }

  /**
   * CategoriaLivro updateMany
   */
  export type CategoriaLivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriaLivros.
     */
    data: XOR<CategoriaLivroUpdateManyMutationInput, CategoriaLivroUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaLivros to update
     */
    where?: CategoriaLivroWhereInput
    /**
     * Limit how many CategoriaLivros to update.
     */
    limit?: number
  }

  /**
   * CategoriaLivro updateManyAndReturn
   */
  export type CategoriaLivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * The data used to update CategoriaLivros.
     */
    data: XOR<CategoriaLivroUpdateManyMutationInput, CategoriaLivroUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaLivros to update
     */
    where?: CategoriaLivroWhereInput
    /**
     * Limit how many CategoriaLivros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoriaLivro upsert
   */
  export type CategoriaLivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriaLivro to update in case it exists.
     */
    where: CategoriaLivroWhereUniqueInput
    /**
     * In case the CategoriaLivro found by the `where` argument doesn't exist, create a new CategoriaLivro with this data.
     */
    create: XOR<CategoriaLivroCreateInput, CategoriaLivroUncheckedCreateInput>
    /**
     * In case the CategoriaLivro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaLivroUpdateInput, CategoriaLivroUncheckedUpdateInput>
  }

  /**
   * CategoriaLivro delete
   */
  export type CategoriaLivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    /**
     * Filter which CategoriaLivro to delete.
     */
    where: CategoriaLivroWhereUniqueInput
  }

  /**
   * CategoriaLivro deleteMany
   */
  export type CategoriaLivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaLivros to delete
     */
    where?: CategoriaLivroWhereInput
    /**
     * Limit how many CategoriaLivros to delete.
     */
    limit?: number
  }

  /**
   * CategoriaLivro without action
   */
  export type CategoriaLivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    livros?: boolean | Categoria$livrosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Categoria$livrosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      livros: Prisma.$CategoriaLivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Categoria$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaLivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.livros
   */
  export type Categoria$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaLivro
     */
    select?: CategoriaLivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaLivro
     */
    omit?: CategoriaLivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaLivroInclude<ExtArgs> | null
    where?: CategoriaLivroWhereInput
    orderBy?: CategoriaLivroOrderByWithRelationInput | CategoriaLivroOrderByWithRelationInput[]
    cursor?: CategoriaLivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaLivroScalarFieldEnum | CategoriaLivroScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LivroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ISBN: 'ISBN',
    paginas: 'paginas',
    lancamento: 'lancamento'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nascimento: 'nascimento',
    bio: 'bio'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const LivroAutorScalarFieldEnum: {
    livroId: 'livroId',
    autorId: 'autorId'
  };

  export type LivroAutorScalarFieldEnum = (typeof LivroAutorScalarFieldEnum)[keyof typeof LivroAutorScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    telefone: 'telefone',
    senha: 'senha',
    nascimento: 'nascimento',
    permissoes: 'permissoes'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaLivroScalarFieldEnum: {
    livroId: 'livroId',
    categoriaId: 'categoriaId'
  };

  export type CategoriaLivroScalarFieldEnum = (typeof CategoriaLivroScalarFieldEnum)[keyof typeof CategoriaLivroScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Permissao'
   */
  export type EnumPermissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permissao'>
    


  /**
   * Reference to a field of type 'Permissao[]'
   */
  export type ListEnumPermissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permissao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    nome?: StringFilter<"Livro"> | string
    ISBN?: StringFilter<"Livro"> | string
    paginas?: IntFilter<"Livro"> | number
    lancamento?: DateTimeFilter<"Livro"> | Date | string
    autores?: LivroAutorListRelationFilter
    categoria?: CategoriaLivroListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ISBN?: SortOrder
    paginas?: SortOrder
    lancamento?: SortOrder
    autores?: LivroAutorOrderByRelationAggregateInput
    categoria?: CategoriaLivroOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    nome?: StringFilter<"Livro"> | string
    ISBN?: StringFilter<"Livro"> | string
    paginas?: IntFilter<"Livro"> | number
    lancamento?: DateTimeFilter<"Livro"> | Date | string
    autores?: LivroAutorListRelationFilter
    categoria?: CategoriaLivroListRelationFilter
  }, "id">

  export type LivroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ISBN?: SortOrder
    paginas?: SortOrder
    lancamento?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    nome?: StringWithAggregatesFilter<"Livro"> | string
    ISBN?: StringWithAggregatesFilter<"Livro"> | string
    paginas?: IntWithAggregatesFilter<"Livro"> | number
    lancamento?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nome?: StringFilter<"Autor"> | string
    nascimento?: DateTimeFilter<"Autor"> | Date | string
    bio?: StringFilter<"Autor"> | string
    livros?: LivroAutorListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    bio?: SortOrder
    livros?: LivroAutorOrderByRelationAggregateInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nome?: StringFilter<"Autor"> | string
    nascimento?: DateTimeFilter<"Autor"> | Date | string
    bio?: StringFilter<"Autor"> | string
    livros?: LivroAutorListRelationFilter
  }, "id">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    bio?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nome?: StringWithAggregatesFilter<"Autor"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Autor"> | Date | string
    bio?: StringWithAggregatesFilter<"Autor"> | string
  }

  export type LivroAutorWhereInput = {
    AND?: LivroAutorWhereInput | LivroAutorWhereInput[]
    OR?: LivroAutorWhereInput[]
    NOT?: LivroAutorWhereInput | LivroAutorWhereInput[]
    livroId?: IntFilter<"LivroAutor"> | number
    autorId?: IntFilter<"LivroAutor"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
  }

  export type LivroAutorOrderByWithRelationInput = {
    livroId?: SortOrder
    autorId?: SortOrder
    livro?: LivroOrderByWithRelationInput
    autor?: AutorOrderByWithRelationInput
  }

  export type LivroAutorWhereUniqueInput = Prisma.AtLeast<{
    livroId_autorId?: LivroAutorLivroIdAutorIdCompoundUniqueInput
    AND?: LivroAutorWhereInput | LivroAutorWhereInput[]
    OR?: LivroAutorWhereInput[]
    NOT?: LivroAutorWhereInput | LivroAutorWhereInput[]
    livroId?: IntFilter<"LivroAutor"> | number
    autorId?: IntFilter<"LivroAutor"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    autor?: XOR<AutorScalarRelationFilter, AutorWhereInput>
  }, "livroId_autorId">

  export type LivroAutorOrderByWithAggregationInput = {
    livroId?: SortOrder
    autorId?: SortOrder
    _count?: LivroAutorCountOrderByAggregateInput
    _avg?: LivroAutorAvgOrderByAggregateInput
    _max?: LivroAutorMaxOrderByAggregateInput
    _min?: LivroAutorMinOrderByAggregateInput
    _sum?: LivroAutorSumOrderByAggregateInput
  }

  export type LivroAutorScalarWhereWithAggregatesInput = {
    AND?: LivroAutorScalarWhereWithAggregatesInput | LivroAutorScalarWhereWithAggregatesInput[]
    OR?: LivroAutorScalarWhereWithAggregatesInput[]
    NOT?: LivroAutorScalarWhereWithAggregatesInput | LivroAutorScalarWhereWithAggregatesInput[]
    livroId?: IntWithAggregatesFilter<"LivroAutor"> | number
    autorId?: IntWithAggregatesFilter<"LivroAutor"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nascimento?: DateTimeFilter<"Usuario"> | Date | string
    permissoes?: EnumPermissaoFilter<"Usuario"> | $Enums.Permissao
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    nascimento?: SortOrder
    permissoes?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nascimento?: DateTimeFilter<"Usuario"> | Date | string
    permissoes?: EnumPermissaoFilter<"Usuario"> | $Enums.Permissao
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    nascimento?: SortOrder
    permissoes?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    sobrenome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    permissoes?: EnumPermissaoWithAggregatesFilter<"Usuario"> | $Enums.Permissao
  }

  export type CategoriaLivroWhereInput = {
    AND?: CategoriaLivroWhereInput | CategoriaLivroWhereInput[]
    OR?: CategoriaLivroWhereInput[]
    NOT?: CategoriaLivroWhereInput | CategoriaLivroWhereInput[]
    livroId?: IntFilter<"CategoriaLivro"> | number
    categoriaId?: IntFilter<"CategoriaLivro"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type CategoriaLivroOrderByWithRelationInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
    livro?: LivroOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type CategoriaLivroWhereUniqueInput = Prisma.AtLeast<{
    livroId_categoriaId?: CategoriaLivroLivroIdCategoriaIdCompoundUniqueInput
    AND?: CategoriaLivroWhereInput | CategoriaLivroWhereInput[]
    OR?: CategoriaLivroWhereInput[]
    NOT?: CategoriaLivroWhereInput | CategoriaLivroWhereInput[]
    livroId?: IntFilter<"CategoriaLivro"> | number
    categoriaId?: IntFilter<"CategoriaLivro"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "livroId_categoriaId">

  export type CategoriaLivroOrderByWithAggregationInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
    _count?: CategoriaLivroCountOrderByAggregateInput
    _avg?: CategoriaLivroAvgOrderByAggregateInput
    _max?: CategoriaLivroMaxOrderByAggregateInput
    _min?: CategoriaLivroMinOrderByAggregateInput
    _sum?: CategoriaLivroSumOrderByAggregateInput
  }

  export type CategoriaLivroScalarWhereWithAggregatesInput = {
    AND?: CategoriaLivroScalarWhereWithAggregatesInput | CategoriaLivroScalarWhereWithAggregatesInput[]
    OR?: CategoriaLivroScalarWhereWithAggregatesInput[]
    NOT?: CategoriaLivroScalarWhereWithAggregatesInput | CategoriaLivroScalarWhereWithAggregatesInput[]
    livroId?: IntWithAggregatesFilter<"CategoriaLivro"> | number
    categoriaId?: IntWithAggregatesFilter<"CategoriaLivro"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    livros?: CategoriaLivroListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    livros?: CategoriaLivroOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    livros?: CategoriaLivroListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type LivroCreateInput = {
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    autores?: LivroAutorCreateNestedManyWithoutLivroInput
    categoria?: CategoriaLivroCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    autores?: LivroAutorUncheckedCreateNestedManyWithoutLivroInput
    categoria?: CategoriaLivroUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: LivroAutorUpdateManyWithoutLivroNestedInput
    categoria?: CategoriaLivroUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: LivroAutorUncheckedUpdateManyWithoutLivroNestedInput
    categoria?: CategoriaLivroUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroCreateManyInput = {
    id?: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
  }

  export type LivroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorCreateInput = {
    nome: string
    nascimento: Date | string
    bio: string
    livros?: LivroAutorCreateNestedManyWithoutAutorInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nome: string
    nascimento: Date | string
    bio: string
    livros?: LivroAutorUncheckedCreateNestedManyWithoutAutorInput
  }

  export type AutorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
    livros?: LivroAutorUpdateManyWithoutAutorNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
    livros?: LivroAutorUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nome: string
    nascimento: Date | string
    bio: string
  }

  export type AutorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type LivroAutorCreateInput = {
    livro: LivroCreateNestedOneWithoutAutoresInput
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroAutorUncheckedCreateInput = {
    livroId: number
    autorId: number
  }

  export type LivroAutorUpdateInput = {
    livro?: LivroUpdateOneRequiredWithoutAutoresNestedInput
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroAutorUncheckedUpdateInput = {
    livroId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type LivroAutorCreateManyInput = {
    livroId: number
    autorId: number
  }

  export type LivroAutorUpdateManyMutationInput = {

  }

  export type LivroAutorUncheckedUpdateManyInput = {
    livroId?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nome: string
    sobrenome: string
    email: string
    telefone: string
    senha: string
    nascimento: Date | string
    permissoes: $Enums.Permissao
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    telefone: string
    senha: string
    nascimento: Date | string
    permissoes: $Enums.Permissao
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    telefone: string
    senha: string
    nascimento: Date | string
    permissoes: $Enums.Permissao
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type CategoriaLivroCreateInput = {
    livro: LivroCreateNestedOneWithoutCategoriaInput
    categoria: CategoriaCreateNestedOneWithoutLivrosInput
  }

  export type CategoriaLivroUncheckedCreateInput = {
    livroId: number
    categoriaId: number
  }

  export type CategoriaLivroUpdateInput = {
    livro?: LivroUpdateOneRequiredWithoutCategoriaNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type CategoriaLivroUncheckedUpdateInput = {
    livroId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaLivroCreateManyInput = {
    livroId: number
    categoriaId: number
  }

  export type CategoriaLivroUpdateManyMutationInput = {

  }

  export type CategoriaLivroUncheckedUpdateManyInput = {
    livroId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nome: string
    livros?: CategoriaLivroCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    livros?: CategoriaLivroUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    livros?: CategoriaLivroUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    livros?: CategoriaLivroUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LivroAutorListRelationFilter = {
    every?: LivroAutorWhereInput
    some?: LivroAutorWhereInput
    none?: LivroAutorWhereInput
  }

  export type CategoriaLivroListRelationFilter = {
    every?: CategoriaLivroWhereInput
    some?: CategoriaLivroWhereInput
    none?: CategoriaLivroWhereInput
  }

  export type LivroAutorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaLivroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ISBN?: SortOrder
    paginas?: SortOrder
    lancamento?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
    paginas?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ISBN?: SortOrder
    paginas?: SortOrder
    lancamento?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ISBN?: SortOrder
    paginas?: SortOrder
    lancamento?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
    paginas?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    bio?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    bio?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    bio?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type AutorScalarRelationFilter = {
    is?: AutorWhereInput
    isNot?: AutorWhereInput
  }

  export type LivroAutorLivroIdAutorIdCompoundUniqueInput = {
    livroId: number
    autorId: number
  }

  export type LivroAutorCountOrderByAggregateInput = {
    livroId?: SortOrder
    autorId?: SortOrder
  }

  export type LivroAutorAvgOrderByAggregateInput = {
    livroId?: SortOrder
    autorId?: SortOrder
  }

  export type LivroAutorMaxOrderByAggregateInput = {
    livroId?: SortOrder
    autorId?: SortOrder
  }

  export type LivroAutorMinOrderByAggregateInput = {
    livroId?: SortOrder
    autorId?: SortOrder
  }

  export type LivroAutorSumOrderByAggregateInput = {
    livroId?: SortOrder
    autorId?: SortOrder
  }

  export type EnumPermissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoFilter<$PrismaModel> | $Enums.Permissao
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    nascimento?: SortOrder
    permissoes?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    nascimento?: SortOrder
    permissoes?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    nascimento?: SortOrder
    permissoes?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPermissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoWithAggregatesFilter<$PrismaModel> | $Enums.Permissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type CategoriaLivroLivroIdCategoriaIdCompoundUniqueInput = {
    livroId: number
    categoriaId: number
  }

  export type CategoriaLivroCountOrderByAggregateInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
  }

  export type CategoriaLivroAvgOrderByAggregateInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
  }

  export type CategoriaLivroMaxOrderByAggregateInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
  }

  export type CategoriaLivroMinOrderByAggregateInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
  }

  export type CategoriaLivroSumOrderByAggregateInput = {
    livroId?: SortOrder
    categoriaId?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivroAutorCreateNestedManyWithoutLivroInput = {
    create?: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput> | LivroAutorCreateWithoutLivroInput[] | LivroAutorUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutLivroInput | LivroAutorCreateOrConnectWithoutLivroInput[]
    createMany?: LivroAutorCreateManyLivroInputEnvelope
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
  }

  export type CategoriaLivroCreateNestedManyWithoutLivroInput = {
    create?: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput> | CategoriaLivroCreateWithoutLivroInput[] | CategoriaLivroUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutLivroInput | CategoriaLivroCreateOrConnectWithoutLivroInput[]
    createMany?: CategoriaLivroCreateManyLivroInputEnvelope
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
  }

  export type LivroAutorUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput> | LivroAutorCreateWithoutLivroInput[] | LivroAutorUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutLivroInput | LivroAutorCreateOrConnectWithoutLivroInput[]
    createMany?: LivroAutorCreateManyLivroInputEnvelope
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
  }

  export type CategoriaLivroUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput> | CategoriaLivroCreateWithoutLivroInput[] | CategoriaLivroUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutLivroInput | CategoriaLivroCreateOrConnectWithoutLivroInput[]
    createMany?: CategoriaLivroCreateManyLivroInputEnvelope
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LivroAutorUpdateManyWithoutLivroNestedInput = {
    create?: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput> | LivroAutorCreateWithoutLivroInput[] | LivroAutorUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutLivroInput | LivroAutorCreateOrConnectWithoutLivroInput[]
    upsert?: LivroAutorUpsertWithWhereUniqueWithoutLivroInput | LivroAutorUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: LivroAutorCreateManyLivroInputEnvelope
    set?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    disconnect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    delete?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    update?: LivroAutorUpdateWithWhereUniqueWithoutLivroInput | LivroAutorUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: LivroAutorUpdateManyWithWhereWithoutLivroInput | LivroAutorUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
  }

  export type CategoriaLivroUpdateManyWithoutLivroNestedInput = {
    create?: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput> | CategoriaLivroCreateWithoutLivroInput[] | CategoriaLivroUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutLivroInput | CategoriaLivroCreateOrConnectWithoutLivroInput[]
    upsert?: CategoriaLivroUpsertWithWhereUniqueWithoutLivroInput | CategoriaLivroUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: CategoriaLivroCreateManyLivroInputEnvelope
    set?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    disconnect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    delete?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    update?: CategoriaLivroUpdateWithWhereUniqueWithoutLivroInput | CategoriaLivroUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: CategoriaLivroUpdateManyWithWhereWithoutLivroInput | CategoriaLivroUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
  }

  export type LivroAutorUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput> | LivroAutorCreateWithoutLivroInput[] | LivroAutorUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutLivroInput | LivroAutorCreateOrConnectWithoutLivroInput[]
    upsert?: LivroAutorUpsertWithWhereUniqueWithoutLivroInput | LivroAutorUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: LivroAutorCreateManyLivroInputEnvelope
    set?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    disconnect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    delete?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    update?: LivroAutorUpdateWithWhereUniqueWithoutLivroInput | LivroAutorUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: LivroAutorUpdateManyWithWhereWithoutLivroInput | LivroAutorUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
  }

  export type CategoriaLivroUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput> | CategoriaLivroCreateWithoutLivroInput[] | CategoriaLivroUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutLivroInput | CategoriaLivroCreateOrConnectWithoutLivroInput[]
    upsert?: CategoriaLivroUpsertWithWhereUniqueWithoutLivroInput | CategoriaLivroUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: CategoriaLivroCreateManyLivroInputEnvelope
    set?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    disconnect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    delete?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    update?: CategoriaLivroUpdateWithWhereUniqueWithoutLivroInput | CategoriaLivroUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: CategoriaLivroUpdateManyWithWhereWithoutLivroInput | CategoriaLivroUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
  }

  export type LivroAutorCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput> | LivroAutorCreateWithoutAutorInput[] | LivroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutAutorInput | LivroAutorCreateOrConnectWithoutAutorInput[]
    createMany?: LivroAutorCreateManyAutorInputEnvelope
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
  }

  export type LivroAutorUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput> | LivroAutorCreateWithoutAutorInput[] | LivroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutAutorInput | LivroAutorCreateOrConnectWithoutAutorInput[]
    createMany?: LivroAutorCreateManyAutorInputEnvelope
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
  }

  export type LivroAutorUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput> | LivroAutorCreateWithoutAutorInput[] | LivroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutAutorInput | LivroAutorCreateOrConnectWithoutAutorInput[]
    upsert?: LivroAutorUpsertWithWhereUniqueWithoutAutorInput | LivroAutorUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroAutorCreateManyAutorInputEnvelope
    set?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    disconnect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    delete?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    update?: LivroAutorUpdateWithWhereUniqueWithoutAutorInput | LivroAutorUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroAutorUpdateManyWithWhereWithoutAutorInput | LivroAutorUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
  }

  export type LivroAutorUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput> | LivroAutorCreateWithoutAutorInput[] | LivroAutorUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: LivroAutorCreateOrConnectWithoutAutorInput | LivroAutorCreateOrConnectWithoutAutorInput[]
    upsert?: LivroAutorUpsertWithWhereUniqueWithoutAutorInput | LivroAutorUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: LivroAutorCreateManyAutorInputEnvelope
    set?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    disconnect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    delete?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    connect?: LivroAutorWhereUniqueInput | LivroAutorWhereUniqueInput[]
    update?: LivroAutorUpdateWithWhereUniqueWithoutAutorInput | LivroAutorUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: LivroAutorUpdateManyWithWhereWithoutAutorInput | LivroAutorUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutAutoresInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput
    connect?: LivroWhereUniqueInput
  }

  export type AutorCreateNestedOneWithoutLivrosInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    connect?: AutorWhereUniqueInput
  }

  export type LivroUpdateOneRequiredWithoutAutoresNestedInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput
    upsert?: LivroUpsertWithoutAutoresInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutAutoresInput, LivroUpdateWithoutAutoresInput>, LivroUncheckedUpdateWithoutAutoresInput>
  }

  export type AutorUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput
    upsert?: AutorUpsertWithoutLivrosInput
    connect?: AutorWhereUniqueInput
    update?: XOR<XOR<AutorUpdateToOneWithWhereWithoutLivrosInput, AutorUpdateWithoutLivrosInput>, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type EnumPermissaoFieldUpdateOperationsInput = {
    set?: $Enums.Permissao
  }

  export type LivroCreateNestedOneWithoutCategoriaInput = {
    create?: XOR<LivroCreateWithoutCategoriaInput, LivroUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutCategoriaInput
    connect?: LivroWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutLivrosInput = {
    create?: XOR<CategoriaCreateWithoutLivrosInput, CategoriaUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutLivrosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type LivroUpdateOneRequiredWithoutCategoriaNestedInput = {
    create?: XOR<LivroCreateWithoutCategoriaInput, LivroUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutCategoriaInput
    upsert?: LivroUpsertWithoutCategoriaInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutCategoriaInput, LivroUpdateWithoutCategoriaInput>, LivroUncheckedUpdateWithoutCategoriaInput>
  }

  export type CategoriaUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<CategoriaCreateWithoutLivrosInput, CategoriaUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutLivrosInput
    upsert?: CategoriaUpsertWithoutLivrosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutLivrosInput, CategoriaUpdateWithoutLivrosInput>, CategoriaUncheckedUpdateWithoutLivrosInput>
  }

  export type CategoriaLivroCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput> | CategoriaLivroCreateWithoutCategoriaInput[] | CategoriaLivroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutCategoriaInput | CategoriaLivroCreateOrConnectWithoutCategoriaInput[]
    createMany?: CategoriaLivroCreateManyCategoriaInputEnvelope
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
  }

  export type CategoriaLivroUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput> | CategoriaLivroCreateWithoutCategoriaInput[] | CategoriaLivroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutCategoriaInput | CategoriaLivroCreateOrConnectWithoutCategoriaInput[]
    createMany?: CategoriaLivroCreateManyCategoriaInputEnvelope
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
  }

  export type CategoriaLivroUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput> | CategoriaLivroCreateWithoutCategoriaInput[] | CategoriaLivroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutCategoriaInput | CategoriaLivroCreateOrConnectWithoutCategoriaInput[]
    upsert?: CategoriaLivroUpsertWithWhereUniqueWithoutCategoriaInput | CategoriaLivroUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CategoriaLivroCreateManyCategoriaInputEnvelope
    set?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    disconnect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    delete?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    update?: CategoriaLivroUpdateWithWhereUniqueWithoutCategoriaInput | CategoriaLivroUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CategoriaLivroUpdateManyWithWhereWithoutCategoriaInput | CategoriaLivroUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
  }

  export type CategoriaLivroUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput> | CategoriaLivroCreateWithoutCategoriaInput[] | CategoriaLivroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CategoriaLivroCreateOrConnectWithoutCategoriaInput | CategoriaLivroCreateOrConnectWithoutCategoriaInput[]
    upsert?: CategoriaLivroUpsertWithWhereUniqueWithoutCategoriaInput | CategoriaLivroUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CategoriaLivroCreateManyCategoriaInputEnvelope
    set?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    disconnect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    delete?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    connect?: CategoriaLivroWhereUniqueInput | CategoriaLivroWhereUniqueInput[]
    update?: CategoriaLivroUpdateWithWhereUniqueWithoutCategoriaInput | CategoriaLivroUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CategoriaLivroUpdateManyWithWhereWithoutCategoriaInput | CategoriaLivroUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPermissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoFilter<$PrismaModel> | $Enums.Permissao
  }

  export type NestedEnumPermissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoWithAggregatesFilter<$PrismaModel> | $Enums.Permissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoFilter<$PrismaModel>
  }

  export type LivroAutorCreateWithoutLivroInput = {
    autor: AutorCreateNestedOneWithoutLivrosInput
  }

  export type LivroAutorUncheckedCreateWithoutLivroInput = {
    autorId: number
  }

  export type LivroAutorCreateOrConnectWithoutLivroInput = {
    where: LivroAutorWhereUniqueInput
    create: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput>
  }

  export type LivroAutorCreateManyLivroInputEnvelope = {
    data: LivroAutorCreateManyLivroInput | LivroAutorCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaLivroCreateWithoutLivroInput = {
    categoria: CategoriaCreateNestedOneWithoutLivrosInput
  }

  export type CategoriaLivroUncheckedCreateWithoutLivroInput = {
    categoriaId: number
  }

  export type CategoriaLivroCreateOrConnectWithoutLivroInput = {
    where: CategoriaLivroWhereUniqueInput
    create: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput>
  }

  export type CategoriaLivroCreateManyLivroInputEnvelope = {
    data: CategoriaLivroCreateManyLivroInput | CategoriaLivroCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type LivroAutorUpsertWithWhereUniqueWithoutLivroInput = {
    where: LivroAutorWhereUniqueInput
    update: XOR<LivroAutorUpdateWithoutLivroInput, LivroAutorUncheckedUpdateWithoutLivroInput>
    create: XOR<LivroAutorCreateWithoutLivroInput, LivroAutorUncheckedCreateWithoutLivroInput>
  }

  export type LivroAutorUpdateWithWhereUniqueWithoutLivroInput = {
    where: LivroAutorWhereUniqueInput
    data: XOR<LivroAutorUpdateWithoutLivroInput, LivroAutorUncheckedUpdateWithoutLivroInput>
  }

  export type LivroAutorUpdateManyWithWhereWithoutLivroInput = {
    where: LivroAutorScalarWhereInput
    data: XOR<LivroAutorUpdateManyMutationInput, LivroAutorUncheckedUpdateManyWithoutLivroInput>
  }

  export type LivroAutorScalarWhereInput = {
    AND?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
    OR?: LivroAutorScalarWhereInput[]
    NOT?: LivroAutorScalarWhereInput | LivroAutorScalarWhereInput[]
    livroId?: IntFilter<"LivroAutor"> | number
    autorId?: IntFilter<"LivroAutor"> | number
  }

  export type CategoriaLivroUpsertWithWhereUniqueWithoutLivroInput = {
    where: CategoriaLivroWhereUniqueInput
    update: XOR<CategoriaLivroUpdateWithoutLivroInput, CategoriaLivroUncheckedUpdateWithoutLivroInput>
    create: XOR<CategoriaLivroCreateWithoutLivroInput, CategoriaLivroUncheckedCreateWithoutLivroInput>
  }

  export type CategoriaLivroUpdateWithWhereUniqueWithoutLivroInput = {
    where: CategoriaLivroWhereUniqueInput
    data: XOR<CategoriaLivroUpdateWithoutLivroInput, CategoriaLivroUncheckedUpdateWithoutLivroInput>
  }

  export type CategoriaLivroUpdateManyWithWhereWithoutLivroInput = {
    where: CategoriaLivroScalarWhereInput
    data: XOR<CategoriaLivroUpdateManyMutationInput, CategoriaLivroUncheckedUpdateManyWithoutLivroInput>
  }

  export type CategoriaLivroScalarWhereInput = {
    AND?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
    OR?: CategoriaLivroScalarWhereInput[]
    NOT?: CategoriaLivroScalarWhereInput | CategoriaLivroScalarWhereInput[]
    livroId?: IntFilter<"CategoriaLivro"> | number
    categoriaId?: IntFilter<"CategoriaLivro"> | number
  }

  export type LivroAutorCreateWithoutAutorInput = {
    livro: LivroCreateNestedOneWithoutAutoresInput
  }

  export type LivroAutorUncheckedCreateWithoutAutorInput = {
    livroId: number
  }

  export type LivroAutorCreateOrConnectWithoutAutorInput = {
    where: LivroAutorWhereUniqueInput
    create: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput>
  }

  export type LivroAutorCreateManyAutorInputEnvelope = {
    data: LivroAutorCreateManyAutorInput | LivroAutorCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LivroAutorUpsertWithWhereUniqueWithoutAutorInput = {
    where: LivroAutorWhereUniqueInput
    update: XOR<LivroAutorUpdateWithoutAutorInput, LivroAutorUncheckedUpdateWithoutAutorInput>
    create: XOR<LivroAutorCreateWithoutAutorInput, LivroAutorUncheckedCreateWithoutAutorInput>
  }

  export type LivroAutorUpdateWithWhereUniqueWithoutAutorInput = {
    where: LivroAutorWhereUniqueInput
    data: XOR<LivroAutorUpdateWithoutAutorInput, LivroAutorUncheckedUpdateWithoutAutorInput>
  }

  export type LivroAutorUpdateManyWithWhereWithoutAutorInput = {
    where: LivroAutorScalarWhereInput
    data: XOR<LivroAutorUpdateManyMutationInput, LivroAutorUncheckedUpdateManyWithoutAutorInput>
  }

  export type LivroCreateWithoutAutoresInput = {
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    categoria?: CategoriaLivroCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutAutoresInput = {
    id?: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    categoria?: CategoriaLivroUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutAutoresInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
  }

  export type AutorCreateWithoutLivrosInput = {
    nome: string
    nascimento: Date | string
    bio: string
  }

  export type AutorUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
    nascimento: Date | string
    bio: string
  }

  export type AutorCreateOrConnectWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
  }

  export type LivroUpsertWithoutAutoresInput = {
    update: XOR<LivroUpdateWithoutAutoresInput, LivroUncheckedUpdateWithoutAutoresInput>
    create: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutAutoresInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutAutoresInput, LivroUncheckedUpdateWithoutAutoresInput>
  }

  export type LivroUpdateWithoutAutoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaLivroUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutAutoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaLivroUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type AutorUpsertWithoutLivrosInput = {
    update: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
    where?: AutorWhereInput
  }

  export type AutorUpdateToOneWithWhereWithoutLivrosInput = {
    where?: AutorWhereInput
    data: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type AutorUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type LivroCreateWithoutCategoriaInput = {
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    autores?: LivroAutorCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nome: string
    ISBN: string
    paginas: number
    lancamento: Date | string
    autores?: LivroAutorUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutCategoriaInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutCategoriaInput, LivroUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriaCreateWithoutLivrosInput = {
    nome: string
  }

  export type CategoriaUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
  }

  export type CategoriaCreateOrConnectWithoutLivrosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutLivrosInput, CategoriaUncheckedCreateWithoutLivrosInput>
  }

  export type LivroUpsertWithoutCategoriaInput = {
    update: XOR<LivroUpdateWithoutCategoriaInput, LivroUncheckedUpdateWithoutCategoriaInput>
    create: XOR<LivroCreateWithoutCategoriaInput, LivroUncheckedCreateWithoutCategoriaInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutCategoriaInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutCategoriaInput, LivroUncheckedUpdateWithoutCategoriaInput>
  }

  export type LivroUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: LivroAutorUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ISBN?: StringFieldUpdateOperationsInput | string
    paginas?: IntFieldUpdateOperationsInput | number
    lancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    autores?: LivroAutorUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type CategoriaUpsertWithoutLivrosInput = {
    update: XOR<CategoriaUpdateWithoutLivrosInput, CategoriaUncheckedUpdateWithoutLivrosInput>
    create: XOR<CategoriaCreateWithoutLivrosInput, CategoriaUncheckedCreateWithoutLivrosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutLivrosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutLivrosInput, CategoriaUncheckedUpdateWithoutLivrosInput>
  }

  export type CategoriaUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaLivroCreateWithoutCategoriaInput = {
    livro: LivroCreateNestedOneWithoutCategoriaInput
  }

  export type CategoriaLivroUncheckedCreateWithoutCategoriaInput = {
    livroId: number
  }

  export type CategoriaLivroCreateOrConnectWithoutCategoriaInput = {
    where: CategoriaLivroWhereUniqueInput
    create: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriaLivroCreateManyCategoriaInputEnvelope = {
    data: CategoriaLivroCreateManyCategoriaInput | CategoriaLivroCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaLivroUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: CategoriaLivroWhereUniqueInput
    update: XOR<CategoriaLivroUpdateWithoutCategoriaInput, CategoriaLivroUncheckedUpdateWithoutCategoriaInput>
    create: XOR<CategoriaLivroCreateWithoutCategoriaInput, CategoriaLivroUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriaLivroUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: CategoriaLivroWhereUniqueInput
    data: XOR<CategoriaLivroUpdateWithoutCategoriaInput, CategoriaLivroUncheckedUpdateWithoutCategoriaInput>
  }

  export type CategoriaLivroUpdateManyWithWhereWithoutCategoriaInput = {
    where: CategoriaLivroScalarWhereInput
    data: XOR<CategoriaLivroUpdateManyMutationInput, CategoriaLivroUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type LivroAutorCreateManyLivroInput = {
    autorId: number
  }

  export type CategoriaLivroCreateManyLivroInput = {
    categoriaId: number
  }

  export type LivroAutorUpdateWithoutLivroInput = {
    autor?: AutorUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type LivroAutorUncheckedUpdateWithoutLivroInput = {
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type LivroAutorUncheckedUpdateManyWithoutLivroInput = {
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaLivroUpdateWithoutLivroInput = {
    categoria?: CategoriaUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type CategoriaLivroUncheckedUpdateWithoutLivroInput = {
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaLivroUncheckedUpdateManyWithoutLivroInput = {
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type LivroAutorCreateManyAutorInput = {
    livroId: number
  }

  export type LivroAutorUpdateWithoutAutorInput = {
    livro?: LivroUpdateOneRequiredWithoutAutoresNestedInput
  }

  export type LivroAutorUncheckedUpdateWithoutAutorInput = {
    livroId?: IntFieldUpdateOperationsInput | number
  }

  export type LivroAutorUncheckedUpdateManyWithoutAutorInput = {
    livroId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaLivroCreateManyCategoriaInput = {
    livroId: number
  }

  export type CategoriaLivroUpdateWithoutCategoriaInput = {
    livro?: LivroUpdateOneRequiredWithoutCategoriaNestedInput
  }

  export type CategoriaLivroUncheckedUpdateWithoutCategoriaInput = {
    livroId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaLivroUncheckedUpdateManyWithoutCategoriaInput = {
    livroId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}