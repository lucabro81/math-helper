export declare class AbsBaseChain {
    protected curr_value: any;
    /**
     *
     * @param curr_value
     * @returns {GeneralChain}
     */
    /**
     *
     * @param class_ref
     * @param curr_value
     * @returns {TrigonometryChain|GeneralChain|GeometryChain}
     */
    chainWith<T extends any, O extends any>(class_ref: T, curr_value?: any): O;
    /**
     *
     * @param class_ref
     * @returns {T}
     */
    switchTo<T>(class_ref: T): T;
    /**
     *
     * @param curr_value
     * @returns {TrigonometryChain}
     */
    /**
     *
     * @returns {any}
     */
    done(): any;
}
