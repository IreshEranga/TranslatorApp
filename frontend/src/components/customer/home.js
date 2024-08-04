import React, { useState } from 'react';
import '../styles/home.css';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslate = () => {
    // Logic for translation goes here
    setOutputText(`Translated text of "${inputText}"`);
  };

  return (
    <div className="translator-container">
      <div className="language-selection">
        <button className="language-button">Sinhala</button>
        <div className="swap-icon">⇆</div>
        <button className="language-button">English</button>
      </div>
      <div className="translation-section">
        <textarea
          className="input-text"
          placeholder="Enter something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <textarea
          className="output-text"
          placeholder="Translating..."
          value={outputText}
          readOnly
        />
      </div>
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>
    </div>
  );
};

export default Translator;
