// Lektion 8 · "Ich habe leider keine Zeit." (Momente A1.1, Modul 3)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 9.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 8, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const art = (id, noun, hint, a) => q({ id, topic: 'articles', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L8-O2', instructions: 'Choose the article.', prompt: noun, hint, options: ['der', 'die', 'das'], answer: a, explanation: `${a} ${noun}.` });
  const time = (id, prompt, opts, a, ex, obj = 'L8-O4') => q({ id, topic: 'time', skill: 'vocabulary', type: 'mc', objective: obj, instructions: 'Choose the time.', prompt, options: opts, answer: a, explanation: ex, learnHref: GB + '9' });

  const objectives = [
    { id: 'L8-O1', text: 'Start a sentence with a time and keep the verb in position 2 (Am Montag arbeite ich).', kind: 'grammar' },
    { id: 'L8-O2', text: 'Name the days of the week and the parts of the day.', kind: 'communication' },
    { id: 'L8-O3', text: 'Use am (days, parts of the day) and um (clock times).', kind: 'grammar' },
    { id: 'L8-O4', text: 'Ask and tell the time, formally and informally (halb drei, Viertel nach zwei).', kind: 'communication' },
    { id: 'L8-O5', text: 'Use wissen (ich weiß, du weißt, er weiß).', kind: 'grammar' },
    { id: 'L8-O6', text: 'Make plans: invite, accept and decline (Hast du Lust? Gute Idee! Da kann ich leider nicht.).', kind: 'communication' }
  ];

  const learn = [
    { id: 'inversion', title: 'Time first, then the verb, then the subject', objective: 'L8-O1', href: GB + '9',
      text: 'The verb always stays in position 2. If a time comes first, the subject moves behind the verb.',
      table: [['Ich arbeite am Montag.', 'subject – verb – …'], ['Am Montag arbeite ich.', 'time – verb – subject'], ['Heute habe ich leider keine Zeit.', 'time – verb – subject']],
      mistakes: [['Morgen ich komme.', 'Morgen komme ich.', 'The verb must be in position 2.']] },
    { id: 'days', title: 'Days and parts of the day', objective: 'L8-O2', href: GB + '9',
      text: 'All days and parts of the day are der words — except die Nacht.',
      table: [['Montag · Dienstag · Mittwoch', 'Monday · Tuesday · Wednesday'], ['Donnerstag · Freitag', 'Thursday · Friday'], ['Samstag · Sonntag = das Wochenende', 'Saturday · Sunday = the weekend'], ['der Morgen · Vormittag · Mittag', 'early morning · late morning · noon'], ['der Nachmittag · Abend · die Nacht', 'afternoon · evening · night']] },
    { id: 'am-um', title: 'am and um', objective: 'L8-O3', href: GB + '9',
      table: [['am Montag, am Wochenende, am Abend', 'am + day / part of the day'], ['um acht Uhr, um halb drei', 'um + clock time'], ['in der Nacht', 'exception: in der Nacht']],
      mistakes: [['um Montag', 'am Montag', 'Days take am.']] },
    { id: 'time', title: 'Telling the time', objective: 'L8-O4', href: GB + '9',
      text: 'Informal times count towards the next hour with halb: halb drei = 2:30 (“half to three”). Formal times (timetables, offices) use the 24-hour clock.',
      table: [['2:15 → Viertel nach zwei', 'formal: zwei Uhr fünfzehn'], ['2:30 → halb drei', 'formal: zwei Uhr dreißig'], ['2:45 → Viertel vor drei', 'formal: zwei Uhr fünfundvierzig'], ['2:50 → zehn vor drei', ''], ['14:30', 'vierzehn Uhr dreißig']],
      examples: [['Wie spät ist es? / Wie viel Uhr ist es? – Es ist halb neun.', 'What time is it? – It is 8:30.']],
      mistakes: [['halb drei = 3:30', 'halb drei = 2:30', 'halb counts towards the next hour.']] },
    { id: 'wissen', title: 'wissen (to know a fact)', objective: 'L8-O5', href: GB + '9',
      table: [['ich weiß · du weißt', 'I know · you know'], ['er / sie weiß', 'he / she knows'], ['wir wissen · ihr wisst · sie/Sie wissen', 'we · you (all) · they / you (polite)']],
      examples: [['Das weiß ich nicht.', 'I don’t know (that).']] },
    { id: 'plans', title: 'Making plans', objective: 'L8-O6', href: GB + '9',
      table: [['Hast du am Freitag Zeit? / Hast du Lust?', 'inviting'], ['Gute Idee! / Gern!', 'saying yes'], ['Da kann ich leider nicht. / Leider habe ich keine Zeit.', 'saying no']],
      examples: [['Gehen wir am Samstag ins Kino? – Gute Idee!', 'Shall we go to the cinema on Saturday? – Good idea!']] }
  ];

  const practice = [
    q({ id: 'L08-P-01', topic: 'inversion', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L8-O1', instructions: 'Start with the time. Put the words in order.', prompt: 'On Monday I work.', tokens: ['arbeite', 'Am', 'ich', 'Montag'], answer: 'Am Montag arbeite ich', explanation: 'Time – verb – subject.', learnHref: GB + '9' }),
    q({ id: 'L08-P-02', topic: 'inversion', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L8-O1', instructions: 'Start with the time. Put the words in order.', prompt: 'Today I have no time.', tokens: ['ich', 'Heute', 'Zeit', 'habe', 'keine'], answer: 'Heute habe ich keine Zeit', explanation: 'Heute – habe – ich.' }),
    q({ id: 'L08-P-03', topic: 'inversion', skill: 'grammar', grammar: 'inversion', type: 'mc', objective: 'L8-O1', instructions: 'Choose the correct sentence.', prompt: 'Tomorrow he comes at eight.', options: ['Morgen kommt er um acht Uhr.', 'Morgen er kommt um acht Uhr.', 'Er morgen kommt um acht Uhr.', 'Morgen kommt um acht Uhr er.'], answer: 'Morgen kommt er um acht Uhr.', explanation: 'Verb in position 2, subject right after it.' }),
    q({ id: 'L08-P-04', topic: 'am-um', skill: 'grammar', grammar: 'am-um', type: 'gap', objective: 'L8-O3', instructions: 'Fill in am or um.', prompt: 'Das Konzert ist ___ Freitag ___ acht Uhr.', answer: [['am'], ['um']], explanation: 'am + day, um + clock time.', learnHref: GB + '9' }),
    q({ id: 'L08-P-05', topic: 'am-um', skill: 'grammar', grammar: 'am-um', type: 'mc', objective: 'L8-O3', instructions: 'Choose one.', prompt: '… Abend gehe ich ins Kino.', options: ['Am', 'Um', 'In'], answer: 'Am', explanation: 'am Abend.' }),
    q({ id: 'L08-P-06', topic: 'am-um', skill: 'grammar', grammar: 'am-um', type: 'mc', objective: 'L8-O3', instructions: 'Choose one.', prompt: 'Der Film beginnt … 20 Uhr.', options: ['um', 'am', 'im'], answer: 'um', explanation: 'um + clock time.' }),
    q({ id: 'L08-P-07', topic: 'days', skill: 'vocabulary', type: 'match', objective: 'L8-O2', instructions: 'Match the days.', prompt: '', pairs: [['Montag', 'Monday'], ['Dienstag', 'Tuesday'], ['Mittwoch', 'Wednesday'], ['Donnerstag', 'Thursday'], ['Freitag', 'Friday']], explanation: 'Days of the week.', learnHref: GB + '9' }),
    q({ id: 'L08-P-08', topic: 'days', skill: 'vocabulary', type: 'mc', objective: 'L8-O2', instructions: 'Choose the day.', prompt: 'Which day comes after Samstag?', options: ['Sonntag', 'Freitag', 'Montag', 'Mittwoch'], answer: 'Sonntag', explanation: 'Samstag, Sonntag = das Wochenende.' }),
    time('L08-P-09', '2:30 (informal)', ['halb drei', 'halb zwei', 'drei halb', 'zwei halb'], 'halb drei', 'halb counts towards the next hour: halb drei = 2:30.'),
    time('L08-P-10', '4:15', ['Viertel nach vier', 'Viertel vor vier', 'Viertel nach fünf', 'vier Viertel'], 'Viertel nach vier', '4:15 = Viertel nach vier.'),
    time('L08-P-11', '6:45', ['Viertel vor sieben', 'Viertel nach sechs', 'Viertel vor sechs', 'halb sieben'], 'Viertel vor sieben', '6:45 = Viertel vor sieben.'),
    q({ id: 'L08-P-12', topic: 'time', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L8-O4', instructions: 'Write the formal time in words.', prompt: '14:30', answer: 'vierzehn Uhr dreißig', explanation: 'Formal: vierzehn Uhr dreißig.' }),
    q({ id: 'L08-P-13', topic: 'time', skill: 'vocabulary', type: 'mc', objective: 'L8-O4', instructions: 'Choose the meaning.', prompt: 'Wie spät ist es?', options: ['What time is it?', 'How late are you?', 'Is it late?', 'When do we meet?'], answer: 'What time is it?', explanation: 'Wie spät ist es? = Wie viel Uhr ist es?' }),
    q({ id: 'L08-P-14', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'conjugation', objective: 'L8-O5', instructions: 'Write the verb form.', prompt: 'du + wissen →', answer: 'weißt', explanation: 'du weißt.', learnHref: GB + '9' }),
    q({ id: 'L08-P-15', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'conjugation', objective: 'L8-O5', instructions: 'Write the verb form.', prompt: 'er + wissen →', answer: 'weiß', explanation: 'er weiß (like ich weiß).' }),
    q({ id: 'L08-P-16', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'gap', objective: 'L8-O5', instructions: 'Fill in wissen.', prompt: '___ du das? – Nein, das ___ ich nicht.', answer: [['Weißt'], ['weiß']], explanation: 'du weißt, ich weiß.' }),
    q({ id: 'L08-P-17', topic: 'plans', skill: 'communication', type: 'mc', objective: 'L8-O6', instructions: 'Say yes.', prompt: 'Hast du Lust? Wir gehen ins Kino. – …', options: ['Gute Idee!', 'Da kann ich leider nicht.', 'Wie spät ist es?', 'Bis morgen!'], answer: 'Gute Idee!', explanation: 'Gute Idee! = yes, good idea.', learnHref: GB + '9' }),
    q({ id: 'L08-P-18', topic: 'plans', skill: 'communication', type: 'mc', objective: 'L8-O6', instructions: 'Say no politely.', prompt: 'Kino am Freitag? – …, da habe ich keine Zeit.', options: ['Leider', 'Gern', 'Super', 'Danke'], answer: 'Leider', explanation: 'leider = unfortunately.' }),
    q({ id: 'L08-P-19', topic: 'plans', skill: 'grammar', grammar: 'verb-first', type: 'order', objective: 'L8-O6', instructions: 'Put the words in order.', prompt: 'Do you feel like it?', tokens: ['Lust', 'du', 'Hast'], answer: 'Hast du Lust', explanation: 'Hast du Lust?' }),
    q({ id: 'L08-P-20', topic: 'days', skill: 'vocabulary', type: 'match', objective: 'L8-O2', instructions: 'Match the parts of the day.', prompt: '', pairs: [['der Morgen', 'morning'], ['der Mittag', 'noon'], ['der Nachmittag', 'afternoon'], ['der Abend', 'evening'], ['die Nacht', 'night']], explanation: 'Parts of the day.' }),
    q({ id: 'L08-P-21', topic: 'inversion', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L8-O1', instructions: 'Write it in German. Start with the day.', prompt: 'On Sunday I have time.', answer: 'Am Sonntag habe ich Zeit.', explanation: 'Am Sonntag – habe – ich – Zeit.' }),
    q({ id: 'L08-P-22', topic: 'plans', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L8-O6', instructions: 'Write it in German.', prompt: 'Unfortunately I have no time.', answer: 'Leider habe ich keine Zeit.', accept: ['Ich habe leider keine Zeit.'], explanation: 'leider + inversion, or ich habe leider …' }),
    art('L08-P-23', 'Woche', 'week', 'die'), art('L08-P-24', 'Wochenende', 'weekend', 'das'),
    q({ id: 'L08-P-25', topic: 'time', skill: 'listening', type: 'listen', objective: 'L8-O4', instructions: 'Listen. What time is it?', prompt: 'What time is it?', audio: 'Es ist Viertel nach drei.', options: ['3:15', '2:45', '3:45', '2:15'], answer: '3:15', explanation: 'Viertel nach drei = 3:15.' }),
    q({ id: 'L08-P-26', topic: 'plans', skill: 'listening', type: 'listen', objective: 'L8-O3', instructions: 'Listen and answer.', prompt: 'When do they meet?', audio: 'Treffen wir uns am Donnerstag um halb acht im Café?', options: ['Thursday 7:30', 'Thursday 8:30', 'Tuesday 7:30', 'Thursday 8:00'], answer: 'Thursday 7:30', explanation: 'am Donnerstag um halb acht = Thursday 7:30.' }),
    q({ id: 'L08-P-27', topic: 'plans', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L8-O6', instructions: 'Listen and write.', prompt: '', audio: 'Am Samstag habe ich Zeit. Hast du Lust?', answer: 'Am Samstag habe ich Zeit. Hast du Lust?', accept: ['Am Samstag habe ich Zeit, hast du Lust?'], explanation: 'Am Samstag habe ich Zeit.' }),
    q({ id: 'L08-P-28', topic: 'days', skill: 'vocabulary', type: 'gap', objective: 'L8-O2', instructions: 'Write “today” and “tomorrow”.', prompt: 'Das Kino ist ___ und das Konzert ist ___.', answer: [['heute'], ['morgen']], explanation: 'heute = today, morgen = tomorrow.' }),
    time('L08-P-29', 'halb neun = ?', ['8:30', '9:30', '8:00', '9:00'], '8:30', 'halb neun = half to nine = 8:30.'),
    q({ id: 'L08-P-30', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'conjugation', objective: 'L8-O5', instructions: 'Write the verb form.', prompt: 'wir + wissen →', answer: 'wissen', explanation: 'wir wissen.' })
  ];

  const DIALOG = 'Hallo Sara! Hast du am Samstag Zeit? Wir gehen ins Konzert. – Am Samstag? Da kann ich leider nicht. Aber am Sonntag habe ich Zeit. – Super, dann am Sonntag um vier Uhr im Café!';
  const READ = 'Meine Woche:\nMontag, 9 Uhr: Deutschkurs\nMittwoch, 18 Uhr: Fußball\nFreitag, 20 Uhr: Kino mit Tom\nSamstag: frei!';
  const apply = [
    q({ id: 'L08-A-01', topic: 'plans', skill: 'listening', type: 'listen', objective: 'L8-O6', instructions: 'Listen to the conversation.', prompt: 'Does Sara have time on Saturday?', audio: DIALOG, options: ['No', 'Yes'], answer: 'No', explanation: 'Da kann ich leider nicht.' }),
    q({ id: 'L08-A-02', topic: 'am-um', skill: 'listening', type: 'listen', objective: 'L8-O3', instructions: 'Listen again.', prompt: 'When do they meet?', audio: DIALOG, options: ['Sunday at 4', 'Saturday at 4', 'Sunday at 2', 'Saturday at 2'], answer: 'Sunday at 4', explanation: 'am Sonntag um vier Uhr.' }),
    q({ id: 'L08-A-03', topic: 'am-um', skill: 'reading', type: 'reading', objective: 'L8-O3', instructions: 'Read the plan.', passage: READ, prompt: 'Wann ist der Deutschkurs?', options: ['am Montag um 9 Uhr', 'am Mittwoch um 18 Uhr', 'am Freitag um 20 Uhr'], answer: 'am Montag um 9 Uhr', explanation: 'Montag, 9 Uhr: Deutschkurs.' }),
    q({ id: 'L08-A-04', topic: 'plans', skill: 'reading', type: 'reading', objective: 'L8-O6', instructions: 'Read the plan.', passage: READ, prompt: 'Was macht er am Freitag?', options: ['Er geht ins Kino.', 'Er spielt Fußball.', 'Er hat Deutschkurs.'], answer: 'Er geht ins Kino.', explanation: 'Freitag, 20 Uhr: Kino mit Tom.' }),
    q({ id: 'L08-A-05', topic: 'plans', skill: 'reading', type: 'reading', objective: 'L8-O6', instructions: 'Read the plan.', passage: READ, prompt: 'Wann hat er Zeit?', options: ['am Samstag', 'am Montag', 'am Mittwoch'], answer: 'am Samstag', explanation: 'Samstag: frei!' }),
    q({ id: 'L08-A-06', topic: 'plans', skill: 'writing', type: 'writing', objective: 'L8-O6', instructions: 'Write a short message to invite a friend (3–5 sentences).', prompt: 'Suggest a day, a time and an activity. Ask if they feel like it.',
      rubric: ['I use am + day and um + time.', 'At least one sentence starts with a time (verb in position 2).', 'I ask: Hast du Zeit? / Hast du Lust?', 'I end with a greeting.'],
      model: 'Hallo Mia,\nam Samstag ist ein Konzert im Park. Es beginnt um acht Uhr. Hast du Lust? Am Nachmittag habe ich auch Zeit für ein Café.\nLiebe Grüße\nDelowar', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L08-A-07', topic: 'plans', skill: 'speaking', type: 'speaking', objective: 'L8-O6', instructions: 'Make plans (out loud) with a friend.', prompt: 'Your friend suggests a day you can’t do. Say no politely, suggest another day and time, agree.',
      rubric: ['I said no politely (Da kann ich leider nicht.).', 'I suggested another day with am and a time with um.', 'I used inversion (Am Sonntag habe ich Zeit.).', 'We agreed (Gute Idee!).'],
      model: '– Hast du am Freitag Zeit?\n– Am Freitag? Da kann ich leider nicht. Aber am Sonntag habe ich Zeit.\n– Am Sonntag um drei?\n– Gute Idee! Bis Sonntag!', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L08-T-01', topic: 'inversion', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L8-O1', instructions: 'Start with the time. Put the words in order.', prompt: 'On Friday I play football.', tokens: ['Am', 'spiele', 'Freitag', 'ich', 'Fußball'], answer: 'Am Freitag spiele ich Fußball', explanation: 'Time – verb – subject.' }),
    q({ id: 'L08-T-02', topic: 'inversion', skill: 'grammar', grammar: 'inversion', type: 'mc', objective: 'L8-O1', instructions: 'Choose the correct sentence.', prompt: 'Tomorrow I work.', options: ['Morgen arbeite ich.', 'Morgen ich arbeite.', 'Ich morgen arbeite.', 'Morgen arbeiten ich.'], answer: 'Morgen arbeite ich.', explanation: 'Verb in position 2.' }),
    q({ id: 'L08-T-03', topic: 'am-um', skill: 'grammar', grammar: 'am-um', type: 'gap', objective: 'L8-O3', instructions: 'Fill in am or um.', prompt: 'Der Kurs ist ___ Mittwoch ___ zehn Uhr.', answer: [['am'], ['um']], explanation: 'am Mittwoch, um zehn Uhr.' }),
    q({ id: 'L08-T-04', topic: 'am-um', skill: 'grammar', grammar: 'am-um', type: 'mc', objective: 'L8-O3', instructions: 'Choose one.', prompt: '… Nachmittag habe ich frei.', options: ['Am', 'Um', 'Im'], answer: 'Am', explanation: 'am Nachmittag.' }),
    time('L08-T-05', '1:30 (informal)', ['halb zwei', 'halb eins', 'eins halb', 'zwei halb'], 'halb zwei', 'halb zwei = 1:30.'),
    time('L08-T-06', 'Viertel vor zwölf = ?', ['11:45', '12:15', '11:15', '12:45'], '11:45', 'Viertel vor zwölf = 11:45.'),
    q({ id: 'L08-T-07', topic: 'time', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L8-O4', instructions: 'Write the formal time in words.', prompt: '9:15', answer: 'neun Uhr fünfzehn', explanation: 'Formal: neun Uhr fünfzehn.' }),
    q({ id: 'L08-T-08', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'conjugation', objective: 'L8-O5', instructions: 'Write the verb form.', prompt: 'ihr + wissen →', answer: 'wisst', explanation: 'ihr wisst.' }),
    q({ id: 'L08-T-09', topic: 'wissen', skill: 'grammar', grammar: 'wissen', type: 'gap', objective: 'L8-O5', instructions: 'Fill in wissen.', prompt: 'Das ___ ich nicht.', answer: [['weiß']], explanation: 'ich weiß.' }),
    q({ id: 'L08-T-10', topic: 'plans', skill: 'communication', type: 'mc', objective: 'L8-O6', instructions: 'Say yes.', prompt: 'Hast du am Montag Lust? – Ja, …!', options: ['gute Idee', 'leider', 'da kann ich nicht', 'wie spät ist es'], answer: 'gute Idee', explanation: 'Ja, gute Idee!' }),
    q({ id: 'L08-T-11', topic: 'plans', skill: 'writing', type: 'translate', objective: 'L8-O6', instructions: 'Write it in German (informal).', prompt: 'Do you have time today?', answer: 'Hast du heute Zeit?', explanation: 'Hast du heute Zeit?' }),
    q({ id: 'L08-T-12', topic: 'days', skill: 'vocabulary', type: 'match', objective: 'L8-O2', instructions: 'Match.', prompt: '', pairs: [['heute', 'today'], ['morgen', 'tomorrow'], ['die Woche', 'week'], ['die Stunde', 'hour'], ['die Minute', 'minute']], explanation: 'Time words.' }),
    q({ id: 'L08-T-13', topic: 'time', skill: 'listening', type: 'listen', objective: 'L8-O4', instructions: 'Listen. What time is it?', prompt: 'Which clock time do you hear?', audio: 'Es ist zehn vor sieben.', options: ['6:50', '7:10', '6:10', '7:50'], answer: '6:50', explanation: 'zehn vor sieben = 6:50.' }),
    q({ id: 'L08-T-14', topic: 'days', skill: 'reading', type: 'reading', objective: 'L8-O2', instructions: 'Read and answer.', passage: 'Lisa arbeitet von Montag bis Freitag.\nAm Wochenende hat sie Zeit. Am Samstag geht sie ins Kino.', prompt: 'Wann geht Lisa ins Kino?', options: ['am Samstag', 'am Freitag', 'am Sonntag'], answer: 'am Samstag', explanation: 'Am Samstag geht sie ins Kino.' }),
    q({ id: 'L08-T-15', topic: 'plans', skill: 'grammar', grammar: 'inversion', type: 'order', objective: 'L8-O6', instructions: 'Put the words in order.', prompt: 'I can’t (do it) then.', tokens: ['kann', 'Da', 'nicht', 'ich'], answer: 'Da kann ich nicht', explanation: 'Da – kann – ich – nicht.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
