
export interface IEntityService<TMODEL, TENTITY> {
    get(id: number): Promise<Array<TMODEL>>;
    create(toCreate: TMODEL): Promise<TMODEL>;
    update(toUpdate: TMODEL): Promise<TMODEL>;
    delete(toDelete: TMODEL): Promise<void>;
    entityToModel(entity: TENTITY): TMODEL;
}