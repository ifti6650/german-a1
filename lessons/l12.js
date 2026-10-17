// Lektion 12 · "Im Frühling bin ich nach Hamburg gefahren." (Momente A1.1, Modul 4)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 13.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 12, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const hs = (id, prompt, a, ex, opts) => q({ id, topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'mc', objective: 'L12-O1', instructions: 'haben or sein?', prompt, options: opts || (a === a.toLowerCase() ? undefined : undefined) || ['bin', 'habe', 'ist', 'hat'], answer: a, explanation: ex, learnHref: GB + '13' });
  const perf = (id, prompt, a, ex) => q({ id, topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'gap', objective: 'L12-O1', instructions: 'Fill in sein and the past participle.', prompt, answer: a, explanation: ex, learnHref: GB + '13' });
  const prep = (id, prompt, a, ex, opts) => q({ id, topic: 'im-seit-nach', skill: 'grammar', grammar: 'prepositions-time-place', type: 'mc', objective: 'L12-O4', instructions: 'Choose the preposition.', prompt, options: opts, answer: a, explanation: ex, learnHref: GB + '13' });

  const objectives = [
    { id: 'L12-O1', text: 'Choose haben or sein in the Perfekt (movement and change → sein, also bleiben).', kind: 'grammar' },
    { id: 'L12-O2', text: 'Use war and hatte for sein and haben in the past.', kind: 'grammar' },
    { id: 'L12-O3', text: 'Name the months and seasons, and important festivals.', kind: 'communication' },
    { id: 'L12-O4', text: 'Use im (Sommer, Mai), seit (+ time) and nach (+ city / country).', kind: 'grammar' },
    { id: 'L12-O5', text: 'Tell a short holiday story in the past.', kind: 'communication' }
  ];

  const learn = [
    { id: 'haben-sein', title: 'haben or sein?', objective: 'L12-O1', href: GB + '13',
      text: 'Most verbs use haben. Verbs of movement from A to B (gehen, fahren, fliegen, kommen, ankommen) and of change (aufstehen) use sein — and so does bleiben.',
      table: [['Ich bin nach Hamburg gefahren.', 'fahren → ist gefahren'], ['Wir sind spät angekommen.', 'ankommen → ist angekommen'], ['Er ist um 6 Uhr aufgestanden.', 'aufstehen → ist aufgestanden'], ['Sie sind zu Hause geblieben.', 'bleiben → ist geblieben'], ['Ich habe Pizza gegessen.', 'most verbs → haben']],
      mistakes: [['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Movement to a place → sein.']] },
    { id: 'war-hatte', title: 'war and hatte', objective: 'L12-O2', href: GB + '13',
      text: 'For sein and haben, German usually uses the simple past instead of the Perfekt.',
      table: [['ich war · du warst · er/sie war', 'I was · you were · he/she was'], ['wir waren · ihr wart · sie/Sie waren', 'we · you (all) · they / you were'], ['ich hatte · du hattest · er/sie hatte', 'I had · you had · he/she had'], ['wir hatten · ihr hattet · sie/Sie hatten', 'we · you (all) · they / you had']],
      examples: [['Der Urlaub war toll. Wir hatten viel Zeit.', 'The holiday was great. We had a lot of time.']] },
    { id: 'months', title: 'Months, seasons and festivals', objective: 'L12-O3', href: GB + '13',
      table: [['Januar · Februar · März · April · Mai · Juni', 'January … June'], ['Juli · August · September · Oktober · November · Dezember', 'July … December'], ['der Frühling · der Sommer · der Herbst · der Winter', 'spring · summer · autumn · winter'], ['Weihnachten · Ostern · Silvester · der Geburtstag', 'Christmas · Easter · New Year’s Eve · birthday']] },
    { id: 'im-seit-nach', title: 'im, seit, nach', objective: 'L12-O4', href: GB + '13',
      table: [['im Sommer, im Mai', 'im + season / month'], ['seit Mai, seit 2020', 'seit = since / for (still true now, present tense)'], ['nach Hamburg, nach Spanien', 'nach + city / country = to'], ['am Meer · in den Bergen', 'at the sea · in the mountains (learn as phrases)']],
      mistakes: [['Ich lerne Deutsch seit Mai.', 'Ich lerne seit Mai Deutsch.', 'Both are possible; seit + time usually comes before the object.']] },
    { id: 'story', title: 'Putting it together: a holiday story', objective: 'L12-O5', href: GB + '13',
      examples: [['Im Juli bin ich nach Spanien geflogen. Ich war zwei Wochen am Meer. Das Hotel war schön, und wir hatten viel Spaß.', 'In July I flew to Spain. I was at the sea for two weeks. The hotel was nice, and we had a lot of fun.']] }
  ];

  const practice = [
    hs('L12-P-01', 'Ich … nach Berlin gefahren.', 'bin', 'fahren (movement) → sein: ich bin.'),
    q({ id: 'L12-P-02', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'mc', objective: 'L12-O1', instructions: 'haben or sein?', prompt: 'Wir … Pizza gegessen.', options: ['haben', 'sind'], answer: 'haben', explanation: 'essen → haben.' }),
    perf('L12-P-03', 'Er ___ um 7 Uhr ___. (aufstehen)', [['ist'], ['aufgestanden']], 'aufstehen → ist aufgestanden.'),
    perf('L12-P-04', '___ du nach Spanien ___? (fliegen)', [['Bist'], ['geflogen']], 'fliegen → bist … geflogen.'),
    perf('L12-P-05', 'Sie (they) ___ zu Hause ___. (bleiben)', [['sind'], ['geblieben']], 'bleiben → sind … geblieben.'),
    q({ id: 'L12-P-06', topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L12-O1', instructions: 'Choose the past participle.', prompt: 'gehen →', options: ['gegangen', 'gegeht', 'gegehen', 'gegangt'], answer: 'gegangen', explanation: 'gehen → gegangen.' }),
    q({ id: 'L12-P-07', topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'translate', objective: 'L12-O1', instructions: 'Write the past participle.', prompt: 'kommen →', answer: 'gekommen', explanation: 'kommen → gekommen.' }),
    q({ id: 'L12-P-08', topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'mc', objective: 'L12-O1', instructions: 'Choose the past participle.', prompt: 'ankommen →', options: ['angekommen', 'geankommen', 'angekommt', 'ankommen'], answer: 'angekommen', explanation: 'Separable: an-ge-kommen.' }),
    q({ id: 'L12-P-09', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'order', objective: 'L12-O1', instructions: 'Put the words in order.', prompt: 'I travelled to Hamburg.', tokens: ['bin', 'Ich', 'nach', 'Hamburg', 'gefahren'], answer: 'Ich bin nach Hamburg gefahren', explanation: 'bin … gefahren.' }),
    q({ id: 'L12-P-10', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'order', objective: 'L12-O1', instructions: 'Put the words in order.', prompt: 'We arrived late.', tokens: ['sind', 'Wir', 'angekommen', 'spät'], answer: 'Wir sind spät angekommen', explanation: 'sind … angekommen.' }),
    q({ id: 'L12-P-11', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-sein', type: 'gap', objective: 'L12-O2', instructions: 'Fill in war or hatte.', prompt: 'Der Urlaub ___ super!', answer: [['war']], explanation: 'sein → war.', learnHref: GB + '13' }),
    q({ id: 'L12-P-12', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-haben', type: 'gap', objective: 'L12-O2', instructions: 'Fill in war or hatte.', prompt: 'Gestern ___ ich keine Zeit.', answer: [['hatte']], explanation: 'haben → hatte.' }),
    q({ id: 'L12-P-13', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-sein', type: 'mc', objective: 'L12-O2', instructions: 'Choose the form.', prompt: 'Wo … ihr im Sommer?', options: ['wart', 'war', 'waren', 'warst'], answer: 'wart', explanation: 'ihr wart.' }),
    q({ id: 'L12-P-14', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-haben', type: 'conjugation', objective: 'L12-O2', instructions: 'Write the past form.', prompt: 'du + haben (past) →', answer: 'hattest', explanation: 'du hattest.' }),
    q({ id: 'L12-P-15', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-sein', type: 'conjugation', objective: 'L12-O2', instructions: 'Write the past form.', prompt: 'wir + sein (past) →', answer: 'waren', explanation: 'wir waren.' }),
    q({ id: 'L12-P-16', topic: 'months', skill: 'vocabulary', type: 'match', objective: 'L12-O3', instructions: 'Match the months.', prompt: '', pairs: [['Januar', 'January'], ['März', 'March'], ['Mai', 'May'], ['Juli', 'July'], ['Oktober', 'October']], explanation: 'Months.', learnHref: GB + '13' }),
    q({ id: 'L12-P-17', topic: 'months', skill: 'vocabulary', type: 'match', objective: 'L12-O3', instructions: 'Match the seasons.', prompt: '', pairs: [['der Frühling', 'spring'], ['der Sommer', 'summer'], ['der Herbst', 'autumn'], ['der Winter', 'winter'], ['die Jahreszeit', 'season']], explanation: 'Seasons (all der).' }),
    prep('L12-P-18', '… Sommer fahren wir ans Meer.', 'Im', 'im + season.', ['Im', 'Am', 'Um', 'Seit']),
    prep('L12-P-19', 'Ich lerne … Mai Deutsch.', 'seit', 'seit = since (still true now).', ['seit', 'im', 'nach', 'um']),
    prep('L12-P-20', 'Wir fliegen … Italien.', 'nach', 'nach + country.', ['nach', 'in', 'im', 'zu']),
    q({ id: 'L12-P-21', topic: 'im-seit-nach', skill: 'grammar', grammar: 'prepositions-time-place', type: 'gap', objective: 'L12-O4', instructions: 'Fill in the preposition.', prompt: 'Mein Geburtstag ist ___ Juni.', answer: [['im']], explanation: 'im + month.' }),
    q({ id: 'L12-P-22', topic: 'months', skill: 'vocabulary', type: 'mc', objective: 'L12-O3', instructions: 'Choose the month.', prompt: 'Which month comes after April?', options: ['Mai', 'März', 'Juni', 'August'], answer: 'Mai', explanation: 'April → Mai.' }),
    q({ id: 'L12-P-23', topic: 'haben-sein', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L12-O1', instructions: 'Write it in German.', prompt: 'I travelled (drove) to Berlin.', answer: 'Ich bin nach Berlin gefahren.', explanation: 'bin … gefahren.' }),
    q({ id: 'L12-P-24', topic: 'haben-sein', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L12-O1', instructions: 'Write it in German.', prompt: 'We stayed in the hotel.', answer: 'Wir sind im Hotel geblieben.', explanation: 'bleiben → sind … geblieben.' }),
    q({ id: 'L12-P-25', topic: 'war-hatte', skill: 'writing', type: 'translate', objective: 'L12-O2', instructions: 'Write it in German.', prompt: 'The holiday was great.', answer: 'Der Urlaub war toll.', accept: ['Der Urlaub war super.'], explanation: 'war = was.' }),
    q({ id: 'L12-P-26', topic: 'story', skill: 'listening', type: 'listen', objective: 'L12-O5', instructions: 'Listen and answer.', prompt: 'When did they travel?', audio: 'Im August sind wir nach Österreich gefahren. Wir sind zwei Wochen in den Bergen geblieben.', options: ['in August', 'in April', 'in autumn', 'at Easter'], answer: 'in August', explanation: 'Im August.' }),
    q({ id: 'L12-P-27', topic: 'months', skill: 'listening', type: 'listen', objective: 'L12-O3', instructions: 'Listen and answer.', prompt: 'When was she in Berlin?', audio: 'Letztes Jahr war ich an Silvester in Berlin. Das Fest war toll.', options: ['on New Year’s Eve', 'at Christmas', 'at Easter', 'on her birthday'], answer: 'on New Year’s Eve', explanation: 'Silvester = New Year’s Eve.' }),
    q({ id: 'L12-P-28', topic: 'story', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L12-O5', instructions: 'Listen and write.', prompt: '', audio: 'Wir sind am Abend angekommen. Das Hotel war schön.', answer: 'Wir sind am Abend angekommen. Das Hotel war schön.', accept: ['Wir sind am Abend angekommen, das Hotel war schön.'], explanation: 'sind … angekommen · war.' }),
    q({ id: 'L12-P-29', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-sein', type: 'mc', objective: 'L12-O2', instructions: 'Choose the past of sein.', prompt: 'Ich … gestern nicht zu Hause.', options: ['war', 'bin', 'hatte', 'habe'], answer: 'war', explanation: 'sein (past) → ich war.' }),
    q({ id: 'L12-P-30', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'mc', objective: 'L12-O1', instructions: 'haben or sein?', prompt: 'Sie … lange geschlafen.', options: ['hat', 'ist'], answer: 'hat', explanation: 'schlafen is not movement → haben.' })
  ];

  const DIALOG = 'Im Juli bin ich mit meiner Freundin nach Spanien geflogen. Wir sind zehn Tage am Meer geblieben. Das Wetter war super und das Hotel war sehr schön.';
  const READ = 'Liebe Oma,\nwir sind seit Montag in Hamburg. Am Dienstag sind wir ans Meer gefahren. Das war toll!\nGestern hatten wir keine Zeit: Wir haben Freunde getroffen.\nViele Grüße\nLea';
  const apply = [
    q({ id: 'L12-A-01', topic: 'story', skill: 'listening', type: 'listen', objective: 'L12-O5', instructions: 'Listen to the holiday story.', prompt: 'In which month did she travel?', audio: DIALOG, options: ['July', 'June', 'August', 'January'], answer: 'July', explanation: 'Im Juli.' }),
    q({ id: 'L12-A-02', topic: 'story', skill: 'listening', type: 'listen', objective: 'L12-O5', instructions: 'Listen again.', prompt: 'How long did they stay?', audio: DIALOG, options: ['ten days', 'two weeks', 'one week', 'twelve days'], answer: 'ten days', explanation: 'zehn Tage.' }),
    q({ id: 'L12-A-03', topic: 'im-seit-nach', skill: 'reading', type: 'reading', objective: 'L12-O4', instructions: 'Read the postcard.', passage: READ, prompt: 'Seit wann ist Lea in Hamburg?', options: ['seit Montag', 'seit Dienstag', 'seit gestern'], answer: 'seit Montag', explanation: 'wir sind seit Montag in Hamburg.' }),
    q({ id: 'L12-A-04', topic: 'haben-sein', skill: 'reading', type: 'reading', objective: 'L12-O1', instructions: 'Read the postcard.', passage: READ, prompt: 'Was haben sie am Dienstag gemacht?', options: ['Sie sind ans Meer gefahren.', 'Sie haben Freunde getroffen.', 'Sie hatten keine Zeit.'], answer: 'Sie sind ans Meer gefahren.', explanation: 'Am Dienstag sind wir ans Meer gefahren.' }),
    q({ id: 'L12-A-05', topic: 'war-hatte', skill: 'reading', type: 'reading', objective: 'L12-O2', instructions: 'Read the postcard.', passage: READ, prompt: 'Was haben sie gestern gemacht?', options: ['Sie haben Freunde getroffen.', 'Sie sind ans Meer gefahren.', 'Sie sind angekommen.'], answer: 'Sie haben Freunde getroffen.', explanation: 'Wir haben Freunde getroffen.' }),
    q({ id: 'L12-A-06', topic: 'story', skill: 'writing', type: 'writing', objective: 'L12-O5', instructions: 'Write a postcard about a trip (5–6 sentences).', prompt: 'When and where did you go? How long did you stay? How was it?',
      rubric: ['I use sein with movement verbs (bin gefahren / geflogen / angekommen).', 'I use haben with other verbs.', 'I use war / hatte.', 'I use im + month/season and nach + place.'],
      model: 'Liebe Mia,\nim Mai bin ich nach Wien gefahren. Ich bin eine Woche geblieben. Das Hotel war sehr schön. Ich habe viele Museen gesehen und gut gegessen. Ich hatte viel Spaß!\nViele Grüße\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L12-A-07', topic: 'story', skill: 'speaking', type: 'speaking', objective: 'L12-O5', instructions: 'Tell a friend (out loud) about your last holiday.', prompt: 'Say when, where, how long, what you did and how it was. Ask about their holiday.',
      rubric: ['I used the Perfekt with sein and with haben.', 'I used war / hatte.', 'I said when (im …) and where (nach …).', 'I asked: Wo warst du im Urlaub?'],
      model: '– Im Sommer bin ich nach Italien geflogen. Ich war zwei Wochen am Meer. Ich habe viel geschlafen und gut gegessen. Das war super! Und wo warst du im Urlaub?', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    hs('L12-T-01', 'Er … nach Rom geflogen.', 'ist', 'fliegen → ist geflogen.'),
    q({ id: 'L12-T-02', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'mc', objective: 'L12-O1', instructions: 'haben or sein?', prompt: 'Wir … ein Hotel gesucht.', options: ['haben', 'sind'], answer: 'haben', explanation: 'suchen → haben.' }),
    perf('L12-T-03', 'Wann ___ du ___? (ankommen)', [['bist'], ['angekommen']], 'bist … angekommen.'),
    perf('L12-T-04', 'Ich ___ zu Hause ___. (bleiben)', [['bin'], ['geblieben']], 'bin … geblieben.'),
    q({ id: 'L12-T-05', topic: 'participles', skill: 'grammar', grammar: 'past-participle', type: 'translate', objective: 'L12-O1', instructions: 'Write the past participle.', prompt: 'fahren →', answer: 'gefahren', explanation: 'fahren → gefahren.' }),
    q({ id: 'L12-T-06', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'order', objective: 'L12-O1', instructions: 'Put the words in order.', prompt: 'She went home.', tokens: ['ist', 'Sie', 'nach', 'Hause', 'gegangen'], answer: 'Sie ist nach Hause gegangen', explanation: 'ist … gegangen.' }),
    q({ id: 'L12-T-07', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-sein', type: 'gap', objective: 'L12-O2', instructions: 'Fill in the past of sein.', prompt: 'Wir ___ im Sommer in Italien.', answer: [['waren']], explanation: 'wir waren.' }),
    q({ id: 'L12-T-08', topic: 'war-hatte', skill: 'grammar', grammar: 'praeteritum-haben', type: 'gap', objective: 'L12-O2', instructions: 'Fill in the past of haben.', prompt: 'Er ___ gestern Geburtstag.', answer: [['hatte']], explanation: 'er hatte.' }),
    prep('L12-T-09', '… Winter fahren wir in die Berge.', 'Im', 'im + season.', ['Im', 'Am', 'Seit', 'Nach']),
    prep('L12-T-10', 'Ich wohne … 2020 in Deutschland.', 'seit', 'seit + year (still true now).', ['seit', 'im', 'nach', 'um']),
    q({ id: 'L12-T-11', topic: 'haben-sein', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L12-O1', instructions: 'Write it in German.', prompt: 'We flew to Spain.', answer: 'Wir sind nach Spanien geflogen.', explanation: 'sind … geflogen, nach Spanien.' }),
    q({ id: 'L12-T-12', topic: 'months', skill: 'vocabulary', type: 'match', objective: 'L12-O3', instructions: 'Match.', prompt: '', pairs: [['Weihnachten', 'Christmas'], ['Ostern', 'Easter'], ['Silvester', 'New Year’s Eve'], ['der Geburtstag', 'birthday'], ['feiern', 'to celebrate']], explanation: 'Festivals.' }),
    q({ id: 'L12-T-13', topic: 'months', skill: 'listening', type: 'listen', objective: 'L12-O3', instructions: 'Listen and answer.', prompt: 'In which season did he fly to Japan?', audio: 'Im Herbst bin ich nach Japan geflogen.', options: ['autumn', 'spring', 'summer', 'winter'], answer: 'autumn', explanation: 'der Herbst = autumn.' }),
    q({ id: 'L12-T-14', topic: 'story', skill: 'reading', type: 'reading', objective: 'L12-O5', instructions: 'Read and answer.', passage: 'Herr Braun hatte im Mai Urlaub. Er ist nach Kroatien gefahren\nund ist zwei Wochen geblieben. Das Meer war wunderbar.', prompt: 'Wann hatte Herr Braun Urlaub?', options: ['im Mai', 'im März', 'im Juli'], answer: 'im Mai', explanation: 'im Mai Urlaub.' }),
    q({ id: 'L12-T-15', topic: 'haben-sein', skill: 'grammar', grammar: 'perfekt-sein', type: 'mc', objective: 'L12-O1', instructions: 'Choose one.', prompt: 'Which verb forms the Perfekt with haben?', options: ['essen', 'gehen', 'fahren', 'kommen'], answer: 'essen', explanation: 'gehen, fahren, kommen = movement → sein; essen → haben.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
