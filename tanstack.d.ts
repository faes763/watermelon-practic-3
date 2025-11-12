import '@tanstack/react-query'

type QueryKey = ['cities', ...ReadonlyArray<unknown>]

declare module '@tanstack/react-query' {
    interface Register {
        queryKey: QueryKey
        mutationKey: QueryKey
    }
}