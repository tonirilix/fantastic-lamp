import React from 'react';

export type Props<T> = {
  columns: string[];
  data: T[];
  onSelectionChanged: (selectedRows: T[]) => void;
}

export default function GenericTable<T>({
  columns = [],
  data = [],
  onSelectionChanged = () => {},
}: Partial<Props<T>>) {
return <table>table</table>
};
