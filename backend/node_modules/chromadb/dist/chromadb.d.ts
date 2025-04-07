import * as openai from 'openai';
import * as _xenova_transformers from '@xenova/transformers';
import * as chromadb_default_embed from 'chromadb-default-embed';
import * as _google_generative_ai from '@google/generative-ai';
import * as ollama from 'ollama';

interface IEmbeddingFunction {
    generate(texts: string[]): Promise<number[][]>;
}

type AuthHeaders = {
    [header: string]: string;
};
type TokenHeaderType = "AUTHORIZATION" | "X_CHROMA_TOKEN";
type AuthOptions = {
    provider: ClientAuthProvider | string | undefined;
    credentials?: any | undefined;
    tokenHeaderType?: TokenHeaderType | undefined;
};
interface ClientAuthProvider {
    /**
     * Abstract method for authenticating a client.
     */
    authenticate(): AuthHeaders;
}

declare enum IncludeEnum {
    Documents = "documents",
    Embeddings = "embeddings",
    Metadatas = "metadatas",
    Distances = "distances"
}
type Embedding = number[];
type Embeddings = Embedding[];
type Metadata = Record<string, string | number | boolean>;
type Metadatas = Metadata[];
type Document = string;
type Documents = Document[];
type ID = string;
type IDs = ID[];
type PositiveInteger = number;
type LiteralValue = string | number | boolean;
type ListLiteralValue = LiteralValue[];
type LiteralNumber = number;
type LogicalOperator = "$and" | "$or";
type InclusionOperator = "$in" | "$nin";
type WhereOperator = "$gt" | "$gte" | "$lt" | "$lte" | "$ne" | "$eq";
type OperatorExpression = {
    [key in WhereOperator | InclusionOperator | LogicalOperator]?: LiteralValue | ListLiteralValue;
};
type BaseWhere = {
    [key: string]: LiteralValue | OperatorExpression;
};
type LogicalWhere = {
    [key in LogicalOperator]?: Where[];
};
type Where = BaseWhere | LogicalWhere;
type WhereDocumentOperator = "$contains" | "$not_contains" | LogicalOperator;
type WhereDocument = {
    [key in WhereDocumentOperator]?: LiteralValue | LiteralNumber | WhereDocument[];
};
type MultiGetResponse = {
    ids: IDs;
    embeddings: Embeddings | null;
    documents: (Document | null)[];
    metadatas: (Metadata | null)[];
    included: IncludeEnum[];
};
type GetResponse = MultiGetResponse;
type SingleQueryResponse = {
    ids: IDs;
    embeddings: Embeddings | null;
    documents: (Document | null)[];
    metadatas: (Metadata | null)[];
    distances: number[] | null;
    included: IncludeEnum[];
};
type MultiQueryResponse = {
    ids: IDs[];
    embeddings: Embeddings[] | null;
    documents: (Document | null)[][];
    metadatas: (Metadata | null)[][];
    distances: number[][] | null;
    included: IncludeEnum[];
};
type QueryResponse = SingleQueryResponse | MultiQueryResponse;
interface CollectionParams {
    name: string;
    id: string;
    metadata: CollectionMetadata | undefined;
    embeddingFunction: IEmbeddingFunction;
}
type CollectionMetadata = Record<string, unknown>;
type ConfigOptions = {
    options?: RequestInit;
};
type BaseGetParams = {
    ids?: ID | IDs;
    where?: Where;
    limit?: PositiveInteger;
    offset?: PositiveInteger;
    include?: IncludeEnum[];
    whereDocument?: WhereDocument;
};
type SingleGetParams = BaseGetParams & {
    ids: ID;
};
type MultiGetParams = BaseGetParams & {
    ids?: IDs;
};
type GetParams = SingleGetParams | MultiGetParams;
type ListCollectionsParams = {
    limit?: PositiveInteger;
    offset?: PositiveInteger;
};
type ChromaClientParams = {
    path?: string;
    fetchOptions?: RequestInit;
    auth?: AuthOptions;
    tenant?: string;
    database?: string;
};
type CreateCollectionParams = {
    name: string;
    metadata?: CollectionMetadata;
    embeddingFunction?: IEmbeddingFunction;
};
type GetOrCreateCollectionParams = CreateCollectionParams;
type GetCollectionParams = {
    name: string;
    embeddingFunction: IEmbeddingFunction;
};
type DeleteCollectionParams = {
    name: string;
};
type BaseRecordOperationParams = {
    ids: ID | IDs;
    embeddings?: Embedding | Embeddings;
    metadatas?: Metadata | Metadatas;
    documents?: Document | Documents;
};
type SingleRecordOperationParams = BaseRecordOperationParams & {
    ids: ID;
    embeddings?: Embedding;
    metadatas?: Metadata;
    documents?: Document;
};
type SingleEmbeddingRecordOperationParams = SingleRecordOperationParams & {
    embeddings: Embedding;
};
type SingleContentRecordOperationParams = SingleRecordOperationParams & {
    documents: Document;
};
type SingleAddRecordOperationParams = SingleEmbeddingRecordOperationParams | SingleContentRecordOperationParams;
type MultiRecordOperationParams = BaseRecordOperationParams & {
    ids: IDs;
    embeddings?: Embeddings;
    metadatas?: Metadatas;
    documents?: Documents;
};
type MultiEmbeddingRecordOperationParams = MultiRecordOperationParams & {
    embeddings: Embeddings;
};
type MultiContentRecordOperationParams = MultiRecordOperationParams & {
    documents: Documents;
};
type MultiAddRecordsOperationParams = MultiEmbeddingRecordOperationParams | MultiContentRecordOperationParams;
type AddRecordsParams = SingleAddRecordOperationParams | MultiAddRecordsOperationParams;
type UpsertRecordsParams = AddRecordsParams;
type UpdateRecordsParams = MultiRecordOperationParams | SingleRecordOperationParams;
type ModifyCollectionParams = {
    name?: string;
    metadata?: CollectionMetadata;
};
type BaseQueryParams = {
    nResults?: PositiveInteger;
    where?: Where;
    queryTexts?: string | string[];
    queryEmbeddings?: Embedding | Embeddings;
    whereDocument?: WhereDocument;
    include?: IncludeEnum[];
};
type SingleTextQueryParams = BaseQueryParams & {
    queryTexts: string;
    queryEmbeddings?: never;
};
type SingleEmbeddingQueryParams = BaseQueryParams & {
    queryTexts?: never;
    queryEmbeddings: Embedding;
};
type MultiTextQueryParams = BaseQueryParams & {
    queryTexts: string[];
    queryEmbeddings?: never;
};
type MultiEmbeddingQueryParams = BaseQueryParams & {
    queryTexts?: never;
    queryEmbeddings: Embeddings;
};
type QueryRecordsParams = SingleTextQueryParams | SingleEmbeddingQueryParams | MultiTextQueryParams | MultiEmbeddingQueryParams;
type PeekParams = {
    limit?: PositiveInteger;
};
type DeleteParams = {
    ids?: ID | IDs;
    where?: Where;
    whereDocument?: WhereDocument;
};

