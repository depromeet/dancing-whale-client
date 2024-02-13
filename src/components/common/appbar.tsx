import clsx from "clsx";
import { ReactNode } from "react";

import { LogoSVG } from "@/assets/icons/logo";

type LeftAndContent =
  | { left: ReactNode; content?: string | ReactNode }
  | { left?: undefined; content?: never };

export const Appbar = ({
  left,
  right,
  content,
  className,
}: {
  right?: ReactNode;
  className?: string;
} & LeftAndContent) => {
  // if left is not defined, render logo
  const _left = left ? left : <LogoSVG />;
  const _content = left ? content : null;

  return (
    <div
      className={clsx(
        "flex h-64px w-full items-center justify-between px-20px py-10px",
        className,
      )}
    >
      <div className="flex-1">
        <span className="grid place-content-start">{_left}</span>
      </div>
      {_content && (
        <div
          className="flex-none"
          dangerouslySetInnerHTML={{
            __html: _content,
          }}
        />
      )}
      {right && (
        <div className="flex-1">
          <span className="grid place-content-end">{right}</span>
        </div>
      )}
    </div>
  );
};
