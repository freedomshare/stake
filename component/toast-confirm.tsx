import {
    Box,
    Button,
    createStandaloneToast,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MButton } from "./button";

interface IStakeModalProps {
    tx?: string;
    // success?: boolean;
}
const successText = "Successfully joined the xx access staking pool.";
const failText =
    "The contract interaction is abnormal and the stake has failed. Please try again.";
export function BasicUsage(p: IStakeModalProps) {
    const { tx } = p;
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent
                    bg={"#333433"}
                    minWidth={"453px"}
                    minHeight={"158px"}
                    pt={"33px"}
                    pb={"26px"}
                >
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Box>
                            <Text
                                color={"white"}
                                fontSize={"16px"}
                                fontWeight={"bold"}
                            >
                                {tx ? successText : failText}
                            </Text>
                        </Box>
                        <Center>
                            <MButton
                                variant={"outline"}
                                mScheme={"white"}
                                onClick={onClose}
                            >
                                Close
                            </MButton>
                            <MButton
                                as={"a"}
                                variant={"outline"}
                                mScheme={"yellow"}
                            >
                                View TX
                            </MButton>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
