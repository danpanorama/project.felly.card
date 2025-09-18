import React from 'react';
import '../../css/Home.css';

export default function ShareButton() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MyApp',
        text: 'Check out this page!',
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      alert('שיתוף לא נתמך בדפדפן שלך');
    }
  }

  return (
    <button className="share-button" onClick={handleShare}>
      שתף את הדף
    </button>
  );
}
