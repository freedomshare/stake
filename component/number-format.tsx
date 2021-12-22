import React from "react";
import NumberFormat from "react-number-format";

export const MNumberFormat = ({ value }: { value: number | string }) => (
    <NumberFormat
        thousandsGroupStyle="thousand"
        value={value}
        decimalSeparator="."
        displayType="text"
        type="text"
        thousandSeparator={true}
        allowNegative={true}
        decimalScale={2}
    />
);
