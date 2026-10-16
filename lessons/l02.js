// Lektion 2 · "Was macht ihr beruflich?" (Momente A1.1, Modul 1)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 3.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 2, LVL = 'A1.1';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);

  const objectives = [
    { id: 'L2-O1', text: 'Say what your job is and where you work.', kind: 'communication' },
    { id: 'L2-O2', text: 'Give personal details: where you live, age, family status, children.', kind: 'communication' },
    { id: 'L2-O3', text: 'Use the present tense with all persons (ich, du, er/sie/es, wir, ihr, sie/Sie), including arbeiten.', kind: 'grammar' },
    { id: 'L2-O4', text: 'Use haben and sein with all persons.', kind: 'grammar' },
    { id: 'L2-O5', text: 'Say that something is not true with nicht.', kind: 'grammar' },
    { id: 'L2-O6', text: 'Understand and say the numbers 0–100.', kind: 'communication' }
  ];

  const learn = [
    { id: 'present', title: 'The present tense: all persons', objective: 'L2-O3', href: GB + '31-the-full-present-tense',
      text: 'Lektion 1 had ich, du, er/sie and Sie. Now the plural: wir (we), ihr (you, several people you say du to) and sie (they). Watch out: sie (they) and Sie (polite you) have the same verb form.',
      table: [['ich wohne', 'I live'], ['du wohnst', 'you live'], ['er / sie / es wohnt', 'he / she / it lives'], ['wir wohnen', 'we live'], ['ihr wohnt', 'you (all) live'], ['sie / Sie wohnen', 'they live / you live (polite)']],
      examples: [['Was macht ihr beruflich?', 'What do you (all) do for a living?'], ['Wir wohnen in Köln.', 'We live in Cologne.']] },
    { id: 'arbeiten', title: 'Verbs like arbeiten: an extra -e-', objective: 'L2-O3', href: GB + '32-verbs-with-a-stem-ending-in--t-or--d',
      text: 'If the stem ends in -t or -d (arbeit-, find-), add -e- before -st and -t, so you can pronounce it.',
      table: [['du arbeitest', 'you work'], ['er / sie arbeitet', 'he / she works'], ['ihr arbeitet', 'you (all) work']],
      mistakes: [['Er arbeit bei Siemens.', 'Er arbeitet bei Siemens.', 'Stem arbeit- + e + t.']] },
    { id: 'haben-sein', title: 'haben and sein — complete', objective: 'L2-O4', href: GB + '33-haben-and-sein--complete',
      table: [['ich habe · ich bin', 'I have · I am'], ['du hast · du bist', 'you have · you are'], ['er/sie hat · er/sie ist', 'he/she has · is'], ['wir haben · wir sind', 'we have · we are'], ['ihr habt · ihr seid', 'you (all) have · are'], ['sie/Sie haben · sie/Sie sind', 'they / you (polite) have · are']],
      mistakes: [['du habst', 'du hast', 'haben is irregular with du and er/sie: hast, hat.'], ['ihr sind', 'ihr seid', 'ihr seid (not sind).']] },
    { id: 'jobs', title: 'Talking about your job', objective: 'L2-O1', href: GB + '34-talking-about-your-job',
      text: 'With jobs, German uses no article: Ich bin Lehrerin. Most female job names add -in (Lehrer → Lehrerin, Arzt → Ärztin, Koch → Köchin). To say where you work: Ich arbeite als … (as) bei + company / im Krankenhaus / an der Schule.',
      examples: [['Was sind Sie von Beruf? – Ich bin Ingenieur.', 'What is your job? – I am an engineer.'], ['Ich arbeite als Köchin im Krankenhaus.', 'I work as a cook in the hospital.'], ['Ich bin Student. / Ich bin arbeitslos.', 'I am a student. / I am unemployed.']],
      mistakes: [['Ich bin eine Lehrerin.', 'Ich bin Lehrerin.', 'No article before a job.']] },
    { id: 'nicht', title: 'Saying no with nicht', objective: 'L2-O5', href: GB + '35-negation-with-nicht',
      text: 'nicht usually comes after the verb, before the word it negates — or at the very end if it negates the whole sentence.',
      examples: [['Ich bin nicht verheiratet.', 'I am not married.'], ['Wir wohnen nicht in Berlin.', 'We do not live in Berlin.'], ['Er arbeitet nicht.', 'He does not work.']],
      mistakes: [['Ich nicht bin verheiratet.', 'Ich bin nicht verheiratet.', 'The verb stays in position 2; nicht comes after it.']] },
    { id: 'numbers', title: 'Numbers 0–100', objective: 'L2-O6', href: GB + '36-numbers-0100',
      text: '0–12 must be learned: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf. 13–19: number + zehn (dreizehn). Tens end in -zig, except dreißig. From 21, say the ones first: einundzwanzig = “one-and-twenty”.',
      table: [['16 · 17', 'sechzehn · siebzehn (short forms!)'], ['20 · 30', 'zwanzig · dreißig (with ß)'], ['60 · 70', 'sechzig · siebzig'], ['21 · 45', 'einundzwanzig · fünfundvierzig'], ['100', 'hundert / einhundert']],
      mistakes: [['zwanzigeins', 'einundzwanzig', 'Ones first, then und, then the tens.'], ['dreizig', 'dreißig', '30 is the exception with ß.'], ['siebenzehn', 'siebzehn', '17 and 70 drop -en: siebzehn, siebzig.']] },
    { id: 'personal', title: 'Family status and age', objective: 'L2-O2', href: GB + '37-family-status',
      table: [['Ich bin verheiratet.', 'I am married.'], ['Ich bin ledig.', 'I am single.'], ['Ich bin geschieden.', 'I am divorced.'], ['Ich habe zwei Kinder.', 'I have two children.'], ['Wie alt sind Sie? – Ich bin 35 (Jahre alt).', 'How old are you? – I am 35 (years old).']] }
  ];

  const practice = [
    q({ id: 'L02-P-01', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'wir + wohnen →', answer: 'wohnen', explanation: 'wir: stem + -en → wir wohnen.', learnHref: GB + '31-the-full-present-tense' }),
    q({ id: 'L02-P-02', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'ihr + kommen →', answer: 'kommt', explanation: 'ihr: stem + -t → ihr kommt.' }),
    q({ id: 'L02-P-03', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'du + arbeiten →', answer: 'arbeitest', explanation: 'Stem ends in -t: du arbeit-e-st.', learnHref: GB + '32-verbs-with-a-stem-ending-in--t-or--d' }),
    q({ id: 'L02-P-04', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'er + arbeiten →', answer: 'arbeitet', explanation: 'er arbeit-e-t.' }),
    q({ id: 'L02-P-05', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L2-O3', instructions: 'Write the correct form of wohnen.', prompt: 'Wir ___ in Köln. Und wo ___ ihr?', answer: [['wohnen'], ['wohnt']], explanation: 'wir wohnen, ihr wohnt.' }),
    q({ id: 'L02-P-06', topic: 'haben', skill: 'grammar', grammar: 'haben', type: 'gap', objective: 'L2-O4', instructions: 'Write the correct form of haben.', prompt: 'Ich ___ zwei Kinder. ___ du auch Kinder?', answer: [['habe'], ['Hast']], explanation: 'ich habe, du hast.', learnHref: GB + '33-haben-and-sein--complete' }),
    q({ id: 'L02-P-07', topic: 'haben', skill: 'grammar', grammar: 'haben', type: 'gap', objective: 'L2-O4', instructions: 'Write the correct form of haben.', prompt: 'Sie (she) ___ ein Kind. Wir ___ drei Kinder.', answer: [['hat'], ['haben']], explanation: 'sie hat, wir haben.' }),
    q({ id: 'L02-P-08', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'mc', objective: 'L2-O4', instructions: 'Choose the correct form.', prompt: 'Ihr … Studenten, oder?', options: ['seid', 'sind', 'ist', 'bist'], answer: 'seid', explanation: 'ihr seid.' }),
    q({ id: 'L02-P-09', topic: 'haben', skill: 'grammar', grammar: 'haben', type: 'mc', objective: 'L2-O4', instructions: 'Choose the correct form.', prompt: '… ihr Kinder?', options: ['Habt', 'Haben', 'Hat', 'Hast'], answer: 'Habt', explanation: 'ihr habt → Habt ihr …?' }),
    q({ id: 'L02-P-10', topic: 'jobs', skill: 'grammar', grammar: 'no-article-job', type: 'mc', objective: 'L2-O1', instructions: 'Choose the correct sentence.', prompt: 'I am a teacher (woman).', options: ['Ich bin Lehrerin.', 'Ich bin eine Lehrerin.', 'Ich bin die Lehrerin.', 'Ich Lehrerin bin.'], answer: 'Ich bin Lehrerin.', explanation: 'No article before a job.', learnHref: GB + '34-talking-about-your-job' }),
    q({ id: 'L02-P-11', topic: 'jobs', skill: 'vocabulary', type: 'mc', objective: 'L2-O1', instructions: 'Choose the right word.', prompt: 'Anna is a doctor. Anna ist …', options: ['Ärztin', 'Arzt', 'Ärzte', 'Ärztinnen'], answer: 'Ärztin', explanation: 'der Arzt → die Ärztin (one woman).' }),
    q({ id: 'L02-P-12', topic: 'jobs', skill: 'vocabulary', type: 'match', objective: 'L2-O1', instructions: 'Match the job with its meaning.', prompt: '', pairs: [['der Koch', 'cook'], ['die Lehrerin', 'teacher (woman)'], ['der Verkäufer', 'salesman'], ['die Ingenieurin', 'engineer (woman)'], ['der Krankenpfleger', 'nurse (man)']], explanation: 'Female forms usually end in -in.' }),
    q({ id: 'L02-P-13', topic: 'jobs', skill: 'grammar', grammar: 'als-bei', type: 'gap', objective: 'L2-O1', instructions: 'Fill in als or bei.', prompt: 'Ich arbeite ___ Programmierer ___ Siemens.', answer: [['als'], ['bei']], explanation: 'als + job, bei + company.' }),
    q({ id: 'L02-P-14', topic: 'jobs', skill: 'vocabulary', type: 'mc', objective: 'L2-O1', instructions: 'Choose the right word.', prompt: 'Sie ist Krankenpflegerin. Sie arbeitet … Krankenhaus.', options: ['im', 'als', 'bei', 'aus'], answer: 'im', explanation: 'im Krankenhaus = in the hospital (learn it as a phrase).' }),
    q({ id: 'L02-P-15', topic: 'nicht', skill: 'grammar', grammar: 'negation-nicht', type: 'order', objective: 'L2-O5', instructions: 'Put the words in order.', prompt: 'I am not married.', tokens: ['bin', 'nicht', 'Ich', 'verheiratet'], answer: 'Ich bin nicht verheiratet', explanation: 'Verb in position 2, nicht after it.', learnHref: GB + '35-negation-with-nicht' }),
    q({ id: 'L02-P-16', topic: 'nicht', skill: 'grammar', grammar: 'negation-nicht', type: 'order', objective: 'L2-O5', instructions: 'Put the words in order.', prompt: 'He does not work.', tokens: ['arbeitet', 'nicht', 'Er'], answer: 'Er arbeitet nicht', explanation: 'nicht at the end negates the whole sentence.' }),
    q({ id: 'L02-P-17', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L2-O1', instructions: 'Put the words in order.', prompt: 'What do you do for a living? (polite)', tokens: ['Sie', 'Was', 'beruflich', 'machen'], answer: 'Was machen Sie beruflich', explanation: 'Question word – verb – person – rest.' }),
    q({ id: 'L02-P-18', topic: 'word-order', skill: 'grammar', grammar: 'verb-position-2', type: 'order', objective: 'L2-O3', instructions: 'Put the words in order.', prompt: 'Where do you (all) live?', tokens: ['ihr', 'Wo', 'wohnt'], answer: 'Wo wohnt ihr', explanation: 'Wo – wohnt – ihr?' }),
    q({ id: 'L02-P-19', topic: 'nicht', skill: 'grammar', grammar: 'negation-nicht', type: 'mc', objective: 'L2-O5', instructions: 'Choose the correct sentence.', prompt: 'We do not live in Berlin.', options: ['Wir wohnen nicht in Berlin.', 'Wir nicht wohnen in Berlin.', 'Nicht wir wohnen in Berlin.', 'Wir wohnen in nicht Berlin.'], answer: 'Wir wohnen nicht in Berlin.', explanation: 'nicht comes after the verb, before in Berlin.' }),
    q({ id: 'L02-P-20', topic: 'numbers', skill: 'vocabulary', type: 'mc', objective: 'L2-O6', instructions: 'Choose the number.', prompt: 'Which word is 21?', options: ['einundzwanzig', 'zwanzigeins', 'zweiundeins', 'einszwanzig'], answer: 'einundzwanzig', explanation: 'Ones first: ein-und-zwanzig.', learnHref: GB + '36-numbers-0100' }),
    q({ id: 'L02-P-21', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L2-O6', instructions: 'Write the number in words.', prompt: '30', answer: 'dreißig', explanation: '30 = dreißig (with ß, no -zig).' }),
    q({ id: 'L02-P-22', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L2-O6', instructions: 'Write the number in words.', prompt: '17', answer: 'siebzehn', explanation: 'siebzehn (not siebenzehn).' }),
    q({ id: 'L02-P-23', topic: 'numbers', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L2-O6', instructions: 'Write the number in words.', prompt: '64', answer: 'vierundsechzig', explanation: 'vier-und-sechzig.' }),
    q({ id: 'L02-P-24', topic: 'numbers', skill: 'vocabulary', type: 'mc', objective: 'L2-O6', instructions: 'Choose the correct spelling.', prompt: '16', options: ['sechzehn', 'sechszehn', 'sechsehn', 'sechzig'], answer: 'sechzehn', explanation: 'sechzehn and sechzig drop the s.' }),
    q({ id: 'L02-P-25', topic: 'numbers', skill: 'listening', type: 'listen', objective: 'L2-O6', instructions: 'Listen to the phone number.', prompt: 'Which number do you hear?', audio: 'Die Nummer ist: null, eins, sieben, sechs – drei, acht – vier, zwei – neun, fünf.', options: ['0176 38 42 95', '0167 38 24 95', '0176 83 42 59', '0176 38 42 59'], answer: '0176 38 42 95', explanation: 'null eins sieben sechs – drei acht – vier zwei – neun fünf.' }),
    q({ id: 'L02-P-26', topic: 'personal', skill: 'listening', type: 'listen', objective: 'L2-O2', instructions: 'Listen and answer.', prompt: 'How old is Paul?', audio: 'Ich bin Paul. Ich bin dreiundvierzig Jahre alt.', options: ['43', '34', '33', '44'], answer: '43', explanation: 'dreiundvierzig = 3 + 40 = 43.' }),
    q({ id: 'L02-P-27', topic: 'personal', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L2-O2', instructions: 'Listen and write the sentences.', prompt: '', audio: 'Wir wohnen in Hamburg. Wir haben zwei Kinder.', answer: 'Wir wohnen in Hamburg. Wir haben zwei Kinder.', accept: ['Wir wohnen in Hamburg, wir haben zwei Kinder.'], explanation: 'Wir wohnen in Hamburg. Wir haben zwei Kinder.' }),
    q({ id: 'L02-P-28', topic: 'personal', skill: 'writing', type: 'translate', objective: 'L2-O2', instructions: 'Write it in German.', prompt: 'I am single.', answer: 'Ich bin ledig.', explanation: 'ledig = single (not married).', learnHref: GB + '37-family-status' }),
    q({ id: 'L02-P-29', topic: 'jobs', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L2-O1', instructions: 'Write it in German.', prompt: 'She works as a cook.', answer: 'Sie arbeitet als Köchin.', explanation: 'arbeiten als + job, female form Köchin.' }),
    q({ id: 'L02-P-30', topic: 'jobs', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L2-O1', instructions: 'Choose the article.', prompt: 'Krankenhaus', hint: 'hospital', options: ['der', 'die', 'das'], answer: 'das', explanation: 'das Krankenhaus.' }),
    q({ id: 'L02-P-31', topic: 'jobs', skill: 'vocabulary', grammar: 'noun-gender', type: 'article', objective: 'L2-O1', instructions: 'Choose the article.', prompt: 'Firma', hint: 'company', options: ['der', 'die', 'das'], answer: 'die', explanation: 'die Firma.' })
  ];

  const DIALOG = 'Hallo! Was macht ihr beruflich? – Ich bin Studentin, und Lisa ist Ärztin. – Und wo wohnt ihr? – Wir wohnen in Leipzig.';
  const READ = 'Das ist Herr Okafor. Er kommt aus Nigeria und wohnt in Frankfurt.\nEr ist 38 Jahre alt und verheiratet. Er hat zwei Kinder.\nHerr Okafor ist Ingenieur. Er arbeitet bei Siemens.';
  const apply = [
    q({ id: 'L02-A-01', topic: 'jobs', skill: 'listening', type: 'listen', objective: 'L2-O1', instructions: 'Listen to the conversation.', prompt: 'What is Lisa’s job?', audio: DIALOG, options: ['doctor', 'student', 'teacher', 'nurse'], answer: 'doctor', explanation: 'Lisa ist Ärztin.' }),
    q({ id: 'L02-A-02', topic: 'personal', skill: 'listening', type: 'listen', objective: 'L2-O2', instructions: 'Listen again.', prompt: 'Where do they live?', audio: DIALOG, options: ['Leipzig', 'Berlin', 'Köln', 'Hamburg'], answer: 'Leipzig', explanation: 'Wir wohnen in Leipzig.' }),
    q({ id: 'L02-A-03', topic: 'personal', skill: 'reading', type: 'reading', objective: 'L2-O2', instructions: 'Read the text.', passage: READ, prompt: 'Wie alt ist Herr Okafor?', options: ['38', '28', '48'], answer: '38', explanation: 'Er ist 38 Jahre alt.' }),
    q({ id: 'L02-A-04', topic: 'personal', skill: 'reading', type: 'reading', objective: 'L2-O2', instructions: 'Read the text.', passage: READ, prompt: 'Ist Herr Okafor verheiratet?', options: ['Ja, er ist verheiratet.', 'Nein, er ist ledig.'], answer: 'Ja, er ist verheiratet.', explanation: '… und verheiratet.' }),
    q({ id: 'L02-A-05', topic: 'jobs', skill: 'reading', type: 'reading', objective: 'L2-O1', instructions: 'Read the text.', passage: READ, prompt: 'Was ist Herr Okafor von Beruf?', options: ['Ingenieur', 'Arzt', 'Lehrer'], answer: 'Ingenieur', explanation: 'Herr Okafor ist Ingenieur.' }),
    q({ id: 'L02-A-06', topic: 'personal', skill: 'writing', type: 'writing', objective: 'L2-O2', instructions: 'Write a short profile of yourself (4–6 sentences).', prompt: 'Name, where you live, your job and where you work, family status, children, age.',
      rubric: ['I say where I live (Ich wohne in …).', 'I say my job without an article (Ich bin …).', 'I say where I work (Ich arbeite bei … / im …).', 'I give my family status (verheiratet / ledig / geschieden).', 'I write at least one number as a word.'],
      model: 'Ich heiße Delowar. Ich wohne in München. Ich bin Programmierer und arbeite bei einer Firma. Ich bin verheiratet und habe eine Tochter. Ich bin vierunddreißig Jahre alt.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L02-A-07', topic: 'jobs', skill: 'speaking', type: 'speaking', objective: 'L2-O1', instructions: 'Interview (out loud): ask a colleague about their job and life. Use Sie.', prompt: 'Ask about job, workplace, where they live and family status. Answer the same questions yourself.',
      rubric: ['I asked: Was machen Sie beruflich? / Was sind Sie von Beruf?', 'I asked: Wo arbeiten Sie?', 'I asked: Wo wohnen Sie?', 'I answered with full sentences (Ich bin … / Ich arbeite …).'],
      model: '– Was machen Sie beruflich?\n– Ich bin Ingenieurin. Und Sie?\n– Ich bin Koch. Ich arbeite im Krankenhaus. Wo wohnen Sie?\n– Ich wohne in Bonn. Ich bin verheiratet und habe zwei Kinder.', explanation: 'Self-assessed. For a live partner, use the Sprechen page.' }),
    q({ id: 'L02-A-08', topic: 'numbers', skill: 'speaking', type: 'speaking', objective: 'L2-O6', instructions: 'Say your phone number out loud, digit by digit, and then your age.', prompt: 'Die Nummer ist … · Ich bin … Jahre alt.',
      rubric: ['I said each digit in German (null, eins, zwei …).', 'I said my age with ones first (e.g. vierunddreißig).'], model: 'Die Nummer ist null, eins, fünf, zwei – sieben, sieben – drei, null. Ich bin vierunddreißig Jahre alt.', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    q({ id: 'L02-T-01', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'ihr + wohnen →', answer: 'wohnt', explanation: 'ihr wohnt.' }),
    q({ id: 'L02-T-02', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense-t-stem', type: 'conjugation', objective: 'L2-O3', instructions: 'Write the verb form.', prompt: 'sie (they) + arbeiten →', answer: 'arbeiten', explanation: 'sie (they) arbeiten.' }),
    q({ id: 'L02-T-03', topic: 'verb-endings', skill: 'grammar', grammar: 'present-tense', type: 'gap', objective: 'L2-O3', instructions: 'Fill in arbeiten and haben.', prompt: 'Du ___ viel. ___ du auch Kinder?', answer: [['arbeitest'], ['Hast']], explanation: 'du arbeitest, du hast.' }),
    q({ id: 'L02-T-04', topic: 'sein', skill: 'grammar', grammar: 'sein', type: 'gap', objective: 'L2-O4', instructions: 'Fill in sein.', prompt: 'Wir ___ Lehrer. Und was ___ ihr von Beruf?', answer: [['sind'], ['seid']], explanation: 'wir sind, ihr seid.' }),
    q({ id: 'L02-T-05', topic: 'haben', skill: 'grammar', grammar: 'haben', type: 'mc', objective: 'L2-O4', instructions: 'Choose the correct form.', prompt: 'Er … zwei Kinder.', options: ['hat', 'habt', 'hast', 'haben'], answer: 'hat', explanation: 'er hat.' }),
    q({ id: 'L02-T-06', topic: 'jobs', skill: 'grammar', grammar: 'no-article-job', type: 'mc', objective: 'L2-O1', instructions: 'Choose the right words.', prompt: 'Maria ist … (a teacher).', options: ['Lehrerin', 'Lehrer', 'eine Lehrer', 'Lehrerinnen'], answer: 'Lehrerin', explanation: 'Female form, no article: Maria ist Lehrerin.' }),
    q({ id: 'L02-T-07', topic: 'jobs', skill: 'grammar', grammar: 'als-bei', type: 'order', objective: 'L2-O1', instructions: 'Put the words in order.', prompt: 'I work as a cook.', tokens: ['als', 'arbeite', 'Ich', 'Koch'], answer: 'Ich arbeite als Koch', explanation: 'Ich – arbeite – als Koch.' }),
    q({ id: 'L02-T-08', topic: 'nicht', skill: 'grammar', grammar: 'negation-nicht', type: 'order', objective: 'L2-O5', instructions: 'Put the words in order.', prompt: 'She is not married.', tokens: ['nicht', 'Sie', 'verheiratet', 'ist'], answer: 'Sie ist nicht verheiratet', explanation: 'Sie – ist – nicht verheiratet.' }),
    q({ id: 'L02-T-09', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L2-O6', instructions: 'Write the number in words.', prompt: '45', answer: 'fünfundvierzig', explanation: 'fünf-und-vierzig.' }),
    q({ id: 'L02-T-10', topic: 'numbers', skill: 'writing', type: 'translate', objective: 'L2-O6', instructions: 'Write the number in words.', prompt: '12', answer: 'zwölf', explanation: '12 = zwölf.' }),
    q({ id: 'L02-T-11', topic: 'numbers', skill: 'vocabulary', type: 'mc', objective: 'L2-O6', instructions: 'Choose the number.', prompt: 'Which word is 70?', options: ['siebzig', 'siebenzig', 'siebzehn', 'sechzig'], answer: 'siebzig', explanation: '70 = siebzig.' }),
    q({ id: 'L02-T-12', topic: 'numbers', skill: 'listening', type: 'listen', objective: 'L2-O6', instructions: 'Listen and answer.', prompt: 'How old is the oldest child?', audio: 'Wir haben drei Kinder. Sie sind elf, acht und vier Jahre alt.', options: ['11', '12', '8', '4'], answer: '11', explanation: 'elf, acht und vier → the oldest is 11.' }),
    q({ id: 'L02-T-13', topic: 'jobs', skill: 'reading', type: 'reading', objective: 'L2-O1', instructions: 'Read and answer.', passage: 'Hallo, ich heiße Jana. Ich bin 29 und wohne in Graz.\nIch bin Krankenpflegerin und arbeite im Krankenhaus. Ich bin geschieden.', prompt: 'Was ist Jana von Beruf?', options: ['Krankenpflegerin', 'Ärztin', 'Lehrerin'], answer: 'Krankenpflegerin', explanation: 'Ich bin Krankenpflegerin.' }),
    q({ id: 'L02-T-14', topic: 'personal', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L2-O2', instructions: 'Write it in German.', prompt: 'We live in Vienna.', answer: 'Wir wohnen in Wien.', explanation: 'wir wohnen; Vienna = Wien.' }),
    q({ id: 'L02-T-15', topic: 'personal', skill: 'vocabulary', type: 'match', objective: 'L2-O2', instructions: 'Match.', prompt: '', pairs: [['verheiratet', 'married'], ['ledig', 'single'], ['geschieden', 'divorced'], ['arbeitslos', 'unemployed'], ['das Kind', 'child']], explanation: 'Family status and personal details.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
