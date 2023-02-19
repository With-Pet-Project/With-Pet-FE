import { useState, useEffect, useRef } from 'react';

export function useControlRef() {
  const targetRef = useRef(null);
  const [open, setOpen] = useState(false);

  const isOpen = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && targetRef.current && !targetRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return { open, isOpen, targetRef };
}
