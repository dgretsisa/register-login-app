export interface RepositoryInterface {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    showById: (id: string) => Promise<any>;
    putById: (id: string, resource: any) => Promise<any>;
    patchById: (id: string, resource: any) => Promise<any>;
    deleteById: (id: string) => Promise<any>;
}