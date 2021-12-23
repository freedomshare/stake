import {
    Box,
    Modal,
    ModalBody,
    ModalContent,
    Text,
    HStack,
    Flex,
} from "@chakra-ui/react";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { networkName, txUrlMap } from "../store/constant";
import { MButton } from "./button";

const successText = "Successfully joined the access staking pool.";
const failText =
    "The contract interaction is abnormal and the stake has failed. Please try again.";

export const isStakeModalOpenAtom = atom(false);
export const isSuccessStakedAtom = atom(false);
export const activeTXAtom = atom<string>("");

export const setCurrentStakeTx = (s: string) => {
    activeTXAtom.set(s);
};

export const stakeSuccess = () => {
    isSuccessStakedAtom.set(true);
};

const resetStakeStatus = () => {
    isSuccessStakedAtom.set(false);
};

export const openStakeModal = () => {
    isStakeModalOpenAtom.set(true);
};
export const closeStakeModal = () => {
    isStakeModalOpenAtom.set(false);
    resetStakeStatus();
    setCurrentStakeTx("");
};

export const stakeSuccessFn = (tx: string) => {
    stakeSuccess();
    setCurrentStakeTx(tx);
    openStakeModal();
};

export const stakeFailFn = () => {
    resetStakeStatus();
    openStakeModal();
};

export function StakeModal() {
    const isOpen = useStore(isStakeModalOpenAtom);
    const isSuccessStaked = useStore(isSuccessStakedAtom);
    const tx = useStore(activeTXAtom);
    const viewTX = () => {
        closeStakeModal();
        window.open(`${txUrlMap[networkName!]}/${tx}`, "_blank");
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={closeStakeModal} isCentered>
                {/* <ModalOverlay /> */}
                <ModalContent
                    bg={"#333433"}
                    minWidth={"453px"}
                    minHeight={"158px"}
                    pt={"33px"}
                    pb={"26px"}
                    px={"38px"}
                >
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    {/* <ModalCloseButton /> */}
                    <ModalBody
                        as={Flex}
                        flexDirection={"column"}
                        padding={0}
                        height={"100%"}
                    >
                        <Box>
                            <Text
                                color={"white"}
                                fontSize={"16px"}
                                fontWeight={"bold"}
                            >
                                {isSuccessStaked ? successText : failText}
                            </Text>
                        </Box>
                        <HStack
                            mt={"auto"}
                            spacing={"40px"}
                            justifyContent={"center"}
                        >
                            <MButton
                                variant={"outline"}
                                mScheme={"close"}
                                onClick={closeStakeModal}
                            >
                                Close
                            </MButton>
                            <MButton
                                hidden={!isSuccessStaked}
                                variant={"outline"}
                                mScheme={"yellow"}
                                onClick={viewTX}
                            >
                                View TX
                            </MButton>
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
