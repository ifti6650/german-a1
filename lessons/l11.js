// Lektion 11 · "Was haben Sie gestern gemacht?" (Momente A1.1, Modul 4)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 12.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 11, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const pp = (id, inf, a, opts, ex) => opts
    ? q({ id, topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L11-O2', instructions: 'Choose the past participle.', prompt: `${inf} →`, options: opts, answer: a, explanation: ex, learnHref: GB + '12' })
    : q({ id, topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'translate', objective: 'L11-O2', instructions: 'Write the past participle.', prompt: `${inf} →`, answer: a, explanation: ex, learnHref: GB + '12' });
  const perf = (id, prompt, a, ex, obj = 'L11-O1') => q({ id, topic: 'perfekt-haben', skill: 'grammar', grammar: 'perfekt', type: 'gap', objective: obj, instructions: 'Fill in haben and the past participle.', prompt, answer: a, explanation: ex, learnHref: GB + '12' });

  const objectives = [
    { id: 'L11-O1', text: 'Talk about the past with haben + past participle (Ich habe gearbeitet).', kind: 'grammar' },
    { id: 'L11-O2', text: 'Form past participles: gemacht, gegessen, eingekauft, telefoniert.', kind: 'grammar' },
    { id: 'L11-O3', text: 'Use time words for the past: gestern, vorgestern, letzte Woche, letztes Jahr.', kind: 'communication' },
    { id: 'L11-O4', text: 'Tell events in order with zuerst, dann, danach (verb in position 2).', kind: 'communication' },
    { id: 'L11-O5', text: 'Describe a daily routine (aufstehen, frühstücken, duschen …).', kind: 'communication' },
    { id: 'L11-O6', text: 'Understand opening hours: von … bis, ab, geöffnet / geschlossen.', kind: 'communication' }
  ];

  const learn = [
    { id: 'perfekt', title: 'The Perfekt: haben + past participle', objective: 'L11-O1', href: GB + '12',
      text: 'Spoken German talks about the past with the Perfekt. haben goes in position 2, the past participle goes to the end — another sentence bracket.',
      table: [['Ich habe gestern gearbeitet.', 'I worked yesterday.'], ['Was hast du gemacht?', 'What did you do?'], ['Wir haben Pizza gegessen.', 'We ate pizza.']],
      mistakes: [['Ich habe gegessen Pizza.', 'Ich habe Pizza gegessen.', 'The participle goes to the very end.']] },
    { id: 'participles', title: 'Making the past participle: four rules', objective: 'L11-O2', href: GB + '12',
      table: [['1 regular: ge- + stem + -(e)t', 'machen → gemacht, kaufen → gekauft, arbeiten → gearbeitet'], ['2 irregular: ge- + (changed) stem + -en', 'essen → gegessen, trinken → getrunken, lesen → gelesen, schreiben → geschrieben, treffen → getroffen, sehen → gesehen, schlafen → geschlafen'], ['3 separable: prefix + ge + …', 'einkaufen → eingekauft, aufräumen → aufgeräumt'], ['4 verbs on -ieren: no ge-', 'telefonieren → telefoniert']] },
    { id: 'time-words', title: 'Time words for the past', objective: 'L11-O3', href: GB + '12',
      table: [['gestern · vorgestern', 'yesterday · the day before yesterday'], ['letzte Woche · letztes Jahr', 'last week · last year'], ['am Wochenende', 'at the weekend']],
      examples: [['Gestern habe ich eingekauft.', 'Yesterday I went shopping. (time first → verb second)']] },
    { id: 'sequence', title: 'Telling a story: zuerst, dann, danach', objective: 'L11-O4', href: GB + '12',
      text: 'These words count as position 1, so the verb comes right after them.',
      examples: [['Zuerst habe ich gefrühstückt. Dann habe ich gearbeitet. Danach habe ich gekocht.', 'First I had breakfast. Then I worked. After that I cooked.']],
      mistakes: [['Dann ich habe gekocht.', 'Dann habe ich gekocht.', 'Verb in position 2.']] },
    { id: 'routine', title: 'Daily routine (present tense)', objective: 'L11-O5',
      table: [['Ich stehe um 7 Uhr auf.', 'aufstehen (separable)'], ['Ich dusche und frühstücke.', 'duschen, frühstücken'], ['Ich kaufe ein. / Ich räume auf.', 'einkaufen, aufräumen'], ['Am Abend sehe ich fern.', 'fernsehen']] },
    { id: 'opening', title: 'Times and opening hours', objective: 'L11-O6', href: GB + '12',
      table: [['Mo–Fr 9–18 Uhr', 'von Montag bis Freitag, von neun bis achtzehn Uhr'], ['ab 10 Uhr', 'from 10 o’clock (onwards)'], ['geöffnet · geschlossen', 'open · closed']] }
  ];

  const practice = [
    pp('L11-P-01', 'machen', 'gemacht', ['gemacht', 'gemachen', 'machtet', 'macht'], 'Regular: ge- + mach + -t.'),
    pp('L11-P-02', 'kaufen', 'gekauft', null, 'Regular: gekauft.'),
    pp('L11-P-03', 'arbeiten', 'gearbeitet', null, 'Stem ends in -t: ge-arbeit-et.'),
    pp('L11-P-04', 'essen', 'gegessen', ['gegessen', 'geesst', 'gegesst', 'geessen'], 'Irregular: gegessen.'),
    pp('L11-P-05', 'trinken', 'getrunken', null, 'Irregular: getrunken.'),
    pp('L11-P-06', 'einkaufen', 'eingekauft', ['eingekauft', 'geeinkauft', 'eingekaufen', 'gekaufein'], 'Separable: ein-ge-kauft.'),
    pp('L11-P-07', 'telefonieren', 'telefoniert', null, '-ieren: no ge- → telefoniert.'),
    perf('L11-P-08', 'Ich ___ gestern Pizza ___. (essen)', [['habe'], ['gegessen']], 'habe … gegessen.'),
    perf('L11-P-09', 'Was ___ du am Wochenende ___? (machen)', [['hast'], ['gemacht']], 'hast … gemacht.'),
    q({ id: 'L11-P-10', topic: 'perfekt-haben', skill: 'grammar', grammar: 'perfekt', type: 'order', objective: 'L11-O1', instructions: 'Put the words in order.', prompt: 'I read a book.', tokens: ['habe', 'Ich', 'gelesen', 'ein', 'Buch'], answer: 'Ich habe ein Buch gelesen', explanation: 'habe … gelesen.' }),
    q({ id: 'L11-P-11', topic: 'perfekt-haben', skill: 'grammar', grammar: 'perfekt', type: 'order', objective: 'L11-O1', instructions: 'Put the words in order.', prompt: 'He worked yesterday.', tokens: ['hat', 'Er', 'gestern', 'gearbeitet'], answer: 'Er hat gestern gearbeitet', explanation: 'hat … gearbeitet.' }),
    q({ id: 'L11-P-12', topic: 'perfekt-haben', skill: 'grammar', grammar: 'perfekt', type: 'mc', objective: 'L11-O1', instructions: 'Choose the correct sentence.', prompt: 'We played football.', options: ['Wir haben Fußball gespielt.', 'Wir haben gespielt Fußball.', 'Wir gespielt haben Fußball.', 'Wir haben Fußball spielt.'], answer: 'Wir haben Fußball gespielt.', explanation: 'Participle at the end.' }),
    q({ id: 'L11-P-13', topic: 'time-words', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L11-O3', instructions: 'Start with the time. Put the words in order.', prompt: 'Yesterday I went shopping.', tokens: ['habe', 'Gestern', 'ich', 'eingekauft'], answer: 'Gestern habe ich eingekauft', explanation: 'Gestern – habe – ich – eingekauft.', learnHref: GB + '12' }),
    q({ id: 'L11-P-14', topic: 'time-words', skill: 'vocabulary', type: 'mc', objective: 'L11-O3', instructions: 'Choose the word.', prompt: 'the day before yesterday', options: ['vorgestern', 'gestern', 'morgen', 'übermorgen'], answer: 'vorgestern', explanation: 'vorgestern.' }),
    q({ id: 'L11-P-15', topic: 'time-words', skill: 'vocabulary', type: 'mc', objective: 'L11-O3', instructions: 'Choose the meaning.', prompt: 'letzte Woche', options: ['last week', 'next week', 'this week', 'every week'], answer: 'last week', explanation: 'letzte Woche = last week.' }),
    q({ id: 'L11-P-16', topic: 'sequence', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L11-O4', instructions: 'Put the words in order.', prompt: 'Then I had breakfast.', tokens: ['Dann', 'ich', 'habe', 'gefrühstückt'], answer: 'Dann habe ich gefrühstückt', explanation: 'Dann – habe – ich – gefrühstückt.', learnHref: GB + '12' }),
    q({ id: 'L11-P-17', topic: 'sequence', skill: 'vocabulary', type: 'gap', objective: 'L11-O4', instructions: 'Write “first” and “then”.', prompt: '___ dusche ich, ___ frühstücke ich.', answer: [['Zuerst'], ['dann', 'danach']], explanation: 'Zuerst … dann …' }),
    q({ id: 'L11-P-18', topic: 'routine', skill: 'vocabulary', type: 'match', objective: 'L11-O5', instructions: 'Match the routine.', prompt: '', pairs: [['aufstehen', 'to get up'], ['duschen', 'to shower'], ['einkaufen', 'to go shopping'], ['aufräumen', 'to tidy up'], ['fernsehen', 'to watch TV']], explanation: 'Daily routine.' }),
    q({ id: 'L11-P-19', topic: 'routine', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L11-O5', instructions: 'Fill in aufstehen (present tense).', prompt: 'Ich ___ um 7 Uhr ___.', answer: [['stehe'], ['auf']], explanation: 'stehe … auf.' }),
    q({ id: 'L11-P-20', topic: 'opening-hours', skill: 'reading', type: 'mc', objective: 'L11-O6', instructions: 'What does the sign mean?', prompt: 'Mo–Fr 9–18 Uhr', options: ['von Montag bis Freitag, von 9 bis 18 Uhr', 'am Montag und Freitag um 9 Uhr', 'ab Freitag, 18 Uhr', 'bis Montag, 9 Uhr'], answer: 'von Montag bis Freitag, von 9 bis 18 Uhr', explanation: 'von … bis = from … until.', learnHref: GB + '12' }),
    q({ id: 'L11-P-21', topic: 'opening-hours', skill: 'vocabulary', type: 'mc', objective: 'L11-O6', instructions: 'Choose the meaning.', prompt: 'ab 10 Uhr geöffnet', options: ['open from 10 o’clock', 'open until 10 o’clock', 'closed at 10 o’clock', 'open only at 10 o’clock'], answer: 'open from 10 o’clock', explanation: 'ab = from (onwards).' }),
    q({ id: 'L11-P-22', topic: 'time-words', skill: 'vocabulary', type: 'match', objective: 'L11-O6', instructions: 'Match.', prompt: '', pairs: [['geöffnet', 'open'], ['geschlossen', 'closed'], ['gestern', 'yesterday'], ['zuerst', 'first'], ['danach', 'after that']], explanation: 'Useful words.' }),
    q({ id: 'L11-P-23', topic: 'perfekt-haben', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L11-O1', instructions: 'Write it in German.', prompt: 'I worked yesterday.', answer: 'Ich habe gestern gearbeitet.', accept: ['Gestern habe ich gearbeitet.'], explanation: 'habe … gearbeitet.' }),
    q({ id: 'L11-P-24', topic: 'perfekt-haben', skill: 'writing', type: 'translate', objective: 'L11-O1', instructions: 'Write it in German (informal).', prompt: 'Did you cook?', answer: 'Hast du gekocht?', explanation: 'Hast du … gekocht?' }),
    q({ id: 'L11-P-25', topic: 'perfekt-haben', skill: 'listening', type: 'listen', objective: 'L11-O1', instructions: 'Listen and answer.', prompt: 'What did the speaker do with Anna?', audio: 'Gestern habe ich lange geschlafen. Dann habe ich mit Anna Kaffee getrunken.', options: ['drank coffee', 'ate pizza', 'played football', 'watched TV'], answer: 'drank coffee', explanation: 'mit Anna Kaffee getrunken.' }),
    q({ id: 'L11-P-26', topic: 'opening-hours', skill: 'listening', type: 'listen', objective: 'L11-O6', instructions: 'Listen and answer.', prompt: 'When is the supermarket closed?', audio: 'Der Supermarkt ist von Montag bis Samstag von acht bis zwanzig Uhr geöffnet.', options: ['on Sunday', 'on Monday', 'on Saturday', 'every afternoon'], answer: 'on Sunday', explanation: 'Montag bis Samstag geöffnet → Sonntag geschlossen.' }),
    q({ id: 'L11-P-27', topic: 'perfekt-haben', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L11-O1', instructions: 'Listen and write.', prompt: '', audio: 'Ich habe ein Buch gelesen. Dann habe ich geschlafen.', answer: 'Ich habe ein Buch gelesen. Dann habe ich geschlafen.', accept: ['Ich habe ein Buch gelesen, dann habe ich geschlafen.'], explanation: 'gelesen, geschlafen.' }),
    pp('L11-P-28', 'schreiben', 'geschrieben', ['geschrieben', 'geschreibt', 'geschriebt', 'schrieben'], 'Irregular: geschrieben.'),
    pp('L11-P-29', 'sehen', 'gesehen', ['gesehen', 'gesieht', 'gesehnt', 'gesah'], 'Irregular: gesehen.'),
    perf('L11-P-30', 'Wir ___ Freunde ___. (treffen)', [['haben'], ['getroffen']], 'haben … getroffen.')
  ];

  const DIALOG = 'Was hast du am Samstag gemacht? – Zuerst habe ich eingekauft. Dann habe ich die Wohnung geputzt. Am Abend habe ich einen Film gesehen.';
  const READ = 'Bäckerei Sonne\nMo–Fr: 6:30–18:00 Uhr\nSa: 7:00–13:00 Uhr\nSo: geschlossen';
  const apply = [
    q({ id: 'L11-A-01', topic: 'sequence', skill: 'listening', type: 'listen', objective: 'L11-O4', instructions: 'Listen.', prompt: 'What did she do first?', audio: DIALOG, options: ['went shopping', 'cleaned the flat', 'watched a film', 'slept'], answer: 'went shopping', explanation: 'Zuerst habe ich eingekauft.' }),
    q({ id: 'L11-A-02', topic: 'perfekt-haben', skill: 'listening', type: 'listen', objective: 'L11-O1', instructions: 'Listen again.', prompt: 'What did she do in the evening?', audio: DIALOG, options: ['watched a film', 'went shopping', 'cooked', 'read a book'], answer: 'watched a film', explanation: 'einen Film gesehen.' }),
    q({ id: 'L11-A-03', topic: 'opening-hours', skill: 'reading', type: 'reading', objective: 'L11-O6', instructions: 'Read the sign.', passage: READ, prompt: 'Ist die Bäckerei am Sonntag geöffnet?', options: ['Nein, sie ist geschlossen.', 'Ja, von 7 bis 13 Uhr.'], answer: 'Nein, sie ist geschlossen.', explanation: 'So: geschlossen.' }),
    q({ id: 'L11-A-04', topic: 'opening-hours', skill: 'reading', type: 'reading', objective: 'L11-O6', instructions: 'Read the sign.', passage: READ, prompt: 'Bis wann ist sie am Samstag geöffnet?', options: ['bis 13 Uhr', 'bis 18 Uhr', 'bis 7 Uhr'], answer: 'bis 13 Uhr', explanation: 'Sa: 7:00–13:00.' }),
    q({ id: 'L11-A-05', topic: 'opening-hours', skill: 'reading', type: 'reading', objective: 'L11-O6', instructions: 'Read the sign.', passage: READ, prompt: 'Ab wann ist sie am Montag geöffnet?', options: ['ab 6:30 Uhr', 'ab 7 Uhr', 'ab 18 Uhr'], answer: 'ab 6:30 Uhr', explanation: 'Mo–Fr: 6:30–18:00.' }),
    q({ id: 'L11-A-06', topic: 'sequence', skill: 'writing', type: 'writing', objective: 'L11-O4', instructions: 'Write about yesterday (5–6 sentences).', prompt: 'What did you do? Use zuerst, dann, danach and the Perfekt with haben.',
      rubric: ['I use haben + participle at the end.', 'I use zuerst, dann, danach with the verb in position 2.', 'I use one separable participle (eingekauft, aufgeräumt).', 'I use one irregular participle (gegessen, gelesen …).'],
      model: 'Gestern habe ich viel gemacht. Zuerst habe ich gefrühstückt. Dann habe ich eingekauft. Danach habe ich gekocht und mit meiner Familie gegessen. Am Abend habe ich ein Buch gelesen.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L11-A-07', topic: 'perfekt-haben', skill: 'speaking', type: 'speaking', objective: 'L11-O1', instructions: 'Talk (out loud) about your weekend.', prompt: 'Ask a friend: Was hast du am Wochenende gemacht? Then tell three things you did.',
      rubric: ['I asked: Was hast du … gemacht?', 'I said three things in the Perfekt with haben.', 'I used zuerst / dann / danach.', 'I used a past time word (gestern, letzte Woche …).'],
      model: '– Was hast du am Wochenende gemacht?\n– Am Samstag habe ich aufgeräumt. Dann habe ich Freunde getroffen. Am Sonntag habe ich lange geschlafen. Und du?', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    pp('L11-T-01', 'spielen', 'gespielt', ['gespielt', 'gespielen', 'spielte', 'gespielet'], 'Regular: gespielt.'),
    pp('L11-T-02', 'kochen', 'gekocht', null, 'Regular: gekocht.'),
    pp('L11-T-03', 'lesen', 'gelesen', ['gelesen', 'gelest', 'geliest', 'gelesst'], 'Irregular: gelesen.'),
    pp('L11-T-04', 'schlafen', 'geschlafen', null, 'Irregular: geschlafen.'),
    perf('L11-T-05', 'Er ___ eine E-Mail ___. (schreiben)', [['hat'], ['geschrieben']], 'hat … geschrieben.'),
    perf('L11-T-06', '___ ihr gestern ___? (einkaufen)', [['Habt'], ['eingekauft']], 'Habt ihr … eingekauft?'),
    q({ id: 'L11-T-07', topic: 'perfekt-haben', skill: 'grammar', grammar: 'perfekt', type: 'order', objective: 'L11-O1', instructions: 'Put the words in order.', prompt: 'She drank tea.', tokens: ['hat', 'Sie', 'Tee', 'getrunken'], answer: 'Sie hat Tee getrunken', explanation: 'hat … getrunken.' }),
    q({ id: 'L11-T-08', topic: 'time-words', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L11-O3', instructions: 'Start with the time. Put the words in order.', prompt: 'Last week we tidied up.', tokens: ['haben', 'Letzte', 'Woche', 'wir', 'aufgeräumt'], answer: 'Letzte Woche haben wir aufgeräumt', explanation: 'Letzte Woche – haben – wir – aufgeräumt.' }),
    q({ id: 'L11-T-09', topic: 'time-words', skill: 'vocabulary', type: 'mc', objective: 'L11-O3', instructions: 'Choose the time word that fits the Perfekt.', prompt: 'Ich habe … Fußball gespielt.', options: ['gestern', 'morgen', 'nächste Woche'], answer: 'gestern', explanation: 'Perfekt = past → gestern.' }),
    q({ id: 'L11-T-10', topic: 'sequence', skill: 'vocabulary', type: 'gap', objective: 'L11-O4', instructions: 'Write “then”.', prompt: 'Zuerst frühstücke ich, ___ dusche ich.', answer: [['dann', 'danach']], explanation: 'dann / danach.' }),
    q({ id: 'L11-T-11', topic: 'perfekt-haben', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L11-O2', instructions: 'Write it in German.', prompt: 'I went shopping yesterday.', answer: 'Ich habe gestern eingekauft.', accept: ['Gestern habe ich eingekauft.'], explanation: 'habe … eingekauft.' }),
    q({ id: 'L11-T-12', topic: 'opening-hours', skill: 'reading', type: 'mc', objective: 'L11-O6', instructions: 'What does the sign mean?', prompt: 'Öffnungszeiten: 10–16 Uhr', options: ['von zehn bis sechzehn Uhr', 'ab sechzehn Uhr', 'bis zehn Uhr', 'um zehn Uhr'], answer: 'von zehn bis sechzehn Uhr', explanation: 'von … bis.' }),
    q({ id: 'L11-T-13', topic: 'time-words', skill: 'listening', type: 'listen', objective: 'L11-O3', instructions: 'Listen and answer.', prompt: 'When did she call her parents?', audio: 'Vorgestern habe ich meine Eltern angerufen.', options: ['the day before yesterday', 'yesterday', 'last week', 'today'], answer: 'the day before yesterday', explanation: 'vorgestern.' }),
    q({ id: 'L11-T-14', topic: 'perfekt-haben', skill: 'reading', type: 'reading', objective: 'L11-O1', instructions: 'Read and answer.', passage: 'Am Sonntag hat Ali lange geschlafen. Dann hat er mit der Familie gefrühstückt.\nAm Nachmittag hat er Fußball gespielt.', prompt: 'Was hat Ali am Nachmittag gemacht?', options: ['Er hat Fußball gespielt.', 'Er hat geschlafen.', 'Er hat gefrühstückt.'], answer: 'Er hat Fußball gespielt.', explanation: 'Am Nachmittag hat er Fußball gespielt.' }),
    q({ id: 'L11-T-15', topic: 'routine', skill: 'vocabulary', type: 'match', objective: 'L11-O5', instructions: 'Match.', prompt: '', pairs: [['frühstücken', 'to have breakfast'], ['putzen', 'to clean'], ['schlafen', 'to sleep'], ['der Alltag', 'everyday life'], ['der Tagesablauf', 'daily routine']], explanation: 'Daily life.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
