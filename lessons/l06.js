// Lektion 6 · "Wir haben einen Termin." (Momente A1.1, Modul 2)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 7.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 6, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L6-O1', text: 'Form the plural of common nouns (die Tische, die Lampen, die Bücher …).', kind: 'grammar' },
    { id: 'L6-O2', text: 'Use the accusative: den / einen / keinen for masculine nouns.', kind: 'grammar' },
    { id: 'L6-O3', text: 'Use verbs with an object: haben, brauchen, suchen, kaufen, sehen.', kind: 'grammar' },
    { id: 'L6-O4', text: 'Replace objects with ihn / es / sie.', kind: 'grammar' },
    { id: 'L6-O5', text: 'Talk about office things that are missing or broken.', kind: 'communication' },
    { id: 'L6-O6', text: 'Handle a short phone call at work (Moment, bitte; Können Sie das wiederholen?).', kind: 'communication' }
  ];

  const learn = [
    { id: 'plurals', title: 'Plurals: five patterns', objective: 'L6-O1', href: GB + '7',
      text: 'The plural article is always die. The ending has to be learned with the noun — these patterns help.',
      table: [['-e: der Tisch → die Tische', 'often with der words'], ['-(e)n: die Lampe → die Lampen', 'most die words'], ['-er (+ umlaut): das Buch → die Bücher', 'many das words'], ['-s: das Handy → die Handys, das Büro → die Büros', 'foreign words, words ending in a vowel'], ['– (no ending): der Computer → die Computer', 'many words ending in -er, -el']] },
    { id: 'subject-object', title: 'Subject and object', objective: 'L6-O2', href: GB + '7',
      text: 'The subject does the action (nominative). The object is what the action is done to (accusative).',
      examples: [['Der Kollege braucht den Drucker.', 'The colleague (subject) needs the printer (object).']] },
    { id: 'accusative', title: 'The accusative: only the masculine changes', objective: 'L6-O2', href: GB + '7',
      table: [['der → den', 'Ich suche den Kalender.'], ['ein → einen', 'Ich brauche einen Laptop.'], ['kein → keinen', 'Wir haben keinen Drucker.'], ['das / die / plural: no change', 'Ich suche die Rechnung. Ich habe ein Handy.']],
      mistakes: [['Ich brauche ein Laptop.', 'Ich brauche einen Laptop.', 'der Laptop → einen Laptop (accusative).']] },
    { id: 'acc-verbs', title: 'Verbs that take an accusative object', objective: 'L6-O3', href: GB + '7',
      table: [['haben · brauchen · suchen', 'to have · to need · to look for'], ['kaufen · sehen · finden', 'to buy · to see · to find'], ['schreiben · drucken', 'to write · to print']],
      examples: [['Ich schreibe eine E-Mail.', 'I am writing an e-mail.'], ['Sie druckt den Zettel.', 'She prints the note.']] },
    { id: 'pronouns', title: 'ihn, es, sie: pronouns as objects', objective: 'L6-O4', href: GB + '7',
      table: [['der Kalender → ihn', 'Ich suche ihn.'], ['das Telefon → es', 'Ich brauche es.'], ['die Maus → sie', 'Ich sehe sie nicht.'], ['plural → sie', 'Die Rechnungen? Ich drucke sie.']],
      mistakes: [['Der Kuli? Ich finde er nicht.', 'Ich finde ihn nicht.', 'As an object, er becomes ihn.']] },
    { id: 'broken', title: 'Broken and missing things', objective: 'L6-O5', href: GB + '7',
      examples: [['Der Drucker funktioniert nicht.', 'The printer doesn’t work.'], ['Die Tastatur ist kaputt.', 'The keyboard is broken.'], ['Ich brauche einen Termin.', 'I need an appointment.']] },
    { id: 'phone', title: 'On the phone at work', objective: 'L6-O6', href: GB + '7',
      table: [['Firma Berger, guten Tag.', 'answering the phone'], ['Hier ist … / Hier spricht …', 'This is … speaking'], ['Moment, bitte.', 'One moment, please.'], ['Können Sie das wiederholen?', 'Can you repeat that?'], ['Bitte langsam.', 'Slowly, please.']] }
  ];

  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L6-O5', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });
  const pl = (id, sg, opts, a) => q({ id, topic: 'plurals', skill: 'grammar', grammar: 'plural', type: 'mc', objective: 'L6-O1', instructions: 'Choose the plural.', prompt: `${sg} → die …`, options: opts, answer: a, explanation: `${sg} → die ${a}.`, learnHref: GB + '7' });
  const practice = [
    pl('L06-P-01', 'der Tisch', ['Tische', 'Tischen', 'Tischer', 'Tisch'], 'Tische'),
    pl('L06-P-02', 'die Lampe', ['Lampen', 'Lampe', 'Lampes', 'Lämper'], 'Lampen'),
    pl('L06-P-03', 'das Buch', ['Bücher', 'Buche', 'Buchs', 'Büchen'], 'Bücher'),
    q({ id: 'L06-P-04', topic: 'plurals', skill: 'grammar', grammar: 'plural', type: 'translate', objective: 'L6-O1', instructions: 'Write the plural (without die).', prompt: 'das Handy → die …', answer: 'Handys', explanation: 'das Handy → die Handys.' }),
    pl('L06-P-05', 'der Computer', ['Computer', 'Computers', 'Computeren', 'Computere'], 'Computer'),
    q({ id: 'L06-P-06', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O2', instructions: 'Fill in einen, eine or ein.', prompt: 'Ich brauche ___ Laptop.', answer: [['einen']], explanation: 'der Laptop → einen Laptop.', learnHref: GB + '7' }),
    q({ id: 'L06-P-07', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O2', instructions: 'Fill in keinen, keine or kein.', prompt: 'Wir haben ___ Drucker.', answer: [['keinen']], explanation: 'der Drucker → keinen Drucker.' }),
    q({ id: 'L06-P-08', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O2', instructions: 'Fill in den, die or das.', prompt: 'Ich suche ___ Rechnung.', answer: [['die']], explanation: 'die stays die in the accusative.' }),
    q({ id: 'L06-P-09', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L6-O2', instructions: 'Choose the article.', prompt: 'Er kauft … Computer.', options: ['einen', 'ein', 'eine'], answer: 'einen', explanation: 'der Computer → einen Computer.' }),
    q({ id: 'L06-P-10', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L6-O2', instructions: 'Choose the article.', prompt: 'Sie braucht … Maus.', options: ['eine', 'einen', 'ein'], answer: 'eine', explanation: 'die Maus → eine Maus (no change).' }),
    q({ id: 'L06-P-11', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L6-O2', instructions: 'Choose the article.', prompt: 'Hast du … Kalender?', options: ['den', 'der', 'dem'], answer: 'den', explanation: 'der Kalender → den Kalender.' }),
    q({ id: 'L06-P-12', topic: 'accusative', skill: 'grammar', grammar: 'subject-object', type: 'mc', objective: 'L6-O2', instructions: 'Who is doing the action?', prompt: 'Der Kollege sucht die Rechnung.', options: ['der Kollege', 'die Rechnung'], answer: 'der Kollege', explanation: 'The subject (nominative) does the action.', learnHref: GB + '7' }),
    q({ id: 'L06-P-13', topic: 'object-pronouns', skill: 'grammar', grammar: 'accusative-pronoun', type: 'gap', objective: 'L6-O4', instructions: 'Fill in ihn, es or sie.', prompt: 'Wo ist der Laptop? Ich sehe ___ nicht.', answer: [['ihn']], explanation: 'der Laptop → ihn.', learnHref: GB + '7' }),
    q({ id: 'L06-P-14', topic: 'object-pronouns', skill: 'grammar', grammar: 'accusative-pronoun', type: 'gap', objective: 'L6-O4', instructions: 'Fill in ihn, es or sie.', prompt: 'Das Handy ist kaputt, aber ich brauche ___!', answer: [['es']], explanation: 'das Handy → es.' }),
    q({ id: 'L06-P-15', topic: 'object-pronouns', skill: 'grammar', grammar: 'accusative-pronoun', type: 'mc', objective: 'L6-O4', instructions: 'Choose the pronoun.', prompt: 'Die Tastatur? Ich habe … .', options: ['sie', 'ihn', 'es'], answer: 'sie', explanation: 'die Tastatur → sie.' }),
    q({ id: 'L06-P-16', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'order', objective: 'L6-O3', instructions: 'Put the words in order.', prompt: 'I need an appointment.', tokens: ['brauche', 'einen', 'Ich', 'Termin'], answer: 'Ich brauche einen Termin', explanation: 'der Termin → einen Termin.' }),
    q({ id: 'L06-P-17', topic: 'office', skill: 'grammar', grammar: 'negation-nicht', type: 'order', objective: 'L6-O5', instructions: 'Put the words in order.', prompt: 'The printer doesn’t work.', tokens: ['funktioniert', 'Der', 'nicht', 'Drucker'], answer: 'Der Drucker funktioniert nicht', explanation: 'nicht at the end.' }),
    q({ id: 'L06-P-18', topic: 'phone', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L6-O6', instructions: 'Put the words in order.', prompt: 'Can you repeat that?', tokens: ['Sie', 'Können', 'wiederholen', 'das'], answer: 'Können Sie das wiederholen', explanation: 'Können – Sie – das – wiederholen?' }),
    q({ id: 'L06-P-19', topic: 'office', skill: 'vocabulary', type: 'match', objective: 'L6-O5', instructions: 'Match the office word.', prompt: '', pairs: [['der Drucker', 'printer'], ['die Tastatur', 'keyboard'], ['der Bildschirm', 'screen'], ['die Rechnung', 'invoice'], ['der Schreibtisch', 'desk']], explanation: 'Office words.' }),
    q({ id: 'L06-P-20', topic: 'phone', skill: 'communication', type: 'mc', objective: 'L6-O6', instructions: 'Choose the polite phrase.', prompt: 'On the phone, you did not understand the time.', options: ['Können Sie das wiederholen?', 'Was?', 'Tschüs!', 'Wie heißt du?'], answer: 'Können Sie das wiederholen?', explanation: 'Polite and clear.', learnHref: GB + '7' }),
    q({ id: 'L06-P-21', topic: 'accusative', skill: 'writing', type: 'translate', objective: 'L6-O2', instructions: 'Write it in German.', prompt: 'I need a printer.', answer: 'Ich brauche einen Drucker.', explanation: 'der Drucker → einen Drucker.' }),
    q({ id: 'L06-P-22', topic: 'office', skill: 'writing', type: 'translate', objective: 'L6-O5', instructions: 'Write it in German.', prompt: 'The computer is broken.', answer: 'Der Computer ist kaputt.', explanation: 'kaputt = broken.' }),
    q({ id: 'L06-P-23', topic: 'accusative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L6-O2', instructions: 'Write it in German.', prompt: 'We have no appointment.', answer: 'Wir haben keinen Termin.', explanation: 'der Termin → keinen Termin.' }),
    art('L06-P-24', 'Büro', 'office', 'das'), art('L06-P-25', 'Nachricht', 'message', 'die'),
    q({ id: 'L06-P-26', topic: 'phone', skill: 'listening', type: 'listen', objective: 'L6-O6', instructions: 'Listen and answer.', prompt: 'What does Frau Klein need?', audio: 'Guten Tag, hier ist Frau Klein. Ich brauche einen Termin.', options: ['an appointment', 'a printer', 'a laptop', 'an invoice'], answer: 'an appointment', explanation: 'einen Termin = an appointment.' }),
    q({ id: 'L06-P-27', topic: 'office', skill: 'listening', type: 'listen', objective: 'L6-O5', instructions: 'Listen and answer.', prompt: 'What is broken?', audio: 'Mein Laptop ist kaputt. Hast du einen Laptop für mich?', options: ['the laptop', 'the printer', 'the phone', 'the mouse'], answer: 'the laptop', explanation: 'Mein Laptop ist kaputt.' }),
    q({ id: 'L06-P-28', topic: 'object-pronouns', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L6-O4', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Ich suche die Rechnung. Ich finde sie nicht.', answer: 'Ich suche die Rechnung. Ich finde sie nicht.', accept: ['Ich suche die Rechnung, ich finde sie nicht.'], explanation: 'die Rechnung → sie.' }),
    q({ id: 'L06-P-29', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O3', instructions: 'Fill in the article (an e-mail).', prompt: 'Wir schreiben ___ E-Mail.', answer: [['eine']], explanation: 'die E-Mail → eine E-Mail.' }),
    q({ id: 'L06-P-30', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L6-O3', instructions: 'Write the verb form.', prompt: 'du + brauchen →', answer: 'brauchst', explanation: 'du brauchst.' })
  ];

  const DIALOG = 'Firma Berger, guten Tag. – Guten Tag, hier ist Tom Fischer. Ich brauche einen Termin bei Frau Berger. – Moment, bitte. Am Dienstag um zehn Uhr? – Können Sie das bitte wiederholen? – Am Dienstag um zehn Uhr. – Super, danke!';
  const READ = 'Hallo Anna,\nder Drucker ist kaputt. Ich brauche die Rechnung für die Firma Schmidt.\nKannst du sie bitte drucken? Danke!\nJonas';
  const apply = [
    q({ id: 'L06-A-01', topic: 'phone', skill: 'listening', type: 'listen', objective: 'L6-O6', instructions: 'Listen to the phone call.', prompt: 'Who does Tom want to see?', audio: DIALOG, options: ['Frau Berger', 'Herrn Fischer', 'his colleague', 'the printer technician'], answer: 'Frau Berger', explanation: 'einen Termin bei Frau Berger.' }),
    q({ id: 'L06-A-02', topic: 'phone', skill: 'listening', type: 'listen', objective: 'L6-O6', instructions: 'Listen again.', prompt: 'When is the appointment?', audio: DIALOG, options: ['Tuesday at 10', 'Thursday at 10', 'Tuesday at 2', 'Monday at 10'], answer: 'Tuesday at 10', explanation: 'Am Dienstag um zehn Uhr.' }),
    q({ id: 'L06-A-03', topic: 'office', skill: 'reading', type: 'reading', objective: 'L6-O5', instructions: 'Read the note.', passage: READ, prompt: 'Was ist kaputt?', options: ['der Drucker', 'der Computer', 'das Telefon'], answer: 'der Drucker', explanation: 'der Drucker ist kaputt.' }),
    q({ id: 'L06-A-04', topic: 'accusative', skill: 'reading', type: 'reading', objective: 'L6-O3', instructions: 'Read the note.', passage: READ, prompt: 'Was braucht Jonas?', options: ['die Rechnung', 'einen Termin', 'einen Laptop'], answer: 'die Rechnung', explanation: 'Ich brauche die Rechnung …' }),
    q({ id: 'L06-A-05', topic: 'office', skill: 'reading', type: 'reading', objective: 'L6-O5', instructions: 'Read the note.', passage: READ, prompt: 'Wer druckt die Rechnung?', options: ['Anna', 'Jonas', 'Frau Schmidt'], answer: 'Anna', explanation: 'Jonas asks Anna: Kannst du sie bitte drucken?' }),
    q({ id: 'L06-A-06', topic: 'office', skill: 'writing', type: 'writing', objective: 'L6-O5', instructions: 'Write a short note to a colleague (4–5 sentences).', prompt: 'Something is broken. Say what you need and ask for help.',
      rubric: ['I say what is broken (… ist kaputt / funktioniert nicht).', 'I use einen / keinen correctly with a der word.', 'I use ihn / es / sie for an object.', 'I use one plural noun.'],
      model: 'Hallo Maria,\nmein Computer funktioniert nicht. Ich brauche einen Laptop für das Meeting. Hast du einen? Ich brauche auch zwei Kulis. Ich finde sie nicht.\nDanke!\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L06-A-07', topic: 'phone', skill: 'speaking', type: 'speaking', objective: 'L6-O6', instructions: 'Phone role-play (out loud): call an office and ask for an appointment.', prompt: 'Say who you are, ask for an appointment, ask them to repeat the time, and thank them.',
      rubric: ['I said: Guten Tag, hier ist …', 'I said: Ich brauche einen Termin.', 'I asked: Können Sie das wiederholen? / Bitte langsam.', 'I said thank you and goodbye.'],
      model: '– Praxis Weber, guten Tag.\n– Guten Tag, hier ist … Ich brauche einen Termin.\n– Moment, bitte … Am Freitag um neun Uhr?\n– Können Sie das bitte wiederholen?\n– Am Freitag um neun Uhr.\n– Danke! Auf Wiedersehen!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    pl('L06-T-01', 'der Stuhl', ['Stühle', 'Stuhle', 'Stühlen', 'Stuhls'], 'Stühle'),
    pl('L06-T-02', 'die Tasche', ['Taschen', 'Tasche', 'Taschs', 'Täscher'], 'Taschen'),
    q({ id: 'L06-T-03', topic: 'plurals', skill: 'grammar', grammar: 'plural', type: 'translate', objective: 'L6-O1', instructions: 'Write the plural (without die).', prompt: 'das Büro → die …', answer: 'Büros', explanation: 'das Büro → die Büros.' }),
    q({ id: 'L06-T-04', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O2', instructions: 'Fill in the article.', prompt: 'Ich habe ___ Bruder und eine Schwester.', answer: [['einen']], explanation: 'der Bruder → einen Bruder.' }),
    q({ id: 'L06-T-05', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'gap', objective: 'L6-O2', instructions: 'Fill in keinen, keine or kein.', prompt: 'Wir brauchen ___ Computer, wir haben schon einen.', answer: [['keinen']], explanation: 'der Computer → keinen Computer.' }),
    q({ id: 'L06-T-06', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'mc', objective: 'L6-O2', instructions: 'Choose the article.', prompt: 'Siehst du … Schlüssel?', options: ['den', 'der', 'die'], answer: 'den', explanation: 'der Schlüssel → den Schlüssel.' }),
    q({ id: 'L06-T-07', topic: 'object-pronouns', skill: 'grammar', grammar: 'accusative-pronoun', type: 'gap', objective: 'L6-O4', instructions: 'Fill in ihn, es or sie.', prompt: 'Wo ist mein Kuli? Ich finde ___ nicht.', answer: [['ihn']], explanation: 'der Kuli → ihn.' }),
    q({ id: 'L06-T-08', topic: 'object-pronouns', skill: 'grammar', grammar: 'accusative-pronoun', type: 'mc', objective: 'L6-O4', instructions: 'Choose the pronoun.', prompt: 'Die Kamera ist toll. Ich kaufe … .', options: ['sie', 'ihn', 'es'], answer: 'sie', explanation: 'die Kamera → sie.' }),
    q({ id: 'L06-T-09', topic: 'accusative', skill: 'grammar', grammar: 'accusative', type: 'order', objective: 'L6-O3', instructions: 'Put the words in order.', prompt: 'I am looking for the calendar.', tokens: ['suche', 'Ich', 'Kalender', 'den'], answer: 'Ich suche den Kalender', explanation: 'der Kalender → den Kalender.' }),
    q({ id: 'L06-T-10', topic: 'office', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L6-O5', instructions: 'Put the words in order.', prompt: 'The mouse is broken.', tokens: ['Maus', 'ist', 'kaputt', 'Die'], answer: 'Die Maus ist kaputt', explanation: 'Die Maus – ist – kaputt.' }),
    q({ id: 'L06-T-11', topic: 'phone', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L6-O6', instructions: 'Write it in German.', prompt: 'One moment, please.', answer: 'Moment, bitte.', accept: ['Einen Moment, bitte.'], explanation: 'Moment, bitte. — useful on the phone.' }),
    q({ id: 'L06-T-12', topic: 'office', skill: 'vocabulary', type: 'match', objective: 'L6-O3', instructions: 'Match.', prompt: '', pairs: [['brauchen', 'to need'], ['suchen', 'to look for'], ['drucken', 'to print'], ['schreiben', 'to write'], ['telefonieren', 'to make a phone call']], explanation: 'Office verbs.' }),
    q({ id: 'L06-T-13', topic: 'accusative', skill: 'listening', type: 'listen', objective: 'L6-O3', instructions: 'Listen and answer.', prompt: 'Who is she looking for?', audio: 'Ich suche den Chef. Ist er im Büro?', options: ['the boss', 'a colleague', 'the printer', 'the office'], answer: 'the boss', explanation: 'den Chef = the boss.' }),
    q({ id: 'L06-T-14', topic: 'plurals', skill: 'reading', type: 'reading', objective: 'L6-O1', instructions: 'Read and answer.', passage: 'Im Büro haben wir drei Computer, zwei Drucker und ein Telefon.\nEin Drucker ist kaputt.', prompt: 'Wie viele Drucker funktionieren?', options: ['ein Drucker', 'zwei Drucker', 'drei Drucker'], answer: 'ein Drucker', explanation: 'zwei Drucker, ein Drucker ist kaputt → einer funktioniert.' }),
    q({ id: 'L06-T-15', topic: 'accusative', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L6-O2', instructions: 'Write it in German.', prompt: 'She needs a key.', answer: 'Sie braucht einen Schlüssel.', explanation: 'der Schlüssel → einen Schlüssel.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