declare class Collection {
    name: string;
    id: string;
    metadata: CollectionMetadata | undefined;
    /**
     * @ignore
     */
    private client;
    /**
     * @ignore
     */
    embeddingFunction: IEmbeddingFunction;
    /**
     * @ignore
     */
    constructor(name: string, id: string, client: ChromaClient, embeddingFunction: IEmbeddingFunction, metadata?: CollectionMetadata);
    /**
     * Add items to the collection
     * @param {Object} params - The parameters for the query.
     * @param {ID | IDs} [params.ids] - IDs of the items to add.
     * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings of the items to add.
     * @param {Metadata | Metadatas} [params.metadatas] - Optional metadata of the items to add.
     * @param {Document | Documents} [params.documents] - Optional documents of the items to add.
     * @returns {Promise<AddResponse>} - The response from the API. True if successful.
     *
     * @example
     * ```typescript
     * const response = await collection.add({
     *   ids: ["id1", "id2"],
     *   embeddings: [[1, 2, 3], [4, 5, 6]],
     *   metadatas: [{ "key": "value" }, { "key": "value" }],
     *   documents: ["document1", "document2"]
     * });
     * ```
     */
    add(params: AddRecordsParams): Promise<void>;
    /**
     * Upsert items to the collection
     * @param {Object} params - The parameters for the query.
     * @param {ID | IDs} [params.ids] - IDs of the items to add.
     * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings of the items to add.
     * @param {Metadata | Metadatas} [params.metadatas] - Optional metadata of the items to add.
     * @param {Document | Documents} [params.documents] - Optional documents of the items to add.
     * @returns {Promise<void>}
     *
     * @example
     * ```typescript
     * const response = await collection.upsert({
     *   ids: ["id1", "id2"],
     *   embeddings: [[1, 2, 3], [4, 5, 6]],
     *   metadatas: [{ "key": "value" }, { "key": "value" }],
     *   documents: ["document1", "document2"],
     * });
     * ```
     */
    upsert(params: UpsertRecordsParams): Promise<void>;
    /**
     * Count the number of items in the collection
     * @returns {Promise<number>} - The number of items in the collection.
     *
     * @example
     * ```typescript
     * const count = await collection.count();
     * ```
     */
    count(): Promise<number>;
    /**
     * Get items from the collection
     * @param {Object} params - The parameters for the query.
     * @param {ID | IDs} [params.ids] - Optional IDs of the items to get.
     * @param {Where} [params.where] - Optional where clause to filter items by.
     * @param {PositiveInteger} [params.limit] - Optional limit on the number of items to get.
     * @param {PositiveInteger} [params.offset] - Optional offset on the items to get.
     * @param {IncludeEnum[]} [params.include] - Optional list of items to include in the response.
     * @param {WhereDocument} [params.whereDocument] - Optional where clause to filter items by.
     * @returns {Promise<GetResponse>} - The response from the server.
     *
     * @example
     * ```typescript
     * const response = await collection.get({
     *   ids: ["id1", "id2"],
     *   where: { "key": "value" },
     *   limit: 10,
     *   offset: 0,
     *   include: ["embeddings", "metadatas", "documents"],
     *   whereDocument: { $contains: "value" },
     * });
     * ```
     */
    get({ ids, where, limit, offset, include, whereDocument, }?: BaseGetParams): Promise<GetResponse>;
    /**
     * Update items in the collection
     * @param {Object} params - The parameters for the query.
     * @param {ID | IDs} [params.ids] - IDs of the items to add.
     * @param {Embedding | Embeddings} [params.embeddings] - Optional embeddings of the items to add.
     * @param {Metadata | Metadatas} [params.metadatas] - Optional metadata of the items to add.
     * @param {Document | Documents} [params.documents] - Optional documents of the items to add.
     * @returns {Promise<void>}
     *
     * @example
     * ```typescript
     * const response = await collection.update({
     *   ids: ["id1", "id2"],
     *   embeddings: [[1, 2, 3], [4, 5, 6]],
     *   metadatas: [{ "key": "value" }, { "key": "value" }],
     *   documents: ["document1", "document2"],
     * });
     * ```
     */
    update(params: UpdateRecordsParams): Promise<void>;
    /**
     * Performs a query on the collection using the specified parameters.
     *
     * @param {Object} params - The parameters for the query.
     * @param {Embedding | Embeddings} [params.queryEmbeddings] - Optional query embeddings to use for the search.
     * @param {PositiveInteger} [params.nResults] - Optional number of results to return (default is 10).
     * @param {Where} [params.where] - Optional query condition to filter results based on metadata values.
     * @param {string | string[]} [params.queryTexts] - Optional query text(s) to search for in the collection.
     * @param {WhereDocument} [params.whereDocument] - Optional query condition to filter results based on document content.
     * @param {IncludeEnum[]} [params.include] - Optional array of fields to include in the result, such as "metadata" and "document".
     *
     * @returns {Promise<QueryResponse>} A promise that resolves to the query results.
     * @throws {Error} If there is an issue executing the query.
     * @example
     * // Query the collection using embeddings
     * const results = await collection.query({
     *   queryEmbeddings: [[0.1, 0.2, ...], ...],
     *   nResults: 10,
     *   where: {"name": {"$eq": "John Doe"}},
     *   include: ["metadata", "document"]
     * });
     * @example
     * ```js
     * // Query the collection using query text
     * const results = await collection.query({
     *   queryTexts: "some text",
     *   nResults: 10,
     *   where: {"name": {"$eq": "John Doe"}},
     *   include: ["metadata", "document"]
     * });
     * ```
     *
     */
    query({ nResults, where, whereDocument, include, queryTexts, queryEmbeddings, }: QueryRecordsParams): Promise<MultiQueryResponse>;
    /**
     * Modify the collection name or metadata
     * @param {Object} params - The parameters for the query.
     * @param {string} [params.name] - Optional new name for the collection.
     * @param {CollectionMetadata} [params.metadata] - Optional new metadata for the collection.
     * @returns {Promise<void>} - The response from the API.
     *
     * @example
     * ```typescript
     * const response = await client.updateCollection({
     *   name: "new name",
     *   metadata: { "key": "value" },
     * });
     * ```
     */
    modify({ name, metadata, }: {
        name?: string;
        metadata?: CollectionMetadata;
    }): Promise<CollectionParams>;
    /**
     * Peek inside the collection
     * @param {Object} params - The parameters for the query.
     * @param {PositiveInteger} [params.limit] - Optional number of results to return (default is 10).
     * @returns {Promise<GetResponse>} A promise that resolves to the query results.
     * @throws {Error} If there is an issue executing the query.
     *
     * @example
     * ```typescript
     * const results = await collection.peek({
     *   limit: 10
     * });
     * ```
     */
    peek({ limit }?: PeekParams): Promise<MultiGetResponse>;
    /**
     * Deletes items from the collection.
     * @param {Object} params - The parameters for deleting items from the collection.
     * @param {ID | IDs} [params.ids] - Optional ID or array of IDs of items to delete.
     * @param {Where} [params.where] - Optional query condition to filter items to delete based on metadata values.
     * @param {WhereDocument} [params.whereDocument] - Optional query condition to filter items to delete based on document content.
     * @returns {Promise<string[]>} A promise that resolves to the IDs of the deleted items.
     * @throws {Error} If there is an issue deleting items from the collection.
     *
     * @example
     * ```typescript
     * const results = await collection.delete({
     *   ids: "some_id",
     *   where: {"name": {"$eq": "John Doe"}},
     *   whereDocument: {"$contains":"search_string"}
     * });
     * ```
     */
    delete({ ids, where, whereDocument, }?: DeleteParams): Promise<void>;
}

