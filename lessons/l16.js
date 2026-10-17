// Lektion 16 · "Wir haben hier ein Problem." (Momente A1.2, Modul 6)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 17.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 16, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const TIME = GB + '17', POL = GB + '17', HELP = GB + '17', APPT = GB + '17';
  const tp = (id, prompt, a, ex) => q({ id, topic: 'time-prepositions', skill: 'grammar', grammar: 'time-prepositions-dative', type: 'mc', objective: 'L16-O1', instructions: 'in, vor or nach?', prompt, options: ['in', 'vor', 'nach'].map(x => prompt.startsWith('…') ? x[0].toUpperCase() + x.slice(1) : x), answer: a, explanation: ex, learnHref: TIME });
  const dat = (id, prompt, a, ex) => q({ id, topic: 'time-prepositions', skill: 'grammar', grammar: 'time-prepositions-dative', type: 'gap', objective: 'L16-O1', instructions: 'Fill in the dative.', prompt, answer: a, explanation: ex, learnHref: TIME });

  const objectives = [
    { id: 'L16-O1', text: 'Use in, vor and nach + dative for time (in einer Stunde, vor zwei Tagen, nach der Arbeit).', kind: 'grammar' },
    { id: 'L16-O2', text: 'Make polite requests with Können Sie …? and Könnten Sie bitte …?', kind: 'grammar' },
    { id: 'L16-O3', text: 'Offer help, agree and refuse politely.', kind: 'communication' },
    { id: 'L16-O4', text: 'Make, cancel and move appointments (vereinbaren, absagen, verschieben, passen).', kind: 'communication' },
    { id: 'L16-O5', text: 'Describe a problem with a device or in the flat (funktioniert nicht, ist kaputt).', kind: 'communication' }
  ];

  const learn = [
    { id: 'time', title: 'in, vor, nach + dative (time)', objective: 'L16-O1', href: TIME,
      text: 'in = in (from now, future) · vor = before / ago · nach = after. All three take the dative. German vor comes BEFORE the time: vor zwei Tagen = two days ago. Dative plural nouns add -n: Tagen, Wochen, Monaten.',
      table: [['In einer Stunde bin ich da.', 'in an hour (future)'], ['Ich war vor einem Monat in Prag.', 'a month ago'], ['Vor dem Kurs trinke ich Kaffee.', 'before the course'], ['Nach der Arbeit gehe ich joggen.', 'after work'], ['Der Techniker kommt in drei Tagen.', 'plural: Tage → Tagen']],
      mistakes: [['zwei Tage vor', 'vor zwei Tagen', 'vor comes before the time, plus dative -n.'], ['Ich bin da in einer Stunde.', 'In einer Stunde bin ich da. / Ich bin in einer Stunde da.', 'Time first → verb second (inversion).']] },
    { id: 'polite', title: 'Polite requests: können and könnten', objective: 'L16-O2', href: POL,
      text: 'Können Sie …? is friendly. Könnten Sie bitte …? is extra polite — use it with strangers, officials and on the phone. The infinitive goes to the end.',
      table: [['ich könnte · du könntest · er/sie könnte', 'I could · you could · he/she could'], ['wir könnten · ihr könntet · sie/Sie könnten', 'we · you (all) · they / you could'], ['Könnten Sie bitte morgen kommen?', 'Could you please come tomorrow?'], ['Könnten Sie das bitte wiederholen?', 'Could you repeat that, please?']] },
    { id: 'help', title: 'Offering help and reacting', objective: 'L16-O3', href: HELP,
      table: [['Kann ich Ihnen helfen? · Brauchen Sie Hilfe?', 'offer help'], ['Ja, gern! Das ist sehr nett.', 'accept'], ['Klar! / Natürlich! / Kein Problem.', 'agree'], ['Tut mir leid, das geht leider nicht.', 'refuse politely']] },
    { id: 'appointments', title: 'Appointments', objective: 'L16-O4', href: APPT,
      table: [['einen Termin vereinbaren / machen', 'make an appointment'], ['den Termin absagen (Ich sage … ab.)', 'cancel'], ['den Termin verschieben', 'move / postpone'], ['vorschlagen (Ich schlage Montag vor.)', 'suggest'], ['Passt es Ihnen am Freitag? – Ja, das passt mir gut.', 'passen + dative = to suit']] },
    { id: 'problem', title: 'Describing a problem', objective: 'L16-O5', href: APPT,
      table: [['Die Heizung funktioniert nicht.', 'The heating doesn’t work.'], ['Der Drucker ist kaputt.', 'The printer is broken.'], ['Das Licht geht nicht an.', 'The light doesn’t come on.'], ['der Techniker · der Hausmeister · der Vermieter', 'technician · caretaker · landlord']],
      examples: [['Guten Tag, hier ist Sara Klein. Wir haben ein Problem: Die Waschmaschine ist kaputt. Könnten Sie bitte heute noch kommen?', 'Hello, this is Sara Klein. We have a problem: the washing machine is broken. Could you please come today?']] }
  ];

  const practice = [
    tp('L16-P-01', '… zwei Tagen kommt der Techniker. (from now)', 'In', 'in = future, from now.'),
    tp('L16-P-02', '… dem Essen trinke ich einen Kaffee. (after)', 'Nach', 'nach = after.'),
    tp('L16-P-03', 'Ich habe … einer Woche angerufen. (ago)', 'vor', 'vor = ago.'),
    tp('L16-P-04', '… dem Termin rufe ich noch einmal an. (before)', 'Vor', 'vor = before.'),
    dat('L16-P-05', 'in ___ Stunde (eine)', [['einer']], 'die Stunde → einer.'),
    dat('L16-P-06', 'nach ___ Kurs (der)', [['dem']], 'der Kurs → dem.'),
    dat('L16-P-07', 'vor drei ___ (Tag, plural)', [['Tagen']], 'Dative plural: Tage + n.'),
    q({ id: 'L16-P-08', topic: 'time-prepositions', skill: 'grammar', grammar: 'time-prepositions-dative', type: 'order', objective: 'L16-O1', instructions: 'Put the words in order.', prompt: 'I’ll be there in an hour.', tokens: ['In', 'einer', 'Stunde', 'bin', 'ich', 'da'], answer: 'In einer Stunde bin ich da', explanation: 'Time first → verb second.' }),
    q({ id: 'L16-P-09', topic: 'time-prepositions', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O1', instructions: 'Write it in German.', prompt: 'two weeks ago', answer: 'vor zwei Wochen', explanation: 'vor + dative plural (Wochen).' }),
    q({ id: 'L16-P-10', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'conjugation', objective: 'L16-O2', instructions: 'Write the form of könnten.', prompt: 'du + könnten →', answer: 'könntest', explanation: 'du könntest.', learnHref: POL }),
    q({ id: 'L16-P-11', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'mc', objective: 'L16-O2', instructions: 'Which request is the most polite?', prompt: 'You ask a stranger to help you.', options: ['Könnten Sie mir bitte helfen?', 'Helfen Sie mir!', 'Kannst du mir helfen?', 'Du hilfst mir.'], answer: 'Könnten Sie mir bitte helfen?', explanation: 'Könnten Sie bitte … = extra polite.', learnHref: POL }),
    q({ id: 'L16-P-12', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'order', objective: 'L16-O2', instructions: 'Put the words in order.', prompt: 'Could you please repair the heating?', tokens: ['Könnten', 'Sie', 'bitte', 'die', 'Heizung', 'reparieren'], answer: 'Könnten Sie bitte die Heizung reparieren', explanation: 'Könnten … infinitive at the end.' }),
    q({ id: 'L16-P-13', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'gap', objective: 'L16-O2', instructions: 'Make it extra polite.', prompt: '___ Sie bitte langsam ___? (sprechen)', answer: [['Könnten'], ['sprechen']], explanation: 'Könnten Sie bitte langsam sprechen?' }),
    q({ id: 'L16-P-14', topic: 'help', skill: 'communication', type: 'mc', objective: 'L16-O3', instructions: 'Choose the best reaction.', prompt: '– Kann ich Ihnen helfen? – …', options: ['Ja, gern! Das ist sehr nett.', 'Nein, das passt mir gut.', 'Ich sage den Termin ab.', 'Gute Besserung!'], answer: 'Ja, gern! Das ist sehr nett.', explanation: 'Accepting an offer of help.', learnHref: HELP }),
    q({ id: 'L16-P-15', topic: 'help', skill: 'communication', type: 'mc', objective: 'L16-O3', instructions: 'Choose the polite refusal.', prompt: '– Könnten Sie heute kommen? – …', options: ['Tut mir leid, heute geht es leider nicht.', 'Nein!', 'Kein Problem.', 'Natürlich!'], answer: 'Tut mir leid, heute geht es leider nicht.', explanation: 'Refuse politely: Tut mir leid, … leider nicht.' }),
    q({ id: 'L16-P-16', topic: 'help', skill: 'vocabulary', type: 'match', objective: 'L16-O3', instructions: 'Match the phrases.', prompt: '', pairs: [['Kein Problem.', 'No problem.'], ['Natürlich!', 'Of course!'], ['Das ist sehr nett.', 'That’s very kind.'], ['Brauchen Sie Hilfe?', 'Do you need help?'], ['Das geht leider nicht.', 'Unfortunately that’s not possible.']], explanation: 'Help phrases.' }),
    q({ id: 'L16-P-17', topic: 'appointments', skill: 'vocabulary', type: 'match', objective: 'L16-O4', instructions: 'Match the verbs.', prompt: '', pairs: [['vereinbaren', 'to arrange'], ['absagen', 'to cancel'], ['verschieben', 'to postpone / move'], ['vorschlagen', 'to suggest'], ['passen', 'to suit']], explanation: 'Appointment verbs.', learnHref: APPT }),
    q({ id: 'L16-P-18', topic: 'appointments', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L16-O4', instructions: 'Fill in absagen (separable).', prompt: 'Ich ___ den Termin am Montag ___.', answer: [['sage'], ['ab']], explanation: 'absagen: ich sage … ab.', learnHref: APPT }),
    q({ id: 'L16-P-19', topic: 'appointments', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L16-O4', instructions: 'Fill in vorschlagen (separable).', prompt: 'Ich ___ Donnerstag ___.', answer: [['schlage'], ['vor']], explanation: 'vorschlagen: ich schlage … vor.' }),
    q({ id: 'L16-P-20', topic: 'appointments', skill: 'grammar', grammar: 'dative-verbs', type: 'mc', objective: 'L16-O4', instructions: 'Choose the pronoun.', prompt: 'Passt es … am Freitag? (Sie)', options: ['Ihnen', 'Sie', 'Ihr', 'ihnen'], answer: 'Ihnen', explanation: 'passen + dative: Ihnen.' }),
    q({ id: 'L16-P-21', topic: 'appointments', skill: 'communication', type: 'order', objective: 'L16-O4', instructions: 'Put the words in order.', prompt: 'Can we move the appointment?', tokens: ['Können', 'wir', 'den', 'Termin', 'verschieben'], answer: 'Können wir den Termin verschieben', explanation: 'Modal first, infinitive last.' }),
    q({ id: 'L16-P-22', topic: 'problem', skill: 'vocabulary', type: 'match', objective: 'L16-O5', instructions: 'Match.', prompt: '', pairs: [['die Heizung', 'heating'], ['kaputt', 'broken'], ['funktionieren', 'to work (device)'], ['der Hausmeister', 'caretaker'], ['reparieren', 'to repair']], explanation: 'Problems in the flat.', learnHref: APPT }),
    q({ id: 'L16-P-23', topic: 'problem', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O5', instructions: 'Write it in German.', prompt: 'The heating doesn’t work.', answer: 'Die Heizung funktioniert nicht.', explanation: 'funktionieren + nicht.' }),
    q({ id: 'L16-P-24', topic: 'appointments', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O4', instructions: 'Write it in German.', prompt: 'I would like to make an appointment.', answer: 'Ich möchte einen Termin vereinbaren.', accept: ['Ich möchte einen Termin machen.'], explanation: 'einen Termin vereinbaren / machen.' }),
    q({ id: 'L16-P-25', topic: 'polite', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O2', instructions: 'Write it in German (extra polite).', prompt: 'Could you please come tomorrow?', answer: 'Könnten Sie bitte morgen kommen?', accept: ['Könnten Sie morgen bitte kommen?'], explanation: 'Könnten Sie bitte … kommen?' }),
    q({ id: 'L16-P-26', topic: 'appointments', skill: 'listening', type: 'listen', objective: 'L16-O4', instructions: 'Listen and answer.', prompt: 'When is the new appointment?', audio: 'Am Dienstag kann ich leider nicht. Geht es am Mittwoch um zehn Uhr?', options: ['Wednesday at 10', 'Tuesday at 10', 'Wednesday at 2', 'Thursday at 10'], answer: 'Wednesday at 10', explanation: 'am Mittwoch um zehn Uhr.' }),
    q({ id: 'L16-P-27', topic: 'time-prepositions', skill: 'listening', type: 'listen', objective: 'L16-O1', instructions: 'Listen and answer.', prompt: 'When will the technician come?', audio: 'Der Techniker hat angerufen. Er kommt in zwei Stunden.', options: ['in two hours', 'two hours ago', 'after two hours of work', 'in two days'], answer: 'in two hours', explanation: 'in zwei Stunden.' }),
    q({ id: 'L16-P-28', topic: 'appointments', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L16-O4', instructions: 'Listen and write.', prompt: '', audio: 'Ich muss den Termin leider absagen.', answer: 'Ich muss den Termin leider absagen.', explanation: 'muss … absagen.' }),
    q({ id: 'L16-P-29', topic: 'time-prepositions', skill: 'grammar', grammar: 'time-prepositions-dative', type: 'mc', objective: 'L16-O1', instructions: 'Choose the correct sentence.', prompt: 'I was in Vienna a year ago.', options: ['Ich war vor einem Jahr in Wien.', 'Ich war ein Jahr vor in Wien.', 'Ich war in einem Jahr in Wien.', 'Ich war nach einem Jahr in Wien.'], answer: 'Ich war vor einem Jahr in Wien.', explanation: 'ago = vor + dative, before the time.' }),
    q({ id: 'L16-P-30', topic: 'problem', skill: 'communication', type: 'mc', objective: 'L16-O5', instructions: 'Choose the best sentence.', prompt: 'You call the caretaker. What do you say first?', options: ['Guten Tag, hier ist … Wir haben ein Problem.', 'Gute Besserung!', 'Gern geschehen.', 'Das passt mir gut.'], answer: 'Guten Tag, hier ist … Wir haben ein Problem.', explanation: 'Greet, say who you are, name the problem.' })
  ];

  const DIALOG = '– Praxis Dr. Brandt, guten Tag. – Guten Tag, hier ist Omar Haddad. Ich habe am Donnerstag um neun Uhr einen Termin. Könnten wir den Termin verschieben? – Ja, natürlich. Passt es Ihnen am Freitag um elf? – Ja, das passt mir gut. Vielen Dank!';
  const READ = 'Liebe Mieterinnen und Mieter,\nam Montag kommt der Techniker. Er repariert die Heizung im Keller.\nVon 8 bis 12 Uhr gibt es kein warmes Wasser.\nNach der Reparatur funktioniert alles wieder.\nIhr Hausmeister, K. Wolf';
  const apply = [
    q({ id: 'L16-A-01', topic: 'appointments', skill: 'listening', type: 'listen', objective: 'L16-O4', instructions: 'Listen to the phone call.', prompt: 'What does Omar want?', audio: DIALOG, options: ['to move his appointment', 'to cancel his appointment', 'a new doctor', 'a sick note'], answer: 'to move his appointment', explanation: 'den Termin verschieben.' }),
    q({ id: 'L16-A-02', topic: 'appointments', skill: 'listening', type: 'listen', objective: 'L16-O4', instructions: 'Listen again.', prompt: 'When is the new appointment?', audio: DIALOG, options: ['Friday at 11', 'Thursday at 9', 'Friday at 9', 'Thursday at 11'], answer: 'Friday at 11', explanation: 'am Freitag um elf.' }),
    q({ id: 'L16-A-03', topic: 'problem', skill: 'reading', type: 'reading', objective: 'L16-O5', instructions: 'Read the notice.', passage: READ, prompt: 'Was repariert der Techniker?', options: ['die Heizung', 'die Waschmaschine', 'das Licht'], answer: 'die Heizung', explanation: 'Er repariert die Heizung.' }),
    q({ id: 'L16-A-04', topic: 'problem', skill: 'reading', type: 'reading', objective: 'L16-O5', instructions: 'Read the notice.', passage: READ, prompt: 'Wann gibt es kein warmes Wasser?', options: ['von 8 bis 12 Uhr', 'den ganzen Montag', 'nach 12 Uhr'], answer: 'von 8 bis 12 Uhr', explanation: 'Von 8 bis 12 Uhr.' }),
    q({ id: 'L16-A-05', topic: 'time-prepositions', skill: 'reading', type: 'reading', objective: 'L16-O1', instructions: 'Read the notice.', passage: READ, prompt: 'Wann funktioniert alles wieder?', options: ['nach der Reparatur', 'vor der Reparatur', 'in einer Woche'], answer: 'nach der Reparatur', explanation: 'Nach der Reparatur funktioniert alles wieder.' }),
    q({ id: 'L16-A-06', topic: 'problem', skill: 'writing', type: 'writing', objective: 'L16-O5', instructions: 'Write an e-mail to your landlord (4–6 sentences).', prompt: 'Something in your flat is broken. Describe the problem, say since when, and ask politely for a repair appointment.',
      rubric: ['I describe the problem (… funktioniert nicht / ist kaputt).', 'I use a time phrase with vor / seit + dative.', 'I ask with Könnten Sie bitte …?', 'I suggest a day and time.'],
      model: 'Sehr geehrter Herr Vogel,\nin meiner Wohnung ist die Waschmaschine kaputt. Sie funktioniert seit drei Tagen nicht. Könnten Sie bitte einen Techniker schicken? Am Mittwoch nach 15 Uhr bin ich zu Hause.\nMit freundlichen Grüßen\nDelowar Hossain', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L16-A-07', topic: 'appointments', skill: 'speaking', type: 'speaking', objective: 'L16-O4', instructions: 'Role play (out loud): call a doctor’s surgery.', prompt: 'Make an appointment. The first suggested day doesn’t suit you — suggest another day. Then thank and say goodbye.',
      rubric: ['I said who I am: Hier ist …', 'I said: Ich möchte einen Termin vereinbaren.', 'I refused politely and suggested another day.', 'I confirmed: Das passt mir gut. Vielen Dank!'],
      model: '– Guten Tag, hier ist Delowar Hossain. Ich möchte einen Termin vereinbaren. – Passt es Ihnen am Montag um 8? – Am Montag kann ich leider nicht. Geht es am Dienstag? – Ja, um 10 Uhr. – Super, das passt mir gut. Vielen Dank! Auf Wiederhören.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    tp('L16-T-01', 'Ich komme … zehn Minuten. (from now)', 'in', 'in = in (future).'),
    tp('L16-T-02', '… dem Frühstück lese ich die Zeitung. (after)', 'Nach', 'nach = after.'),
    tp('L16-T-03', 'Sie ist … drei Jahren nach Deutschland gekommen. (ago)', 'vor', 'vor = ago.'),
    dat('L16-T-04', 'vor ___ Woche (eine)', [['einer']], 'die Woche → einer.'),
    dat('L16-T-05', 'in zwei ___ (Monat, plural)', [['Monaten']], 'Dative plural: Monate + n.'),
    q({ id: 'L16-T-06', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'conjugation', objective: 'L16-O2', instructions: 'Write the form of könnten.', prompt: 'ihr + könnten →', answer: 'könntet', explanation: 'ihr könntet.' }),
    q({ id: 'L16-T-07', topic: 'polite', skill: 'grammar', grammar: 'koennten', type: 'order', objective: 'L16-O2', instructions: 'Put the words in order.', prompt: 'Could you please call me back?', tokens: ['Könnten', 'Sie', 'mich', 'bitte', 'zurückrufen'], answer: 'Könnten Sie mich bitte zurückrufen', explanation: 'Könnten … infinitive at the end.' }),
    q({ id: 'L16-T-08', topic: 'help', skill: 'communication', type: 'mc', objective: 'L16-O3', instructions: 'Choose the best reaction.', prompt: '– Könnten Sie mir bitte den Weg zeigen? – …', options: ['Ja, klar! Kein Problem.', 'Gute Besserung!', 'Ich sage den Termin ab.', 'Das ist kaputt.'], answer: 'Ja, klar! Kein Problem.', explanation: 'Agreeing to a request.' }),
    q({ id: 'L16-T-09', topic: 'appointments', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L16-O4', instructions: 'Fill in absagen (separable).', prompt: 'Er ___ den Termin ___.', answer: [['sagt'], ['ab']], explanation: 'er sagt … ab.' }),
    q({ id: 'L16-T-10', topic: 'appointments', skill: 'grammar', grammar: 'dative-verbs', type: 'mc', objective: 'L16-O4', instructions: 'Choose the pronoun.', prompt: 'Am Montag passt es … nicht. (ich)', options: ['mir', 'mich', 'ich', 'mein'], answer: 'mir', explanation: 'passen + dative: mir.' }),
    q({ id: 'L16-T-11', topic: 'appointments', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O4', instructions: 'Write it in German.', prompt: 'Does Friday suit you? (Sie)', answer: 'Passt es Ihnen am Freitag?', accept: ['Passt Ihnen Freitag?', 'Passt Ihnen der Freitag?'], explanation: 'Passt es Ihnen am …?' }),
    q({ id: 'L16-T-12', topic: 'problem', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L16-O5', instructions: 'Write it in German.', prompt: 'The printer is broken.', answer: 'Der Drucker ist kaputt.', explanation: 'kaputt = broken.' }),
    q({ id: 'L16-T-13', topic: 'time-prepositions', skill: 'listening', type: 'listen', objective: 'L16-O1', instructions: 'Listen and answer.', prompt: 'When did she call?', audio: 'Ich habe vor einer Stunde beim Hausmeister angerufen.', options: ['an hour ago', 'in an hour', 'after an hour', 'for an hour'], answer: 'an hour ago', explanation: 'vor einer Stunde = an hour ago.' }),
    q({ id: 'L16-T-14', topic: 'appointments', skill: 'reading', type: 'reading', objective: 'L16-O4', instructions: 'Read and answer.', passage: 'Hallo Frau Lenz, leider bin ich krank. Ich muss unseren Termin\nam Mittwoch absagen. Passt es Ihnen nächste Woche? Tim Bauer', prompt: 'Was macht Tim mit dem Termin am Mittwoch?', options: ['Er sagt ihn ab.', 'Er vereinbart ihn.', 'Er kommt früher.'], answer: 'Er sagt ihn ab.', explanation: 'Ich muss … absagen.' }),
    q({ id: 'L16-T-15', topic: 'problem', skill: 'vocabulary', type: 'match', objective: 'L16-O5', instructions: 'Match.', prompt: '', pairs: [['der Vermieter', 'landlord'], ['der Techniker', 'technician'], ['der Termin', 'appointment'], ['die Reparatur', 'repair'], ['das Licht', 'light']], explanation: 'Problem and appointment words.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
