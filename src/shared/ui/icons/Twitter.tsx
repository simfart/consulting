import { IconProps } from "./types";

export function Telegram({
  width = 24,
  height = 24,
  className,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.04 16.91L9.42 20.19C9.89 20.19 10.09 19.98 10.33 19.75L12.07 18.12L15.28 20.47C15.87 20.8 16.3 20.63 16.46 19.91L19.39 6.13C19.63 5.22 19.05 4.81 18.49 5.04L3.47 10.87C2.58 11.22 2.59 11.74 3.34 11.96L7.09 13.06L16.12 7.58C16.55 7.32 16.94 7.47 16.6 7.75L9.04 16.91Z"
        fill={color}
      />
    </svg>
  );
}
