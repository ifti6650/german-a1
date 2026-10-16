// Lektion 19 · "Jetzt sei doch nicht gleich sauer!" (Momente A1.2, Modul 7)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 20.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 19, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const DU = GB + '201-the-du-imperative', IHR = GB + '202-the-ihr-imperative', SOFT = GB + '203-making-requests-friendlier-bitte-doch-mal', COMP = GB + '204-complaining-and-reacting', PRON = GB + '205-all-personal-pronouns';
  const du = (id, prompt, a, ex, acc) => q({ id, topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'translate', objective: 'L19-O1', instructions: 'Make a du-imperative.', prompt, answer: a, accept: acc, explanation: ex, learnHref: DU });
  const acc = (id, prompt, a, ex, opts) => q({ id, topic: 'pronouns', skill: 'grammar', grammar: 'accusative-pronouns', type: 'mc', objective: 'L19-O4', instructions: 'Choose the pronoun.', prompt, options: opts, answer: a, explanation: ex, learnHref: PRON });

  const objectives = [
    { id: 'L19-O1', text: 'Form the du-imperative (du-form − du − -st), incl. e→i verbs, a→ä verbs, separable verbs and Sei!', kind: 'grammar' },
    { id: 'L19-O2', text: 'Form the ihr-imperative (ihr-form − ihr) and compare du / ihr / Sie.', kind: 'grammar' },
    { id: 'L19-O3', text: 'Soften requests with bitte, mal and doch.', kind: 'communication' },
    { id: 'L19-O4', text: 'Use all personal pronouns: accusative mich, dich, ihn, sie, es, uns, euch — and choose accusative or dative.', kind: 'grammar' },
    { id: 'L19-O5', text: 'Name housework, complain and react to complaints.', kind: 'communication' }
  ];

  const learn = [
    { id: 'du', title: 'The du-imperative', objective: 'L19-O1', href: DU,
      text: 'Take the du-form, remove du and the ending -st, put the verb first. e → i stays (nimm, hilf, lies); a → ä disappears (fahr, schlaf). Separable prefixes go to the end. sein → Sei!',
      table: [['du kommst → Komm!', 'Come!'], ['du räumst auf → Räum dein Zimmer auf!', 'separable'], ['du nimmst → Nimm den Schirm!', 'e → i stays'], ['du fährst → Fahr langsam!', 'a → ä disappears'], ['du bist → Sei leise!', 'irregular']],
      mistakes: [['Fähr langsam!', 'Fahr langsam!', 'The a → ä change disappears in the du-imperative.'], ['Nehm den Schirm!', 'Nimm den Schirm!', 'The e → i change stays.']] },
    { id: 'ihr', title: 'The ihr-imperative · all three side by side', objective: 'L19-O2', href: IHR,
      text: 'ihr-imperative: take the ihr-form and remove ihr. Nothing else changes.',
      table: [['kommen', 'Komm! · Kommt! · Kommen Sie!'], ['nehmen', 'Nimm! · Nehmt! · Nehmen Sie!'], ['aufräumen', 'Räum auf! · Räumt auf! · Räumen Sie auf!'], ['sein', 'Sei! · Seid! · Seien Sie!']] },
    { id: 'soft', title: 'Friendlier requests: bitte, mal, doch', objective: 'L19-O3', href: SOFT,
      table: [['Komm bitte!', 'bitte = please'], ['Hilf mir mal!', 'mal = just (casual)'], ['Komm doch mit!', 'doch = why don’t you … (encouraging)'], ['Sei doch nicht sauer!', 'doch = come on … (slightly impatient)'], ['Kannst du bitte den Müll rausbringen?', 'a question is even softer']] },
    { id: 'pronouns', title: 'All personal pronouns', objective: 'L19-O4', href: PRON,
      text: 'The verb or preposition decides the case: normal verbs with an object → accusative (Ich besuche dich). helfen, gefallen, gehören, danken, schmecken and dative prepositions → dative (Ich helfe dir).',
      table: [['ich · mich · mir', 'du · dich · dir'], ['er · ihn · ihm', 'sie · sie · ihr'], ['es · es · ihm', 'wir · uns · uns'], ['ihr · euch · euch', 'sie/Sie · sie/Sie · ihnen/Ihnen']] },
    { id: 'housework', title: 'Housework, complaining and reacting', objective: 'L19-O5', href: COMP,
      table: [['aufräumen · putzen · spülen · Wäsche waschen', 'tidy up · clean · wash up · do the laundry'], ['den Müll rausbringen · einkaufen · staubsaugen', 'take out the rubbish · shop · vacuum'], ['Das Bad ist schon wieder schmutzig!', 'complain'], ['Das ist nicht fair! Das ärgert mich.', 'criticise'], ['Mach ich! · Entschuldigung, das habe ich vergessen.', 'react positively'], ['Keine Lust! · Das stimmt nicht!', 'react negatively']] }
  ];

  const practice = [
    du('L19-P-01', 'du räumst dein Zimmer auf →', 'Räum dein Zimmer auf!', 'Remove du and -st; auf goes to the end.', ['Räume dein Zimmer auf!']),
    du('L19-P-02', 'du hilfst mir bitte →', 'Hilf mir bitte!', 'e → i stays: hilf.'),
    du('L19-P-03', 'du bist leise →', 'Sei leise!', 'sein → Sei!'),
    du('L19-P-04', 'du nimmst den Schirm →', 'Nimm den Schirm!', 'e → i stays: nimm.'),
    du('L19-P-05', 'du fährst langsam →', 'Fahr langsam!', 'a → ä disappears: fahr.', ['Fahre langsam!']),
    q({ id: 'L19-P-06', topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'mc', objective: 'L19-O1', instructions: 'Choose the du-imperative.', prompt: 'schlafen →', options: ['Schlaf!', 'Schläf!', 'Schlafst!', 'Schlafen!'], answer: 'Schlaf!', explanation: 'a → ä disappears.', learnHref: DU }),
    q({ id: 'L19-P-07', topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'mc', objective: 'L19-O1', instructions: 'Choose the du-imperative.', prompt: 'lesen →', options: ['Lies!', 'Les!', 'Liest!', 'Lest!'], answer: 'Lies!', explanation: 'e → ie stays: lies.' }),
    q({ id: 'L19-P-08', topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'order', objective: 'L19-O1', instructions: 'Put the words in order.', prompt: 'Please take out the rubbish!', tokens: ['Bring', 'bitte', 'den', 'Müll', 'raus'], answer: 'Bring bitte den Müll raus', explanation: 'rausbringen: prefix at the end.' }),
    q({ id: 'L19-P-09', topic: 'ihr-imperative', skill: 'grammar', grammar: 'ihr-imperative', type: 'gap', objective: 'L19-O2', instructions: 'Make an ihr-imperative.', prompt: '___ bitte pünktlich! (kommen)', answer: [['Kommt']], explanation: 'ihr kommt → Kommt!', learnHref: IHR }),
    q({ id: 'L19-P-10', topic: 'ihr-imperative', skill: 'grammar', grammar: 'ihr-imperative', type: 'gap', objective: 'L19-O2', instructions: 'Make an ihr-imperative.', prompt: '___ Getränke ___! (mitbringen)', answer: [['Bringt'], ['mit']], explanation: 'ihr bringt mit → Bringt … mit!' }),
    q({ id: 'L19-P-11', topic: 'ihr-imperative', skill: 'grammar', grammar: 'ihr-imperative', type: 'mc', objective: 'L19-O2', instructions: 'Choose the ihr-imperative.', prompt: 'sein (Kinder, …!) →', options: ['Seid leise!', 'Sei leise!', 'Seien leise!', 'Seit leise!'], answer: 'Seid leise!', explanation: 'ihr seid → Seid!' }),
    q({ id: 'L19-P-12', topic: 'ihr-imperative', skill: 'grammar', grammar: 'imperative', type: 'match', objective: 'L19-O2', instructions: 'Match the forms of nehmen.', prompt: '', pairs: [['du', 'Nimm!'], ['ihr', 'Nehmt!'], ['Sie', 'Nehmen Sie!'], ['du (sein)', 'Sei!'], ['ihr (sein)', 'Seid!']], explanation: 'du / ihr / Sie imperatives.', learnHref: IHR }),
    q({ id: 'L19-P-13', topic: 'soft', skill: 'communication', type: 'mc', objective: 'L19-O3', instructions: 'Which is the friendliest?', prompt: 'You ask your flatmate to wash up.', options: ['Kannst du bitte spülen?', 'Spül!', 'Du spülst.', 'Spülen!'], answer: 'Kannst du bitte spülen?', explanation: 'A question with bitte is the softest.', learnHref: SOFT }),
    q({ id: 'L19-P-14', topic: 'soft', skill: 'communication', type: 'mc', objective: 'L19-O3', instructions: 'Choose the small word.', prompt: 'Komm … mit! Das wird lustig. (encouraging)', options: ['doch', 'nicht', 'schon', 'noch'], answer: 'doch', explanation: 'doch = why don’t you …' }),
    acc('L19-P-15', 'Ich rufe … morgen an. (du)', 'dich', 'anrufen + accusative: dich.', ['dich', 'dir', 'du', 'dein']),
    acc('L19-P-16', 'Besuchst du … am Wochenende? (wir)', 'uns', 'wir → uns (acc. = dat.).', ['uns', 'wir', 'unser', 'euch']),
    acc('L19-P-17', 'Wo ist die Brille? Ich finde … nicht.', 'sie', 'die Brille → sie.', ['sie', 'ihn', 'es', 'ihr']),
    acc('L19-P-18', 'Kennst du Herrn Klein? – Ja, ich kenne …', 'ihn', 'Herr Klein → ihn.', ['ihn', 'ihm', 'er', 'sie']),
    q({ id: 'L19-P-19', topic: 'pronouns', skill: 'grammar', grammar: 'accusative-pronouns', type: 'gap', objective: 'L19-O4', instructions: 'Fill in the pronoun.', prompt: 'Ich vermisse ___. (ihr, you all)', answer: [['euch']], explanation: 'ihr → euch.', learnHref: PRON }),
    q({ id: 'L19-P-20', topic: 'pronouns', skill: 'grammar', grammar: 'case-choice', type: 'mc', objective: 'L19-O4', instructions: 'Accusative or dative?', prompt: 'Ich helfe … (du)', options: ['dir', 'dich'], answer: 'dir', explanation: 'helfen → dative.' }),
    q({ id: 'L19-P-21', topic: 'pronouns', skill: 'grammar', grammar: 'case-choice', type: 'mc', objective: 'L19-O4', instructions: 'Accusative or dative?', prompt: 'Ich sehe … (du)', options: ['dich', 'dir'], answer: 'dich', explanation: 'sehen → accusative.' }),
    q({ id: 'L19-P-22', topic: 'pronouns', skill: 'grammar', grammar: 'case-choice', type: 'mc', objective: 'L19-O4', instructions: 'Accusative or dative?', prompt: 'Er fragt … (ich)', options: ['mich', 'mir'], answer: 'mich', explanation: 'fragen → accusative.' }),
    q({ id: 'L19-P-23', topic: 'housework', skill: 'vocabulary', type: 'match', objective: 'L19-O5', instructions: 'Match the housework.', prompt: '', pairs: [['aufräumen', 'to tidy up'], ['putzen', 'to clean'], ['spülen', 'to wash up'], ['staubsaugen', 'to vacuum'], ['den Müll rausbringen', 'to take out the rubbish']], explanation: 'Housework.', learnHref: COMP }),
    q({ id: 'L19-P-24', topic: 'housework', skill: 'communication', type: 'mc', objective: 'L19-O5', instructions: 'Choose a positive reaction.', prompt: '– Bring bitte den Müll raus! – …', options: ['Mach ich!', 'Keine Lust!', 'Das stimmt nicht!', 'Das ist nicht fair!'], answer: 'Mach ich!', explanation: 'Mach ich! = Will do!' }),
    q({ id: 'L19-P-25', topic: 'du-imperative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L19-O1', instructions: 'Write it in German (du).', prompt: 'Call me tomorrow!', answer: 'Ruf mich morgen an!', accept: ['Ruf mich morgen an.', 'Rufe mich morgen an!'], explanation: 'anrufen → Ruf … an!; mich.' }),
    q({ id: 'L19-P-26', topic: 'housework', skill: 'listening', type: 'listen', objective: 'L19-O5', instructions: 'Listen and answer.', prompt: 'Why is she angry?', audio: 'Das Bad ist schon wieder schmutzig! Das ärgert mich. Ich putze immer.', options: ['The bathroom is dirty again.', 'The kitchen is dirty.', 'Nobody did the shopping.', 'The rubbish is still there.'], answer: 'The bathroom is dirty again.', explanation: 'Das Bad ist schon wieder schmutzig.' }),
    q({ id: 'L19-P-27', topic: 'ihr-imperative', skill: 'listening', type: 'listen', objective: 'L19-O2', instructions: 'Listen and answer.', prompt: 'What should the children do?', audio: 'Kinder, kommt bitte zum Essen und wascht euch die Hände!', options: ['come and eat and wash their hands', 'tidy their room', 'be quiet', 'go to bed'], answer: 'come and eat and wash their hands', explanation: 'kommt zum Essen, wascht euch die Hände.' }),
    q({ id: 'L19-P-28', topic: 'soft', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L19-O3', instructions: 'Listen and write.', prompt: '', audio: 'Sei doch nicht sauer! Ich räume gleich auf.', answer: 'Sei doch nicht sauer! Ich räume gleich auf.', explanation: 'Sei doch … · räume … auf.' }),
    q({ id: 'L19-P-29', topic: 'ihr-imperative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L19-O2', instructions: 'Write it in German (ihr).', prompt: 'Be quiet, please!', answer: 'Seid bitte leise!', accept: ['Seid leise, bitte!', 'Bitte seid leise!'], explanation: 'ihr → Seid!' }),
    q({ id: 'L19-P-30', topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'mc', objective: 'L19-O1', instructions: 'Choose the correct sentence.', prompt: 'Tell your friend: Buy some milk, please!', options: ['Kauf bitte Milch ein!', 'Kaufst bitte Milch ein!', 'Einkauf bitte Milch!', 'Kauf ein bitte Milch!'], answer: 'Kauf bitte Milch ein!', explanation: 'einkaufen → Kauf … ein!' })
  ];

  const DIALOG = '– Jonas, du hast schon wieder nicht gespült! Das ist nicht fair. – Entschuldigung, das habe ich vergessen. Sei doch nicht gleich sauer! Ich mache es gleich. – Okay. Und bring bitte auch den Müll raus! – Mach ich!';
  const READ = 'WG-Plan für diese Woche\nLena: Bad putzen · Max: einkaufen · Jonas: spülen und Müll rausbringen\nWichtig: Räumt bitte eure Sachen in der Küche auf!\nUnd seid nach 22 Uhr leise — danke! Eure Lena';
  const apply = [
    q({ id: 'L19-A-01', topic: 'housework', skill: 'listening', type: 'listen', objective: 'L19-O5', instructions: 'Listen to the flatmates.', prompt: 'What did Jonas forget?', audio: DIALOG, options: ['to wash up', 'to clean the bathroom', 'to go shopping', 'to vacuum'], answer: 'to wash up', explanation: 'du hast nicht gespült.' }),
    q({ id: 'L19-A-02', topic: 'housework', skill: 'listening', type: 'listen', objective: 'L19-O5', instructions: 'Listen again.', prompt: 'How does Jonas react?', audio: DIALOG, options: ['He apologises and does it.', 'He says “Keine Lust!”', 'He says it isn’t true.', 'He gets angry.'], answer: 'He apologises and does it.', explanation: 'Entschuldigung … Ich mache es gleich. Mach ich!' }),
    q({ id: 'L19-A-03', topic: 'housework', skill: 'reading', type: 'reading', objective: 'L19-O5', instructions: 'Read the flat-share plan.', passage: READ, prompt: 'Was muss Max machen?', options: ['einkaufen', 'das Bad putzen', 'spülen'], answer: 'einkaufen', explanation: 'Max: einkaufen.' }),
    q({ id: 'L19-A-04', topic: 'ihr-imperative', skill: 'reading', type: 'reading', objective: 'L19-O2', instructions: 'Read the plan.', passage: READ, prompt: 'Was sollen alle in der Küche machen?', options: ['ihre Sachen aufräumen', 'spülen', 'leise sein'], answer: 'ihre Sachen aufräumen', explanation: 'Räumt bitte eure Sachen in der Küche auf!' }),
    q({ id: 'L19-A-05', topic: 'ihr-imperative', skill: 'reading', type: 'reading', objective: 'L19-O2', instructions: 'Read the plan.', passage: READ, prompt: 'Was sollen alle nach 22 Uhr machen?', options: ['leise sein', 'den Müll rausbringen', 'einkaufen'], answer: 'leise sein', explanation: 'seid nach 22 Uhr leise.' }),
    q({ id: 'L19-A-06', topic: 'housework', skill: 'writing', type: 'writing', objective: 'L19-O5', instructions: 'Write a note for your flatmates (4–6 sentences).', prompt: 'Make a complaint and give requests: two with du, two with ihr. Use bitte / doch / mal.',
      rubric: ['I name a problem (… ist schon wieder schmutzig).', 'I use 2 du-imperatives correctly.', 'I use 2 ihr-imperatives correctly.', 'I soften with bitte / doch / mal.'],
      model: 'Hallo zusammen,\ndie Küche ist schon wieder schmutzig! Das ärgert mich. Spült bitte euer Geschirr und räumt den Tisch auf! Tom, bring doch mal den Müll raus! Sara, kauf bitte Brot ein!\nDanke! Delowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L19-A-07', topic: 'soft', skill: 'speaking', type: 'speaking', objective: 'L19-O3', instructions: 'Role play (out loud): you share a flat with a friend.', prompt: 'Give five requests with the du-imperative, make one complaint, and answer two complaints — once positively, once negatively.',
      rubric: ['I used 5 du-imperatives (one separable, one with Sei).', 'I softened with bitte / doch / mal.', 'I made a complaint.', 'I reacted positively and negatively.'],
      model: 'Räum bitte die Küche auf! Hilf mir mal! Kauf doch Milch ein! Sei bitte leise! Ruf mich an! – Das Bad ist schon wieder schmutzig! – Entschuldigung, ich putze es gleich. – Du hast nicht eingekauft! – Das stimmt nicht! Ich habe gestern eingekauft.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    du('L19-T-01', 'du kommst bitte →', 'Komm bitte!', 'du kommst → Komm!'),
    du('L19-T-02', 'du siehst mal →', 'Sieh mal!', 'e → ie stays: sieh.'),
    du('L19-T-03', 'du rufst mich an →', 'Ruf mich an!', 'anrufen → Ruf … an!', ['Rufe mich an!']),
    q({ id: 'L19-T-04', topic: 'du-imperative', skill: 'grammar', grammar: 'du-imperative', type: 'mc', objective: 'L19-O1', instructions: 'Choose the du-imperative.', prompt: 'essen →', options: ['Iss!', 'Ess!', 'Isst!', 'Esst!'], answer: 'Iss!', explanation: 'e → i stays: iss.' }),
    q({ id: 'L19-T-05', topic: 'ihr-imperative', skill: 'grammar', grammar: 'ihr-imperative', type: 'gap', objective: 'L19-O2', instructions: 'Make an ihr-imperative.', prompt: '___ euer Zimmer ___! (aufräumen)', answer: [['Räumt'], ['auf']], explanation: 'ihr räumt auf → Räumt … auf!' }),
    q({ id: 'L19-T-06', topic: 'ihr-imperative', skill: 'grammar', grammar: 'imperative', type: 'mc', objective: 'L19-O2', instructions: 'Choose the Sie-form.', prompt: 'nehmen (Sie) →', options: ['Nehmen Sie!', 'Nimm Sie!', 'Nehmt Sie!', 'Nehmen!'], answer: 'Nehmen Sie!', explanation: 'Sie-form + Sie.' }),
    q({ id: 'L19-T-07', topic: 'soft', skill: 'communication', type: 'mc', objective: 'L19-O3', instructions: 'Choose the small word.', prompt: 'Hilf mir … kurz! (casual)', options: ['mal', 'nicht', 'schon', 'noch'], answer: 'mal', explanation: 'mal = just (casual).' }),
    acc('L19-T-08', 'Ich liebe … (ihr, you all)', 'euch', 'ihr → euch.', ['euch', 'ihr', 'euer', 'uns']),
    acc('L19-T-09', 'Wo ist das Handy? Ich brauche …', 'es', 'das Handy → es.', ['es', 'ihn', 'sie', 'ihm']),
    q({ id: 'L19-T-10', topic: 'pronouns', skill: 'grammar', grammar: 'case-choice', type: 'mc', objective: 'L19-O4', instructions: 'Accusative or dative?', prompt: 'Das Essen schmeckt … (ich)', options: ['mir', 'mich'], answer: 'mir', explanation: 'schmecken → dative.' }),
    q({ id: 'L19-T-11', topic: 'pronouns', skill: 'grammar', grammar: 'accusative-pronouns', type: 'gap', objective: 'L19-O4', instructions: 'Fill in the pronoun.', prompt: 'Holst du ___ vom Bahnhof ab? (ich)', answer: [['mich']], explanation: 'abholen + accusative: mich.' }),
    q({ id: 'L19-T-12', topic: 'du-imperative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L19-O1', instructions: 'Write it in German (du).', prompt: 'Don’t be angry!', answer: 'Sei nicht sauer!', accept: ['Sei doch nicht sauer!', 'Sei nicht böse!'], explanation: 'Sei nicht …!' }),
    q({ id: 'L19-T-13', topic: 'housework', skill: 'listening', type: 'listen', objective: 'L19-O5', instructions: 'Listen and answer.', prompt: 'How does Tim react?', audio: '– Tim, räum bitte die Küche auf! – Keine Lust! Ich habe gestern aufgeräumt.', options: ['negatively', 'positively', 'he apologises', 'he asks a question'], answer: 'negatively', explanation: 'Keine Lust!' }),
    q({ id: 'L19-T-14', topic: 'housework', skill: 'reading', type: 'reading', objective: 'L19-O5', instructions: 'Read and answer.', passage: 'Mama, ich bin beim Fußball. Ich habe den Müll rausgebracht,\naber ich habe nicht gespült. Sorry! Bis später, Ben', prompt: 'Was hat Ben nicht gemacht?', options: ['gespült', 'den Müll rausgebracht', 'Fußball gespielt'], answer: 'gespült', explanation: 'ich habe nicht gespült.' }),
    q({ id: 'L19-T-15', topic: 'housework', skill: 'vocabulary', type: 'match', objective: 'L19-O5', instructions: 'Match.', prompt: '', pairs: [['Mach ich!', 'Will do!'], ['Keine Lust!', 'Don’t feel like it!'], ['Das ärgert mich.', 'That annoys me.'], ['schmutzig', 'dirty'], ['die Wäsche waschen', 'to do the laundry']], explanation: 'Complaining and reacting.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
