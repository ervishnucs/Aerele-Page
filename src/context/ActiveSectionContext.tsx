// context/ActiveSectionContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext<{
  activeSection: string;
  setActiveSection: (id: string) => void;
}>({
  activeSection: 'home',
  setActiveSection: () => {},
});

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => useContext(ActiveSectionContext);
