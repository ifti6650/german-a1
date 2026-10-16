// Lektion 18 · "Ich soll diese Übung machen." (Momente A1.2, Modul 6)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 19.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
// Health content is everyday language practice only, not medical advice.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 18, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const PAIN = GB + '191-describing-pain', IMPV = GB + '192-the-sie-imperative-verb--sie', SOL = GB + '193-sollen-should-be-supposed-to', DOC = GB + '194-at-the-doctors';
  const imp = (id, prompt, a, ex, acc) => q({ id, topic: 'imperative', skill: 'grammar', grammar: 'sie-imperative', type: 'translate', objective: 'L18-O2', instructions: 'Make a Sie-imperative.', prompt, answer: a, accept: acc, explanation: ex, learnHref: IMPV });
  const sol = (id, prompt, a, ex) => q({ id, topic: 'sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'gap', objective: 'L18-O3', instructions: 'Fill in sollen.', prompt, answer: a, explanation: ex, learnHref: SOL });

  const objectives = [
    { id: 'L18-O1', text: 'Name body parts and describe pain: … tut weh / tun weh, Ich habe …schmerzen / Fieber / Husten.', kind: 'communication' },
    { id: 'L18-O2', text: 'Give instructions with the Sie-imperative (verb + Sie …!), incl. separable verbs and Seien Sie.', kind: 'grammar' },
    { id: 'L18-O3', text: 'Conjugate sollen and pass on instructions or ask for advice (Was soll ich machen?).', kind: 'grammar' },
    { id: 'L18-O4', text: 'Understand and use key phrases at the doctor’s.', kind: 'communication' },
    { id: 'L18-O5', text: 'Change an imperative into a sentence with sollen.', kind: 'grammar' }
  ];

  const learn = [
    { id: 'pain', title: 'Describing pain', objective: 'L18-O1', href: PAIN,
      table: [['Mein Kopf tut weh.', 'one body part → tut weh'], ['Meine Füße tun weh.', 'plural → tun weh'], ['Ich habe Kopfschmerzen / Bauchschmerzen / Rückenschmerzen.', 'headache / stomach ache / back pain'], ['Ich habe Fieber / Husten / Schnupfen / eine Erkältung.', 'fever / cough / runny nose / a cold'], ['Der Hals tut mir weh.', 'with a dative pronoun']],
      mistakes: [['Meine Augen tut weh.', 'Meine Augen tun weh.', 'Plural → tun.']] },
    { id: 'body', title: 'Body parts', objective: 'L18-O1', href: PAIN,
      table: [['der Kopf · der Hals · der Bauch · der Rücken', 'head · throat/neck · stomach · back'], ['das Auge (Augen) · das Ohr · das Bein · das Knie', 'eye · ear · leg · knee'], ['die Nase · die Hand (Hände)', 'nose · hand'], ['der Mund · der Zahn (Zähne) · der Arm · der Fuß (Füße)', 'mouth · tooth · arm · foot']] },
    { id: 'imperative', title: 'The Sie-imperative: verb + Sie', objective: 'L18-O2', href: IMPV,
      text: 'Take the Sie-form, put the verb first, then Sie. Separable prefixes go to the end. sein is irregular: Seien Sie …! Add bitte to sound friendly.',
      table: [['Sie trinken viel Wasser. → Trinken Sie viel Wasser!', 'verb first'], ['Sie bleiben im Bett. → Bleiben Sie im Bett!', ''], ['Sie stehen langsam auf. → Stehen Sie langsam auf!', 'separable: prefix at the end'], ['Sie sind vorsichtig. → Seien Sie vorsichtig!', 'irregular'], ['Kommen Sie bitte herein!', 'with bitte']] },
    { id: 'sollen', title: 'sollen (should, be supposed to)', objective: 'L18-O3', href: SOL,
      text: 'sollen is a modal verb: infinitive at the end. Use it to pass on what someone told you, or to ask for advice.',
      table: [['ich soll · du sollst · er/sie/es soll', 'I · you · he/she should'], ['wir sollen · ihr sollt · sie/Sie sollen', 'we · you (all) · they / you should'], ['Was soll ich machen?', 'What should I do?'], ['Soll ich die Tabletten vor dem Essen nehmen?', 'asking for instructions']] },
    { id: 'imp-sollen', title: 'From imperative to sollen', objective: 'L18-O5', href: SOL,
      text: '1) Start with Ich soll … 2) Move the verb to the end as an infinitive.',
      table: [['„Bleiben Sie im Bett!“', '→ Ich soll im Bett bleiben.'], ['„Nehmen Sie die Tabletten!“', '→ Ich soll die Tabletten nehmen.'], ['„Rauchen Sie nicht!“', '→ Ich soll nicht rauchen.']] },
    { id: 'doctor', title: 'At the doctor’s', objective: 'L18-O4', href: DOC,
      table: [['Was fehlt Ihnen? / Was haben Sie?', 'What’s the matter?'], ['Seit wann haben Sie die Schmerzen? – Seit drei Tagen.', 'Since when …? – For three days.'], ['Ich schreibe Sie krank.', 'I’ll give you a sick note.'], ['dreimal am Tag · vor / nach dem Essen', 'three times a day · before / after meals'], ['Gute Besserung!', 'Get well soon!']] }
  ];

  const practice = [
    q({ id: 'L18-P-01', topic: 'pain', skill: 'grammar', grammar: 'wehtun', type: 'mc', objective: 'L18-O1', instructions: 'tut or tun?', prompt: 'Mein Rücken … weh.', options: ['tut', 'tun'], answer: 'tut', explanation: 'der Rücken (one) → tut weh.', learnHref: PAIN }),
    q({ id: 'L18-P-02', topic: 'pain', skill: 'grammar', grammar: 'wehtun', type: 'mc', objective: 'L18-O1', instructions: 'tut or tun?', prompt: 'Meine Augen … weh.', options: ['tun', 'tut'], answer: 'tun', explanation: 'die Augen (plural) → tun weh.' }),
    q({ id: 'L18-P-03', topic: 'pain', skill: 'grammar', grammar: 'wehtun', type: 'gap', objective: 'L18-O1', instructions: 'Say it another way.', prompt: 'Ich habe Halsschmerzen. → Mein Hals ___ ___.', answer: [['tut'], ['weh']], explanation: 'Halsschmerzen = Mein Hals tut weh.' }),
    q({ id: 'L18-P-04', topic: 'pain', skill: 'writing', type: 'translate', objective: 'L18-O1', instructions: 'Say it another way (one word for the pain).', prompt: 'Mein Kopf tut weh. → Ich habe …', answer: 'Ich habe Kopfschmerzen.', explanation: 'Kopf + Schmerzen = Kopfschmerzen.' }),
    q({ id: 'L18-P-05', topic: 'body', skill: 'vocabulary', type: 'match', objective: 'L18-O1', instructions: 'Match the body parts.', prompt: '', pairs: [['der Kopf', 'head'], ['der Bauch', 'stomach'], ['das Bein', 'leg'], ['die Hand', 'hand'], ['der Zahn', 'tooth']], explanation: 'Body parts.', learnHref: PAIN }),
    q({ id: 'L18-P-06', topic: 'body', skill: 'vocabulary', type: 'article', objective: 'L18-O1', instructions: 'Choose the article.', prompt: '… Auge', options: ['der', 'die', 'das'], answer: 'das', explanation: 'das Auge, die Augen.' }),
    q({ id: 'L18-P-07', topic: 'body', skill: 'vocabulary', type: 'mc', objective: 'L18-O1', instructions: 'Choose the plural.', prompt: 'der Fuß → die …', options: ['Füße', 'Fuße', 'Füßen', 'Fußs'], answer: 'Füße', explanation: 'der Fuß → die Füße.' }),
    q({ id: 'L18-P-08', topic: 'pain', skill: 'vocabulary', type: 'match', objective: 'L18-O1', instructions: 'Match the illnesses.', prompt: '', pairs: [['das Fieber', 'fever'], ['der Husten', 'cough'], ['der Schnupfen', 'runny nose'], ['die Erkältung', 'cold'], ['krank', 'ill']], explanation: 'Illness words.' }),
    imp('L18-P-09', 'Sie schlafen viel. →', 'Schlafen Sie viel!', 'Verb first, then Sie.'),
    imp('L18-P-10', 'Sie nehmen das Medikament. →', 'Nehmen Sie das Medikament!', 'Nehmen Sie …!'),
    imp('L18-P-11', 'Sie gehen zum Arzt. →', 'Gehen Sie zum Arzt!', 'Gehen Sie …!'),
    imp('L18-P-12', 'Sie stehen früh auf. →', 'Stehen Sie früh auf!', 'Separable: auf goes to the end.'),
    imp('L18-P-13', 'Sie sind ruhig. →', 'Seien Sie ruhig!', 'sein → Seien Sie!'),
    q({ id: 'L18-P-14', topic: 'imperative', skill: 'grammar', grammar: 'sie-imperative', type: 'order', objective: 'L18-O2', instructions: 'Put the words in order.', prompt: 'Take the tablet three times a day!', tokens: ['Nehmen', 'Sie', 'die', 'Tablette', 'dreimal', 'am', 'Tag'], answer: 'Nehmen Sie die Tablette dreimal am Tag', explanation: 'Imperative: verb first.' }),
    q({ id: 'L18-P-15', topic: 'imperative', skill: 'grammar', grammar: 'sie-imperative', type: 'mc', objective: 'L18-O2', instructions: 'Which is an instruction (imperative)?', prompt: 'Choose the imperative.', options: ['Trinken Sie viel Tee!', 'Sie trinken viel Tee.', 'Trinken Sie viel Tee?', 'Sie sollen Tee.'], answer: 'Trinken Sie viel Tee!', explanation: 'Imperative = verb + Sie + … + !' }),
    sol('L18-P-16', 'Ich ___ viel trinken.', [['soll']], 'ich soll.'),
    sol('L18-P-17', 'Was ___ ich machen?', [['soll']], 'Was soll ich machen? = asking for advice.'),
    sol('L18-P-18', 'Du ___ im Bett bleiben.', [['sollst']], 'du sollst.'),
    sol('L18-P-19', 'Wir ___ um 8 Uhr kommen.', [['sollen']], 'wir sollen.'),
    q({ id: 'L18-P-20', topic: 'sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'conjugation', objective: 'L18-O3', instructions: 'Conjugate.', prompt: 'ihr + sollen →', answer: 'sollt', explanation: 'ihr sollt.', learnHref: SOL }),
    q({ id: 'L18-P-21', topic: 'imp-sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'translate', difficulty: 2, objective: 'L18-O5', instructions: 'Pass on the advice with sollen.', prompt: 'Der Arzt sagt: „Bleiben Sie zu Hause!“ → Ich …', answer: 'Ich soll zu Hause bleiben.', explanation: 'Ich soll … bleiben (infinitive at the end).', learnHref: SOL }),
    q({ id: 'L18-P-22', topic: 'imp-sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'translate', difficulty: 2, objective: 'L18-O5', instructions: 'Pass on the advice with sollen.', prompt: '„Rauchen Sie nicht!“ → Ich …', answer: 'Ich soll nicht rauchen.', explanation: 'nicht before the infinitive.' }),
    q({ id: 'L18-P-23', topic: 'imp-sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'order', objective: 'L18-O5', instructions: 'Put the words in order.', prompt: 'The doctor says I should sleep a lot.', tokens: ['Der', 'Arzt', 'sagt,', 'ich', 'soll', 'viel', 'schlafen'], answer: 'Der Arzt sagt, ich soll viel schlafen', explanation: '… ich soll … schlafen.' }),
    q({ id: 'L18-P-24', topic: 'doctor', skill: 'vocabulary', type: 'match', objective: 'L18-O4', instructions: 'Match the phrases.', prompt: '', pairs: [['Was fehlt Ihnen?', 'What’s the matter?'], ['Gute Besserung!', 'Get well soon!'], ['dreimal am Tag', 'three times a day'], ['nach dem Essen', 'after meals'], ['Ich schreibe Sie krank.', 'I’ll give you a sick note.']], explanation: 'At the doctor’s.', learnHref: DOC }),
    q({ id: 'L18-P-25', topic: 'doctor', skill: 'communication', type: 'mc', objective: 'L18-O4', instructions: 'Choose the best answer.', prompt: '– Seit wann haben Sie die Schmerzen? – …', options: ['Seit zwei Tagen.', 'In zwei Tagen.', 'Vor dem Essen.', 'Gute Besserung!'], answer: 'Seit zwei Tagen.', explanation: 'seit + dative = since / for.' }),
    q({ id: 'L18-P-26', topic: 'pain', skill: 'listening', type: 'listen', objective: 'L18-O1', instructions: 'Listen and answer.', prompt: 'What’s the matter with him?', audio: 'Ich habe seit gestern Fieber und mein Hals tut weh.', options: ['fever and a sore throat', 'a headache', 'back pain', 'a cough and a runny nose'], answer: 'fever and a sore throat', explanation: 'Fieber · der Hals tut weh.' }),
    q({ id: 'L18-P-27', topic: 'imperative', skill: 'listening', type: 'listen', objective: 'L18-O2', instructions: 'Listen and answer.', prompt: 'When should the patient take the tablets?', audio: 'Nehmen Sie die Tabletten zweimal am Tag, immer nach dem Essen.', options: ['twice a day after meals', 'three times a day before meals', 'once a day', 'twice a day before meals'], answer: 'twice a day after meals', explanation: 'zweimal am Tag, nach dem Essen.' }),
    q({ id: 'L18-P-28', topic: 'sollen', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L18-O3', instructions: 'Listen and write.', prompt: '', audio: 'Ich soll drei Tage im Bett bleiben.', answer: 'Ich soll drei Tage im Bett bleiben.', explanation: 'soll … bleiben.' }),
    q({ id: 'L18-P-29', topic: 'pain', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L18-O1', instructions: 'Write it in German.', prompt: 'I have a cold.', answer: 'Ich habe eine Erkältung.', explanation: 'die Erkältung → eine.' }),
    q({ id: 'L18-P-30', topic: 'sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'mc', objective: 'L18-O3', instructions: 'Choose the correct question.', prompt: 'You ask the doctor: Should I take the tablets before meals?', options: ['Soll ich die Tabletten vor dem Essen nehmen?', 'Nehmen Sie die Tabletten vor dem Essen!', 'Ich soll die Tabletten vor dem Essen.', 'Sollst du die Tabletten nehmen?'], answer: 'Soll ich die Tabletten vor dem Essen nehmen?', explanation: 'Soll ich … nehmen? = asking for instructions.' })
  ];

  const DIALOG = '– Guten Tag, Frau Yilmaz. Was fehlt Ihnen? – Ich habe Husten und Fieber, und mein Kopf tut weh. – Seit wann? – Seit drei Tagen. – Bleiben Sie zwei Tage im Bett und trinken Sie viel Tee. Ich schreibe Sie krank. Gute Besserung!';
  const READ = 'Hi Paul,\nich war heute beim Arzt. Ich habe eine Erkältung.\nIch soll viel schlafen und viel Wasser trinken. Am Wochenende soll ich keinen Sport machen.\nKönnen wir das Fußballspiel verschieben?\nLiebe Grüße, Nina';
  const apply = [
    q({ id: 'L18-A-01', topic: 'pain', skill: 'listening', type: 'listen', objective: 'L18-O1', instructions: 'Listen to the doctor’s visit.', prompt: 'What problems does Frau Yilmaz have?', audio: DIALOG, options: ['cough, fever and a headache', 'back pain and fever', 'a sore throat and a runny nose', 'stomach ache'], answer: 'cough, fever and a headache', explanation: 'Husten, Fieber, Kopf tut weh.' }),
    q({ id: 'L18-A-02', topic: 'imperative', skill: 'listening', type: 'listen', objective: 'L18-O2', instructions: 'Listen again.', prompt: 'What does the doctor tell her to do?', audio: DIALOG, options: ['stay in bed for two days and drink tea', 'take tablets three times a day', 'go for a walk', 'come back tomorrow'], answer: 'stay in bed for two days and drink tea', explanation: 'Bleiben Sie zwei Tage im Bett und trinken Sie viel Tee.' }),
    q({ id: 'L18-A-03', topic: 'pain', skill: 'reading', type: 'reading', objective: 'L18-O1', instructions: 'Read the message.', passage: READ, prompt: 'Was hat Nina?', options: ['eine Erkältung', 'Rückenschmerzen', 'Bauchschmerzen'], answer: 'eine Erkältung', explanation: 'Ich habe eine Erkältung.' }),
    q({ id: 'L18-A-04', topic: 'sollen', skill: 'reading', type: 'reading', objective: 'L18-O3', instructions: 'Read the message.', passage: READ, prompt: 'Was soll Nina machen?', options: ['viel schlafen und viel Wasser trinken', 'viel Sport machen', 'Tabletten nehmen'], answer: 'viel schlafen und viel Wasser trinken', explanation: 'Ich soll viel schlafen und viel Wasser trinken.' }),
    q({ id: 'L18-A-05', topic: 'sollen', skill: 'reading', type: 'reading', objective: 'L18-O3', instructions: 'Read the message.', passage: READ, prompt: 'Was soll Nina am Wochenende nicht machen?', options: ['Sport', 'schlafen', 'Wasser trinken'], answer: 'Sport', explanation: 'keinen Sport machen.' }),
    q({ id: 'L18-A-06', topic: 'imp-sollen', skill: 'writing', type: 'writing', objective: 'L18-O5', instructions: 'Write a message to a friend or colleague (4–6 sentences).', prompt: 'You were at the doctor’s. Say what is wrong, since when, and what you should do (sollen). Cancel or move a plan.',
      rubric: ['I describe pain/illness (… tut weh, Ich habe …).', 'I say since when (seit + dative).', 'I pass on 2 instructions with sollen (infinitive at the end).', 'I cancel or move a plan politely.'],
      model: 'Hallo Anna,\nich war heute beim Arzt. Ich habe seit Montag Rückenschmerzen. Ich soll viel liegen und ich soll nicht schwer tragen. Ich kann leider nicht zum Yoga kommen. Können wir nächste Woche gehen?\nViele Grüße\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L18-A-07', topic: 'doctor', skill: 'speaking', type: 'speaking', objective: 'L18-O4', instructions: 'Role play both parts out loud: patient and doctor.', prompt: 'Patient: describe two problems and since when. Doctor: give three instructions with the Sie-imperative. Then tell a friend: Der Arzt sagt, ich soll …',
      rubric: ['Patient: I described two problems and said seit wann.', 'Doctor: I gave three Sie-imperatives.', 'I passed on the advice with sollen.', 'I ended with Gute Besserung!'],
      model: '– Was fehlt Ihnen? – Mein Bauch tut weh und ich habe Fieber. Seit gestern. – Trinken Sie viel Tee, essen Sie heute nicht viel und bleiben Sie zu Hause. Gute Besserung! … Der Arzt sagt, ich soll viel Tee trinken und zu Hause bleiben.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L18-T-01', topic: 'pain', skill: 'grammar', grammar: 'wehtun', type: 'mc', objective: 'L18-O1', instructions: 'tut or tun?', prompt: 'Meine Zähne … weh.', options: ['tun', 'tut'], answer: 'tun', explanation: 'plural → tun weh.' }),
    q({ id: 'L18-T-02', topic: 'pain', skill: 'grammar', grammar: 'wehtun', type: 'gap', objective: 'L18-O1', instructions: 'Say it another way.', prompt: 'Ich habe Bauchschmerzen. → Mein Bauch ___ ___.', answer: [['tut'], ['weh']], explanation: 'Mein Bauch tut weh.' }),
    q({ id: 'L18-T-03', topic: 'body', skill: 'vocabulary', type: 'match', objective: 'L18-O1', instructions: 'Match.', prompt: '', pairs: [['das Ohr', 'ear'], ['die Nase', 'nose'], ['der Rücken', 'back'], ['das Knie', 'knee'], ['der Hals', 'throat / neck']], explanation: 'Body parts.' }),
    imp('L18-T-04', 'Sie trinken viel Wasser. →', 'Trinken Sie viel Wasser!', 'Trinken Sie …!'),
    imp('L18-T-05', 'Sie rufen morgen an. →', 'Rufen Sie morgen an!', 'Separable: an at the end.'),
    imp('L18-T-06', 'Sie sind vorsichtig. →', 'Seien Sie vorsichtig!', 'Seien Sie …!'),
    sol('L18-T-07', 'Er ___ zum Arzt gehen.', [['soll']], 'er soll.'),
    sol('L18-T-08', 'Ihr ___ leise sein.', [['sollt']], 'ihr sollt.'),
    q({ id: 'L18-T-09', topic: 'sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'conjugation', objective: 'L18-O3', instructions: 'Conjugate.', prompt: 'du + sollen →', answer: 'sollst', explanation: 'du sollst.' }),
    q({ id: 'L18-T-10', topic: 'imp-sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'translate', difficulty: 2, objective: 'L18-O5', instructions: 'Pass on the advice with sollen.', prompt: '„Nehmen Sie die Tabletten!“ → Ich …', answer: 'Ich soll die Tabletten nehmen.', explanation: 'Ich soll … nehmen.' }),
    q({ id: 'L18-T-11', topic: 'imp-sollen', skill: 'grammar', grammar: 'modal-sollen', type: 'order', objective: 'L18-O5', instructions: 'Put the words in order.', prompt: 'I’m supposed to do this exercise.', tokens: ['Ich', 'soll', 'diese', 'Übung', 'machen'], answer: 'Ich soll diese Übung machen', explanation: 'soll … machen.' }),
    q({ id: 'L18-T-12', topic: 'pain', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L18-O1', instructions: 'Write it in German.', prompt: 'My feet hurt.', answer: 'Meine Füße tun weh.', accept: ['Mir tun die Füße weh.'], explanation: 'plural → tun weh.' }),
    q({ id: 'L18-T-13', topic: 'doctor', skill: 'listening', type: 'listen', objective: 'L18-O4', instructions: 'Listen and answer.', prompt: 'How long has he had the pain?', audio: 'Ich habe seit einer Woche Rückenschmerzen.', options: ['for a week', 'for a day', 'since yesterday', 'for a month'], answer: 'for a week', explanation: 'seit einer Woche.' }),
    q({ id: 'L18-T-14', topic: 'imperative', skill: 'reading', type: 'reading', objective: 'L18-O2', instructions: 'Read the instructions and answer.', passage: 'Nehmen Sie eine Tablette morgens und eine abends.\nTrinken Sie keinen Alkohol.', prompt: 'Wie oft am Tag soll man eine Tablette nehmen?', options: ['zweimal', 'einmal', 'dreimal'], answer: 'zweimal', explanation: 'morgens und abends = zweimal.' }),
    q({ id: 'L18-T-15', topic: 'doctor', skill: 'communication', type: 'mc', objective: 'L18-O4', instructions: 'Choose the best phrase.', prompt: 'Your colleague is ill. What do you say?', options: ['Gute Besserung!', 'Was fehlt Ihnen?', 'Seien Sie ruhig!', 'Ich schreibe Sie krank.'], answer: 'Gute Besserung!', explanation: 'Gute Besserung = Get well soon.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
