import React from "react";
import { Button } from "antd";

import CheckFalse from "@/public/assets/images/svgs/check-false.svg";
import CheckTrue from "@/public/assets/images/svgs/check-true.svg";

import Styles from "@/styles/scss/common/CheckBoxItem.module.scss";

const CheckBoxItem = ({ label = "", checked = false, onClick = () => {} }) => {
  return (
    <div className="flex gap-5">
      <div>
        <Button onClick={onClick} className={Styles.button}>
          {checked ? <CheckTrue /> : <CheckFalse />}
        </Button>
      </div>
      <div>
        <p className={Styles.title}>{label}</p>
      </div>
    </div>
  );
};

export default CheckBoxItem;
