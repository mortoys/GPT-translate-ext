import { useEffect, useState } from 'react';
import getTranslate from './getTranslate';

type TranslationOverlayProps = {
  text: string;
  position: {
    x: number;
    y: number;
  };
  onClose: () => void;
};

const TranslationOverlay: React.FC<TranslationOverlayProps> = ({ text, position, onClose }) => {
  const [translatedText, setTranslatedText] = useState<string>('');

  useEffect(() => {
    getTranslate(text, setTranslatedText);
  }, [text]);

  if (!text) return null;

  return (
    <div
      className="overlay"
      style={{
        left: `${position.x - 30}px`,
        top: `${position.y + 10}px`,
      }}>
      {!translatedText ? <p>Loading translation...</p> : <p>{translatedText}</p>}
      <button onClick={onClose}>关闭</button>
    </div>
  );
};

export default TranslationOverlay;
