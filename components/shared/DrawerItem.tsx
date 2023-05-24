import React, { FC } from "react";
import { Drawer } from "antd";
import CheckBoxItem from "./CheckBoxItem";

import Styles from "@/styles/scss/common/DrawerItem.module.scss";

interface Props {
  onClose(): void;
  open?: boolean;
  sortInputs: any;
  setSortInputs: any;
}

const DrawerItem: FC<Props> = ({
  onClose = () => {},
  open = false,
  sortInputs,
  setSortInputs,
}) => {
  return (
    <Drawer
      headerStyle={{ display: "none" }}
      placement={"bottom"}
      width={500}
      onClose={onClose}
      open={open}
      height={240}
    >
      <div>
        <div>
          <p className={Styles.title}>مرتب سازی بر اساس</p>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <CheckBoxItem
            onClick={() =>
              setSortInputs(() => {
                return { newest: false, rate: true, view: false };
              })
            }
            checked={sortInputs.rate}
            label="بیشترین امتیاز"
          />
          <CheckBoxItem
            onClick={() =>
              setSortInputs(() => {
                return { newest: false, rate: false, view: true };
              })
            }
            checked={sortInputs.view}
            label="بیشترین بازدید"
          />
          <CheckBoxItem
            onClick={() =>
              setSortInputs(() => {
                return { newest: true, rate: false, view: false };
              })
            }
            checked={sortInputs.newest}
            label="جدید ترین"
          />
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerItem;
