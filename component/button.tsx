import React from "react";
import { Button } from "@chakra-ui/react";

import type { ButtonProps, ColorProps } from "@chakra-ui/react";

const yellowColor = "#F5C52A";
const transparentColor = "transparent";
const whiteContrast = "#4A7A7A";

export const colorSchemeList = {
    yellow: {
        color: yellowColor,
        borderColor: yellowColor,
        _hover: {
            backgroundColor: yellowColor,
            color: "#FFFFFF",
        },
        _selected: {
            backgroundColor: yellowColor,
            color: "#FFFFFF",
        },
        _disabled: {
            border: "none!important",
            backgroundColor: "rgba(255, 255, 255, .05)!important",
            color: "rgba(255, 255, 255, .2)!important",
            cursor: "not-allowed",
        },
    },
    white: {
        color: "#FFFFFF",
        borderColor: "#4A7A7A",
        _hover: {
            backgroundColor: whiteContrast,
            color: "#FFFFFF",
        },
        _selected: {
            backgroundColor: whiteContrast,
            color: "#FFFFFF",
        },
        _disabled: {
            border: "none!important",
            backgroundColor: "rgba(255, 255, 255, .05)!important",
            color: "rgba(255, 255, 255, .2)!important",
            cursor: "not-allowed",
        },
    },
};

type Props = ButtonProps & {
    mScheme: "yellow" | "white";
};

export const MButton = (props: Props) => {
    return (
        <Button
            {...props}
            {...{
                ...(props.mScheme &&
                props.variant === "outline" &&
                colorSchemeList[props.mScheme]
                    ? colorSchemeList[props.mScheme]
                    : {}),
                width: props.width || 124,
                height: props.height || 30,
                rounded: props.rounded || "8px",
                fontSize: props.fontSize || "14px",
            }}
        />
    );
};
