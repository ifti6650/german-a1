// Lektion 5 · "Ist das ein Tisch?" (Momente A1.1, Modul 2)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 6.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 5, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L5-O1', text: 'Name objects with ein / eine (Das ist ein Schlüssel / eine Tasche).', kind: 'grammar' },
    { id: 'L5-O2', text: 'Say “not a / no” with kein / keine.', kind: 'grammar' },
    { id: 'L5-O3', text: 'Decide between nicht and kein.', kind: 'grammar' },
    { id: 'L5-O4', text: 'Describe colours and materials (Die Tasche ist schwarz und aus Leder).', kind: 'communication' },
    { id: 'L5-O5', text: 'Use sehen (du siehst, er sieht).', kind: 'grammar' },
    { id: 'L5-O6', text: 'Ask when you don’t know or didn’t understand a word.', kind: 'communication' }
  ];

  const learn = [
    { id: 'ein', title: 'ein and eine (a / an)', objective: 'L5-O1', href: GB + '6',
      text: 'der and das words → ein. die words → eine.',
      table: [['der Schlüssel → ein Schlüssel', 'a key'], ['das Handy → ein Handy', 'a mobile phone'], ['die Tasche → eine Tasche', 'a bag']],
      examples: [['Was ist das? – Das ist eine Uhr.', 'What is that? – That is a watch.']] },
    { id: 'kein', title: 'kein and keine (no / not a)', objective: 'L5-O2', href: GB + '6',
      text: 'kein works like ein: kein for der/das words, keine for die words and plurals.',
      examples: [['Ist das ein Kuli? – Nein, das ist kein Kuli. Das ist ein Bleistift.', 'Is that a pen? – No, that is not a pen. That is a pencil.'], ['Das ist keine Brille.', 'That is not a pair of glasses.']],
      mistakes: [['Das ist nicht ein Buch.', 'Das ist kein Buch.', 'Instead of nicht + ein, German uses kein.']] },
    { id: 'nicht-kein', title: 'nicht or kein? The decision rule', objective: 'L5-O3', href: GB + '6',
      text: 'Use kein when the noun would have ein/eine or no article. Use nicht for everything else: verbs, adjectives, names, and nouns with der/die/das or mein/dein.',
      table: [['Das ist kein Handy.', 'noun with ein → kein'], ['Die Kamera ist nicht teuer.', 'adjective → nicht'], ['Das ist nicht meine Tasche.', 'mein/dein → nicht'], ['Der Drucker funktioniert nicht.', 'verb → nicht']] },
    { id: 'colours', title: 'Colours and materials', objective: 'L5-O4', href: GB + '6',
      text: 'Colours after sein do not change. For materials, use aus + material.',
      table: [['rot · blau · grün · gelb', 'red · blue · green · yellow'], ['schwarz · weiß · grau · braun', 'black · white · grey · brown'], ['aus Holz · aus Metall · aus Glas', 'made of wood · metal · glass'], ['aus Papier · aus Plastik · aus Leder', 'made of paper · plastic · leather']],
      examples: [['Die Tasche ist schwarz und aus Leder.', 'The bag is black and made of leather.']] },
    { id: 'sehen', title: 'sehen: e → ie', objective: 'L5-O5', href: GB + '6',
      table: [['ich sehe', 'I see'], ['du siehst', 'you see'], ['er / sie sieht', 'he / she sees'], ['wir sehen · ihr seht · sie/Sie sehen', 'we · you (all) · they / you (polite)']],
      mistakes: [['er seht', 'er sieht', 'e → ie with du and er/sie/es.']] },
    { id: 'unknown-word', title: 'When you don’t know the word', objective: 'L5-O6', href: GB + '6',
      table: [['Wie heißt das auf Deutsch?', 'What is that called in German?'], ['Was ist das?', 'What is that?'], ['Wie bitte?', 'Pardon?'], ['Noch einmal, bitte.', 'Once more, please.'], ['Wie schreibt man das?', 'How do you spell that?']] }
  ];

  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L5-O1', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });
  const practice = [
    q({ id: 'L05-P-01', topic: 'ein-kein', skill: 'grammar', grammar: 'indefinite-article', type: 'gap', objective: 'L5-O1', instructions: 'Fill in ein or eine.', prompt: 'Das ist ___ Schlüssel und das ist ___ Tasche.', answer: [['ein'], ['eine']], explanation: 'der Schlüssel → ein, die Tasche → eine.', learnHref: GB + '6' }),
    q({ id: 'L05-P-02', topic: 'ein-kein', skill: 'grammar', grammar: 'indefinite-article', type: 'gap', objective: 'L5-O1', instructions: 'Fill in ein or eine.', prompt: 'Das ist ___ Handy.', answer: [['ein']], explanation: 'das Handy → ein.' }),
    q({ id: 'L05-P-03', topic: 'ein-kein', skill: 'grammar', grammar: 'indefinite-article', type: 'mc', objective: 'L5-O1', instructions: 'Choose the article.', prompt: 'Das ist … Uhr.', options: ['eine', 'ein'], answer: 'eine', explanation: 'die Uhr → eine.' }),
    q({ id: 'L05-P-04', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'gap', objective: 'L5-O2', instructions: 'Fill in kein or keine.', prompt: 'Ist das ein Kuli? – Nein, das ist ___ Kuli. Das ist ein Bleistift.', answer: [['kein']], explanation: 'der Kuli → kein.', learnHref: GB + '6' }),
    q({ id: 'L05-P-05', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'gap', objective: 'L5-O2', instructions: 'Fill in kein or keine.', prompt: 'Ist das eine Brille? – Nein, das ist ___ Brille.', answer: [['keine']], explanation: 'die Brille → keine.' }),
    q({ id: 'L05-P-06', topic: 'nicht-kein', skill: 'grammar', grammar: 'nicht-kein', type: 'mc', objective: 'L5-O3', instructions: 'nicht or kein?', prompt: 'Das ist … Buch, das ist ein Heft.', options: ['kein', 'nicht', 'keine'], answer: 'kein', explanation: 'Noun with ein → kein.', learnHref: GB + '6' }),
    q({ id: 'L05-P-07', topic: 'nicht-kein', skill: 'grammar', grammar: 'nicht-kein', type: 'mc', objective: 'L5-O3', instructions: 'nicht or kein?', prompt: 'Die Kamera ist … teuer.', options: ['nicht', 'kein', 'keine'], answer: 'nicht', explanation: 'Adjective → nicht.' }),
    q({ id: 'L05-P-08', topic: 'nicht-kein', skill: 'grammar', grammar: 'nicht-kein', type: 'mc', objective: 'L5-O3', instructions: 'nicht or kein?', prompt: 'Das ist … meine Tasche.', options: ['nicht', 'keine', 'kein'], answer: 'nicht', explanation: 'mein/meine → nicht.' }),
    q({ id: 'L05-P-09', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'order', objective: 'L5-O2', instructions: 'Put the words in order.', prompt: 'That is not a ball.', tokens: ['kein', 'ist', 'Das', 'Ball'], answer: 'Das ist kein Ball', explanation: 'Das – ist – kein Ball.' }),
    q({ id: 'L05-P-10', topic: 'nicht-kein', skill: 'grammar', grammar: 'negation-nicht', type: 'order', objective: 'L5-O3', instructions: 'Put the words in order.', prompt: 'The watch is not new.', tokens: ['nicht', 'ist', 'Die', 'neu', 'Uhr'], answer: 'Die Uhr ist nicht neu', explanation: 'Adjective → nicht.' }),
    q({ id: 'L05-P-11', topic: 'colours', skill: 'vocabulary', type: 'match', objective: 'L5-O4', instructions: 'Match the colour.', prompt: '', pairs: [['rot', 'red'], ['blau', 'blue'], ['grün', 'green'], ['gelb', 'yellow'], ['schwarz', 'black']], explanation: 'Colours.', learnHref: GB + '6' }),
    q({ id: 'L05-P-12', topic: 'colours', skill: 'vocabulary', type: 'mc', objective: 'L5-O4', instructions: 'Choose the meaning.', prompt: 'weiß', options: ['white', 'black', 'grey', 'wheat'], answer: 'white', explanation: 'weiß = white.' }),
    q({ id: 'L05-P-13', topic: 'materials', skill: 'vocabulary', type: 'gap', objective: 'L5-O4', instructions: 'Write the material (wood).', prompt: 'Der Tisch ist aus ___.', answer: [['Holz']], explanation: 'aus Holz = made of wood.' }),
    q({ id: 'L05-P-14', topic: 'materials', skill: 'vocabulary', type: 'mc', objective: 'L5-O4', instructions: 'Choose the material (glass).', prompt: 'Die Flasche ist aus …', options: ['Glas', 'Gras', 'Glass', 'Glase'], answer: 'Glas', explanation: 'das Glas — one s in German.' }),
    q({ id: 'L05-P-15', topic: 'materials', skill: 'vocabulary', type: 'match', objective: 'L5-O4', instructions: 'Match the material.', prompt: '', pairs: [['das Holz', 'wood'], ['das Metall', 'metal'], ['das Papier', 'paper'], ['das Leder', 'leather'], ['das Plastik', 'plastic']], explanation: 'Materials are all das words.' }),
    q({ id: 'L05-P-16', topic: 'sehen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L5-O5', instructions: 'Write the verb form.', prompt: 'du + sehen →', answer: 'siehst', explanation: 'e → ie: du siehst.', learnHref: GB + '6' }),
    q({ id: 'L05-P-17', topic: 'sehen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L5-O5', instructions: 'Write the verb form.', prompt: 'er + sehen →', answer: 'sieht', explanation: 'e → ie: er sieht.' }),
    q({ id: 'L05-P-18', topic: 'sehen', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L5-O5', instructions: 'Fill in sehen.', prompt: 'Was ___ du? – Ich ___ eine Kamera.', answer: [['siehst'], ['sehe']], explanation: 'du siehst, ich sehe.' }),
    q({ id: 'L05-P-19', topic: 'unknown-word', skill: 'communication', type: 'mc', objective: 'L5-O6', instructions: 'Choose the phrase.', prompt: 'You did not understand. You say:', options: ['Wie bitte?', 'Wie heißt du?', 'Wie geht’s?', 'Gute Nacht!'], answer: 'Wie bitte?', explanation: 'Wie bitte? = Pardon?', learnHref: GB + '6' }),
    q({ id: 'L05-P-20', topic: 'unknown-word', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L5-O6', instructions: 'Put the words in order.', prompt: 'What is that called in German?', tokens: ['das', 'heißt', 'Wie', 'Deutsch', 'auf'], answer: 'Wie heißt das auf Deutsch', explanation: 'Wie – heißt – das – auf Deutsch?' }),
    q({ id: 'L05-P-21', topic: 'ein-kein', skill: 'writing', type: 'translate', objective: 'L5-O2', instructions: 'Write it in German.', prompt: 'That is not a pen.', answer: 'Das ist kein Kuli.', accept: ['Das ist kein Kugelschreiber.'], explanation: 'der Kuli → kein Kuli.' }),
    q({ id: 'L05-P-22', topic: 'colours', skill: 'writing', type: 'translate', objective: 'L5-O4', instructions: 'Write it in German.', prompt: 'The bag is black.', answer: 'Die Tasche ist schwarz.', explanation: 'die Tasche + ist + schwarz.' }),
    q({ id: 'L05-P-23', topic: 'unknown-word', skill: 'writing', type: 'translate', objective: 'L5-O6', instructions: 'Write it in German.', prompt: 'Once more, please.', answer: 'Noch einmal, bitte.', accept: ['Bitte noch einmal.'], explanation: 'Noch einmal, bitte.' }),
    art('L05-P-24', 'Brille', 'glasses', 'die'), art('L05-P-25', 'Handy', 'mobile phone', 'das'), art('L05-P-26', 'Schlüssel', 'key', 'der'),
    q({ id: 'L05-P-27', topic: 'ein-kein', skill: 'listening', type: 'listen', objective: 'L5-O2', instructions: 'Listen and answer.', prompt: 'What is it?', audio: 'Ist das dein Handy? – Nein, das ist kein Handy. Das ist eine Kamera.', options: ['a camera', 'a mobile phone', 'a watch', 'a book'], answer: 'a camera', explanation: 'Das ist eine Kamera.' }),
    q({ id: 'L05-P-28', topic: 'colours', skill: 'listening', type: 'listen', objective: 'L5-O4', instructions: 'Listen and answer.', prompt: 'What is the bag like?', audio: 'Meine Tasche ist rot und aus Leder.', options: ['red, leather', 'brown, leather', 'red, plastic', 'black, metal'], answer: 'red, leather', explanation: 'rot und aus Leder.' }),
    q({ id: 'L05-P-29', topic: 'ein-kein', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L5-O2', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Das ist kein Buch. Das ist ein Heft.', answer: 'Das ist kein Buch. Das ist ein Heft.', accept: ['Das ist kein Buch, das ist ein Heft.'], explanation: 'kein Buch · ein Heft.' }),
    q({ id: 'L05-P-30', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'mc', objective: 'L5-O2', instructions: 'Choose the correct answer.', prompt: 'Ist das eine Uhr? – Nein, …', options: ['das ist keine Uhr.', 'das ist nicht Uhr.', 'das ist kein Uhr.', 'das ist nicht eine Uhr.'], answer: 'das ist keine Uhr.', explanation: 'die Uhr → keine Uhr.' })
  ];

  const DIALOG = 'Was ist das? – Das ist ein Schlüssel. – Ist der Schlüssel aus Metall? – Ja, und er ist sehr alt.';
  const READ = 'Gefunden im Deutschkurs:\n– eine Tasche, schwarz, aus Leder\n– ein Handy, weiß\n– eine Brille, braun';
  const apply = [
    q({ id: 'L05-A-01', topic: 'ein-kein', skill: 'listening', type: 'listen', objective: 'L5-O1', instructions: 'Listen to the conversation.', prompt: 'What is it?', audio: DIALOG, options: ['a key', 'a ball', 'a pen', 'a clock'], answer: 'a key', explanation: 'ein Schlüssel = a key.' }),
    q({ id: 'L05-A-02', topic: 'materials', skill: 'listening', type: 'listen', objective: 'L5-O4', instructions: 'Listen again.', prompt: 'What is it made of?', audio: DIALOG, options: ['metal', 'wood', 'plastic', 'glass'], answer: 'metal', explanation: 'aus Metall.' }),
    q({ id: 'L05-A-03', topic: 'colours', skill: 'reading', type: 'reading', objective: 'L5-O4', instructions: 'Read the notice (gefunden = found).', passage: READ, prompt: 'Wie ist die Tasche?', options: ['schwarz und aus Leder', 'weiß', 'braun'], answer: 'schwarz und aus Leder', explanation: 'eine Tasche, schwarz, aus Leder.' }),
    q({ id: 'L05-A-04', topic: 'colours', skill: 'reading', type: 'reading', objective: 'L5-O4', instructions: 'Read the notice.', passage: READ, prompt: 'Was ist weiß?', options: ['das Handy', 'die Brille', 'die Tasche'], answer: 'das Handy', explanation: 'ein Handy, weiß.' }),
    q({ id: 'L05-A-05', topic: 'colours', skill: 'reading', type: 'reading', objective: 'L5-O3', instructions: 'Read the notice.', passage: READ, prompt: 'Ist die Brille schwarz?', options: ['Nein, sie ist braun.', 'Ja, sie ist schwarz.'], answer: 'Nein, sie ist braun.', explanation: 'eine Brille, braun.' }),
    q({ id: 'L05-A-06', topic: 'colours', skill: 'writing', type: 'writing', objective: 'L5-O4', instructions: 'What is in your bag? Describe three things (4–6 sentences).', prompt: 'Name each thing with ein/eine, say its colour and material. Use kein once and nicht once.',
      rubric: ['I use ein / eine correctly.', 'I give colours and materials (aus …).', 'I use kein / keine once.', 'I use nicht once.'],
      model: 'In meiner Tasche ist ein Handy. Es ist schwarz. Da ist auch ein Kuli aus Metall und eine Flasche aus Glas. Die Flasche ist nicht groß. Ich habe kein Buch.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L05-A-07', topic: 'unknown-word', skill: 'speaking', type: 'speaking', objective: 'L5-O6', instructions: 'Guessing game (out loud): point at things around you.', prompt: 'Ask “Ist das ein/eine …?” and answer “Nein, das ist kein/keine … Das ist ein/eine …”. Ask once for a word you don’t know.',
      rubric: ['I asked yes/no questions with ein / eine.', 'I answered with kein / keine.', 'I asked: Wie heißt das auf Deutsch?', 'I used Wie bitte? or Noch einmal, bitte.'],
      model: '– Ist das ein Kuli?\n– Nein, das ist kein Kuli. Das ist ein Bleistift.\n– Wie heißt das auf Deutsch?\n– Das ist eine Brille.\n– Wie bitte? Noch einmal, bitte.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L05-T-01', topic: 'ein-kein', skill: 'grammar', grammar: 'indefinite-article', type: 'gap', objective: 'L5-O1', instructions: 'Fill in ein or eine.', prompt: 'Das ist ___ Buch und ___ Flasche.', answer: [['ein'], ['eine']], explanation: 'das Buch → ein, die Flasche → eine.' }),
    q({ id: 'L05-T-02', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'gap', objective: 'L5-O2', instructions: 'Fill in kein or keine.', prompt: 'Ist das ein Ball? – Nein, das ist ___ Ball.', answer: [['kein']], explanation: 'der Ball → kein.' }),
    q({ id: 'L05-T-03', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'mc', objective: 'L5-O2', instructions: 'Choose one.', prompt: 'Das ist … Brille, das ist eine Kamera.', options: ['keine', 'kein', 'nicht'], answer: 'keine', explanation: 'die Brille → keine.' }),
    q({ id: 'L05-T-04', topic: 'nicht-kein', skill: 'grammar', grammar: 'nicht-kein', type: 'mc', objective: 'L5-O3', instructions: 'nicht or kein?', prompt: 'Der Schlüssel ist … neu.', options: ['nicht', 'kein', 'keine'], answer: 'nicht', explanation: 'Adjective → nicht.' }),
    q({ id: 'L05-T-05', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'order', objective: 'L5-O2', instructions: 'Put the words in order.', prompt: 'That is not a lamp.', tokens: ['keine', 'ist', 'Das', 'Lampe'], answer: 'Das ist keine Lampe', explanation: 'die Lampe → keine Lampe.' }),
    q({ id: 'L05-T-06', topic: 'sehen', skill: 'grammar', grammar: 'vowel-change', type: 'conjugation', objective: 'L5-O5', instructions: 'Write the verb form.', prompt: 'ihr + sehen →', answer: 'seht', explanation: 'No vowel change with ihr: ihr seht.' }),
    q({ id: 'L05-T-07', topic: 'sehen', skill: 'grammar', grammar: 'vowel-change', type: 'gap', objective: 'L5-O5', instructions: 'Fill in sehen.', prompt: '___ du das? – Ja, ich ___ es.', answer: [['Siehst'], ['sehe']], explanation: 'du siehst, ich sehe.' }),
    q({ id: 'L05-T-08', topic: 'colours', skill: 'vocabulary', type: 'match', objective: 'L5-O4', instructions: 'Match.', prompt: '', pairs: [['das Glas', 'glass'], ['das Holz', 'wood'], ['braun', 'brown'], ['grau', 'grey'], ['die Farbe', 'colour']], explanation: 'Colours and materials.' }),
    q({ id: 'L05-T-09', topic: 'colours', skill: 'writing', type: 'translate', objective: 'L5-O4', instructions: 'Write it in German.', prompt: 'The bottle is green.', answer: 'Die Flasche ist grün.', explanation: 'die Flasche + ist + grün.' }),
    q({ id: 'L05-T-10', topic: 'ein-kein', skill: 'writing', type: 'translate', objective: 'L5-O2', instructions: 'Write it in German.', prompt: 'That is not a book.', answer: 'Das ist kein Buch.', explanation: 'das Buch → kein Buch.' }),
    q({ id: 'L05-T-11', topic: 'unknown-word', skill: 'communication', type: 'mc', objective: 'L5-O6', instructions: 'Choose the phrase.', prompt: 'You don’t know the German word. You ask:', options: ['Wie heißt das auf Deutsch?', 'Wie heißt du?', 'Wie geht’s?', 'Woher kommst du?'], answer: 'Wie heißt das auf Deutsch?', explanation: 'Wie heißt das auf Deutsch?' }),
    art('L05-T-12', 'Uhr', 'watch, clock', 'die'),
    q({ id: 'L05-T-13', topic: 'ein-kein', skill: 'listening', type: 'listen', objective: 'L5-O2', instructions: 'Listen and answer.', prompt: 'What is the object really?', audio: 'Das ist kein Kuli. Das ist ein Bleistift.', options: ['a pencil', 'a pen', 'a book', 'a key'], answer: 'a pencil', explanation: 'ein Bleistift = a pencil.' }),
    q({ id: 'L05-T-14', topic: 'materials', skill: 'reading', type: 'reading', objective: 'L5-O4', instructions: 'Read and answer.', passage: 'Das ist Lenas Zimmer. Der Tisch ist aus Holz.\nDie Lampe ist aus Metall und die Tasche ist aus Leder.', prompt: 'Was ist aus Metall?', options: ['die Lampe', 'der Tisch', 'die Tasche'], answer: 'die Lampe', explanation: 'Die Lampe ist aus Metall.' }),
    q({ id: 'L05-T-15', topic: 'ein-kein', skill: 'grammar', grammar: 'kein', type: 'mc', objective: 'L5-O2', instructions: 'Choose one.', prompt: 'Das ist … Handy, das ist eine Uhr.', options: ['kein', 'keine', 'nicht'], answer: 'kein', explanation: 'das Handy → kein.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