/**
 * Chroma
 *
 *
 * OpenAPI spec version: 0.5.6.dev52
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */
interface ConfigurationParameters {
    apiKey?: string | ((name: string) => string | null);
    username?: string;
    password?: string;
    authorization?: string | ((name: string, scopes?: string[]) => string | null);
    basePath?: string;
}
declare class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | ((name: string) => string | null);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2, openIdConnect or http security
     * @param name security name
     * @param scopes oauth2 scopes
     * @memberof Configuration
     */
    authorization?: string | ((name: string, scopes?: string[]) => string | null);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    constructor(param?: ConfigurationParameters);
}

/**
 * Chroma
 *
 *
 * OpenAPI spec version: 0.5.6.dev52
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */
declare const defaultFetch: typeof fetch;

/**
 *
 * @export
 * @type FetchAPI
 */
type FetchAPI = typeof defaultFetch;
/**
 *
 * @export
 * @class BaseAPI
 */
declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration?: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}

/**
 * Chroma
 *
 *
 * OpenAPI spec version: 0.5.6.dev52
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */
declare namespace Api {
    interface Add201Response {
    }
    interface AddRequest {
        embeddings?: (Api.AddRequest.Embedding[]) | null;
        metadatas?: ((Api.AddRequest.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace AddRequest
     */
    namespace AddRequest {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface AddV1201Response {
    }
    interface AddV1Request {
        embeddings?: (Api.AddV1Request.Embedding[]) | null;
        metadatas?: ((Api.AddV1Request.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace AddV1Request
     */
    namespace AddV1Request {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface ADelete200Response {
    }
    interface ADeleteRequest {
        ids?: (string[]) | null;
        where?: Api.ADeleteRequest.Where | null;
        'where_document'?: Api.ADeleteRequest.WhereDocument | null;
    }
    /**
     * @export
     * @namespace ADeleteRequest
     */
    namespace ADeleteRequest {
        interface Where {
        }
        interface WhereDocument {
        }
    }
    interface AGet200Response {
    }
    interface AGetRequest {
        ids?: (string[]) | null;
        where?: Api.AGetRequest.Where | null;
        'where_document'?: Api.AGetRequest.WhereDocument | null;
        sort?: string | null;
        /**
         * @type {number | null}
         * @memberof AGetRequest
         */
        limit?: number | null;
        /**
         * @type {number | null}
         * @memberof AGetRequest
         */
        offset?: number | null;
        include?: Api.IncludeEnum[];
    }
    /**
     * @export
     * @namespace AGetRequest
     */
    namespace AGetRequest {
        interface Where {
        }
        interface WhereDocument {
        }
    }
    interface Count200Response {
    }
    interface CountCollections200Response {
    }
    interface CountCollectionsV1200Response {
    }
    interface CountV1200Response {
    }
    interface CreateCollection200Response {
    }
    interface CreateCollectionRequest {
        name: string;
        configuration?: Api.CreateCollectionRequest.Configuration | null;
        metadata?: Api.CreateCollectionRequest.Metadata | null;
        'get_or_create'?: boolean;
    }
    /**
     * @export
     * @namespace CreateCollectionRequest
     */
    namespace CreateCollectionRequest {
        interface Configuration {
        }
        interface Metadata {
        }
    }
    interface CreateCollectionV1200Response {
    }
    interface CreateCollectionV1Request {
        name: string;
        configuration?: Api.CreateCollectionV1Request.Configuration | null;
        metadata?: Api.CreateCollectionV1Request.Metadata | null;
        'get_or_create'?: boolean;
    }
    /**
     * @export
     * @namespace CreateCollectionV1Request
     */
    namespace CreateCollectionV1Request {
        interface Configuration {
        }
        interface Metadata {
        }
    }
    interface CreateDatabase200Response {
    }
    interface CreateDatabaseRequest {
        name: string;
    }
    interface CreateDatabaseV1200Response {
    }
    interface CreateDatabaseV1Request {
        name: string;
    }
    interface CreateTenant200Response {
    }
    interface CreateTenantRequest {
        name: string;
    }
    interface CreateTenantV1200Response {
    }
    interface CreateTenantV1Request {
        name: string;
    }
    interface DeleteCollection200Response {
    }
    interface DeleteCollectionV1200Response {
    }
    interface DeleteDatabase200Response {
    }
    interface DeleteV1200Response {
    }
    interface DeleteV1Request {
        ids?: (string[]) | null;
        where?: Api.DeleteV1Request.Where | null;
        'where_document'?: Api.DeleteV1Request.WhereDocument | null;
    }
    /**
     * @export
     * @namespace DeleteV1Request
     */
    namespace DeleteV1Request {
        interface Where {
        }
        interface WhereDocument {
        }
    }
    interface GetCollection200Response {
    }
    interface GetCollectionV1200Response {
    }
    interface GetDatabase200Response {
    }
    interface GetDatabaseV1200Response {
    }
    interface GetNearestNeighbors200Response {
    }
    interface GetNearestNeighborsRequest {
        where?: Api.GetNearestNeighborsRequest.Where | null;
        'where_document'?: Api.GetNearestNeighborsRequest.WhereDocument | null;
        'query_embeddings': Api.GetNearestNeighborsRequest.QueryEmbedding[];
        /**
         * @type {number}
         * @memberof GetNearestNeighborsRequest
         */
        'n_results'?: number;
        include?: Api.IncludeEnum[];
    }
    /**
     * @export
     * @namespace GetNearestNeighborsRequest
     */
    namespace GetNearestNeighborsRequest {
        interface Where {
        }
        interface WhereDocument {
        }
        interface QueryEmbedding {
        }
    }
    interface GetNearestNeighborsV1200Response {
    }
    interface GetNearestNeighborsV1Request {
        where?: Api.GetNearestNeighborsV1Request.Where | null;
        'where_document'?: Api.GetNearestNeighborsV1Request.WhereDocument | null;
        'query_embeddings': Api.GetNearestNeighborsV1Request.QueryEmbedding[];
        /**
         * @type {number}
         * @memberof GetNearestNeighborsV1Request
         */
        'n_results'?: number;
        include?: Api.IncludeEnum[];
    }
    /**
     * @export
     * @namespace GetNearestNeighborsV1Request
     */
    namespace GetNearestNeighborsV1Request {
        interface Where {
        }
        interface WhereDocument {
        }
        interface QueryEmbedding {
        }
    }
    interface GetTenant200Response {
    }
    interface GetTenantV1200Response {
    }
    interface GetUserIdentity200Response {
    }
    interface GetV1200Response {
    }
    interface GetV1Request {
        ids?: (string[]) | null;
        where?: Api.GetV1Request.Where | null;
        'where_document'?: Api.GetV1Request.WhereDocument | null;
        sort?: string | null;
        /**
         * @type {number | null}
         * @memberof GetV1Request
         */
        limit?: number | null;
        /**
         * @type {number | null}
         * @memberof GetV1Request
         */
        offset?: number | null;
        include?: Api.IncludeEnum[];
    }
    /**
     * @export
     * @namespace GetV1Request
     */
    namespace GetV1Request {
        interface Where {
        }
        interface WhereDocument {
        }
    }
    interface HTTPValidationError {
        detail?: Api.ValidationError[];
    }
    enum IncludeEnum {
        Documents = "documents",
        Embeddings = "embeddings",
        Metadatas = "metadatas",
        Distances = "distances",
        Uris = "uris",
        Data = "data"
    }
    interface ListCollections200Response {
    }
    interface ListCollectionsV1200Response {
    }
    interface ListDatabases200Response {
    }
    interface PreFlightChecks200Response {
    }
    interface PreFlightChecks200Response2 {
    }
    interface Update200Response {
    }
    interface UpdateCollection200Response {
    }
    interface UpdateCollectionRequest {
        'new_name'?: string | null;
        'new_metadata'?: Api.UpdateCollectionRequest.NewMetadata | null;
    }
    /**
     * @export
     * @namespace UpdateCollectionRequest
     */
    namespace UpdateCollectionRequest {
        interface NewMetadata {
        }
    }
    interface UpdateCollectionV1200Response {
    }
    interface UpdateCollectionV1Request {
        'new_name'?: string | null;
        'new_metadata'?: Api.UpdateCollectionV1Request.NewMetadata | null;
    }
    /**
     * @export
     * @namespace UpdateCollectionV1Request
     */
    namespace UpdateCollectionV1Request {
        interface NewMetadata {
        }
    }
    interface UpdateRequest {
        embeddings?: (Api.UpdateRequest.Embedding[]) | null;
        metadatas?: ((Api.UpdateRequest.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace UpdateRequest
     */
    namespace UpdateRequest {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface UpdateV1200Response {
    }
    interface UpdateV1Request {
        embeddings?: (Api.UpdateV1Request.Embedding[]) | null;
        metadatas?: ((Api.UpdateV1Request.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace UpdateV1Request
     */
    namespace UpdateV1Request {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface Upsert200Response {
    }
    interface UpsertRequest {
        embeddings?: (Api.UpsertRequest.Embedding[]) | null;
        metadatas?: ((Api.UpsertRequest.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace UpsertRequest
     */
    namespace UpsertRequest {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface UpsertV1200Response {
    }
    interface UpsertV1Request {
        embeddings?: (Api.UpsertV1Request.Embedding[]) | null;
        metadatas?: ((Api.UpsertV1Request.Metadatum | null)[]) | null;
        documents?: ((string | null)[]) | null;
        uris?: ((string | null)[]) | null;
        ids: string[];
    }
    /**
     * @export
     * @namespace UpsertV1Request
     */
    namespace UpsertV1Request {
        interface Embedding {
        }
        interface Metadatum {
        }
    }
    interface ValidationError {
        loc: (string | number)[];
        msg: string;
        'type': string;
    }
}

/**
 * Chroma
 *
 *
 * OpenAPI spec version: 0.5.6.dev52
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

/**
 * ApiApi - object-oriented interface
 * @export
 * @class ApiApi
 * @extends {BaseAPI}
 */
declare class ApiApi extends BaseAPI {
    /**
     * @summary Add
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {Api.AddRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    add(tenant: string, databaseName: string, collectionId: string, request: Api.AddRequest, options?: RequestInit): Promise<Api.Add201Response>;
    /**
     * @summary Add V1
     * @param {string} collectionId
     * @param {Api.AddV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    addV1(collectionId: string, request: Api.AddV1Request, options?: RequestInit): Promise<Api.AddV1201Response>;
    /**
     * @summary Delete
     * @param {string} collectionId
     * @param {string} tenant
     * @param {string} databaseName
     * @param {Api.ADeleteRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aDelete(collectionId: string, tenant: string, databaseName: string, request: Api.ADeleteRequest, options?: RequestInit): Promise<Api.ADelete200Response>;
    /**
     * @summary Get
     * @param {string} collectionId
     * @param {string} tenant
     * @param {string} databaseName
     * @param {Api.AGetRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    aGet(collectionId: string, tenant: string, databaseName: string, request: Api.AGetRequest, options?: RequestInit): Promise<Api.AGet200Response>;
    /**
     * @summary Count
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    count(tenant: string, databaseName: string, collectionId: string, options?: RequestInit): Promise<Api.Count200Response>;
    /**
     * @summary Count Collections
     * @param {string} tenant
     * @param {string} databaseName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    countCollections(tenant: string, databaseName: string, options?: RequestInit): Promise<Api.CountCollections200Response>;
    /**
     * @summary Count Collections V1
     * @param {string} [tenant]
     * @param {string} [database]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    countCollectionsV1(tenant: string | undefined, database: string | undefined, options?: RequestInit): Promise<Api.CountCollectionsV1200Response>;
    /**
     * @summary Count V1
     * @param {string} collectionId
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    countV1(collectionId: string, options?: RequestInit): Promise<Api.CountV1200Response>;
    /**
     * @summary Create Collection
     * @param {string} tenant
     * @param {string} databaseName
     * @param {Api.CreateCollectionRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(tenant: string, databaseName: string, request: Api.CreateCollectionRequest, options?: RequestInit): Promise<Api.CreateCollection200Response>;
    /**
     * @summary Create Collection V1
     * @param {string} [tenant]
     * @param {string} [database]
     * @param {Api.CreateCollectionV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollectionV1(tenant: string | undefined, database: string | undefined, request: Api.CreateCollectionV1Request, options?: RequestInit): Promise<Api.CreateCollectionV1200Response>;
    /**
     * @summary Create Database
     * @param {string} tenant
     * @param {Api.CreateDatabaseRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDatabase(tenant: string, request: Api.CreateDatabaseRequest, options?: RequestInit): Promise<Api.CreateDatabase200Response>;
    /**
     * @summary Create Database V1
     * @param {string} [tenant]
     * @param {Api.CreateDatabaseV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createDatabaseV1(tenant: string | undefined, request: Api.CreateDatabaseV1Request, options?: RequestInit): Promise<Api.CreateDatabaseV1200Response>;
    /**
     * @summary Create Tenant
     * @param {Api.CreateTenantRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenant(request: Api.CreateTenantRequest, options?: RequestInit): Promise<Api.CreateTenant200Response>;
    /**
     * @summary Create Tenant V1
     * @param {Api.CreateTenantV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTenantV1(request: Api.CreateTenantV1Request, options?: RequestInit): Promise<Api.CreateTenantV1200Response>;
    /**
     * @summary Delete Collection
     * @param {string} collectionName
     * @param {string} tenant
     * @param {string} databaseName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(collectionName: string, tenant: string, databaseName: string, options?: RequestInit): Promise<Api.DeleteCollection200Response>;
    /**
     * @summary Delete Collection V1
     * @param {string} collectionName
     * @param {string} [tenant]
     * @param {string} [database]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionV1(collectionName: string, tenant: string | undefined, database: string | undefined, options?: RequestInit): Promise<Api.DeleteCollectionV1200Response>;
    /**
     * @summary Delete Database
     * @param {string} databaseName
     * @param {string} tenant
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteDatabase(databaseName: string, tenant: string, options?: RequestInit): Promise<Api.DeleteDatabase200Response>;
    /**
     * @summary Delete V1
     * @param {string} collectionId
     * @param {Api.DeleteV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteV1(collectionId: string, request: Api.DeleteV1Request, options?: RequestInit): Promise<Api.DeleteV1200Response>;
    /**
     * @summary Get Collection
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionName
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(tenant: string, databaseName: string, collectionName: string, options?: RequestInit): Promise<Api.GetCollection200Response>;
    /**
     * @summary Get Collection V1
     * @param {string} collectionName
     * @param {string} [tenant]
     * @param {string} [database]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectionV1(collectionName: string, tenant: string | undefined, database: string | undefined, options?: RequestInit): Promise<Api.GetCollectionV1200Response>;
    /**
     * @summary Get Database
     * @param {string} databaseName
     * @param {string} tenant
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDatabase(databaseName: string, tenant: string, options?: RequestInit): Promise<Api.GetDatabase200Response>;
    /**
     * @summary Get Database V1
     * @param {string} database
     * @param {string} [tenant]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDatabaseV1(database: string, tenant: string | undefined, options?: RequestInit): Promise<Api.GetDatabaseV1200Response>;
    /**
     * @summary Get Nearest Neighbors
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {Api.GetNearestNeighborsRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNearestNeighbors(tenant: string, databaseName: string, collectionId: string, request: Api.GetNearestNeighborsRequest, options?: RequestInit): Promise<Api.GetNearestNeighbors200Response>;
    /**
     * @summary Get Nearest Neighbors V1
     * @param {string} collectionId
     * @param {Api.GetNearestNeighborsV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNearestNeighborsV1(collectionId: string, request: Api.GetNearestNeighborsV1Request, options?: RequestInit): Promise<Api.GetNearestNeighborsV1200Response>;
    /**
     * @summary Get Tenant
     * @param {string} tenant
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenant(tenant: string, options?: RequestInit): Promise<Api.GetTenant200Response>;
    /**
     * @summary Get Tenant V1
     * @param {string} tenant
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTenantV1(tenant: string, options?: RequestInit): Promise<Api.GetTenantV1200Response>;
    /**
     * @summary Get User Identity
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserIdentity(options?: RequestInit): Promise<Api.GetUserIdentity200Response>;
    /**
     * @summary Root
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV11(options?: RequestInit): Promise<{
        [name: string]: number;
    }>;
    /**
     * @summary Get V1
     * @param {string} collectionId
     * @param {Api.GetV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV12(collectionId: string, request: Api.GetV1Request, options?: RequestInit): Promise<Api.GetV1200Response>;
    /**
     * @summary Heartbeat
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV1Heartbeat(options?: RequestInit): Promise<{
        [name: string]: number;
    }>;
    /**
     * @summary Pre Flight Checks
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV1PreFlightChecks(options?: RequestInit): Promise<Api.PreFlightChecks200Response>;
    /**
     * @summary Version
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV1Version(options?: RequestInit): Promise<string>;
    /**
     * @summary Root
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV2(options?: RequestInit): Promise<{
        [name: string]: number;
    }>;
    /**
     * @summary Heartbeat
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV2Heartbeat(options?: RequestInit): Promise<{
        [name: string]: number;
    }>;
    /**
     * @summary Pre Flight Checks
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV2PreFlightChecks(options?: RequestInit): Promise<Api.PreFlightChecks200Response2>;
    /**
     * @summary Version
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    getV2Version(options?: RequestInit): Promise<string>;
    /**
     * @summary List Collections
     * @param {string} tenant
     * @param {string} databaseName
     * @param {number | null} [limit]
     * @param {number | null} [offset]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(tenant: string, databaseName: string, limit: number | null | undefined, offset: number | null | undefined, options?: RequestInit): Promise<Api.ListCollections200Response>;
    /**
     * @summary List Collections V1
     * @param {number | null} [limit]
     * @param {number | null} [offset]
     * @param {string} [tenant]
     * @param {string} [database]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionsV1(limit: number | null | undefined, offset: number | null | undefined, tenant: string | undefined, database: string | undefined, options?: RequestInit): Promise<Api.ListCollectionsV1200Response>;
    /**
     * @summary List Databases
     * @param {string} tenant
     * @param {number | null} [limit]
     * @param {number | null} [offset]
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    listDatabases(tenant: string, limit: number | null | undefined, offset: number | null | undefined, options?: RequestInit): Promise<Api.ListDatabases200Response>;
    /**
     * @summary Reset
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    postV1Reset(options?: RequestInit): Promise<boolean>;
    /**
     * @summary Reset
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    postV2Reset(options?: RequestInit): Promise<boolean>;
    /**
     * @summary Update
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {Api.UpdateRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    update(tenant: string, databaseName: string, collectionId: string, request: Api.UpdateRequest, options?: RequestInit): Promise<Api.Update200Response>;
    /**
     * @summary Update Collection
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {Api.UpdateCollectionRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(tenant: string, databaseName: string, collectionId: string, request: Api.UpdateCollectionRequest, options?: RequestInit): Promise<Api.UpdateCollection200Response>;
    /**
     * @summary Update Collection V1
     * @param {string} collectionId
     * @param {Api.UpdateCollectionV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollectionV1(collectionId: string, request: Api.UpdateCollectionV1Request, options?: RequestInit): Promise<Api.UpdateCollectionV1200Response>;
    /**
     * @summary Update V1
     * @param {string} collectionId
     * @param {Api.UpdateV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateV1(collectionId: string, request: Api.UpdateV1Request, options?: RequestInit): Promise<Api.UpdateV1200Response>;
    /**
     * @summary Upsert
     * @param {string} tenant
     * @param {string} databaseName
     * @param {string} collectionId
     * @param {Api.UpsertRequest} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    upsert(tenant: string, databaseName: string, collectionId: string, request: Api.UpsertRequest, options?: RequestInit): Promise<Api.Upsert200Response>;
    /**
     * @summary Upsert V1
     * @param {string} collectionId
     * @param {Api.UpsertV1Request} request
     * @param {RequestInit} [options] Override http request option.
     * @throws {RequiredError}
     */
    upsertV1(collectionId: string, request: Api.UpsertV1Request, options?: RequestInit): Promise<Api.UpsertV1200Response>;
}

declare class ChromaClient {
    /**
     * @ignore
     */
    api: ApiApi & ConfigOptions;
    /**
     * @ignore
     */
    tenant: string;
    /**
     * @ignore
     */
    database: string;
    /**
     * @ignore
     */
    private _adminClient;
    /**
     * @ignore
     */
    private authProvider;
    /**
     * @ignore
     */
    private _initPromise;
    /**
     * Creates a new ChromaClient instance.
     * @param {Object} params - The parameters for creating a new client
     * @param {string} [params.path] - The base path for the Chroma API.
     * @returns {ChromaClient} A new ChromaClient instance.
     *
     * @example
     * ```typescript
     * const client = new ChromaClient({
     *   path: "http://localhost:8000"
     * });
     * ```
     */
    constructor({ path, fetchOptions, auth, tenant, database, }?: ChromaClientParams);
    /** @ignore */
    init(): Promise<void>;
    /**
     * Tries to set the tenant and database for the client.
     *
     * @returns {Promise<void>} A promise that resolves when the tenant/database is resolved.
     * @throws {Error} If there is an issue resolving the tenant and database.
     *
     */
    getUserIdentity(): Promise<void>;
    /**
     * Resets the state of the object by making an API call to the reset endpoint.
     *
     * @returns {Promise<boolean>} A promise that resolves when the reset operation is complete.
     * @throws {ChromaConnectionError} If the client is unable to connect to the server.
     * @throws {ChromaServerError} If the server experienced an error while the state.
     *
     * @example
     * ```typescript
     * await client.reset();
     * ```
     */
    reset(): Promise<boolean>;
    /**
     * Returns the version of the Chroma API.
     * @returns {Promise<string>} A promise that resolves to the version of the Chroma API.
     * @throws {ChromaConnectionError} If the client is unable to connect to the server.
     *
     * @example
     * ```typescript
     * const version = await client.version();
     * ```
     */
    version(): Promise<string>;
    /**
     * Returns a heartbeat from the Chroma API.
     * @returns {Promise<number>} A promise that resolves to the heartbeat from the Chroma API.
     * @throws {ChromaConnectionError} If the client is unable to connect to the server.
     *
     * @example
     * ```typescript
     * const heartbeat = await client.heartbeat();
     * ```
     */
    heartbeat(): Promise<number>;
    /**
     * Creates a new collection with the specified properties.
     *
     * @param {Object} params - The parameters for creating a new collection.
     * @param {string} params.name - The name of the collection.
     * @param {CollectionMetadata} [params.metadata] - Optional metadata associated with the collection.
     * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
     *
     * @returns {Promise<Collection>} A promise that resolves to the created collection.
     * @throws {ChromaConnectionError} If the client is unable to connect to the server.
     * @throws {ChromaServerError} If there is an issue creating the collection.
     *
     * @example
     * ```typescript
     * const collection = await client.createCollection({
     *   name: "my_collection",
     *   metadata: {
     *     "description": "My first collection"
     *   }
     * });
     * ```
     */
    createCollection({ name, metadata, embeddingFunction, }: CreateCollectionParams): Promise<Collection>;
    /**
     * Gets or creates a collection with the specified properties.
     *
     * @param {Object} params - The parameters for creating a new collection.
     * @param {string} params.name - The name of the collection.
     * @param {CollectionMetadata} [params.metadata] - Optional metadata associated with the collection.
     * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
     *
     * @returns {Promise<Collection>} A promise that resolves to the got or created collection.
     * @throws {Error} If there is an issue getting or creating the collection.
     *
     * @example
     * ```typescript
     * const collection = await client.getOrCreateCollection({
     *   name: "my_collection",
     *   metadata: {
     *     "description": "My first collection"
     *   }
     * });
     * ```
     */
    getOrCreateCollection({ name, metadata, embeddingFunction, }: GetOrCreateCollectionParams): Promise<Collection>;
    /**
     * Get all collection names.
     *
     * @returns {Promise<string[]>} A promise that resolves to a list of collection names.
     * @param {PositiveInteger} [params.limit] - Optional limit on the number of items to get.
     * @param {PositiveInteger} [params.offset] - Optional offset on the items to get.
     * @throws {Error} If there is an issue listing the collections.
     *
     * @example
     * ```typescript
     * const collections = await client.listCollections({
     *     limit: 10,
     *     offset: 0,
     * });
     * ```
     */
    listCollections({ limit, offset }?: ListCollectionsParams): Promise<string[]>;
    /**
     * List collection names, IDs, and metadata.
     *
     * @param {PositiveInteger} [params.limit] - Optional limit on the number of items to get.
     * @param {PositiveInteger} [params.offset] - Optional offset on the items to get.
     * @throws {Error} If there is an issue listing the collections.
     * @returns {Promise<{ name: string, id: string, metadata?: CollectionMetadata }[]>} A promise that resolves to a list of collection names, IDs, and metadata.
     *
     * @example
     * ```typescript
     * const collections = await client.listCollectionsAndMetadata({
     *    limit: 10,
     *    offset: 0,
     * });
     */
    listCollectionsAndMetadata({ limit, offset, }?: ListCollectionsParams): Promise<{
        name: string;
        id: string;
        metadata?: CollectionMetadata;
    }[]>;
    /**
     * Counts all collections.
     *
     * @returns {Promise<number>} A promise that resolves to the number of collections.
     * @throws {Error} If there is an issue counting the collections.
     *
     * @example
     * ```typescript
     * const collections = await client.countCollections();
     * ```
     */
    countCollections(): Promise<number>;
    /**
     * Gets a collection with the specified name.
     * @param {Object} params - The parameters for getting a collection.
     * @param {string} params.name - The name of the collection.
     * @param {IEmbeddingFunction} [params.embeddingFunction] - Optional custom embedding function for the collection.
     * @returns {Promise<Collection>} A promise that resolves to the collection.
     * @throws {Error} If there is an issue getting the collection.
     *
     * @example
     * ```typescript
     * const collection = await client.getCollection({
     *   name: "my_collection"
     * });
     * ```
     */
    getCollection({ name, embeddingFunction, }: GetCollectionParams): Promise<Collection>;
    /**
     * Deletes a collection with the specified name.
     * @param {Object} params - The parameters for deleting a collection.
     * @param {string} params.name - The name of the collection.
     * @returns {Promise<void>} A promise that resolves when the collection is deleted.
     * @throws {Error} If there is an issue deleting the collection.
     *
     * @example
     * ```typescript
     * await client.deleteCollection({
     *  name: "my_collection"
     * });
     * ```
     */
    deleteCollection({ name }: DeleteCollectionParams): Promise<void>;
}

interface Tenant {
    name: string;
}
interface Database {
    id: string;
    tenant: string;
    name: string;
}
declare class AdminClient {
    /**
     * @ignore
     */
    private api;
    private authProvider;
    tenant: string;
    database: string;
    /**
     * Creates a new AdminClient instance.
     * @param {Object} params - The parameters for creating a new client
     * @param {string} [params.path] - The base path for the Chroma API.
     * @returns {AdminClient} A new AdminClient instance.
     *
     * @example
     * ```typescript
     * const client = new AdminClient({
     *   path: "http://localhost:8000"
     * });
     * ```
     */
    constructor({ path, fetchOptions, auth, tenant, database, }?: {
        path?: string;
        fetchOptions?: RequestInit;
        auth?: AuthOptions;
        tenant?: string;
        database?: string;
    });
    /**
     * Sets the tenant and database for the client.
     *
     * @param {Object} params - The parameters for setting tenant and database.
     * @param {string} params.tenant - The name of the tenant.
     * @param {string} params.database - The name of the database.
     *
     * @returns {Promise<void>} A promise that returns nothing
     * @throws {Error} Any issues
     *
     * @example
     * ```typescript
     * await adminClient.setTenant({
     *   tenant: "my_tenant",
     *   database: "my_database",
     * });
     * ```
     */
    setTenant({ tenant, database, }: {
        tenant: string;
        database?: string;
    }): Promise<void>;
    /**
     * Sets the database for the client.
     *
     * @param {Object} params - The parameters for setting the database.
     * @param {string} params.database - The name of the database.
     *
     * @returns {Promise<void>} A promise that returns nothing
     * @throws {Error} Any issues
     *
     * @example
     * ```typescript
     * await adminClient.setDatabase({
     *   database: "my_database",
     * });
     * ```
     */
    setDatabase({ database, }: {
        database?: string;
    }): Promise<void>;
    /**
     * Creates a new tenant with the specified properties.
     *
     * @param {Object} params - The parameters for creating a new tenant.
     * @param {string} params.name - The name of the tenant.
     *
     * @returns {Promise<Tenant>} A promise that resolves to the created tenant.
     * @throws {Error} If there is an issue creating the tenant.
     *
     * @example
     * ```typescript
     * await adminClient.createTenant({
     *   name: "my_tenant",
     * });
     * ```
     */
    createTenant({ name }: {
        name: string;
    }): Promise<Tenant>;
    /**
     * Gets a tenant with the specified properties.
     *
     * @param {Object} params - The parameters for getting a tenant.
     * @param {string} params.name - The name of the tenant.
     *
     * @returns {Promise<Tenant>} A promise that resolves to the tenant.
     * @throws {Error} If there is an issue getting the tenant.
     *
     * @example
     * ```typescript
     * await adminClient.getTenant({
     *   name: "my_tenant",
     * });
     * ```
     */
    getTenant({ name }: {
        name: string;
    }): Promise<Tenant>;
    /**
     * Creates a new database with the specified properties.
     *
     * @param {Object} params - The parameters for creating a new database.
     * @param {string} params.name - The name of the database.
     * @param {string} params.tenantName - The name of the tenant.
     *
     * @returns {Promise<Database>} A promise that resolves to the created database.
     * @throws {Error} If there is an issue creating the database.
     *
     * @example
     * ```typescript
     * await adminClient.createDatabase({
     *   name: "my_database",
     *   tenantName: "my_tenant",
     * });
     * ```
     */
    createDatabase({ name, tenantName, }: {
        name: string;
        tenantName: string;
    }): Promise<{
        name: string;
    }>;
    /**
     * Gets a database with the specified properties.
     *
     * @param {Object} params - The parameters for getting a database.
     * @param {string} params.name - The name of the database.
     * @param {string} params.tenantName - The name of the tenant.
     *
     * @returns {Promise<Database>} A promise that resolves to the database.
     * @throws {Error} If there is an issue getting the database.
     *
     * @example
     * ```typescript
     * await adminClient.getDatabase({
     *   name: "my_database",
     *   tenantName: "my_tenant",
     * });
     * ```
     */
    getDatabase({ name, tenantName, }: {
        name: string;
        tenantName: string;
    }): Promise<Database>;
    /**
     * Deletes a database.
     *
     * @param {Object} params - The parameters for deleting a database.
     * @param {string} params.name - The name of the database.
     * @param {string} params.tenantName - The name of the tenant.
     *
     * @returns {Promise<void>} A promise that returns nothing.
     * @throws {Error} If there is an issue deleting the database.
     */
    deleteDatabase({ name, tenantName, }: {
        name: string;
        tenantName: string;
    }): Promise<void>;
    /**
     * Lists database for a specific tenant.
     *
     * @param {Object} params - The parameters for listing databases.
     * @param {number} [params.limit] - The maximum number of databases to return.
     * @param {number} [params.offset] - The number of databases to skip.
     *
     * @returns {Promise<Database[]>} A promise that resolves to a list of databases.
     * @throws {Error} If there is an issue listing the databases.
     */
    listDatabases({ limit, offset, tenantName, }: {
        limit?: number;
        offset?: number;
        tenantName: string;
    }): Promise<Database[]>;
}

interface CloudClientParams {
    apiKey?: string;
    database?: string;
    tenant?: string;
    cloudHost?: string;
    cloudPort?: string;
}
declare class CloudClient extends ChromaClient {
    constructor({ apiKey, database, tenant, cloudHost, cloudPort, }: CloudClientParams);
}

declare class OpenAIEmbeddingFunction implements IEmbeddingFunction {
    private api_key;
    private org_id;
    private model;
    private openaiApi?;
    private dimensions?;
    constructor({ openai_api_key, openai_model, openai_organization_id, openai_embedding_dimensions, }: {
        openai_api_key: string;
        openai_model?: string;
        openai_organization_id?: string;
        openai_embedding_dimensions?: number;
    });
    private loadClient;
    generate(texts: string[]): Promise<number[][]>;
    /** @ignore */
    static import(): Promise<{
        openai: typeof openai;
        version: string;
    }>;
}

declare class CohereEmbeddingFunction implements IEmbeddingFunction {
    private cohereAiApi?;
    private model;
    private apiKey;
    constructor({ cohere_api_key, model, }: {
        cohere_api_key: string;
        model?: string;
    });
    private initCohereClient;
    generate(texts: string[]): Promise<number[][]>;
}

declare class TransformersEmbeddingFunction implements IEmbeddingFunction {
    private pipelinePromise?;
    private transformersApi;
    private model;
    private revision;
    private quantized;
    private progress_callback;
    /**
     * TransformersEmbeddingFunction constructor.
     * @param options The configuration options.
     * @param options.model The model to use to calculate embeddings. Defaults to 'Xenova/all-MiniLM-L6-v2', which is an ONNX port of `sentence-transformers/all-MiniLM-L6-v2`.
     * @param options.revision The specific model version to use (can be a branch, tag name, or commit id). Defaults to 'main'.
     * @param options.quantized Whether to load the 8-bit quantized version of the model. Defaults to `false`.
     * @param options.progress_callback If specified, this function will be called during model construction, to provide the user with progress updates.
     */
    constructor({ model, revision, quantized, progress_callback, }?: {
        model?: string;
        revision?: string;
        quantized?: boolean;
        progress_callback?: Function | null;
    });
    generate(texts: string[]): Promise<number[][]>;
    private loadClient;
    /** @ignore */
    static import(): Promise<{
        pipeline: typeof _xenova_transformers;
    }>;
}

declare class DefaultEmbeddingFunction implements IEmbeddingFunction {
    private pipelinePromise?;
    private transformersApi;
    private model;
    private revision;
    private quantized;
    private progress_callback;
    /**
     * DefaultEmbeddingFunction constructor.
     * @param options The configuration options.
     * @param options.model The model to use to calculate embeddings. Defaults to 'Xenova/all-MiniLM-L6-v2', which is an ONNX port of `sentence-transformers/all-MiniLM-L6-v2`.
     * @param options.revision The specific model version to use (can be a branch, tag name, or commit id). Defaults to 'main'.
     * @param options.quantized Whether to load the 8-bit quantized version of the model. Defaults to `false`.
     * @param options.progress_callback If specified, this function will be called during model construction, to provide the user with progress updates.
     */
    constructor({ model, revision, quantized, progress_callback, }?: {
        model?: string;
        revision?: string;
        quantized?: boolean;
        progress_callback?: Function | null;
    });
    generate(texts: string[]): Promise<number[][]>;
    private loadClient;
    /** @ignore */
    static import(): Promise<{
        pipeline: typeof chromadb_default_embed;
    }>;
}

declare class HuggingFaceEmbeddingServerFunction implements IEmbeddingFunction {
    private url;
    constructor({ url }: {
        url: string;
    });
    generate(texts: string[]): Promise<any>;
}

declare class JinaEmbeddingFunction implements IEmbeddingFunction {
    private model_name;
    private api_url;
    private headers;
    constructor({ jinaai_api_key, model_name, }: {
        jinaai_api_key: string;
        model_name?: string;
    });
    generate(texts: string[]): Promise<any[]>;
}

declare class GoogleGenerativeAiEmbeddingFunction implements IEmbeddingFunction {
    private api_key;
    private model;
    private googleGenAiApi?;
    private taskType;
    constructor({ googleApiKey, model, taskType, }: {
        googleApiKey: string;
        model?: string;
        taskType?: string;
    });
    private loadClient;
    generate(texts: string[]): Promise<any>;
    /** @ignore */
    static import(): Promise<{
        googleGenAi: typeof _google_generative_ai;
    }>;
}

declare class OllamaEmbeddingFunction implements IEmbeddingFunction {
    private readonly url?;
    private readonly model;
    private ollamaClient;
    constructor({ url, model, }?: {
        url?: string;
        model?: string;
    });
    private initClient;
    /** @ignore */
    static import(): Promise<{
        ollama: typeof ollama;
    }>;
    generate(texts: string[]): Promise<any>;
}

/**
 * This is a generic Chroma error.
 */
declare class ChromaError extends Error {
    readonly cause?: unknown | undefined;
    constructor(name: string, message: string, cause?: unknown | undefined);
}
/**
 * Indicates that there was a problem with the connection to the Chroma server (e.g. the server is down or the client is not connected to the internet)
 */
declare class ChromaConnectionError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
/** Indicates that the server encountered an error while handling the request. */
declare class ChromaServerError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
/** Indicate that there was an issue with the request that the client made. */
declare class ChromaClientError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
/** The request lacked valid authentication. */
declare class ChromaUnauthorizedError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
/** The user does not have permission to access the requested resource. */
declare class ChromaForbiddenError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare class ChromaNotFoundError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare class ChromaValueError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare class InvalidCollectionError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare class InvalidArgumentError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare class ChromaUniqueError extends Error {
    readonly cause?: unknown | undefined;
    name: string;
    constructor(message: string, cause?: unknown | undefined);
}
declare function createErrorByType(type: string, message: string): InvalidCollectionError | InvalidArgumentError | undefined;

export { AddRecordsParams, AdminClient, ChromaClient, ChromaClientError, ChromaClientParams, ChromaConnectionError, ChromaError, ChromaForbiddenError, ChromaNotFoundError, ChromaServerError, ChromaUnauthorizedError, ChromaUniqueError, ChromaValueError, CloudClient, CohereEmbeddingFunction, Collection, CollectionMetadata, CollectionParams, CreateCollectionParams, DefaultEmbeddingFunction, DeleteCollectionParams, DeleteParams, Document, Documents, Embedding, Embeddings, GetCollectionParams, GetOrCreateCollectionParams, GetParams, GetResponse, GoogleGenerativeAiEmbeddingFunction, HuggingFaceEmbeddingServerFunction, ID, IDs, IEmbeddingFunction, IncludeEnum, InvalidArgumentError, InvalidCollectionError, JinaEmbeddingFunction, ListCollectionsParams, Metadata, Metadatas, ModifyCollectionParams, OllamaEmbeddingFunction, OpenAIEmbeddingFunction, PeekParams, QueryRecordsParams, QueryResponse, TransformersEmbeddingFunction, UpdateRecordsParams, UpsertRecordsParams, Where, WhereDocument, createErrorByType };
