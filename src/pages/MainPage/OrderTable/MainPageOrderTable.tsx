import React from "react";

import "./MainPageOrderTable.css";
import { cn } from "../../../utils/bem";
import { Text } from "@consta/uikit/Text";
import { Table, TableColumn } from "@consta/uikit/Table";
import { useAtom, useAction } from "@reatom/react";
import {
  tableDataAtom,
  generateLieCoefficientAction,
  lieCoefficientAtom,
  defaultlieCoefficient,
} from "../../../modules/app/app";
import { Button } from "@consta/uikit/Button";
import Calories from "../../../svg/Calories.svg";

const cnMainPageOrderTable = cn("MainPageOrderTable");

const columns: TableColumn<{
  id: string;
  name: string;
  weight: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  kilocalories: number;
}>[] = [
  {
    title: "Блюдо заказа",
    accessor: "name",
  },
  {
    title: "Вес, гр",
    accessor: "weight",
    align: "center",
  },
  {
    title: "Белки, гр",
    accessor: "proteins",
    align: "center",
  },
  {
    title: "Жиры, гр",
    accessor: "fats",
    align: "center",
  },
  {
    title: "Углеводы, гр",
    accessor: "carbohydrates",
    align: "center",
  },
  {
    title: "Ккал, гр",
    accessor: "kilocalories",
    align: "center",
  },
];

export const MainPageOrderTable: React.FC = () => {
  const tableData = useAtom(tableDataAtom);
  const lieCoefficient = useAtom(lieCoefficientAtom);
  const handleButton = useAction(generateLieCoefficientAction);

  return (
    <div className={cnMainPageOrderTable()}>
      <Text className={cnMainPageOrderTable("Title")} size="3xl">
        Считаешь калории?
      </Text>
      <div className={cnMainPageOrderTable("Board")}>
        <div className={cnMainPageOrderTable("TableWrapper")}>
          <Table
            className={cnMainPageOrderTable("Table")}
            columns={columns}
            rows={tableData}
            zebraStriped="odd"
            emptyRowsPlaceholder={<Text size="s">Ничего не выбранно</Text>}
          />
          {lieCoefficient === defaultlieCoefficient && tableData.length > 0 && (
            <div className={cnMainPageOrderTable("ButtonWrapper")}>
              <Button
                label="А теперь по-честному"
                view="secondary"
                onClick={handleButton}
              />
            </div>
          )}
        </div>
        <Calories className={cnMainPageOrderTable("Image")} />
      </div>
    </div>
  );
};
