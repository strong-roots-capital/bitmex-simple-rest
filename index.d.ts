declare type BitmexRestOptions = {
    key: string
    secret: string
    // defaults to false
    testnet?: boolean
    // in milliseconds -- when this lib should timeout the call
    timeout?: number
    // in milliseconds -- after how many ms bitmex should refuse this call
    expiration?: number
    userAgent?: string
}

declare type RequestOptions = {
    path: string
    method: 'GET' | 'POST' | 'PUT'
    data: Record<string, unknown>
    expiration?: number
    timeout?: number
}

declare class BitmexRest {
    constructor(config: BitmexRestOptions)
    // Rejects with { statusCode: number, headers: Record<string, unknown> }
    request(props: RequestOptions): Promise<{
        headers: Record<string, unknown>
        data: Record<string, unknown>
    }>
}

export default BitmexRest
export { BitmexRestOptions, RequestOptions }
