// Lektion 20 · "Das Team sieht sehr sympathisch aus!" (Momente A1.2, Modul 7)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 21.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 20, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const INS = GB + '211-inseparable-prefixes-no-ge-', TEST = GB + '212-separable-or-inseparable-the-test', PEOPLE = GB + '213-describing-people', UN = GB + '214-the-prefix-un--makes-opposites', REACT = GB + '215-reacting-to-what-people-say';
  const part = (id, prompt, a, ex) => q({ id, topic: 'no-ge', skill: 'grammar', grammar: 'past-participle', type: 'translate', objective: 'L20-O1', instructions: 'Write the past participle.', prompt, answer: a, explanation: ex, learnHref: INS });
  const perf = (id, prompt, a, ex) => q({ id, topic: 'no-ge', skill: 'grammar', grammar: 'perfekt-inseparable', type: 'gap', objective: 'L20-O1', instructions: 'Put it into the Perfekt.', prompt, answer: a, explanation: ex, learnHref: INS });
  const sep = (id, prompt, a, ex) => q({ id, topic: 'sep-test', skill: 'grammar', grammar: 'separable-inseparable', type: 'mc', objective: 'L20-O2', instructions: 'Separable or inseparable?', prompt, options: ['separable', 'inseparable'], answer: a, explanation: ex, learnHref: TEST });

  const objectives = [
    { id: 'L20-O1', text: 'Form the Perfekt of verbs with be-, ver-, er-, ge-, ent-, emp-, zer- (no ge-) and of -ieren verbs.', kind: 'grammar' },
    { id: 'L20-O2', text: 'Tell separable and inseparable verbs apart.', kind: 'grammar' },
    { id: 'L20-O3', text: 'Describe appearance (groß, schlank, Haare, Brille, Bart) and use aussehen.', kind: 'communication' },
    { id: 'L20-O4', text: 'Describe character and make opposites with un-.', kind: 'communication' },
    { id: 'L20-O5', text: 'React to what people say (Wirklich? · Das finde ich auch. · Das glaube ich nicht.).', kind: 'communication' }
  ];

  const learn = [
    { id: 'no-ge', title: 'Inseparable prefixes: no ge-', objective: 'L20-O1', href: INS,
      text: 'Verbs with be-, ver-, er-, ge-, ent-, emp-, zer- never split and get no ge- in the participle. Regular ones end in -t, irregular ones in -en. -ieren verbs also have no ge-.',
      table: [['besuchen → hat besucht', 'regular: -t'], ['bezahlen → hat bezahlt · erzählen → hat erzählt', ''], ['verstehen → hat verstanden', 'irregular: -en'], ['bekommen → hat bekommen · vergessen → hat vergessen', 'looks like the infinitive'], ['gefallen → hat gefallen', ''], ['reparieren → hat repariert · studieren → hat studiert', '-ieren: no ge-']],
      mistakes: [['Ich habe meine Oma gebesucht.', 'Ich habe meine Oma besucht.', 'be- verbs: no ge-.'], ['Ich habe das nicht geverstanden.', 'Ich habe das nicht verstanden.', 'ver- verbs: no ge-.']] },
    { id: 'test', title: 'Separable or inseparable? The test', objective: 'L20-O2', href: TEST,
      text: 'If the prefix is a real word (an, auf, mit, ein, aus …) the verb is separable: stress on the prefix, ge in the middle (angerufen). If it is just a syllable (be-, ver-, er- …) it is inseparable: stress on the verb, no ge- (verstanden).',
      table: [['anrufen → Ich rufe dich an. → angerufen', 'separable'], ['verstehen → Ich verstehe dich. → verstanden', 'inseparable'], ['einkaufen → eingekauft · aufstehen → aufgestanden', 'separable'], ['bekommen → bekommen · erzählen → erzählt', 'inseparable']] },
    { id: 'appearance', title: 'Describing people: appearance', objective: 'L20-O3', href: PEOPLE,
      table: [['Er ist groß / klein / schlank / jung / alt.', 'sein + adjective'], ['Sie hat lange / kurze / blonde / dunkle Haare.', 'learn as phrases'], ['Er hat einen Bart / eine Brille.', 'beard / glasses'], ['Du siehst heute toll aus!', 'aussehen: du siehst … aus, er sieht … aus'], ['Wie sieht er aus?', 'What does he look like?']] },
    { id: 'character', title: 'Character and the prefix un-', objective: 'L20-O4', href: UN,
      text: 'Add un- to many adjectives to make the opposite. It sounds more natural than nicht.',
      table: [['freundlich → unfreundlich', 'friendly → unfriendly'], ['pünktlich → unpünktlich', 'punctual → late'], ['geduldig → ungeduldig', 'patient → impatient'], ['höflich → unhöflich · sympathisch → unsympathisch', 'polite / likeable → opposite'], ['nett · lustig · ernst · fleißig · faul · ehrlich · kreativ', 'nice · funny · serious · hard-working · lazy · honest · creative']] },
    { id: 'react', title: 'Reacting to what people say', objective: 'L20-O5', href: REACT,
      table: [['Wirklich? · Echt? · Das gibt’s doch nicht!', 'surprise'], ['Das finde ich auch. · Stimmt!', 'agreement'], ['Das glaube ich nicht.', 'doubt']] }
  ];

  const practice = [
    part('L20-P-01', 'besuchen →', 'besucht', 'be- → no ge-: besucht.'),
    part('L20-P-02', 'verstehen →', 'verstanden', 'ver- → no ge-: verstanden.'),
    part('L20-P-03', 'erzählen →', 'erzählt', 'er- → no ge-: erzählt.'),
    part('L20-P-04', 'reparieren →', 'repariert', '-ieren → no ge-: repariert.'),
    q({ id: 'L20-P-05', topic: 'no-ge', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L20-O1', instructions: 'Choose the past participle.', prompt: 'bekommen →', options: ['bekommen', 'gebekommen', 'bekommt', 'gekommen'], answer: 'bekommen', explanation: 'be- + irregular: bekommen (same as the infinitive).', learnHref: INS }),
    q({ id: 'L20-P-06', topic: 'no-ge', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L20-O1', instructions: 'Choose the past participle.', prompt: 'vergessen →', options: ['vergessen', 'gevergessen', 'vergesst', 'vergissen'], answer: 'vergessen', explanation: 'vergessen → vergessen.' }),
    perf('L20-P-07', 'Ich verstehe den Film nicht. → Ich ___ den Film nicht ___.', [['habe'], ['verstanden']], 'habe … verstanden.'),
    perf('L20-P-08', 'Wir besuchen Oma. → Wir ___ Oma ___.', [['haben'], ['besucht']], 'haben … besucht.'),
    perf('L20-P-09', 'Der Film gefällt mir. → Der Film ___ mir ___.', [['hat'], ['gefallen']], 'hat … gefallen.'),
    perf('L20-P-10', 'Sie bezahlt die Rechnung. → Sie ___ die Rechnung ___.', [['hat'], ['bezahlt']], 'hat … bezahlt.'),
    q({ id: 'L20-P-11', topic: 'no-ge', skill: 'grammar', grammar: 'perfekt-inseparable', type: 'order', objective: 'L20-O1', instructions: 'Put the words in order.', prompt: 'At the weekend I visited my parents.', tokens: ['Am', 'Wochenende', 'habe', 'ich', 'meine', 'Eltern', 'besucht'], answer: 'Am Wochenende habe ich meine Eltern besucht', explanation: 'Time first → habe second → participle last.' }),
    sep('L20-P-12', 'anrufen', 'separable', 'an is a real word → separable (angerufen).'),
    sep('L20-P-13', 'verstehen', 'inseparable', 'ver- is just a syllable → inseparable (verstanden).'),
    sep('L20-P-14', 'mitkommen', 'separable', 'mit → separable (mitgekommen).'),
    q({ id: 'L20-P-15', topic: 'sep-test', skill: 'grammar', grammar: 'separable-inseparable', type: 'match', objective: 'L20-O2', instructions: 'Match the participles.', prompt: '', pairs: [['einkaufen', 'eingekauft'], ['aufstehen', 'aufgestanden'], ['erklären', 'erklärt'], ['bekommen', 'bekommen'], ['studieren', 'studiert']], explanation: 'Separable: ge in the middle; inseparable / -ieren: no ge-.', learnHref: TEST }),
    q({ id: 'L20-P-16', topic: 'appearance', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L20-O3', instructions: 'Fill in aussehen.', prompt: 'Du ___ müde ___.', answer: [['siehst'], ['aus']], explanation: 'du siehst … aus (e → ie).', learnHref: PEOPLE }),
    q({ id: 'L20-P-17', topic: 'appearance', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L20-O3', instructions: 'Fill in aussehen.', prompt: 'Er ___ sehr sympathisch ___.', answer: [['sieht'], ['aus']], explanation: 'er sieht … aus.' }),
    q({ id: 'L20-P-18', topic: 'appearance', skill: 'vocabulary', type: 'match', objective: 'L20-O3', instructions: 'Match.', prompt: '', pairs: [['die Brille', 'glasses'], ['der Bart', 'beard'], ['die Haare', 'hair'], ['schlank', 'slim'], ['blond', 'blond']], explanation: 'Appearance.', learnHref: PEOPLE }),
    q({ id: 'L20-P-19', topic: 'appearance', skill: 'grammar', grammar: 'describing-people', type: 'mc', objective: 'L20-O3', instructions: 'haben or sein?', prompt: 'Sie … lange Haare.', options: ['hat', 'ist'], answer: 'hat', explanation: 'Haare / Brille / Bart → haben.' }),
    q({ id: 'L20-P-20', topic: 'character', skill: 'vocabulary', type: 'translate', objective: 'L20-O4', instructions: 'Make the opposite with un-.', prompt: 'höflich →', answer: 'unhöflich', explanation: 'un- + höflich.', learnHref: UN }),
    q({ id: 'L20-P-21', topic: 'character', skill: 'vocabulary', type: 'translate', objective: 'L20-O4', instructions: 'Make the opposite with un-.', prompt: 'geduldig →', answer: 'ungeduldig', explanation: 'un- + geduldig.' }),
    q({ id: 'L20-P-22', topic: 'character', skill: 'vocabulary', type: 'match', objective: 'L20-O4', instructions: 'Match the character words.', prompt: '', pairs: [['fleißig', 'hard-working'], ['faul', 'lazy'], ['ehrlich', 'honest'], ['lustig', 'funny'], ['ernst', 'serious']], explanation: 'Character.', learnHref: UN }),
    q({ id: 'L20-P-23', topic: 'character', skill: 'vocabulary', type: 'mc', objective: 'L20-O4', instructions: 'Choose the opposite.', prompt: 'fleißig ↔ ?', options: ['faul', 'ehrlich', 'kreativ', 'nett'], answer: 'faul', explanation: 'fleißig ↔ faul.' }),
    q({ id: 'L20-P-24', topic: 'react', skill: 'communication', type: 'mc', objective: 'L20-O5', instructions: 'Choose a reaction showing surprise.', prompt: '– Mein Chef hat mir 500 Euro Bonus gegeben! – …', options: ['Wirklich? Das gibt’s doch nicht!', 'Das finde ich auch.', 'Mach ich!', 'Gute Besserung!'], answer: 'Wirklich? Das gibt’s doch nicht!', explanation: 'Surprise: Wirklich? · Echt? · Das gibt’s doch nicht!', learnHref: REACT }),
    q({ id: 'L20-P-25', topic: 'no-ge', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L20-O1', instructions: 'Write it in German.', prompt: 'Sorry, I didn’t understand that.', answer: 'Entschuldigung, ich habe das nicht verstanden.', accept: ['Entschuldigung, das habe ich nicht verstanden.'], explanation: 'habe … verstanden.' }),
    q({ id: 'L20-P-26', topic: 'appearance', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L20-O3', instructions: 'Write it in German.', prompt: 'He is tall and has glasses.', answer: 'Er ist groß und hat eine Brille.', explanation: 'ist groß · hat eine Brille.' }),
    q({ id: 'L20-P-27', topic: 'appearance', skill: 'listening', type: 'listen', objective: 'L20-O3', instructions: 'Listen and answer.', prompt: 'What does the new colleague look like?', audio: 'Unsere neue Kollegin ist klein und schlank. Sie hat kurze, dunkle Haare und eine Brille.', options: ['short, slim, short dark hair, glasses', 'tall, blond, long hair', 'short, with a beard', 'tall, slim, no glasses'], answer: 'short, slim, short dark hair, glasses', explanation: 'klein, schlank, kurze dunkle Haare, Brille.' }),
    q({ id: 'L20-P-28', topic: 'character', skill: 'listening', type: 'listen', objective: 'L20-O4', instructions: 'Listen and answer.', prompt: 'What is the problem with Mark?', audio: 'Mark ist nett und lustig, aber er ist oft unpünktlich.', options: ['He is often late.', 'He is unfriendly.', 'He is lazy.', 'He is impatient.'], answer: 'He is often late.', explanation: 'unpünktlich = not on time.' }),
    q({ id: 'L20-P-29', topic: 'no-ge', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L20-O1', instructions: 'Listen and write.', prompt: '', audio: 'Ich habe mein Handy vergessen.', answer: 'Ich habe mein Handy vergessen.', explanation: 'habe … vergessen.' }),
    q({ id: 'L20-P-30', topic: 'no-ge', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L20-O1', instructions: 'Choose the correct sentence.', prompt: 'Which sentence is correct?', options: ['Er hat viel erzählt.', 'Er hat viel geerzählt.', 'Er ist viel erzählt.', 'Er hat viel erzählen.'], answer: 'Er hat viel erzählt.', explanation: 'erzählen → erzählt (no ge-).' })
  ];

  const DIALOG = '– Und, wie ist dein neues Team? – Sehr nett! Meine Chefin ist groß und hat lange, blonde Haare. Sie ist sehr freundlich und geduldig. – Und deine Kollegen? – Tom ist lustig, aber ein bisschen unpünktlich.';
  const READ = 'Liebe Oma,\nam Samstag haben wir Tante Rosa besucht. Sie hat uns viel von ihrer Reise erzählt.\nIch habe ein Buch bekommen. Es hat mir sehr gut gefallen!\nLeider habe ich meine Jacke bei ihr vergessen.\nDein Leo';
  const apply = [
    q({ id: 'L20-A-01', topic: 'appearance', skill: 'listening', type: 'listen', objective: 'L20-O3', instructions: 'Listen to the conversation.', prompt: 'What does the boss look like?', audio: DIALOG, options: ['tall with long blond hair', 'short with dark hair', 'tall with a beard', 'short with glasses'], answer: 'tall with long blond hair', explanation: 'groß, lange blonde Haare.' }),
    q({ id: 'L20-A-02', topic: 'character', skill: 'listening', type: 'listen', objective: 'L20-O4', instructions: 'Listen again.', prompt: 'What is Tom like?', audio: DIALOG, options: ['funny, but a bit unpunctual', 'friendly and patient', 'serious and hard-working', 'unfriendly'], answer: 'funny, but a bit unpunctual', explanation: 'lustig, aber unpünktlich.' }),
    q({ id: 'L20-A-03', topic: 'no-ge', skill: 'reading', type: 'reading', objective: 'L20-O1', instructions: 'Read the letter.', passage: READ, prompt: 'Wen haben sie am Samstag besucht?', options: ['Tante Rosa', 'Oma', 'Leos Freunde'], answer: 'Tante Rosa', explanation: 'wir haben Tante Rosa besucht.' }),
    q({ id: 'L20-A-04', topic: 'no-ge', skill: 'reading', type: 'reading', objective: 'L20-O1', instructions: 'Read the letter.', passage: READ, prompt: 'Was hat Leo bekommen?', options: ['ein Buch', 'eine Jacke', 'eine Reise'], answer: 'ein Buch', explanation: 'Ich habe ein Buch bekommen.' }),
    q({ id: 'L20-A-05', topic: 'no-ge', skill: 'reading', type: 'reading', objective: 'L20-O1', instructions: 'Read the letter.', passage: READ, prompt: 'Was hat Leo vergessen?', options: ['seine Jacke', 'sein Buch', 'sein Handy'], answer: 'seine Jacke', explanation: 'meine Jacke … vergessen.' }),
    q({ id: 'L20-A-06', topic: 'character', skill: 'writing', type: 'writing', objective: 'L20-O4', instructions: 'Describe a person you know (5–6 sentences).', prompt: 'Appearance (3 sentences) and character (2–3 sentences, one with un-). Add one thing you did together (Perfekt without ge-).',
      rubric: ['I describe appearance with sein and haben.', 'I use aussehen correctly.', 'I describe character, one adjective with un-.', 'I use a Perfekt without ge- (besucht, erzählt …).'],
      model: 'Meine Freundin Aylin ist groß und schlank. Sie hat lange, dunkle Haare und eine Brille. Sie sieht immer toll aus. Sie ist sehr lustig und ehrlich, aber manchmal ungeduldig. Letzte Woche hat sie mich besucht und wir haben viel erzählt.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L20-A-07', topic: 'react', skill: 'speaking', type: 'speaking', objective: 'L20-O5', instructions: 'Describe two people out loud: one you like and one character from a film.', prompt: 'Then tell what you did last weekend using three verbs without ge- (besuchen, bekommen, vergessen …). A partner reacts.',
      rubric: ['I described appearance and character.', 'I used one un- adjective.', 'I used three participles without ge-.', 'I reacted: Wirklich? / Das finde ich auch. / Das glaube ich nicht.'],
      model: 'Mein Bruder ist groß und hat einen Bart. Er ist sehr fleißig und nett. Am Wochenende habe ich ihn besucht. Ich habe ein Geschenk bekommen, aber ich habe mein Handy bei ihm vergessen! – Wirklich? Das gibt’s doch nicht!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    part('L20-T-01', 'bezahlen →', 'bezahlt', 'be- → no ge-: bezahlt.'),
    part('L20-T-02', 'studieren →', 'studiert', '-ieren → no ge-: studiert.'),
    q({ id: 'L20-T-03', topic: 'no-ge', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L20-O1', instructions: 'Choose the past participle.', prompt: 'gefallen →', options: ['gefallen', 'gegefallen', 'gefällt', 'gefallt'], answer: 'gefallen', explanation: 'ge- is an inseparable prefix → gefallen.' }),
    perf('L20-T-04', 'Er repariert das Fahrrad. → Er ___ das Fahrrad ___.', [['hat'], ['repariert']], 'hat … repariert.'),
    perf('L20-T-05', 'Ich vergesse den Termin. → Ich ___ den Termin ___.', [['habe'], ['vergessen']], 'habe … vergessen.'),
    sep('L20-T-06', 'bekommen', 'inseparable', 'be- → inseparable.'),
    sep('L20-T-07', 'einkaufen', 'separable', 'ein → separable (eingekauft).'),
    q({ id: 'L20-T-08', topic: 'sep-test', skill: 'grammar', grammar: 'separable-inseparable', type: 'mc', objective: 'L20-O2', instructions: 'Choose the past participle.', prompt: 'anrufen →', options: ['angerufen', 'geanrufen', 'anrufen', 'angeruft'], answer: 'angerufen', explanation: 'Separable: an-ge-rufen.' }),
    q({ id: 'L20-T-09', topic: 'appearance', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L20-O3', instructions: 'Fill in aussehen.', prompt: 'Ihr ___ heute toll ___!', answer: [['seht'], ['aus']], explanation: 'ihr seht … aus.' }),
    q({ id: 'L20-T-10', topic: 'character', skill: 'vocabulary', type: 'translate', objective: 'L20-O4', instructions: 'Make the opposite with un-.', prompt: 'freundlich →', answer: 'unfreundlich', explanation: 'un- + freundlich.' }),
    q({ id: 'L20-T-11', topic: 'character', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L20-O4', instructions: 'Write it in German.', prompt: 'My colleague is very patient.', answer: 'Mein Kollege ist sehr geduldig.', accept: ['Meine Kollegin ist sehr geduldig.'], explanation: 'geduldig = patient.' }),
    q({ id: 'L20-T-12', topic: 'no-ge', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L20-O1', instructions: 'Write it in German.', prompt: 'I liked the film very much.', answer: 'Der Film hat mir sehr gut gefallen.', explanation: 'gefallen: thing = subject; hat … gefallen.' }),
    q({ id: 'L20-T-13', topic: 'appearance', skill: 'listening', type: 'listen', objective: 'L20-O3', instructions: 'Listen and answer.', prompt: 'What does her brother look like?', audio: 'Mein Bruder ist sehr groß. Er hat einen Bart und kurze Haare.', options: ['very tall, beard, short hair', 'small, glasses, long hair', 'tall, blond, no beard', 'slim, long hair, glasses'], answer: 'very tall, beard, short hair', explanation: 'sehr groß, Bart, kurze Haare.' }),
    q({ id: 'L20-T-14', topic: 'react', skill: 'reading', type: 'reading', objective: 'L20-O5', instructions: 'Read and answer.', passage: '– Ich finde, unser neuer Chef ist sehr sympathisch.\n– Das finde ich auch! Er ist immer freundlich.', prompt: 'Wie reagiert die zweite Person?', options: ['Sie stimmt zu.', 'Sie ist überrascht.', 'Sie glaubt es nicht.'], answer: 'Sie stimmt zu.', explanation: 'Das finde ich auch = agreement.' }),
    q({ id: 'L20-T-15', topic: 'react', skill: 'vocabulary', type: 'match', objective: 'L20-O5', instructions: 'Match.', prompt: '', pairs: [['Echt?', 'Really?'], ['Stimmt!', 'That’s right!'], ['Das glaube ich nicht.', 'I don’t believe that.'], ['sympathisch', 'likeable'], ['pünktlich', 'on time']], explanation: 'Reactions and character words.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
