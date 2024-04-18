import { useState, useEffect } from 'react';
import TranslationOverlay from './TranslationOverlay';

type SelectionType = {
  text: string;
  x: number;
  y: number;
} | null;

function TranslateButton() {
  const [selection, setSelection] = useState<SelectionType>(null);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [translation, setTranslation] = useState<string>('');

  useEffect(() => {
    const handleMouseUp = () => {
      const sel = window.getSelection();
      if (sel && sel.isCollapsed) {
        setSelection(null);
        setShowTranslation(false);
      } else {
        let lastRect: DOMRect | undefined;
        for (let i = 0; i < sel.rangeCount; i++) {
          const range = sel.getRangeAt(i);
          const rects = range.getClientRects();
          const lastRectInRange = rects[rects.length - 1];
          if (!lastRect || lastRectInRange.bottom > lastRect.bottom) {
            lastRect = lastRectInRange;
          }
        }
        if (lastRect) {
          setSelection({
            text: sel.toString(),
            x: lastRect.right + window.scrollX,
            y: lastRect.bottom + window.scrollY,
          });
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleTranslateClick = async () => {
    if (selection) {
      console.log('Translating:', selection.text);
      const translatedText = `${selection.text}`;
      setTranslation(translatedText);
      setShowTranslation(true);
    }
  };

  const handleClose = () => {
    setShowTranslation(false);
    setSelection(null);
  };

  return (
    <div>
      {selection && !showTranslation && (
        <button
          style={{
            position: 'absolute',
            left: `${selection.x - 30}px`,
            top: `${selection.y + 10}px`,
            zIndex: 1000,
          }}
          onClick={handleTranslateClick}>
          翻译
        </button>
      )}
      {selection && showTranslation && (
        <TranslationOverlay text={translation} position={{ x: selection.x, y: selection.y }} onClose={handleClose} />
      )}
    </div>
  );
}

export default TranslateButton;
