import React, { useState } from 'react';
import { db } from './index';

function ShortenLink() {
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLinkRef = db.collection('links').doc();
    newLinkRef.set({ longLink: longLink, shortLink: newLinkRef.id });
    setShortLink(`http://127.0.0.1:5743/${newLinkRef.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="longLink">Long Link</label>
      <input type="text" id="longLink" value={longLink} onChange={(e) => setLongLink(e.target.value)} />
      <button type="submit">Shorten Link</button>
      {shortLink && <p>Short Link: <a href={shortLink} target="_blank" rel="noreferrer">{shortLink}</a></p>}
    </form>
  );
}

export default ShortenLink;