// Lektion 10 · "Wann kommst du denn an?" (Momente A1.1, Modul 4)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 11.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 10, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L10-O4', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });
  const sep = (id, prompt, a, ex, obj = 'L10-O1') => q({ id, topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: obj, instructions: 'Fill in the verb: the prefix goes to the end.', prompt, answer: a, explanation: ex, learnHref: GB + '111-how-separable-verbs-work' });

  const objectives = [
    { id: 'L10-O1', text: 'Use separable verbs: the prefix goes to the end (Der Zug kommt um acht Uhr an).', kind: 'grammar' },
    { id: 'L10-O2', text: 'Use separable verbs with können: the verb stays together at the end (Ich kann dich abholen).', kind: 'grammar' },
    { id: 'L10-O3', text: 'Ask when (wann?) and talk about departure and arrival times.', kind: 'communication' },
    { id: 'L10-O4', text: 'Name means of transport and places of travel (mit dem Zug, zu Fuß, der Bahnhof).', kind: 'communication' },
    { id: 'L10-O5', text: 'Show feelings: Schade! Kein Problem. Ich freue mich! So ein Mist!', kind: 'communication' }
  ];

  const learn = [
    { id: 'separable', title: 'How separable verbs work', objective: 'L10-O1', href: GB + '111-how-separable-verbs-work',
      text: 'Some verbs have a prefix (an-, ab-, auf-, ein-, aus-, um-). In a normal sentence the verb part goes to position 2 and the prefix goes to the very end.',
      table: [['ankommen → Der Zug kommt um acht Uhr an.', 'to arrive'], ['abfahren → Der Bus fährt um neun Uhr ab.', 'to depart'], ['anrufen → Ich rufe dich morgen an.', 'to call']],
      mistakes: [['Ich anrufe dich.', 'Ich rufe dich an.', 'The prefix goes to the end.']] },
    { id: 'common', title: 'Common separable verbs', objective: 'L10-O1', href: GB + '112-common-separable-verbs-at-a1',
      table: [['einsteigen · aussteigen · umsteigen', 'get on · get off · change (trains)'], ['abholen', 'to pick up'], ['ankommen · abfahren', 'to arrive · to depart'], ['anrufen', 'to call (phone)']] },
    { id: 'stress', title: 'Pronunciation: stress the prefix', objective: 'L10-O1', href: GB + '113-pronunciation-stress-the-prefix',
      text: 'In separable verbs the prefix is stressed: ANkommen, ABfahren, EINsteigen.' },
    { id: 'modal', title: 'With können, the verb stays together', objective: 'L10-O2', href: GB + '114-with-a-modal-verb-the-verb-stays-together',
      text: 'With a modal verb, the separable verb goes to the end in one piece (infinitive).',
      examples: [['Ich kann dich am Bahnhof abholen.', 'I can pick you up at the station.'], ['Kannst du mich morgen anrufen?', 'Can you call me tomorrow?']] },
    { id: 'transport', title: 'Transport and travel', objective: 'L10-O4', href: GB + '115-transport-and-travel',
      table: [['mit dem Bus / Zug / Auto / Fahrrad', 'by bus / train / car / bike (learn as a phrase)'], ['mit der U-Bahn / S-Bahn / Straßenbahn', 'by underground / suburban train / tram'], ['zu Fuß', 'on foot'], ['der Bahnhof · der Flughafen · das Gleis', 'station · airport · platform'], ['pünktlich · die Verspätung', 'on time · delay']],
      examples: [['Wann fährt der Zug ab? – Um 8:12 Uhr von Gleis 11.', 'When does the train leave? – At 8:12 from platform 11.']] },
    { id: 'feelings', title: 'Showing feelings', objective: 'L10-O5', href: GB + '116-showing-feelings-and-understanding',
      table: [['Ich freue mich!', 'I’m happy / looking forward to it!'], ['Schade!', 'What a pity!'], ['Kein Problem.', 'No problem.'], ['Oh nein! / So ein Mist!', 'Oh no! / Damn!']] }
  ];

  const practice = [
    q({ id: 'L10-P-01', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'order', objective: 'L10-O1', instructions: 'Put the words in order.', prompt: 'The train arrives at eight o’clock.', tokens: ['kommt', 'Der', 'Zug', 'an', 'um', 'acht', 'Uhr'], answer: 'Der Zug kommt um acht Uhr an', explanation: 'kommt … an: prefix at the end.', learnHref: GB + '111-how-separable-verbs-work' }),
    q({ id: 'L10-P-02', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'order', objective: 'L10-O1', instructions: 'Put the words in order.', prompt: 'The bus leaves at nine o’clock.', tokens: ['fährt', 'Der', 'Bus', 'ab', 'um', 'neun', 'Uhr'], answer: 'Der Bus fährt um neun Uhr ab', explanation: 'fährt … ab.' }),
    sep('L10-P-03', 'Wann ___ der Zug ___? (ankommen)', [['kommt'], ['an']], 'kommt … an.', 'L10-O3'),
    sep('L10-P-04', 'Ich ___ dich morgen ___. (anrufen)', [['rufe'], ['an']], 'rufe … an.'),
    sep('L10-P-05', 'Wir ___ in Köln ___. (umsteigen)', [['steigen'], ['um']], 'steigen … um.'),
    q({ id: 'L10-P-06', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'mc', objective: 'L10-O1', instructions: 'Choose the correct sentence.', prompt: 'I get off here.', options: ['Ich steige hier aus.', 'Ich aussteige hier.', 'Ich steige aus hier.', 'Ich hier aussteige.'], answer: 'Ich steige hier aus.', explanation: 'The prefix aus goes to the very end.' }),
    q({ id: 'L10-P-07', topic: 'separable-verbs', skill: 'communication', grammar: 'stress', type: 'mc', objective: 'L10-O1', instructions: 'Choose the stressed syllable.', prompt: 'ankommen', options: ['AN-kommen', 'an-KOM-men', 'an-kom-MEN'], answer: 'AN-kommen', explanation: 'Separable prefixes are stressed.', learnHref: GB + '113-pronunciation-stress-the-prefix' }),
    q({ id: 'L10-P-08', topic: 'separable-modal', skill: 'grammar', grammar: 'separable-modal', type: 'order', objective: 'L10-O2', instructions: 'Put the words in order.', prompt: 'I can pick you up.', tokens: ['kann', 'Ich', 'abholen', 'dich'], answer: 'Ich kann dich abholen', explanation: 'kann … abholen (one word at the end).', learnHref: GB + '114-with-a-modal-verb-the-verb-stays-together' }),
    q({ id: 'L10-P-09', topic: 'separable-modal', skill: 'grammar', grammar: 'separable-modal', type: 'mc', objective: 'L10-O2', instructions: 'Choose the correct sentence.', prompt: 'Can you call me?', options: ['Kannst du mich anrufen?', 'Kannst du mich rufen an?', 'Kannst du anrufen mich?', 'Rufst du mich kannst an?'], answer: 'Kannst du mich anrufen?', explanation: 'With können, anrufen stays together at the end.' }),
    q({ id: 'L10-P-10', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'conjugation', objective: 'L10-O1', instructions: 'Write only the verb part (abfahren).', prompt: 'Der Zug … um 10 Uhr ab.', answer: 'fährt', explanation: 'abfahren → er fährt … ab.' }),
    sep('L10-P-11', 'Wo ___ wir ___? (einsteigen)', [['steigen'], ['ein']], 'steigen … ein.'),
    q({ id: 'L10-P-12', topic: 'transport', skill: 'vocabulary', type: 'match', objective: 'L10-O4', instructions: 'Match the transport.', prompt: '', pairs: [['das Auto', 'car'], ['der Zug', 'train'], ['das Flugzeug', 'plane'], ['die Straßenbahn', 'tram'], ['das Fahrrad', 'bicycle']], explanation: 'Means of transport.', learnHref: GB + '115-transport-and-travel' }),
    art('L10-P-13', 'Bahnhof', 'train station', 'der'), art('L10-P-14', 'Fahrkarte', 'ticket', 'die'), art('L10-P-15', 'Flugzeug', 'plane', 'das'),
    q({ id: 'L10-P-16', topic: 'transport', skill: 'vocabulary', type: 'mc', objective: 'L10-O4', instructions: 'Choose the phrase.', prompt: 'on foot', options: ['zu Fuß', 'mit Fuß', 'am Fuß', 'um Fuß'], answer: 'zu Fuß', explanation: 'zu Fuß = on foot.' }),
    q({ id: 'L10-P-17', topic: 'times', skill: 'grammar', grammar: 'question-words', type: 'mc', objective: 'L10-O3', instructions: 'Choose the question word.', prompt: '… fährt der Bus ab? – Um 7 Uhr.', options: ['Wann', 'Wo', 'Wie', 'Wer'], answer: 'Wann', explanation: 'Wann? = When?' }),
    q({ id: 'L10-P-18', topic: 'feelings', skill: 'communication', type: 'mc', objective: 'L10-O5', instructions: 'Choose the reaction.', prompt: 'Der Zug hat eine Stunde Verspätung. – …', options: ['Oh nein!', 'Ich freue mich!', 'Guten Appetit!', 'Gute Idee!'], answer: 'Oh nein!', explanation: 'Bad news → Oh nein! / So ein Mist!', learnHref: GB + '116-showing-feelings-and-understanding' }),
    q({ id: 'L10-P-19', topic: 'feelings', skill: 'communication', type: 'mc', objective: 'L10-O5', instructions: 'Choose the reaction.', prompt: 'Ich komme morgen zu dir! – Super, …', options: ['ich freue mich!', 'schade!', 'so ein Mist!', 'oh nein!'], answer: 'ich freue mich!', explanation: 'Good news → Ich freue mich!' }),
    q({ id: 'L10-P-20', topic: 'feelings', skill: 'communication', type: 'mc', objective: 'L10-O5', instructions: 'Choose the reaction.', prompt: 'Ich kann leider nicht kommen. – …', options: ['Schade!', 'Toll!', 'Ich freue mich!', 'Gute Idee!'], answer: 'Schade!', explanation: 'Schade! = What a pity!' }),
    q({ id: 'L10-P-21', topic: 'transport', skill: 'vocabulary', type: 'match', objective: 'L10-O3', instructions: 'Match.', prompt: '', pairs: [['pünktlich', 'on time'], ['spät', 'late'], ['früh', 'early'], ['die Verspätung', 'delay'], ['die Reise', 'trip']], explanation: 'Travel words.' }),
    q({ id: 'L10-P-22', topic: 'separable-verbs', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L10-O1', instructions: 'Write it in German.', prompt: 'The train arrives at 10 o’clock.', answer: 'Der Zug kommt um zehn Uhr an.', accept: ['Der Zug kommt um 10 Uhr an.'], explanation: 'kommt … an.' }),
    q({ id: 'L10-P-23', topic: 'separable-verbs', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L10-O1', instructions: 'Write it in German (informal).', prompt: 'I’ll pick you up.', answer: 'Ich hole dich ab.', explanation: 'abholen → Ich hole dich ab.' }),
    q({ id: 'L10-P-24', topic: 'transport', skill: 'writing', type: 'translate', objective: 'L10-O4', instructions: 'Write it in German.', prompt: 'We travel by train.', answer: 'Wir fahren mit dem Zug.', accept: ['Wir reisen mit dem Zug.'], explanation: 'mit dem Zug = by train.' }),
    q({ id: 'L10-P-25', topic: 'times', skill: 'listening', type: 'listen', objective: 'L10-O3', instructions: 'Listen to the announcement.', prompt: 'Which platform?', audio: 'Der Zug nach Berlin fährt heute von Gleis sieben ab.', options: ['7', '17', '70', '1'], answer: '7', explanation: 'Gleis sieben.' }),
    q({ id: 'L10-P-26', topic: 'times', skill: 'listening', type: 'listen', objective: 'L10-O3', instructions: 'Listen and answer.', prompt: 'When does the speaker arrive?', audio: 'Mein Zug hat zwanzig Minuten Verspätung. Ich komme um halb neun an.', options: ['8:30', '9:30', '8:20', '9:20'], answer: '8:30', explanation: 'um halb neun = 8:30.' }),
    q({ id: 'L10-P-27', topic: 'feelings', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L10-O5', instructions: 'Listen and write.', prompt: '', audio: 'Ich rufe dich an. Kein Problem.', answer: 'Ich rufe dich an. Kein Problem.', accept: ['Ich rufe dich an, kein Problem.'], explanation: 'rufe … an.' }),
    q({ id: 'L10-P-28', topic: 'transport', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L10-O4', instructions: 'Write the verb form.', prompt: 'du + fliegen →', answer: 'fliegst', explanation: 'du fliegst.' }),
    sep('L10-P-29', 'Steigst du hier ___? – Nein, ich steige in Hamburg aus.', [['aus']], 'aussteigen → steigst … aus.'),
    q({ id: 'L10-P-30', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'mc', objective: 'L10-O3', instructions: 'Choose the prefix.', prompt: 'Wann kommst du …? (arrive)', options: ['an', 'ab', 'aus', 'ein'], answer: 'an', explanation: 'ankommen → Wann kommst du an?' })
  ];

  const DIALOG = 'Hallo Mama! Mein Zug hat Verspätung. Ich komme erst um neun Uhr an. – Kein Problem. Ich hole dich am Bahnhof ab. – Super, danke!';
  const READ = 'Ihre Reise\nAbfahrt: München Hbf 08:12, Gleis 11\nUmsteigen: Frankfurt, 10:05\nAnkunft: Köln Hbf 12:44';
  const apply = [
    q({ id: 'L10-A-01', topic: 'times', skill: 'listening', type: 'listen', objective: 'L10-O3', instructions: 'Listen to the phone call.', prompt: 'When does she arrive?', audio: DIALOG, options: ['at 9 o’clock', 'at 8 o’clock', 'at 10 o’clock', 'at half past nine'], answer: 'at 9 o’clock', explanation: 'erst um neun Uhr.' }),
    q({ id: 'L10-A-02', topic: 'separable-verbs', skill: 'listening', type: 'listen', objective: 'L10-O1', instructions: 'Listen again.', prompt: 'Who picks her up?', audio: DIALOG, options: ['her mother', 'a taxi', 'a friend', 'nobody'], answer: 'her mother', explanation: 'Mama: Ich hole dich am Bahnhof ab.' }),
    q({ id: 'L10-A-03', topic: 'times', skill: 'reading', type: 'reading', objective: 'L10-O3', instructions: 'Read the travel plan (Abfahrt = departure, Ankunft = arrival).', passage: READ, prompt: 'Wann fährt der Zug in München ab?', options: ['um 8:12 Uhr', 'um 12:44 Uhr', 'um 10:05 Uhr'], answer: 'um 8:12 Uhr', explanation: 'Abfahrt: 08:12.' }),
    q({ id: 'L10-A-04', topic: 'separable-verbs', skill: 'reading', type: 'reading', objective: 'L10-O1', instructions: 'Read the travel plan.', passage: READ, prompt: 'Wo steigt man um?', options: ['in Frankfurt', 'in Köln', 'in München'], answer: 'in Frankfurt', explanation: 'Umsteigen: Frankfurt.' }),
    q({ id: 'L10-A-05', topic: 'transport', skill: 'reading', type: 'reading', objective: 'L10-O4', instructions: 'Read the travel plan.', passage: READ, prompt: 'Das Gleis in München ist …', options: ['Gleis 11', 'Gleis 12', 'Gleis 8'], answer: 'Gleis 11', explanation: 'Gleis 11.' }),
    q({ id: 'L10-A-06', topic: 'separable-verbs', skill: 'writing', type: 'writing', objective: 'L10-O1', instructions: 'Write a message to a friend (4–5 sentences).', prompt: 'Your train is late. Say when you arrive and ask if they can pick you up.',
      rubric: ['I use ankommen with the prefix at the end.', 'I use können + abholen at the end.', 'I give a time with um.', 'I add a feeling (Ich freue mich! / So ein Mist!).'],
      model: 'Hallo Jonas,\nso ein Mist – mein Zug hat Verspätung! Ich komme erst um 18:30 Uhr in Köln an. Kannst du mich am Bahnhof abholen? Ich freue mich!\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L10-A-07', topic: 'feelings', skill: 'speaking', type: 'speaking', objective: 'L10-O5', instructions: 'Phone call (out loud) with a friend about your arrival.', prompt: 'Say when you arrive, ask to be picked up, react to the answer.',
      rubric: ['I said: Ich komme um … an.', 'I asked: Kannst du mich abholen?', 'I reacted with a feeling phrase.', 'I said the transport (mit dem Zug / Bus …).'],
      model: '– Hallo! Ich komme morgen mit dem Zug. Ich komme um 14 Uhr an.\n– Super, ich freue mich!\n– Kannst du mich am Bahnhof abholen?\n– Kein Problem!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L10-T-01', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'order', objective: 'L10-O1', instructions: 'Put the words in order.', prompt: 'He calls tomorrow.', tokens: ['ruft', 'Er', 'an', 'morgen'], answer: 'Er ruft morgen an', explanation: 'ruft … an.' }),
    sep('L10-T-02', 'Der Bus ___ um 7 Uhr ___. (abfahren)', [['fährt'], ['ab']], 'fährt … ab.', 'L10-O3'),
    sep('L10-T-03', 'Wann ___ ihr in Wien ___? (ankommen)', [['kommt'], ['an']], 'ihr kommt … an.', 'L10-O3'),
    q({ id: 'L10-T-04', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'mc', objective: 'L10-O1', instructions: 'Choose the correct sentence.', prompt: 'We change trains in Mannheim.', options: ['Wir steigen in Mannheim um.', 'Wir umsteigen in Mannheim.', 'Wir steigen um in Mannheim.', 'Wir in Mannheim umsteigen.'], answer: 'Wir steigen in Mannheim um.', explanation: 'um at the very end.' }),
    q({ id: 'L10-T-05', topic: 'separable-modal', skill: 'grammar', grammar: 'separable-modal', type: 'order', objective: 'L10-O2', instructions: 'Put the words in order.', prompt: 'Can you pick me up?', tokens: ['Kannst', 'du', 'mich', 'abholen'], answer: 'Kannst du mich abholen', explanation: 'kannst … abholen.' }),
    q({ id: 'L10-T-06', topic: 'separable-verbs', skill: 'communication', grammar: 'stress', type: 'mc', objective: 'L10-O1', instructions: 'Choose the stressed syllable.', prompt: 'einsteigen', options: ['EIN-steigen', 'ein-STEI-gen', 'ein-stei-GEN'], answer: 'EIN-steigen', explanation: 'Stress the prefix.' }),
    art('L10-T-07', 'Zug', 'train', 'der'),
    q({ id: 'L10-T-08', topic: 'transport', skill: 'vocabulary', type: 'match', objective: 'L10-O4', instructions: 'Match.', prompt: '', pairs: [['der Flughafen', 'airport'], ['das Gleis', 'platform'], ['die Fahrkarte', 'ticket'], ['der Bus', 'bus'], ['das Taxi', 'taxi']], explanation: 'Travel words.' }),
    q({ id: 'L10-T-09', topic: 'feelings', skill: 'communication', type: 'mc', objective: 'L10-O5', instructions: 'Choose the reaction.', prompt: 'Ich habe zwei Tickets für das Konzert! – …', options: ['Ich freue mich!', 'Schade!', 'So ein Mist!', 'Oh nein!'], answer: 'Ich freue mich!', explanation: 'Good news → Ich freue mich!' }),
    q({ id: 'L10-T-10', topic: 'times', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L10-O3', instructions: 'Write it in German.', prompt: 'When does the plane arrive?', answer: 'Wann kommt das Flugzeug an?', explanation: 'Wann kommt … an?' }),
    q({ id: 'L10-T-11', topic: 'separable-verbs', skill: 'writing', type: 'translate', objective: 'L10-O1', instructions: 'Write it in German.', prompt: 'Where do I get off?', answer: 'Wo steige ich aus?', explanation: 'aussteigen → Wo steige ich aus?' }),
    q({ id: 'L10-T-12', topic: 'transport', skill: 'vocabulary', type: 'mc', objective: 'L10-O4', instructions: 'Choose the correct sentence.', prompt: 'I go on foot.', options: ['Ich gehe zu Fuß.', 'Ich fahre zu Fuß.', 'Ich gehe mit Fuß.', 'Ich gehe am Fuß.'], answer: 'Ich gehe zu Fuß.', explanation: 'zu Fuß gehen.' }),
    q({ id: 'L10-T-13', topic: 'separable-verbs', skill: 'listening', type: 'listen', objective: 'L10-O1', instructions: 'Listen to the announcement.', prompt: 'What should passengers do?', audio: 'Bitte hier aussteigen. Der Zug endet hier.', options: ['get off', 'get on', 'change trains', 'buy a ticket'], answer: 'get off', explanation: 'aussteigen = get off.' }),
    q({ id: 'L10-T-14', topic: 'transport', skill: 'reading', type: 'reading', objective: 'L10-O4', instructions: 'Read and answer.', passage: 'Lukas fährt jeden Tag mit dem Fahrrad.\nAm Wochenende fährt er mit dem Auto.', prompt: 'Wie fährt Lukas am Wochenende?', options: ['mit dem Auto', 'mit dem Fahrrad', 'zu Fuß'], answer: 'mit dem Auto', explanation: 'Am Wochenende fährt er mit dem Auto.' }),
    q({ id: 'L10-T-15', topic: 'separable-verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'conjugation', objective: 'L10-O1', instructions: 'Write only the verb part (abfahren).', prompt: 'Der Zug … pünktlich ab.', answer: 'fährt', explanation: 'fährt … ab.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
