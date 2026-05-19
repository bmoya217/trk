"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { value: "light", label: "Alliance" },
  { value: "dark", label: "Horde" },
  { value: "tremens", label: "Tremens" },
];

type IconProps = {
  mounted: boolean;
  theme?: string;
};

const Icon = ({ mounted, theme }: IconProps) => {
  if (!mounted) return <div className="h-[18px] w-[18px]" />;

  if (theme === "dark") {
    return <Moon size={18} />;
  }

  return <Sun size={18} />;
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Icon mounted={mounted} theme={theme} />

      {mounted && (
        <select
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
          className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
        >
          {themes.map((themeOption) => (
            <option key={themeOption.value} value={themeOption.value}>
              {themeOption.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
