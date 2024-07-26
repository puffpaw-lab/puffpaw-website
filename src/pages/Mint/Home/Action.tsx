import ActionConfirm from "./ActionConfirm";
import ActionMintStages from "./ActionMintStages";
import ActionTiers from "./ActionTiers";
import ActionModal from "./ActionModal";
import { useBoolean } from "ahooks";

export default function Action() {
    const [open, setOpen] = useBoolean(false);

    return (
        <div className="mint-action">
            <ActionMintStages />
            <ActionTiers />
            <ActionConfirm />
            <ActionModal open={open} onCancel={setOpen.setFalse} />
        </div>
    );
}
