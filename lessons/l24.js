// Lektion 24 · "Der erste Oktober war mein Glückstag!" (Momente A1.2, Modul 8)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 25.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 24, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const ORD = GB + '25', DATE = GB + '25', WUE = GB + '25', FEST = GB + '25';
  const ord = (id, prompt, a, ex) => q({ id, topic: 'ordinals', skill: 'vocabulary', type: 'translate', objective: 'L24-O1', instructions: 'Write the ordinal number (der …).', prompt, answer: a, explanation: ex, learnHref: ORD });
  const date = (id, prompt, a, ex) => q({ id, topic: 'dates', skill: 'grammar', grammar: 'dates', type: 'gap', objective: 'L24-O2', instructions: 'Write the date in words.', prompt, answer: a, explanation: ex, learnHref: DATE });
  const wue = (id, prompt, a, ex) => q({ id, topic: 'wuerde', skill: 'grammar', grammar: 'wuerde', type: 'gap', objective: 'L24-O3', instructions: 'Fill in würde.', prompt, answer: a, explanation: ex, learnHref: WUE });

  const objectives = [
    { id: 'L24-O1', text: 'Form ordinal numbers: 1–19 + -te, from 20 + -ste; erste, dritte, siebte, achte.', kind: 'grammar' },
    { id: 'L24-O2', text: 'Say dates (der dritte Mai · am dritten Mai) and read years (no in before a year).', kind: 'grammar' },
    { id: 'L24-O3', text: 'Talk about wishes and dreams with würde + gern / lieber / am liebsten + infinitive.', kind: 'grammar' },
    { id: 'L24-O4', text: 'Congratulate and react on birthdays, weddings and holidays.', kind: 'communication' },
    { id: 'L24-O5', text: 'Use gratulieren, schenken, einladen and feiern for celebrations.', kind: 'communication' }
  ];

  const learn = [
    { id: 'ord', title: 'Ordinal numbers', objective: 'L24-O1', href: ORD,
      text: 'Written as a number with a full stop: der 3. = der dritte.',
      table: [['1–19: number + -te', 'der zweite, der vierte, der zwölfte, der neunzehnte'], ['irregular', 'der erste, der dritte, der siebte, der achte'], ['20+: number + -ste', 'der zwanzigste, der einundzwanzigste, der dreißigste']],
      mistakes: [['der dreite', 'der dritte', 'dritte is irregular.'], ['der zwanzigte', 'der zwanzigste', 'From 20: -ste.']] },
    { id: 'date', title: 'Dates and years', objective: 'L24-O2', href: DATE,
      table: [['Welches Datum ist heute? – Heute ist der zwölfte Oktober.', 'der + ordinal -e'], ['Wann hast du Geburtstag? – Am dritten März.', 'am + ordinal -en'], ['12.10.2026', 'day first in writing'], ['1995 = neunzehnhundertfünfundneunzig', 'until 1999: hundreds'], ['2026 = zweitausendsechsundzwanzig', 'from 2000: thousands'], ['Ich bin 1992 geboren.', 'no „in“ before a year']],
      mistakes: [['Ich bin in 1992 geboren.', 'Ich bin 1992 geboren.', 'No in before a year.'], ['Ich habe am dritte Mai Geburtstag.', 'Ich habe am dritten Mai Geburtstag.', 'am … -en.']] },
    { id: 'wuerde', title: 'würde + infinitive (would)', objective: 'L24-O3', href: WUE,
      text: 'würde works like a modal verb: position 2, infinitive at the end. Use it with gern / lieber / am liebsten for dreams. For a concrete wish now, use möchte.',
      table: [['ich würde · du würdest · er/sie würde', 'I · you · he/she would'], ['wir würden · ihr würdet · sie/Sie würden', 'we · you (all) · they / you would'], ['Ich würde gern nach Japan fahren.', 'I’d like to go to Japan.'], ['Ich würde lieber zu Hause feiern.', 'I’d rather celebrate at home.'], ['Am liebsten würde ich am Meer wohnen.', 'Most of all I’d like to live by the sea.']] },
    { id: 'fest', title: 'Festivals and congratulations', objective: 'L24-O4', href: FEST,
      table: [['Herzlichen Glückwunsch zum Geburtstag! · Alles Gute!', 'birthday'], ['Herzlichen Glückwunsch zur Hochzeit!', 'wedding'], ['Frohe Weihnachten! – Danke, dir auch!', 'Christmas'], ['Frohes neues Jahr! · Guten Rutsch! – Danke, gleichfalls!', 'New Year'], ['Viel Glück! · Viel Erfolg!', 'exam, new job'], ['Prost! · Zum Wohl!', 'a toast']] },
    { id: 'verbs', title: 'Celebration verbs', objective: 'L24-O5', href: FEST,
      table: [['gratulieren + dative', 'Ich gratuliere dir!'], ['schenken (person = dative, thing = accusative)', 'Ich schenke meiner Mutter Blumen.'], ['einladen (separable)', 'Ich lade dich zu meiner Party ein.'], ['feiern', 'Wir feiern am Samstag.']] }
  ];

  const practice = [
    ord('L24-P-01', '1. →', 'der erste', 'irregular: erste.'),
    ord('L24-P-02', '3. →', 'der dritte', 'irregular: dritte.'),
    ord('L24-P-03', '7. →', 'der siebte', 'irregular: siebte.'),
    ord('L24-P-04', '12. →', 'der zwölfte', '1–19: + te.'),
    ord('L24-P-05', '20. →', 'der zwanzigste', 'from 20: + ste.'),
    q({ id: 'L24-P-06', topic: 'ordinals', skill: 'vocabulary', type: 'mc', objective: 'L24-O1', instructions: 'Choose the ordinal.', prompt: '31. →', options: ['der einunddreißigste', 'der einunddreißigte', 'der dreißigerste', 'der einsunddreißigste'], answer: 'der einunddreißigste', explanation: 'from 20: + ste.', learnHref: ORD }),
    q({ id: 'L24-P-07', topic: 'ordinals', skill: 'vocabulary', type: 'match', objective: 'L24-O1', instructions: 'Match.', prompt: '', pairs: [['2.', 'der zweite'], ['4.', 'der vierte'], ['8.', 'der achte'], ['19.', 'der neunzehnte'], ['30.', 'der dreißigste']], explanation: 'Ordinal numbers.', learnHref: ORD }),
    date('L24-P-08', 'Heute ist der ___ Oktober. (3.10.)', [['dritte']], 'der + ordinal -e.'),
    date('L24-P-09', 'Wann ist Weihnachten? Am ___ Dezember. (25.12.)', [['fünfundzwanzigsten']], 'am + ordinal -en.'),
    date('L24-P-10', 'Ich habe am ___ Mai Geburtstag. (1.5.)', [['ersten']], 'am ersten.'),
    q({ id: 'L24-P-11', topic: 'dates', skill: 'grammar', grammar: 'dates', type: 'mc', objective: 'L24-O2', instructions: 'Choose the correct form.', prompt: 'Wann hast du Geburtstag? – …', options: ['Am vierten Juli.', 'Der vierte Juli.', 'Am vierte Juli.', 'Im vierten Juli.'], answer: 'Am vierten Juli.', explanation: 'Wann? → am …ten.', learnHref: DATE }),
    q({ id: 'L24-P-12', topic: 'dates', skill: 'grammar', grammar: 'years', type: 'mc', objective: 'L24-O2', instructions: 'How do you read the year?', prompt: '1995', options: ['neunzehnhundertfünfundneunzig', 'eintausendneunhundertfünfundneunzig', 'neunzehnfünfundneunzig', 'neunzehnhundertneunzigfünf'], answer: 'neunzehnhundertfünfundneunzig', explanation: 'Until 1999: hundreds.', learnHref: DATE }),
    q({ id: 'L24-P-13', topic: 'dates', skill: 'grammar', grammar: 'years', type: 'translate', objective: 'L24-O2', instructions: 'Write the year in words.', prompt: '2008', answer: 'zweitausendacht', explanation: 'From 2000: thousands.' }),
    q({ id: 'L24-P-14', topic: 'dates', skill: 'grammar', grammar: 'years', type: 'mc', objective: 'L24-O2', instructions: 'Choose the correct sentence.', prompt: 'I was born in 1990.', options: ['Ich bin 1990 geboren.', 'Ich bin in 1990 geboren.', 'Ich bin im 1990 geboren.', 'Ich habe 1990 geboren.'], answer: 'Ich bin 1990 geboren.', explanation: 'No in before a year.' }),
    wue('L24-P-15', 'Ich ___ gern in Italien leben.', [['würde']], 'ich würde.'),
    wue('L24-P-16', '___ du gern eine Weltreise machen?', [['Würdest']], 'du würdest.'),
    wue('L24-P-17', 'Wir ___ lieber zu Hause feiern.', [['würden']], 'wir würden.'),
    q({ id: 'L24-P-18', topic: 'wuerde', skill: 'grammar', grammar: 'wuerde', type: 'conjugation', objective: 'L24-O3', instructions: 'Conjugate.', prompt: 'ihr + würden →', answer: 'würdet', explanation: 'ihr würdet.', learnHref: WUE }),
    q({ id: 'L24-P-19', topic: 'wuerde', skill: 'grammar', grammar: 'wuerde', type: 'order', objective: 'L24-O3', instructions: 'Put the words in order.', prompt: 'Most of all I would like to live by the sea.', tokens: ['Am', 'liebsten', 'würde', 'ich', 'am', 'Meer', 'wohnen'], answer: 'Am liebsten würde ich am Meer wohnen', explanation: 'Am liebsten = position 1 → würde → ich → … wohnen.' }),
    q({ id: 'L24-P-20', topic: 'wuerde', skill: 'grammar', grammar: 'wuerde', type: 'mc', objective: 'L24-O3', instructions: 'möchte or würde gern?', prompt: 'In a café: “Ich … einen Kaffee, bitte.”', options: ['möchte', 'würde gern'], answer: 'möchte', explanation: 'Concrete wish now → möchte.' }),
    q({ id: 'L24-P-21', topic: 'fest', skill: 'communication', type: 'mc', objective: 'L24-O4', instructions: 'What do you say?', prompt: 'It’s your friend’s birthday.', options: ['Herzlichen Glückwunsch zum Geburtstag!', 'Frohe Weihnachten!', 'Gute Besserung!', 'Guten Rutsch!'], answer: 'Herzlichen Glückwunsch zum Geburtstag!', explanation: 'Birthday wish.', learnHref: FEST }),
    q({ id: 'L24-P-22', topic: 'fest', skill: 'communication', type: 'mc', objective: 'L24-O4', instructions: 'What do you say?', prompt: 'Your friend has an exam tomorrow.', options: ['Viel Glück!', 'Prost!', 'Frohes neues Jahr!', 'Gern geschehen.'], answer: 'Viel Glück!', explanation: 'Viel Glück / Viel Erfolg.' }),
    q({ id: 'L24-P-23', topic: 'fest', skill: 'vocabulary', type: 'match', objective: 'L24-O4', instructions: 'Match the occasion and the wish.', prompt: '', pairs: [['24. Dezember', 'Frohe Weihnachten!'], ['31. Dezember', 'Guten Rutsch!'], ['die Hochzeit', 'Herzlichen Glückwunsch zur Hochzeit!'], ['ein neuer Job', 'Viel Erfolg!'], ['ein Toast', 'Prost!']], explanation: 'Festivals and wishes.', learnHref: FEST }),
    q({ id: 'L24-P-24', topic: 'verbs', skill: 'grammar', grammar: 'dative-verbs', type: 'mc', objective: 'L24-O5', instructions: 'Choose the pronoun.', prompt: 'Ich gratuliere … zum Geburtstag! (du)', options: ['dir', 'dich', 'du', 'dein'], answer: 'dir', explanation: 'gratulieren + dative.', learnHref: FEST }),
    q({ id: 'L24-P-25', topic: 'verbs', skill: 'grammar', grammar: 'separable-verbs', type: 'gap', objective: 'L24-O5', instructions: 'Fill in einladen (separable).', prompt: 'Ich ___ dich zu meiner Party ___.', answer: [['lade'], ['ein']], explanation: 'einladen: ich lade … ein.' }),
    q({ id: 'L24-P-26', topic: 'dates', skill: 'listening', type: 'listen', objective: 'L24-O2', instructions: 'Listen and answer.', prompt: 'When is the party?', audio: 'Meine Party ist am achtzehnten Juni um acht Uhr. Kommst du?', options: ['18 June', '8 June', '18 July', '28 June'], answer: '18 June', explanation: 'am achtzehnten Juni.' }),
    q({ id: 'L24-P-27', topic: 'wuerde', skill: 'listening', type: 'listen', objective: 'L24-O3', instructions: 'Listen and answer.', prompt: 'What is her dream?', audio: 'Ich würde gern einmal in Kanada leben. Am liebsten in Vancouver.', options: ['to live in Canada', 'to visit Japan', 'to buy a house', 'to learn French'], answer: 'to live in Canada', explanation: 'in Kanada leben.' }),
    q({ id: 'L24-P-28', topic: 'fest', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L24-O4', instructions: 'Listen and write.', prompt: '', audio: 'Herzlichen Glückwunsch! Ich wünsche dir alles Gute!', answer: 'Herzlichen Glückwunsch! Ich wünsche dir alles Gute!', explanation: 'alles Gute.' }),
    q({ id: 'L24-P-29', topic: 'dates', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L24-O2', instructions: 'Write it in German (in words).', prompt: 'My birthday is on the 3rd of March.', answer: 'Ich habe am dritten März Geburtstag.', accept: ['Mein Geburtstag ist am dritten März.'], explanation: 'am dritten März.' }),
    q({ id: 'L24-P-30', topic: 'wuerde', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L24-O3', instructions: 'Write it in German.', prompt: 'I would like to fly to Japan one day.', answer: 'Ich würde gern einmal nach Japan fliegen.', accept: ['Ich würde gern mal nach Japan fliegen.', 'Ich würde gern nach Japan fliegen.'], explanation: 'würde gern … fliegen.' })
  ];

  const DIALOG = '– Hallo Nora, herzlichen Glückwunsch zum Geburtstag! – Danke schön! – Wie feierst du? – Am Samstag mache ich eine Party. Ich lade dich ein! – Super, danke! Was wünschst du dir? – Ich würde gern einmal nach Island fahren. Aber Blumen sind auch schön!';
  const READ = 'Einladung\nLiebe Freunde,\nwir heiraten! Am 14. September feiern wir im Restaurant „Seeblick“.\nDie Party beginnt um 18 Uhr.\nBitte antwortet bis zum 1. August.\nAnna und Murat';
  const apply = [
    q({ id: 'L24-A-01', topic: 'fest', skill: 'listening', type: 'listen', objective: 'L24-O4', instructions: 'Listen to the conversation.', prompt: 'Why does he congratulate Nora?', audio: DIALOG, options: ['It’s her birthday.', 'She is getting married.', 'She passed an exam.', 'It’s Christmas.'], answer: 'It’s her birthday.', explanation: 'zum Geburtstag.' }),
    q({ id: 'L24-A-02', topic: 'wuerde', skill: 'listening', type: 'listen', objective: 'L24-O3', instructions: 'Listen again.', prompt: 'What would Nora like to do one day?', audio: DIALOG, options: ['go to Iceland', 'have a big party', 'buy flowers', 'go to Japan'], answer: 'go to Iceland', explanation: 'nach Island fahren.' }),
    q({ id: 'L24-A-03', topic: 'dates', skill: 'reading', type: 'reading', objective: 'L24-O2', instructions: 'Read the invitation.', passage: READ, prompt: 'Wann ist die Hochzeit?', options: ['am vierzehnten September', 'am ersten August', 'am achtzehnten September'], answer: 'am vierzehnten September', explanation: 'Am 14. September.' }),
    q({ id: 'L24-A-04', topic: 'dates', skill: 'reading', type: 'reading', objective: 'L24-O2', instructions: 'Read the invitation.', passage: READ, prompt: 'Bis wann soll man antworten?', options: ['bis zum ersten August', 'bis zum vierzehnten September', 'bis 18 Uhr'], answer: 'bis zum ersten August', explanation: 'bis zum 1. August.' }),
    q({ id: 'L24-A-05', topic: 'fest', skill: 'reading', type: 'reading', objective: 'L24-O4', instructions: 'Read the invitation.', passage: READ, prompt: 'Was sagt man zu Anna und Murat?', options: ['Herzlichen Glückwunsch zur Hochzeit!', 'Gute Besserung!', 'Frohe Ostern!'], answer: 'Herzlichen Glückwunsch zur Hochzeit!', explanation: 'They are getting married.' }),
    q({ id: 'L24-A-06', topic: 'fest', skill: 'writing', type: 'writing', objective: 'L24-O5', instructions: 'Write a birthday card or an invitation (4–6 sentences).', prompt: 'Congratulate or invite. Give the date in words. Add a wish or dream with würde.',
      rubric: ['I congratulate correctly (Herzlichen Glückwunsch …).', 'I give a date with am + ordinal -en.', 'I use einladen or schenken correctly.', 'I use würde + gern + infinitive.'],
      model: 'Liebe Sara,\nherzlichen Glückwunsch zum Geburtstag! Ich wünsche dir alles Gute! Am zwanzigsten Mai feiere ich auch meinen Geburtstag. Ich lade dich ein! Am liebsten würde ich mit allen Freunden am See grillen.\nDein Delowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L24-A-07', topic: 'wuerde', skill: 'speaking', type: 'speaking', objective: 'L24-O3', instructions: 'Speak out loud: dates, dreams and wishes.', prompt: 'Say today’s date, your birthday, your year of birth and two family birthdays. Then talk about three dreams. Finally congratulate a friend and invite them.',
      rubric: ['I said dates correctly (der …te / am …ten).', 'I read a year correctly, without in.', 'I used würde gern / lieber / am liebsten.', 'I congratulated and invited (einladen).'],
      model: 'Heute ist der sechzehnte Oktober. Ich habe am dritten März Geburtstag. Ich bin 1992 geboren. Ich würde gern nach Japan fliegen, lieber im Frühling, und am liebsten würde ich ein Jahr dort wohnen. Herzlichen Glückwunsch, Tom! Ich lade dich zum Essen ein!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    ord('L24-T-01', '8. →', 'der achte', 'irregular: achte.'),
    ord('L24-T-02', '21. →', 'der einundzwanzigste', 'from 20: + ste.'),
    q({ id: 'L24-T-03', topic: 'ordinals', skill: 'vocabulary', type: 'mc', objective: 'L24-O1', instructions: 'Choose the ordinal.', prompt: '5. →', options: ['der fünfte', 'der fünfste', 'der fünfe', 'der fünfter'], answer: 'der fünfte', explanation: '1–19: + te.' }),
    date('L24-T-04', 'Heute ist der ___ Januar. (1.1.)', [['erste']], 'der erste.'),
    date('L24-T-05', 'Wir fliegen am ___ August. (10.8.)', [['zehnten']], 'am zehnten.'),
    q({ id: 'L24-T-06', topic: 'dates', skill: 'grammar', grammar: 'years', type: 'translate', objective: 'L24-O2', instructions: 'Write the year in words.', prompt: '2026', answer: 'zweitausendsechsundzwanzig', explanation: 'From 2000: thousands.' }),
    q({ id: 'L24-T-07', topic: 'dates', skill: 'grammar', grammar: 'dates', type: 'mc', objective: 'L24-O2', instructions: 'Choose the question.', prompt: 'You want to know today’s date.', options: ['Der Wievielte ist heute?', 'Wann hast du Geburtstag?', 'Wie spät ist es?', 'Welcher Tag ist heute?'], answer: 'Der Wievielte ist heute?', explanation: 'Der Wievielte ist heute? / Welches Datum ist heute?' }),
    wue('L24-T-08', 'Er ___ gern Pilot werden.', [['würde']], 'er würde.'),
    q({ id: 'L24-T-09', topic: 'wuerde', skill: 'grammar', grammar: 'wuerde', type: 'order', objective: 'L24-O3', instructions: 'Put the words in order.', prompt: 'Would you like to live in Berlin?', tokens: ['Würdest', 'du', 'gern', 'in', 'Berlin', 'wohnen'], answer: 'Würdest du gern in Berlin wohnen', explanation: 'würde first in a question; infinitive last.' }),
    q({ id: 'L24-T-10', topic: 'fest', skill: 'communication', type: 'mc', objective: 'L24-O4', instructions: 'Choose the best reply.', prompt: '– Frohe Weihnachten! – …', options: ['Danke, dir auch!', 'Gute Besserung!', 'Prost!', 'Viel Erfolg!'], answer: 'Danke, dir auch!', explanation: 'Reply: Danke, dir auch! / gleichfalls.' }),
    q({ id: 'L24-T-11', topic: 'verbs', skill: 'grammar', grammar: 'schenken', type: 'mc', objective: 'L24-O5', instructions: 'Choose the correct sentence.', prompt: 'I’m giving my mother flowers.', options: ['Ich schenke meiner Mutter Blumen.', 'Ich schenke meine Mutter Blumen.', 'Ich schenke meiner Mutter Blumen ein.', 'Ich gratuliere meiner Mutter Blumen.'], answer: 'Ich schenke meiner Mutter Blumen.', explanation: 'person = dative (meiner Mutter), thing = accusative.' }),
    q({ id: 'L24-T-12', topic: 'wuerde', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L24-O3', instructions: 'Write it in German.', prompt: 'I would rather celebrate at home.', answer: 'Ich würde lieber zu Hause feiern.', explanation: 'würde lieber … feiern.' }),
    q({ id: 'L24-T-13', topic: 'dates', skill: 'listening', type: 'listen', objective: 'L24-O2', instructions: 'Listen and answer.', prompt: 'When was he born?', audio: 'Ich bin am siebten April neunzehnhundertachtundachtzig geboren.', options: ['7 April 1988', '17 April 1988', '7 August 1988', '7 April 1998'], answer: '7 April 1988', explanation: 'am siebten April 1988.' }),
    q({ id: 'L24-T-14', topic: 'fest', skill: 'reading', type: 'reading', objective: 'L24-O4', instructions: 'Read and answer.', passage: 'Lieber Paul, herzlichen Glückwunsch zum neuen Job!\nViel Erfolg und viel Spaß! Deine Kolleginnen', prompt: 'Warum gratulieren die Kolleginnen?', options: ['Paul hat einen neuen Job.', 'Paul hat Geburtstag.', 'Paul heiratet.'], answer: 'Paul hat einen neuen Job.', explanation: 'zum neuen Job.' }),
    q({ id: 'L24-T-15', topic: 'verbs', skill: 'vocabulary', type: 'match', objective: 'L24-O5', instructions: 'Match.', prompt: '', pairs: [['einladen', 'to invite'], ['schenken', 'to give (as a present)'], ['feiern', 'to celebrate'], ['gratulieren', 'to congratulate'], ['die Hochzeit', 'wedding']], explanation: 'Celebration words.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
