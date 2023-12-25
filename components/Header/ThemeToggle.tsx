'use client';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';
import { IoIosMoon } from 'react-icons/io';
import { PiSunDimFill } from 'react-icons/pi';

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Switch
      defaultSelected={currentTheme === 'dark'}
      size="lg"
      color="default"
      onChange={() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }}
      startContent={<IoIosMoon color="rgb(245 245 244)" />}
      endContent={<PiSunDimFill color="#1a1b1e" />}
      classNames={{
        wrapper: 'mr-0 bg-stone-100 group-data-[selected=true]:bg-stone-800',
        thumb: 'shadow-none',
      }}
    />
  );
}
