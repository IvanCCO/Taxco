'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" forcedTheme="dark">
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </NextThemesProvider>
  );
}