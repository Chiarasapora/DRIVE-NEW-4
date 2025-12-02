
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#080a10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Cookie <span className="text-drive-accent">Policy</span>
        </h1>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          
          <section>
            <p>
              L'obiettivo della presente informativa contenente la politica sui cookie di Drive è quello di spiegarti l'uso dei cookie fatto dal nostro sito web, le loro finalità, nonché le opzioni a tua disposizione in qualità di utente per amministrarli; di conseguenza la presente informativa è suscettibile di modifiche periodiche.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">DEFINIZIONI E FUNZIONI</h2>
            <h3 className="text-xl font-bold text-white mb-3">Che cosa sono i cookie</h3>
            <p className="mb-4">
              Il cookie è un piccolo file di testo contenente una certa quantità di informazioni scambiato tra un sito internet ed il tuo terminale ed è normalmente utilizzato dal gestore del sito internet per memorizzare le informazioni necessarie a migliorare la navigazione all'interno del sito ovvero per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente nell'ambito della navigazione in rete. Quando si visita di nuovo lo stesso sito o qualunque altro sito, il dispositivo dell'utente verifica la presenza di un cookie riconosciuto, in modo da potere leggere le informazioni in esso contenute. I diversi cookie contengono informazioni diverse e sono utilizzati per scopi differenti (navigazione efficiente nelle pagine di un medesimo sito, profilazione al fine di inviare messaggi promozionali mirati, analisi sul numero delle visite al sito).
            </p>
            <p className="mb-2">Tipicamente i cookie possono essere installati:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>direttamente dal proprietario e/o responsabile del sito web (c.d. cookie di prima parte);</li>
              <li>da soggetti estranei al sito web visitato dall'utente (c.d. cookie di terza parte). Le regole relative al loro utilizzo, sia per quanto attiene alla informativa che alla eventuale acquisizione del Tuo consenso, ricadono integralmente nella responsabilità delle cd. terze parti.</li>
            </ul>
            <p>
              Questo sito web può utilizzare, anche in combinazione tra di loro, i seguenti tipi di cookie classificati in base alle indicazioni del Garante per la protezione dei dati personali e dagli Organismi Europei che si sono occupati della materia (Gruppo ex art. 29, oggi European Data Protection Board).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">COOKIE TECNICI</h2>
            <p>
              Sono i cookie, propri e di terze parti, che permettono lo svolgimento di attività strettamente legate al funzionamento del sito. Rientrano in questa categoria: i cookie di navigazione (cookie di sessione utilizzati per memorizzare le preferenze di navigazione sul sito e migliorare la stessa); i cookie di funzionalità (utilizzati per erogare specifici servizi del sito); i cookie analitici (che rientrano nella categoria dei cookie tecnici, laddove gli stessi raccolgono, in forma anonima e aggregata, informazioni statistiche sulle modalità di navigazione degli utenti (ad esempio, numero di pagine visitate e di accessi, tempo di permanenza nel sito).
            </p>
            <p className="mt-4">
              L'utilizzo di queste tipologie di cookie non richiede l'acquisizione del consenso dell'utente, il quale può comunque decidere di disabilitarne l'utilizzo sul proprio browser (come illustrato al paragrafo successivo). In tal caso, alcune funzionalità del sito potrebbero non essere utilizzabili.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">AUTORIZZAZIONE, REVOCA e CANCELLAZIONE DEI COOKIE</h2>
            <p className="mb-4">
              Quando navighi per la prima volta sul nostro sito web, vieni informato dell'utilizzo dei cookie, della possibilità di accertarne l'installazione o di rifiutare l'installazione di alcuni tipi di cookie, per esempio, cookie di analisi, di pubblicità e di terzi. Potrai comunque e in qualsiasi momento accettare, bloccare o eliminare i cookie installati sul tuo terminale (sia di prime sia di terze parti) configurando le opzioni del browser installato sul tuo terminale o dalle opzioni di privacy del terminale da cui effettui la visita. Se opti per bloccare l'installazione dei cookie nel tuo browser, potresti non essere in grado di accedere a nessuna delle sezioni del nostro sito web.
            </p>
            <p className="mb-4">
              Ogni browser dispone di impostazioni diverse per la disattivazione dei cookie; di seguito proponiamo i collegamenti alle istruzioni per i browser più comuni:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-drive-accent hover:underline">Microsoft Internet Explorer</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="text-drive-accent hover:underline">Google Chrome</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-drive-accent hover:underline">Apple Safari</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-drive-accent hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-drive-accent hover:underline">Opera</a></li>
            </ul>
            <p>
              Per ulteriori informazioni o richieste scrivere a <a href="mailto:info@driveagency.it" className="text-drive-accent hover:underline">info@driveagency.it</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
