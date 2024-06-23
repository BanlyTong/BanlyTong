import { classNames } from "../../../utils/style";

interface IProps {
  active?: boolean;
  disabled?: boolean;
  name: string;
  onClick?: () => void;
}
export function NavbarItem(props: IProps) {
  const { active = false, disabled = false, name, onClick } = props;

  return (
    <h6
      className={classNames(
        disabled ? "cursor-not-allowed text-slate-400" : "cursor-pointer",
        active && "text-yellow-600"
      )}
      onClick={disabled ? null : onClick}
    >
      {name}
    </h6>
  );
}
