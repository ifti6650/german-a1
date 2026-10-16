// Lektion 21 · "Darf man das?" (Momente A1.2, Modul 7)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 22.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 21, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const MD = GB + '221-müssen-and-dürfen', NOT = GB + '222-watch-out-nicht-müssen--must-not', MAN = GB + '223-man-one-you-people', ALL = GB + '224-all-the-modal-verbs-in-one-table', OP = GB + '225-giving-and-reacting-to-opinions';
  const mus = (id, prompt, a, ex) => q({ id, topic: 'muessen', skill: 'grammar', grammar: 'modal-muessen', type: 'gap', objective: 'L21-O1', instructions: 'Fill in müssen.', prompt, answer: a, explanation: ex, learnHref: MD });
  const dur = (id, prompt, a, ex) => q({ id, topic: 'duerfen', skill: 'grammar', grammar: 'modal-duerfen', type: 'gap', objective: 'L21-O1', instructions: 'Fill in dürfen.', prompt, answer: a, explanation: ex, learnHref: MD });
  const MODALS = ['kann', 'möchte', 'will', 'soll', 'muss', 'darf'];
  const which = (id, prompt, a, ex) => q({ id, topic: 'all-modals', skill: 'grammar', grammar: 'modal-verbs', type: 'mc', objective: 'L21-O4', instructions: 'Choose the right modal verb.', prompt, options: MODALS, answer: a, explanation: ex, learnHref: ALL });

  const objectives = [
    { id: 'L21-O1', text: 'Conjugate müssen and dürfen and use them with the sentence bracket.', kind: 'grammar' },
    { id: 'L21-O2', text: 'Distinguish nicht müssen (don’t have to) from nicht dürfen (must not).', kind: 'grammar' },
    { id: 'L21-O3', text: 'Talk about rules with man, verboten and erlaubt (traffic, rubbish, quiet hours).', kind: 'communication' },
    { id: 'L21-O4', text: 'Choose the right modal verb: können, möchte, wollen, sollen, müssen, dürfen.', kind: 'grammar' },
    { id: 'L21-O5', text: 'Give an opinion and agree or disagree (Ich finde, … · Da hast du recht. · Das sehe ich anders.).', kind: 'communication' }
  ];

  const learn = [
    { id: 'md', title: 'müssen and dürfen', objective: 'L21-O1', href: MD,
      text: 'Same pattern as können: vowel change in the singular, ich = er, modal in position 2, infinitive at the end.',
      table: [['ich muss · du musst · er/sie/man muss', 'ich darf · du darfst · er/sie/man darf'], ['wir müssen · ihr müsst · sie/Sie müssen', 'wir dürfen · ihr dürft · sie/Sie dürfen'], ['Ich muss heute bis 20 Uhr arbeiten.', 'necessity'], ['Darf ich hier rauchen? – Nein, das ist verboten.', 'permission']] },
    { id: 'not', title: 'Watch out: nicht müssen ≠ must not', objective: 'L21-O2', href: NOT,
      table: [['Du musst nicht kommen.', 'You don’t have to come (not necessary).'], ['Du darfst nicht kommen.', 'You must not come (forbidden).']],
      mistakes: [['You must not park here. → Hier muss man nicht parken.', 'Hier darf man nicht parken.', 'English “must not” = German nicht dürfen.']] },
    { id: 'man', title: 'man (one, you, people)', objective: 'L21-O3', href: MAN,
      text: 'man means people in general and uses the er-form of the verb. Very common for rules.',
      table: [['In Deutschland trennt man den Müll.', 'people separate their rubbish'], ['Im Bus darf man nicht essen.', 'you can’t eat on the bus'], ['An der roten Ampel muss man warten.', 'you have to wait'], ['verboten · erlaubt · Rauchen verboten!', 'forbidden · allowed'], ['der Müll · die Mülltonne · der Radweg · die Ruhezeit', 'rubbish · bin · cycle path · quiet hours']] },
    { id: 'all', title: 'All the modal verbs', objective: 'L21-O4', href: ALL,
      table: [['können', 'ability: Ich kann gut schwimmen.'], ['möchte', 'polite wish: Ich möchte einen Kaffee.'], ['wollen', 'plan: Ich will Lehrerin werden.'], ['sollen', 'someone else’s advice: Ich soll viel trinken.'], ['müssen', 'necessity: Ich muss heute arbeiten.'], ['dürfen', 'permission: Hier darf man nicht parken.']],
      text: 'All of them: modal in position 2 (with ending) + infinitive at the end. Separable verbs stay together at the end: Ich muss früh aufstehen.' },
    { id: 'opinion', title: 'Giving and reacting to opinions', objective: 'L21-O5', href: OP,
      table: [['Ich finde, … · Ich glaube, … · Meiner Meinung nach …', 'give an opinion'], ['Das stimmt. · Da hast du recht. · Das finde ich auch.', 'agree'], ['Das stimmt nicht. · Das sehe ich anders.', 'disagree'], ['Achtung! · Vorsicht! · Entschuldigung, hier dürfen Sie nicht parken.', 'point something out']],
      examples: [['Ich finde, das ist eine gute Regel.', 'After Ich finde, … a normal main clause follows.'], ['Meiner Meinung nach ist das gut.', 'Meiner Meinung nach = position 1 → verb next.']] }
  ];

  const practice = [
    mus('L21-P-01', 'Ich ___ heute arbeiten.', [['muss']], 'ich muss.'),
    mus('L21-P-02', '___ du morgen früh aufstehen?', [['Musst']], 'du musst.'),
    mus('L21-P-03', 'Wir ___ den Müll trennen.', [['müssen']], 'wir müssen.'),
    dur('L21-P-04', 'Hier ___ man nicht parken.', [['darf']], 'man darf (er-form).'),
    dur('L21-P-05', '___ ich hier rauchen?', [['Darf']], 'ich darf.'),
    dur('L21-P-06', 'Kinder ___ hier nicht spielen.', [['dürfen']], 'sie (plural) dürfen.'),
    q({ id: 'L21-P-07', topic: 'muessen', skill: 'grammar', grammar: 'modal-muessen', type: 'conjugation', objective: 'L21-O1', instructions: 'Conjugate.', prompt: 'ihr + müssen →', answer: 'müsst', explanation: 'ihr müsst.', learnHref: MD }),
    q({ id: 'L21-P-08', topic: 'duerfen', skill: 'grammar', grammar: 'modal-duerfen', type: 'conjugation', objective: 'L21-O1', instructions: 'Conjugate.', prompt: 'du + dürfen →', answer: 'darfst', explanation: 'du darfst.', learnHref: MD }),
    q({ id: 'L21-P-09', topic: 'muessen', skill: 'grammar', grammar: 'modal-muessen', type: 'order', objective: 'L21-O1', instructions: 'Put the words in order.', prompt: 'I have to get up early tomorrow.', tokens: ['Ich', 'muss', 'morgen', 'früh', 'aufstehen'], answer: 'Ich muss morgen früh aufstehen', explanation: 'Separable infinitive stays together at the end.' }),
    q({ id: 'L21-P-10', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'What does it mean?', prompt: 'Du musst nicht kommen.', options: ['You don’t have to come.', 'You must not come.', 'You can’t come.', 'You don’t want to come.'], answer: 'You don’t have to come.', explanation: 'nicht müssen = not necessary.', learnHref: NOT }),
    q({ id: 'L21-P-11', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'What does it mean?', prompt: 'Du darfst nicht kommen.', options: ['You must not come.', 'You don’t have to come.', 'You should come.', 'You may come.'], answer: 'You must not come.', explanation: 'nicht dürfen = forbidden.' }),
    q({ id: 'L21-P-12', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'Choose the modal.', prompt: 'Am Sonntag … ich nicht arbeiten. Ich habe frei!', options: ['muss', 'darf'], answer: 'muss', explanation: 'Not necessary → nicht müssen.' }),
    q({ id: 'L21-P-13', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'Choose the modal.', prompt: 'Im Krankenhaus … man nicht rauchen.', options: ['darf', 'muss'], answer: 'darf', explanation: 'Forbidden → nicht dürfen.' }),
    q({ id: 'L21-P-14', topic: 'man', skill: 'grammar', grammar: 'man', type: 'mc', objective: 'L21-O3', instructions: 'Choose the verb form.', prompt: 'In Deutschland … man den Müll.', options: ['trennt', 'trennen', 'trennst', 'trenne'], answer: 'trennt', explanation: 'man + er-form.', learnHref: MAN }),
    q({ id: 'L21-P-15', topic: 'man', skill: 'grammar', grammar: 'man', type: 'order', objective: 'L21-O3', instructions: 'Put the words in order.', prompt: 'You’re not allowed to eat on the bus.', tokens: ['Im', 'Bus', 'darf', 'man', 'nicht', 'essen'], answer: 'Im Bus darf man nicht essen', explanation: 'Place first → darf → man → … essen.' }),
    q({ id: 'L21-P-16', topic: 'man', skill: 'vocabulary', type: 'match', objective: 'L21-O3', instructions: 'Match.', prompt: '', pairs: [['verboten', 'forbidden'], ['erlaubt', 'allowed'], ['der Müll', 'rubbish'], ['der Radweg', 'cycle path'], ['die Ruhezeit', 'quiet hours']], explanation: 'Rules vocabulary.', learnHref: MAN }),
    which('L21-P-17', 'Ich … gut schwimmen. (ability)', 'kann', 'ability → können.'),
    which('L21-P-18', 'Ich … ein Auto kaufen. (my plan)', 'will', 'plan → wollen.'),
    which('L21-P-19', 'Der Arzt sagt, ich … viel trinken.', 'soll', 'someone else’s advice → sollen.'),
    which('L21-P-20', 'Ich … heute bis 20 Uhr arbeiten. (necessary)', 'muss', 'necessity → müssen.'),
    which('L21-P-21', 'Ich … einen Kaffee, bitte. (ordering)', 'möchte', 'polite wish → möchte.'),
    q({ id: 'L21-P-22', topic: 'all-modals', skill: 'grammar', grammar: 'modal-verbs', type: 'match', objective: 'L21-O4', instructions: 'Match the modal and the meaning.', prompt: '', pairs: [['können', 'can'], ['wollen', 'want'], ['sollen', 'should'], ['müssen', 'must / have to'], ['dürfen', 'may / be allowed to']], explanation: 'Modal verbs.', learnHref: ALL }),
    q({ id: 'L21-P-23', topic: 'opinion', skill: 'communication', type: 'mc', objective: 'L21-O5', instructions: 'Choose a way to disagree.', prompt: '– Ich finde, Radfahren in der Stadt ist gefährlich. – …', options: ['Das sehe ich anders.', 'Da hast du recht.', 'Das finde ich auch.', 'Mach ich!'], answer: 'Das sehe ich anders.', explanation: 'Disagree: Das sehe ich anders.', learnHref: OP }),
    q({ id: 'L21-P-24', topic: 'opinion', skill: 'grammar', grammar: 'word-order', type: 'order', objective: 'L21-O5', instructions: 'Put the words in order.', prompt: 'In my opinion that is a good rule.', tokens: ['Meiner', 'Meinung', 'nach', 'ist', 'das', 'eine', 'gute', 'Regel'], answer: 'Meiner Meinung nach ist das eine gute Regel', explanation: 'Meiner Meinung nach = position 1 → verb next.' }),
    q({ id: 'L21-P-25', topic: 'man', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L21-O3', instructions: 'Write it in German (use man).', prompt: 'You’re not allowed to park here.', answer: 'Hier darf man nicht parken.', accept: ['Man darf hier nicht parken.'], explanation: 'nicht dürfen = must not.' }),
    q({ id: 'L21-P-26', topic: 'not', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L21-O2', instructions: 'Write it in German.', prompt: 'I don’t have to work on Saturday.', answer: 'Am Samstag muss ich nicht arbeiten.', accept: ['Ich muss am Samstag nicht arbeiten.'], explanation: 'nicht müssen = don’t have to.' }),
    q({ id: 'L21-P-27', topic: 'man', skill: 'listening', type: 'listen', objective: 'L21-O3', instructions: 'Listen and answer.', prompt: 'Which rule is it?', audio: 'In unserem Haus darf man nach 22 Uhr keine laute Musik hören.', options: ['No loud music after 10 pm.', 'No smoking in the house.', 'No bikes in the hall.', 'No parking in front of the house.'], answer: 'No loud music after 10 pm.', explanation: 'nach 22 Uhr keine laute Musik.' }),
    q({ id: 'L21-P-28', topic: 'muessen', skill: 'listening', type: 'listen', objective: 'L21-O1', instructions: 'Listen and answer.', prompt: 'Where does the paper go?', audio: 'Papier muss man in die blaue Tonne werfen, Glas bringt man zum Container.', options: ['into the blue bin', 'into the yellow bin', 'to the container', 'into the black bin'], answer: 'into the blue bin', explanation: 'Papier → in die blaue Tonne.' }),
    q({ id: 'L21-P-29', topic: 'duerfen', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L21-O1', instructions: 'Listen and write.', prompt: '', audio: 'Darf ich hier mit dem Fahrrad fahren?', answer: 'Darf ich hier mit dem Fahrrad fahren?', explanation: 'Darf ich … fahren?' }),
    q({ id: 'L21-P-30', topic: 'man', skill: 'grammar', grammar: 'man', type: 'mc', objective: 'L21-O3', instructions: 'Choose the correct sentence.', prompt: 'You have to wait at a red light.', options: ['An der roten Ampel muss man warten.', 'An der roten Ampel man muss warten.', 'An der roten Ampel muss man wartet.', 'An der roten Ampel müssen man warten.'], answer: 'An der roten Ampel muss man warten.', explanation: 'man + muss; infinitive at the end.' })
  ];

  const DIALOG = '– Entschuldigung, hier dürfen Sie nicht parken. Das ist ein Radweg. – Oh, das wusste ich nicht. Wo darf man denn parken? – Dort hinten, am Parkplatz. Dort muss man aber ein Ticket kaufen. – Okay, danke!';
  const READ = 'Hausordnung\n• Ruhezeit: von 22 bis 7 Uhr und am Sonntag. Bitte seid leise!\n• Den Müll muss man trennen: Papier, Glas, Bio, Restmüll.\n• Fahrräder dürfen nicht im Flur stehen.\n• Grillen auf dem Balkon ist verboten.';
  const apply = [
    q({ id: 'L21-A-01', topic: 'not', skill: 'listening', type: 'listen', objective: 'L21-O2', instructions: 'Listen to the conversation.', prompt: 'Why can’t the driver park there?', audio: DIALOG, options: ['It is a cycle path.', 'It is a bus stop.', 'It is too small.', 'It is private.'], answer: 'It is a cycle path.', explanation: 'Das ist ein Radweg.' }),
    q({ id: 'L21-A-02', topic: 'muessen', skill: 'listening', type: 'listen', objective: 'L21-O1', instructions: 'Listen again.', prompt: 'What do you have to do at the car park?', audio: DIALOG, options: ['buy a ticket', 'wait', 'call someone', 'nothing'], answer: 'buy a ticket', explanation: 'Dort muss man ein Ticket kaufen.' }),
    q({ id: 'L21-A-03', topic: 'man', skill: 'reading', type: 'reading', objective: 'L21-O3', instructions: 'Read the house rules.', passage: READ, prompt: 'Wann ist Ruhezeit?', options: ['von 22 bis 7 Uhr und am Sonntag', 'nur am Sonntag', 'von 20 bis 6 Uhr'], answer: 'von 22 bis 7 Uhr und am Sonntag', explanation: 'Ruhezeit: von 22 bis 7 Uhr und am Sonntag.' }),
    q({ id: 'L21-A-04', topic: 'duerfen', skill: 'reading', type: 'reading', objective: 'L21-O3', instructions: 'Read the house rules.', passage: READ, prompt: 'Wo dürfen Fahrräder nicht stehen?', options: ['im Flur', 'im Keller', 'vor dem Haus'], answer: 'im Flur', explanation: 'Fahrräder dürfen nicht im Flur stehen.' }),
    q({ id: 'L21-A-05', topic: 'man', skill: 'reading', type: 'reading', objective: 'L21-O3', instructions: 'Read the house rules.', passage: READ, prompt: 'Was ist auf dem Balkon verboten?', options: ['Grillen', 'Rauchen', 'Musik hören'], answer: 'Grillen', explanation: 'Grillen auf dem Balkon ist verboten.' }),
    q({ id: 'L21-A-06', topic: 'man', skill: 'writing', type: 'writing', objective: 'L21-O3', instructions: 'Write about rules (5–6 sentences).', prompt: 'Explain rules in Germany or your country (traffic, rubbish, house). Give your opinion on one rule.',
      rubric: ['I use man muss / man darf (nicht) correctly.', 'I use nicht müssen once (not necessary).', 'I use verboten or erlaubt.', 'I give an opinion: Ich finde, … / Meiner Meinung nach …'],
      model: 'In Deutschland muss man den Müll trennen. Im Bus darf man nicht laut telefonieren. Nach 22 Uhr muss man leise sein. Am Sonntag muss man nicht arbeiten, die Geschäfte sind zu. Auf der Autobahn ist schnelles Fahren oft erlaubt. Ich finde, die Ruhezeit ist eine gute Regel.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L21-A-07', topic: 'opinion', skill: 'speaking', type: 'speaking', objective: 'L21-O5', instructions: 'Explain five rules out loud, then discuss two.', prompt: 'Use man muss and man darf nicht. Give your opinion on two rules and react to a partner’s opinion.',
      rubric: ['I said five rules with man + modal.', 'I used nicht dürfen and nicht müssen correctly.', 'I gave my opinion (Ich finde, …).', 'I agreed or disagreed (Da hast du recht. / Das sehe ich anders.).'],
      model: 'In meiner Stadt muss man den Müll trennen. Im Park darf man nicht grillen. Kinder müssen in die Schule gehen. Am Sonntag muss man nicht arbeiten. Hier darf man nicht rauchen. – Ich finde, das Grillverbot ist nicht gut. – Das sehe ich anders. Grillen ist laut.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    mus('L21-T-01', 'Er ___ zum Arzt gehen.', [['muss']], 'er muss.'),
    mus('L21-T-02', 'Ihr ___ pünktlich sein.', [['müsst']], 'ihr müsst.'),
    dur('L21-T-03', 'Hier ___ Hunde nicht rein.', [['dürfen']], 'Hunde (plural) dürfen.'),
    dur('L21-T-04', '___ wir hier fotografieren?', [['Dürfen']], 'wir dürfen.'),
    q({ id: 'L21-T-05', topic: 'muessen', skill: 'grammar', grammar: 'modal-muessen', type: 'conjugation', objective: 'L21-O1', instructions: 'Conjugate.', prompt: 'du + müssen →', answer: 'musst', explanation: 'du musst.' }),
    q({ id: 'L21-T-06', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'Choose the correct translation.', prompt: 'You must not smoke here.', options: ['Hier darfst du nicht rauchen.', 'Hier musst du nicht rauchen.', 'Hier sollst du rauchen.', 'Hier kannst du rauchen.'], answer: 'Hier darfst du nicht rauchen.', explanation: 'must not = nicht dürfen.' }),
    q({ id: 'L21-T-07', topic: 'not', skill: 'grammar', grammar: 'nicht-muessen-duerfen', type: 'mc', objective: 'L21-O2', instructions: 'Choose the modal.', prompt: 'Das Museum ist gratis. Man … nichts bezahlen.', options: ['muss', 'darf'], answer: 'muss', explanation: 'Not necessary → nicht müssen (nichts müssen).' }),
    q({ id: 'L21-T-08', topic: 'man', skill: 'grammar', grammar: 'man', type: 'gap', objective: 'L21-O3', instructions: 'Fill in the verb (man + er-form).', prompt: 'In der Bibliothek ___ man leise. (sprechen)', answer: [['spricht']], explanation: 'man spricht.' }),
    which('L21-T-09', 'Hier … man nicht rauchen.', 'darf', 'forbidden → nicht dürfen.'),
    which('L21-T-10', 'Meine Tochter … Ärztin werden. (her plan)', 'will', 'plan → wollen.'),
    q({ id: 'L21-T-11', topic: 'muessen', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L21-O3', instructions: 'Write it in German (use man).', prompt: 'In Germany you have to separate the rubbish.', answer: 'In Deutschland muss man den Müll trennen.', explanation: 'man muss … trennen.' }),
    q({ id: 'L21-T-12', topic: 'opinion', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L21-O5', instructions: 'Write it in German.', prompt: 'You are right.', answer: 'Da hast du recht.', accept: ['Du hast recht.', 'Da haben Sie recht.', 'Sie haben recht.'], explanation: 'recht haben = to be right.' }),
    q({ id: 'L21-T-13', topic: 'duerfen', skill: 'listening', type: 'listen', objective: 'L21-O1', instructions: 'Listen and answer.', prompt: 'Is it allowed?', audio: '– Darf ich hier mein Fahrrad abstellen? – Nein, das ist leider verboten.', options: ['No, it is forbidden.', 'Yes, it is allowed.', 'Only on Sundays.', 'Only for a short time.'], answer: 'No, it is forbidden.', explanation: 'das ist verboten.' }),
    q({ id: 'L21-T-14', topic: 'man', skill: 'reading', type: 'reading', objective: 'L21-O3', instructions: 'Read the sign and answer.', passage: 'SCHWIMMBAD\nVor dem Schwimmen muss man duschen.\nEssen ist im Wasser verboten.', prompt: 'Was muss man vor dem Schwimmen machen?', options: ['duschen', 'essen', 'ein Ticket zeigen'], answer: 'duschen', explanation: 'Vor dem Schwimmen muss man duschen.' }),
    q({ id: 'L21-T-15', topic: 'opinion', skill: 'vocabulary', type: 'match', objective: 'L21-O5', instructions: 'Match.', prompt: '', pairs: [['Das stimmt.', 'That’s true.'], ['Das sehe ich anders.', 'I see it differently.'], ['Ich glaube, …', 'I think / believe …'], ['Vorsicht!', 'Careful!'], ['die Regel', 'rule']], explanation: 'Opinions and rules.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
