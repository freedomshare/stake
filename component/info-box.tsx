import {
  Text,
  FlexProps,
  TooltipProps,
  Flex,
  Square,
  Tooltip,
  Center,
  Box,
  TypographyProps,
} from "@chakra-ui/react";
import Image from "next/image";

interface IBoxInfoProps extends FlexProps {
  icon?: string;
  title: string;
  value: string | number;
  unit?: string;
  info?: string;
  valueFontSize?: number;
  placement?: TooltipProps["placement"];
}

export const BoxInfo = ({
  icon,
  title,
  value,
  unit,
  info,
  valueFontSize = 16,
  placement,
  ...otherProps
}: IBoxInfoProps) => {
  return (
    <Flex
      align={"center"}
      bg={"#154F4F"}
      padding={"15px 18px"}
      rounded={"10px"}
      width={290}
      {...otherProps}
    >
      {icon && (
        <Square size={"34"} position={"relative"}>
          <Image src={icon} layout={"fill"} alt="meld earned" />
        </Square>
      )}

      <Flex flexDirection={"column"}>
        <Text
          color="white"
          fontSize={12}
          fontWeight={"bold"}
          textColor={"#537E7E"}
        >
          {title}
          {info && (
            <Tooltip
              placement={placement}
              label={
                <Center minWidth={"323px"} minHeight={"72px"}>
                  {info}
                </Center>
              }
              hasArrow
              bg={"#282c2b"}
              color={"white"}
              rounded={"10px"}
            >
              <Box as={"span"} position={"relative"} left={"2px"} top={"2px"}>
                <Image
                  src={"/images/xiangqing_icon@2x.png"}
                  width={12}
                  height={12}
                  alt={info}
                />
              </Box>
            </Tooltip>
          )}
        </Text>
        <Text color="white" fontSize={valueFontSize} fontWeight={"bold"}>
          {value}
          <Text
            hidden={!unit}
            as="span"
            color="white"
            fontSize={valueFontSize}
            fontWeight={"bold"}
            textColor={"#537E7E"}
          >
            /{unit}
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};
interface IUnitTextProps {
  text: React.ReactNode;
  unit?: React.ReactNode;
  textSize?: TypographyProps["fontSize"];
  unitTextSize?: TypographyProps["fontSize"];
}
export const UnitText = (p: IUnitTextProps) => {
  const { text, unit, textSize, unitTextSize } = p;
  return (
    <Text textColor="white" fontSize={textSize} fontWeight={"bold"}>
      {text}
      <Text
        hidden={!unit}
        as="span"
        fontSize={unitTextSize}
        fontWeight={"bold"}
        textColor={"#537E7E"}
      >
        /{unit}
      </Text>
    </Text>
  );
};
