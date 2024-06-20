import ActionConfirm from "./ActionConfirm";
import ActionMintStages from "./ActionMintStages";
import ActionTiers from "./ActionTiers";

export default function Action({ theme }: { theme: string }) {
  return (
    <div className="mint-action">
      <ActionMintStages />
      <ActionTiers />
      <ActionConfirm theme={theme} />
    </div>
  );
}
