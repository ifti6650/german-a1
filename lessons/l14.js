// Lektion 14 · "Vor dem Kaufhaus nach rechts." (Momente A1.2, Modul 5)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 15.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 14, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const art = (id, prompt, a, ex, opts) => q({ id, topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'mc', objective: 'L14-O1', instructions: 'Choose the dative article.', prompt, options: opts || ['dem', 'der', 'den', 'das'], answer: a, explanation: ex, learnHref: GB + '15' });
  const wo = (id, prompt, a, ex) => q({ id, topic: 'wo-dative', skill: 'grammar', grammar: 'two-way-prepositions-dative', type: 'gap', objective: 'L14-O3', instructions: 'Fill in the dative article.', prompt, answer: a, explanation: ex, learnHref: GB + '15' });
  const short = (id, prompt, a, ex, opts) => q({ id, topic: 'short-forms', skill: 'grammar', grammar: 'preposition-contractions', type: 'mc', objective: 'L14-O4', instructions: 'Choose the short form.', prompt, options: opts || ['zum', 'zur', 'im', 'am'], answer: a, explanation: ex, learnHref: GB + '15' });

  const objectives = [
    { id: 'L14-O1', text: 'Use the dative articles dem / der / den (+ -n) and einem / einer / keinem / keiner.', kind: 'grammar' },
    { id: 'L14-O2', text: 'Use the dative prepositions aus, bei, mit, nach, seit, von, zu (+ gegenüber).', kind: 'grammar' },
    { id: 'L14-O3', text: 'Say where something is: in, an, auf, vor, hinter, neben, zwischen, unter, über + dative.', kind: 'grammar' },
    { id: 'L14-O4', text: 'Use the short forms am, im, zum, zur, vom, beim.', kind: 'grammar' },
    { id: 'L14-O5', text: 'Ask for directions and give simple directions.', kind: 'communication' }
  ];

  const learn = [
    { id: 'articles', title: 'The dative articles', objective: 'L14-O1', href: GB + '15',
      text: 'Memory trick: dative masculine and neuter end in -m, feminine in -r, plural in -n. In the plural the noun also adds -n (unless it already ends in -n or -s).',
      table: [['der Bus → mit dem Bus', 'masculine: dem / einem / keinem'], ['das Kino → vor dem Kino', 'neuter: dem / einem / keinem'], ['die Post → neben der Post', 'feminine: der / einer / keiner'], ['die Kinder → mit den Kindern', 'plural: den + noun -n'], ['die Autos → mit den Autos', 'plural in -s: no extra -n']],
      mistakes: [['Ich fahre mit der Zug.', 'Ich fahre mit dem Zug.', 'der Zug is masculine → dem.'], ['mit den Kinder', 'mit den Kindern', 'Dative plural: noun + -n.']] },
    { id: 'always-dative', title: 'Prepositions that always take the dative', objective: 'L14-O2', href: GB + '15',
      text: 'aus – bei – mit – nach – seit – von – zu always take the dative. gegenüber (von) does too.',
      table: [['aus', 'Er kommt aus der Schweiz.'], ['bei', 'Sie arbeitet bei einer Bank.'], ['mit', 'Wir fahren mit dem Rad.'], ['seit', 'Ich wohne seit einem Monat hier.'], ['von', 'Die Karte ist von meinem Bruder.'], ['zu', 'Ich gehe zum Arzt.'], ['gegenüber von', 'Das Café ist gegenüber vom Rathaus.']] },
    { id: 'wo', title: 'Wo? → preposition + dative', objective: 'L14-O3', href: GB + '15',
      text: 'When you say where something is (no movement), in, an, auf, vor, hinter, neben, zwischen, unter and über take the dative.',
      table: [['vor dem Kaufhaus', 'in front of the department store'], ['hinter der Kirche', 'behind the church'], ['neben dem Hotel', 'next to the hotel'], ['zwischen der Bank und dem Café', 'between the bank and the café'], ['auf dem Tisch · unter dem Stuhl', 'on the table · under the chair']] },
    { id: 'short', title: 'Short forms', objective: 'L14-O4', href: GB + '15',
      table: [['an dem → am', 'am Bahnhof'], ['in dem → im', 'im Park'], ['zu dem → zum', 'zum Rathaus'], ['zu der → zur', 'zur Bank'], ['von dem → vom', 'vom Markt'], ['bei dem → beim', 'beim Bäcker']],
      mistakes: [['Ich gehe zu der Post.', 'Ich gehe zur Post.', 'Use the short form: zur.']] },
    { id: 'directions', title: 'Asking for and giving directions', objective: 'L14-O5', href: GB + '15',
      table: [['Entschuldigung, wie komme ich zum Bahnhof?', 'Excuse me, how do I get to the station?'], ['Gibt es hier in der Nähe eine Apotheke?', 'Is there a pharmacy nearby?'], ['Gehen Sie geradeaus.', 'Go straight on.'], ['An der Ampel nach links / nach rechts.', 'Left / right at the traffic lights.'], ['Nehmen Sie die erste Straße rechts.', 'Take the first street on the right.'], ['Tut mir leid, ich bin nicht von hier.', 'Sorry, I’m not from here.']] }
  ];

  const practice = [
    art('L14-P-01', 'Ich fahre mit … Bus. (der Bus)', 'dem', 'der → dem (dative masculine).'),
    art('L14-P-02', 'Die Bank ist neben … Post. (die Post)', 'der', 'die → der (dative feminine).'),
    art('L14-P-03', 'Ich warte vor … Kino. (das Kino)', 'dem', 'das → dem (dative neuter).'),
    q({ id: 'L14-P-04', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'gap', objective: 'L14-O1', instructions: 'Fill in the gaps (dative plural).', prompt: 'Ich spiele mit ___ ___. (die Kinder)', answer: [['den'], ['Kindern']], explanation: 'mit den Kindern: den + noun -n.', learnHref: GB + '15' }),
    q({ id: 'L14-P-05', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'mc', objective: 'L14-O1', instructions: 'Choose the dative article.', prompt: 'Sie arbeitet bei … Firma. (eine Firma)', options: ['einer', 'einem', 'eine', 'einen'], answer: 'einer', explanation: 'eine → einer (dative feminine).' }),
    q({ id: 'L14-P-06', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'mc', objective: 'L14-O1', instructions: 'Choose the dative article.', prompt: 'Ich wohne seit … Jahr hier. (ein Jahr)', options: ['einem', 'einer', 'ein', 'einen'], answer: 'einem', explanation: 'ein (neuter) → einem.' }),
    q({ id: 'L14-P-07', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'mc', objective: 'L14-O2', instructions: 'Choose the preposition.', prompt: 'Sie kommt … der Türkei.', options: ['aus', 'von', 'nach', 'zu'], answer: 'aus', explanation: 'aus = from (origin).', learnHref: GB + '15' }),
    q({ id: 'L14-P-08', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'mc', objective: 'L14-O2', instructions: 'Choose the preposition.', prompt: 'Ich wohne noch … meinen Eltern.', options: ['bei', 'mit', 'zu', 'aus'], answer: 'bei', explanation: 'bei = at someone’s place.' }),
    q({ id: 'L14-P-09', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'mc', objective: 'L14-O2', instructions: 'Choose the preposition.', prompt: 'Das Geschenk ist … meiner Oma.', options: ['von', 'aus', 'bei', 'seit'], answer: 'von', explanation: 'von = from (a person).' }),
    q({ id: 'L14-P-10', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'match', objective: 'L14-O2', instructions: 'Match.', prompt: '', pairs: [['aus', 'from (origin)'], ['bei', 'at (someone’s place)'], ['mit', 'with / by'], ['seit', 'since / for'], ['zu', 'to (a person / building)']], explanation: 'aus-bei-mit-nach-seit-von-zu.' }),
    wo('L14-P-11', 'Das Café ist zwischen ___ Bank und ___ Hotel.', [['der'], ['dem']], 'die Bank → der, das Hotel → dem.'),
    wo('L14-P-12', 'Der Park ist hinter ___ Museum.', [['dem']], 'das Museum → dem.'),
    wo('L14-P-13', 'Das Buch liegt auf ___ Tisch.', [['dem']], 'der Tisch → dem.'),
    q({ id: 'L14-P-14', topic: 'wo-dative', skill: 'grammar', grammar: 'two-way-prepositions-dative', type: 'mc', objective: 'L14-O3', instructions: 'Choose the preposition.', prompt: 'Die Katze ist … dem Stuhl. (under)', options: ['unter', 'über', 'auf', 'vor'], answer: 'unter', explanation: 'unter = under.' }),
    q({ id: 'L14-P-15', topic: 'wo-dative', skill: 'vocabulary', type: 'match', objective: 'L14-O3', instructions: 'Match the prepositions.', prompt: '', pairs: [['vor', 'in front of'], ['hinter', 'behind'], ['neben', 'next to'], ['zwischen', 'between'], ['über', 'above']], explanation: 'Prepositions of place.', learnHref: GB + '15' }),
    short('L14-P-16', 'Wie komme ich … Bahnhof?', 'zum', 'zu dem → zum (der Bahnhof).'),
    short('L14-P-17', 'Ich gehe … Post.', 'zur', 'zu der → zur (die Post).'),
    short('L14-P-18', 'Wir treffen uns … Bahnhof. (an dem)', 'am', 'an dem → am.', ['am', 'im', 'zum', 'vom']),
    q({ id: 'L14-P-19', topic: 'short-forms', skill: 'grammar', grammar: 'preposition-contractions', type: 'gap', objective: 'L14-O4', instructions: 'Write the short form.', prompt: 'Die Kinder spielen ___ Park. (in dem)', answer: [['im']], explanation: 'in dem → im.' }),
    q({ id: 'L14-P-20', topic: 'short-forms', skill: 'grammar', grammar: 'preposition-contractions', type: 'gap', objective: 'L14-O4', instructions: 'Write the short form.', prompt: 'Ich war gestern ___ Arzt. (bei dem)', answer: [['beim']], explanation: 'bei dem → beim.' }),
    q({ id: 'L14-P-21', topic: 'directions', skill: 'vocabulary', type: 'match', objective: 'L14-O5', instructions: 'Match the directions.', prompt: '', pairs: [['geradeaus', 'straight on'], ['nach links', 'to the left'], ['die Ampel', 'traffic lights'], ['die Kreuzung', 'crossroads'], ['in der Nähe', 'nearby']], explanation: 'Directions.', learnHref: GB + '15' }),
    q({ id: 'L14-P-22', topic: 'directions', skill: 'grammar', grammar: 'directions', type: 'order', objective: 'L14-O5', instructions: 'Put the words in order.', prompt: 'Go straight on and left at the traffic lights.', tokens: ['Gehen', 'Sie', 'geradeaus', 'und', 'an', 'der', 'Ampel', 'links'], answer: 'Gehen Sie geradeaus und an der Ampel links', explanation: 'Gehen Sie … (polite instruction).' }),
    q({ id: 'L14-P-23', topic: 'directions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L14-O5', instructions: 'Write it in German.', prompt: 'Excuse me, how do I get to the town hall?', answer: 'Entschuldigung, wie komme ich zum Rathaus?', explanation: 'zu dem Rathaus → zum Rathaus.' }),
    q({ id: 'L14-P-24', topic: 'always-dative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L14-O2', instructions: 'Write it in German.', prompt: 'I go to work by train. (der Zug)', answer: 'Ich fahre mit dem Zug zur Arbeit.', accept: ['Ich fahre zur Arbeit mit dem Zug.'], explanation: 'mit dem Zug · zur Arbeit.' }),
    q({ id: 'L14-P-25', topic: 'wo-dative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L14-O3', instructions: 'Write it in German.', prompt: 'The pharmacy is next to the supermarket.', answer: 'Die Apotheke ist neben dem Supermarkt.', explanation: 'neben + dem (der Supermarkt).' }),
    q({ id: 'L14-P-26', topic: 'directions', skill: 'listening', type: 'listen', objective: 'L14-O5', instructions: 'Listen and answer.', prompt: 'Where should you turn right?', audio: 'Gehen Sie hier geradeaus und an der Kreuzung nach rechts.', options: ['at the crossroads', 'at the traffic lights', 'at the church', 'at the station'], answer: 'at the crossroads', explanation: 'an der Kreuzung nach rechts.' }),
    q({ id: 'L14-P-27', topic: 'wo-dative', skill: 'listening', type: 'listen', objective: 'L14-O3', instructions: 'Listen and answer.', prompt: 'Where is the bakery?', audio: 'Die Bäckerei ist gegenüber vom Bahnhof, neben dem Blumenladen.', options: ['opposite the station', 'behind the station', 'in the station', 'next to the bank'], answer: 'opposite the station', explanation: 'gegenüber vom Bahnhof.' }),
    q({ id: 'L14-P-28', topic: 'directions', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L14-O5', instructions: 'Listen and write.', prompt: '', audio: 'Nehmen Sie die zweite Straße links.', answer: 'Nehmen Sie die zweite Straße links.', explanation: 'Nehmen Sie … (take).' }),
    q({ id: 'L14-P-29', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'mc', objective: 'L14-O1', instructions: 'Choose the correct phrase.', prompt: 'with the cars', options: ['mit den Autos', 'mit den Autosn', 'mit dem Autos', 'mit der Autos'], answer: 'mit den Autos', explanation: 'Plural in -s: no extra -n.' }),
    q({ id: 'L14-P-30', topic: 'directions', skill: 'grammar', grammar: 'directions', type: 'mc', objective: 'L14-O5', instructions: 'Choose the best answer.', prompt: '– Wo ist hier die Post? – …', options: ['Tut mir leid, ich bin nicht von hier.', 'Gern geschehen.', 'Ich gehe zur Post.', 'Die Post gefällt mir.'], answer: 'Tut mir leid, ich bin nicht von hier.', explanation: 'A polite answer when you don’t know.' })
  ];

  const DIALOG = '– Entschuldigung, gibt es hier in der Nähe eine Apotheke? – Ja. Gehen Sie geradeaus bis zur Ampel. An der Ampel nach links. Die Apotheke ist neben dem Kaufhaus. – Vielen Dank! – Gern geschehen.';
  const READ = 'Liebe Sophie,\nso kommst du vom Bahnhof zu mir: Nimm den Bus Nummer 5 bis zum Marktplatz. Dort gehst du über die Straße. Mein Haus ist hinter der Kirche, zwischen dem Café und der Bäckerei.\nBis Samstag!\nMarie';
  const apply = [
    q({ id: 'L14-A-01', topic: 'directions', skill: 'listening', type: 'listen', objective: 'L14-O5', instructions: 'Listen to the conversation.', prompt: 'What is the person looking for?', audio: DIALOG, options: ['a pharmacy', 'a supermarket', 'the station', 'a bank'], answer: 'a pharmacy', explanation: 'eine Apotheke.' }),
    q({ id: 'L14-A-02', topic: 'wo-dative', skill: 'listening', type: 'listen', objective: 'L14-O3', instructions: 'Listen again.', prompt: 'Where is it?', audio: DIALOG, options: ['next to the department store', 'behind the department store', 'opposite the traffic lights', 'in the station'], answer: 'next to the department store', explanation: 'neben dem Kaufhaus.' }),
    q({ id: 'L14-A-03', topic: 'always-dative', skill: 'reading', type: 'reading', objective: 'L14-O2', instructions: 'Read the message.', passage: READ, prompt: 'Womit fährt Sophie zum Marktplatz?', options: ['mit dem Bus', 'mit dem Zug', 'mit dem Fahrrad'], answer: 'mit dem Bus', explanation: 'Nimm den Bus Nummer 5.' }),
    q({ id: 'L14-A-04', topic: 'wo-dative', skill: 'reading', type: 'reading', objective: 'L14-O3', instructions: 'Read the message.', passage: READ, prompt: 'Wo ist Maries Haus?', options: ['hinter der Kirche', 'vor der Kirche', 'neben dem Bahnhof'], answer: 'hinter der Kirche', explanation: 'hinter der Kirche.' }),
    q({ id: 'L14-A-05', topic: 'wo-dative', skill: 'reading', type: 'reading', objective: 'L14-O3', instructions: 'Read the message.', passage: READ, prompt: 'Was ist neben Maries Haus?', options: ['ein Café und eine Bäckerei', 'eine Kirche und ein Bahnhof', 'ein Markt und eine Bank'], answer: 'ein Café und eine Bäckerei', explanation: 'zwischen dem Café und der Bäckerei.' }),
    q({ id: 'L14-A-06', topic: 'directions', skill: 'writing', type: 'writing', objective: 'L14-O5', instructions: 'Write directions from the station to your home (4–6 sentences).', prompt: 'Which bus or train? Where to go? Where exactly is your house?',
      rubric: ['I use mit + dative (mit dem Bus / mit der U-Bahn).', 'I use zum / zur and bis zum / bis zur.', 'I say where the house is (neben / hinter / gegenüber + dative).', 'I use links / rechts / geradeaus.'],
      model: 'Lieber Tom,\nnimm am Bahnhof die U-Bahn bis zum Rathaus. Dann gehst du geradeaus bis zur Ampel. An der Ampel gehst du nach rechts. Mein Haus ist neben dem Supermarkt, gegenüber vom Park.\nBis bald!\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L14-A-07', topic: 'directions', skill: 'speaking', type: 'speaking', objective: 'L14-O5', instructions: 'Role play: ask a stranger for the way, then give directions.', prompt: 'Ask how to get to the station. Then explain (out loud) the way from your home to the nearest supermarket.',
      rubric: ['I started politely: Entschuldigung, …', 'I asked: Wie komme ich zum / zur …?', 'I gave 3 steps (geradeaus, an der Ampel links …).', 'I thanked: Vielen Dank! – Gern geschehen.'],
      model: '– Entschuldigung, wie komme ich zum Bahnhof? – Gehen Sie geradeaus und an der Kreuzung rechts. Der Bahnhof ist gegenüber vom Kaufhaus. – Vielen Dank! – Gern geschehen.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    art('L14-T-01', 'Er wartet an … Haltestelle. (die Haltestelle)', 'der', 'die → der.'),
    art('L14-T-02', 'Wir sitzen in … Café. (das Café)', 'dem', 'das → dem (short form: im Café).'),
    q({ id: 'L14-T-03', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'gap', objective: 'L14-O1', instructions: 'Fill in the dative article.', prompt: 'Ich telefoniere mit ___ Freund. (mein)', answer: [['meinem']], explanation: 'der Freund → meinem.' }),
    q({ id: 'L14-T-04', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'mc', objective: 'L14-O2', instructions: 'Choose the preposition.', prompt: 'Er arbeitet … einem Hotel.', options: ['bei', 'aus', 'nach', 'von'], answer: 'bei', explanation: 'bei = at (a company / place of work).' }),
    q({ id: 'L14-T-05', topic: 'always-dative', skill: 'grammar', grammar: 'dative-prepositions', type: 'mc', objective: 'L14-O2', instructions: 'Choose the preposition.', prompt: 'Ich lerne … drei Monaten Deutsch.', options: ['seit', 'mit', 'von', 'zu'], answer: 'seit', explanation: 'seit + dative (Monaten).' }),
    q({ id: 'L14-T-06', topic: 'wo-dative', skill: 'grammar', grammar: 'two-way-prepositions-dative', type: 'gap', objective: 'L14-O3', instructions: 'Fill in the dative article.', prompt: 'Das Auto steht vor ___ Haus.', answer: [['dem']], explanation: 'das Haus → dem.' }),
    q({ id: 'L14-T-07', topic: 'wo-dative', skill: 'grammar', grammar: 'two-way-prepositions-dative', type: 'mc', objective: 'L14-O3', instructions: 'Choose the preposition.', prompt: 'Die Lampe hängt … dem Tisch. (above)', options: ['über', 'unter', 'neben', 'hinter'], answer: 'über', explanation: 'über = above.' }),
    short('L14-T-08', 'Ich muss … Bank.', 'zur', 'die Bank → zur.'),
    q({ id: 'L14-T-09', topic: 'short-forms', skill: 'grammar', grammar: 'preposition-contractions', type: 'gap', objective: 'L14-O4', instructions: 'Write the short form.', prompt: 'Der Bus kommt ___ Flughafen. (von dem)', answer: [['vom']], explanation: 'von dem → vom.' }),
    q({ id: 'L14-T-10', topic: 'directions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L14-O5', instructions: 'Write it in German.', prompt: 'Turn right at the traffic lights. (Gehen Sie …)', answer: 'Gehen Sie an der Ampel nach rechts.', accept: ['Gehen Sie an der Ampel rechts.'], explanation: 'an der Ampel nach rechts.' }),
    q({ id: 'L14-T-11', topic: 'wo-dative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L14-O3', instructions: 'Write it in German.', prompt: 'The bank is behind the church.', answer: 'Die Bank ist hinter der Kirche.', explanation: 'hinter + der (die Kirche).' }),
    q({ id: 'L14-T-12', topic: 'directions', skill: 'vocabulary', type: 'match', objective: 'L14-O5', instructions: 'Match.', prompt: '', pairs: [['die Haltestelle', 'stop (bus/tram)'], ['das Kaufhaus', 'department store'], ['gegenüber', 'opposite'], ['Gern geschehen.', 'You’re welcome.'], ['die Straße', 'street']], explanation: 'Town and directions.' }),
    q({ id: 'L14-T-13', topic: 'directions', skill: 'listening', type: 'listen', objective: 'L14-O5', instructions: 'Listen and answer.', prompt: 'Which street should you take?', audio: 'Nehmen Sie die dritte Straße links. Dann sehen Sie das Rathaus.', options: ['the third street on the left', 'the second street on the left', 'the third street on the right', 'the first street on the right'], answer: 'the third street on the left', explanation: 'die dritte Straße links.' }),
    q({ id: 'L14-T-14', topic: 'wo-dative', skill: 'reading', type: 'reading', objective: 'L14-O3', instructions: 'Read and answer.', passage: 'Die Bibliothek ist im Zentrum, zwischen dem Theater\nund der Post. Gegenüber gibt es ein Café.', prompt: 'Was ist neben der Bibliothek?', options: ['das Theater und die Post', 'ein Café', 'das Zentrum'], answer: 'das Theater und die Post', explanation: 'zwischen dem Theater und der Post.' }),
    q({ id: 'L14-T-15', topic: 'dative-articles', skill: 'grammar', grammar: 'dative-articles', type: 'mc', objective: 'L14-O1', instructions: 'Choose the correct phrase.', prompt: 'next to the children', options: ['neben den Kindern', 'neben den Kinder', 'neben dem Kindern', 'neben der Kinder'], answer: 'neben den Kindern', explanation: 'Dative plural: den + noun -n.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
