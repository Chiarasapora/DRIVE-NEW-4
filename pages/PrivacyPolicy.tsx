
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#080a10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Privacy <span className="text-drive-accent">Policy</span>
        </h1>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          
          <section>
            <p className="mb-4">
              In questa pagina vengono descritte le modalità di gestione del sito <strong>driveagency.it</strong> con riferimento al trattamento dei dati personali degli utenti che lo consultano. La presente informativa viene resa, anche ai sensi dell'art. 13 della D.lgs. n. 196/2003 (e successive modifiche) soltanto per il sito driveagency.it e non per altri siti web eventualmente consultati dall'utente tramite link disponibili sul presente sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">IL "TITOLARE" DEL TRATTAMENTO</h2>
            <p>
              A seguito della consultazione di questo sito possono essere trattati dati relativi a persone identificate o identificabili. Il "titolare" del loro trattamento è <strong>Teye S.r.l.</strong> Via del Conservificio, 28 – 06132 Perugia, C.F. e P. I.V.A. 03490770546.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">LUOGO DI TRATTAMENTO DEI DATI</h2>
            <p>
              Il trattamento sarà svolto in forma elettronica e manuale, con modalità e strumenti volti a garantire la massima sicurezza e riservatezza, ad opera di soggetti di ciò appositamente incaricati in ottemperanza a quanto previsto dagli artt. 31 e segg. D.Lgs 196/03. I dati personali acquisiti dai form del sito saranno archiviati presso il datacenter Microsoft Azure (Europa Settentrionale) e trattati presso la sede del Titolare solo da personale tecnico dell'Ufficio incaricato del trattamento opportunamente addestrato. Nessun dato derivante dal servizio web viene comunicato o diffuso a entità terze se non per l’espletamento di servizi o prestazioni richieste o per attività di promozione e marketing strettamente collegate a Teye s.r.l. (con i marchi di sua proprietà Drive agency, DigitalBando, Marketplace Arena).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">MODALITA' DEL TRATTAMENTO E SICUREZZA DELLE INFORMAZIONI</h2>
            <p>
              I dati personali saranno conservati per un periodo non superiore agli scopi per i quali i dati sono stati raccolti e successivamente trattati, e comunque non superiore ai 15 anni, salva la trasformazione in forma anonima. Il titolare del trattamento non ricorre a processi automatizzati, compresa la profilazione, per il raggiungimento delle finalità previste nella presente informativa. Facciamo tutto il possibile per garantire la sicurezza dei tuoi dati. Effettuiamo una serie di controlli tecnici, amministrativi e fisici per mantenere i tuoi dati riservati e sicuri. In conformità alla vigente normativa, specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati. Per qualsiasi informazione relativa alla sicurezza, contattare <a href="mailto:info@driveagency.it" className="text-drive-accent hover:underline">info@driveagency.it</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">TIPI DI DATI TRATTATI</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Dati di navigazione</h3>
              <p>
                I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente. Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento e vengono cancellati immediatamente dopo l'elaborazione. I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito: salva questa eventualità, allo stato i dati sui contatti web non persistono per più di sette giorni.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Dati forniti volontariamente dall'utente</h3>
              <p>
                L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, nonché degli eventuali altri dati personali inseriti, necessari per rispondere alle richieste. Con la registrazione alla newsletter, l’indirizzo email dell’utente viene automaticamente inserito in una lista di contatti a cui potranno essere trasmessi messaggi email contenenti informazioni, anche di natura commerciale e promozionale, sempre e solo inerenti a Teye srl.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
