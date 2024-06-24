'use client'

import AcroolTable, {ITableProps, TBodyDataFieldKey,TBodyDataID} from '@acrool/react-table';


type TValue = string|number
export interface IXProps<I extends TBodyDataID, K extends TBodyDataFieldKey> extends ITableProps<I, K> {

}

/**
 * Table
 */
const Table = <I extends TBodyDataID, K extends TBodyDataFieldKey>(props: IXProps<I, K>) => {

    return <AcroolTable
        isDark
        gap="15px"
        bodyLineHeight="50px"
        renderFetching={'loading...'}
        {...props}
    />;
};

export default Table;


