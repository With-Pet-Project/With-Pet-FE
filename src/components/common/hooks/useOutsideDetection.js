import { useState, useEffect, useRef } from 'react';

export function useOutsideDetection() {
  const targetRef = useRef(null);
  const [open, setOpen] = useState(false);

  const isOpen = () => setOpen(!open);

  const openContent = () => setOpen(true);
  const closeContent = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && !targetRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return { open, isOpen, openContent, closeContent, targetRef };
}
