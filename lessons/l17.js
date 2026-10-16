// Lektion 17 · "Ich will Lehrerin werden." (Momente A1.2, Modul 6)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 18.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-book.html#';
  const L = 17, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const WOL = GB + '181-wollen-to-want-to', WER = GB + '182-werden-to-become', PREP = GB + '183-mit--dative-ohne--accusative', IMP = GB + '184-saying-what-is-important', FUT = GB + '185-time-words-for-the-future';
  const wol = (id, prompt, a, ex) => q({ id, topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'gap', objective: 'L17-O1', instructions: 'Fill in wollen.', prompt, answer: a, explanation: ex, learnHref: WOL });
  const wer = (id, prompt, a, ex) => q({ id, topic: 'werden', skill: 'grammar', grammar: 'werden', type: 'gap', objective: 'L17-O2', instructions: 'Fill in werden.', prompt, answer: a, explanation: ex, learnHref: WER });

  const objectives = [
    { id: 'L17-O1', text: 'Conjugate wollen and use it with the sentence bracket (infinitive at the end).', kind: 'grammar' },
    { id: 'L17-O2', text: 'Use werden (to become) with jobs, adjectives and ages.', kind: 'grammar' },
    { id: 'L17-O3', text: 'Use mit + dative and ohne / für + accusative.', kind: 'grammar' },
    { id: 'L17-O4', text: 'Say what is important to you: … ist mir wichtig.', kind: 'communication' },
    { id: 'L17-O5', text: 'Talk about plans and wishes with future time words (nächstes Jahr, bald, später).', kind: 'communication' }
  ];

  const learn = [
    { id: 'wollen', title: 'wollen (to want to)', objective: 'L17-O1', href: WOL,
      text: 'wollen is a modal verb like können: vowel change in the singular, ich = er (no ending), infinitive at the end. False friend: German „Ich will …“ means I WANT to, not I will.',
      table: [['ich will · du willst · er/sie/es will', 'I want · you want · he/she wants'], ['wir wollen · ihr wollt · sie/Sie wollen', 'we · you (all) · they / you want'], ['Ich will nächstes Jahr nach Kanada reisen.', 'infinitive at the end'], ['Willst du heute mitkommen?', 'question: modal first']],
      mistakes: [['Ich will morgen kommen. (= I will come)', 'Ich komme morgen.', 'wollen = want. For a simple future, use the present tense.'], ['Er wollt Arzt werden.', 'Er will Arzt werden.', 'er will — no ending.']] },
    { id: 'werden', title: 'werden (to become)', objective: 'L17-O2', href: WER,
      table: [['ich werde · du wirst · er/sie/es wird', 'I become · you become · he/she becomes'], ['wir werden · ihr werdet · sie/Sie werden', 'we · you (all) · they / you become'], ['Sie wird Ärztin.', 'job: no article'], ['Es wird warm.', 'adjective: it’s getting warm'], ['Ich werde nächste Woche 40.', 'age: I’m turning 40'], ['Ich will Lehrerin werden.', 'with wollen: werden at the end']] },
    { id: 'prepositions', title: 'mit + dative · ohne / für + accusative', objective: 'L17-O3', href: PREP,
      table: [['mit meinem Bruder · mit meiner Schwester', 'mit → dative'], ['ohne meinen Schlüssel · ohne mein Handy', 'ohne → accusative'], ['für meinen Vater · für meine Mutter', 'für → accusative'], ['Accusative prepositions: für, ohne, gegen, durch, um', 'memory word: FOG-DU']],
      mistakes: [['ohne meinem Handy', 'ohne mein Handy', 'ohne takes the accusative.'], ['mit meinen Freund', 'mit meinem Freund', 'mit takes the dative.']] },
    { id: 'wichtig', title: 'Saying what is important', objective: 'L17-O4', href: IMP,
      text: 'wichtig + dative pronoun: Familie ist mir wichtig. Ask: Was ist dir / Ihnen wichtig?',
      examples: [['Gesundheit ist mir sehr wichtig.', 'Health is very important to me.'], ['Geld ist mir nicht so wichtig.', 'Money isn’t so important to me.'], ['Was ist dir im Beruf wichtig?', 'What is important to you at work?']] },
    { id: 'future', title: 'Time words for the future', objective: 'L17-O5', href: FUT,
      table: [['nächste Woche · nächsten Monat · nächstes Jahr', 'next week · month · year'], ['bald · später · in zwei Jahren', 'soon · later · in two years'], ['der Traum · der Wunsch · der Plan', 'dream · wish · plan'], ['den Führerschein machen · heiraten · eine Weltreise machen', 'get a driving licence · marry · travel round the world']] }
  ];

  const practice = [
    wol('L17-P-01', 'Er ___ Arzt werden.', [['will']], 'er will (no ending).'),
    wol('L17-P-02', '___ du am Samstag mitkommen?', [['Willst']], 'du willst.'),
    wol('L17-P-03', 'Wir ___ nächstes Jahr heiraten.', [['wollen']], 'wir wollen.'),
    wol('L17-P-04', 'Ihr ___ nach Spanien fahren.', [['wollt']], 'ihr wollt.'),
    q({ id: 'L17-P-05', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'order', objective: 'L17-O1', instructions: 'Put the words in order.', prompt: 'I want to get my driving licence next year.', tokens: ['Ich', 'will', 'nächstes', 'Jahr', 'den', 'Führerschein', 'machen'], answer: 'Ich will nächstes Jahr den Führerschein machen', explanation: 'will … machen (bracket).', learnHref: WOL }),
    q({ id: 'L17-P-06', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'order', objective: 'L17-O1', instructions: 'Put the words in order.', prompt: 'Next year we want to travel to Canada.', tokens: ['Nächstes', 'Jahr', 'wollen', 'wir', 'nach', 'Kanada', 'reisen'], answer: 'Nächstes Jahr wollen wir nach Kanada reisen', explanation: 'Time first → modal second → infinitive last.' }),
    q({ id: 'L17-P-07', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'mc', objective: 'L17-O1', instructions: 'What does it mean?', prompt: 'Ich will Spanisch lernen.', options: ['I want to learn Spanish.', 'I will learn Spanish.', 'I am learning Spanish.', 'I learned Spanish.'], answer: 'I want to learn Spanish.', explanation: 'will = want (false friend!).' }),
    q({ id: 'L17-P-08', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'mc', objective: 'L17-O1', instructions: 'Choose the most polite form.', prompt: 'In a café: “… einen Tee.”', options: ['Ich möchte', 'Ich will', 'Ich wollen', 'Ich werde'], answer: 'Ich möchte', explanation: 'möchte is softer and polite; use it in shops and cafés.' }),
    wer('L17-P-09', 'Du ___ bestimmt eine gute Lehrerin.', [['wirst']], 'du wirst.'),
    wer('L17-P-10', 'Im Herbst ___ es kalt.', [['wird']], 'es wird.'),
    wer('L17-P-11', 'Ich ___ nächste Woche 30.', [['werde']], 'ich werde + age.'),
    q({ id: 'L17-P-12', topic: 'werden', skill: 'grammar', grammar: 'werden', type: 'conjugation', objective: 'L17-O2', instructions: 'Conjugate.', prompt: 'ihr + werden →', answer: 'werdet', explanation: 'ihr werdet.', learnHref: WER }),
    q({ id: 'L17-P-13', topic: 'werden', skill: 'grammar', grammar: 'werden', type: 'order', objective: 'L17-O2', instructions: 'Put the words in order.', prompt: 'My daughter wants to become a doctor.', tokens: ['Meine', 'Tochter', 'will', 'Ärztin', 'werden'], answer: 'Meine Tochter will Ärztin werden', explanation: 'will … werden; no article before the job.' }),
    q({ id: 'L17-P-14', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'mc', objective: 'L17-O3', instructions: 'Choose the correct form.', prompt: 'Ich gehe nie ohne … Handy aus dem Haus.', options: ['mein', 'meinem', 'meinen', 'meiner'], answer: 'mein', explanation: 'ohne + accusative; das Handy → mein.', learnHref: PREP }),
    q({ id: 'L17-P-15', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'mc', objective: 'L17-O3', instructions: 'Choose the correct form.', prompt: 'Er fährt mit … Frau nach Rom.', options: ['seiner', 'seine', 'seinen', 'seinem'], answer: 'seiner', explanation: 'mit + dative; die Frau → seiner.' }),
    q({ id: 'L17-P-16', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'gap', objective: 'L17-O3', instructions: 'Fill in the possessive.', prompt: 'Das Geschenk ist für ___ Vater. (mein)', answer: [['meinen']], explanation: 'für + accusative; der Vater → meinen.', learnHref: PREP }),
    q({ id: 'L17-P-17', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'gap', objective: 'L17-O3', instructions: 'Fill in the preposition.', prompt: 'Ich trinke Kaffee ___ Milch und ___ Zucker. (with / without)', answer: [['mit'], ['ohne']], explanation: 'mit = with, ohne = without.' }),
    q({ id: 'L17-P-18', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'match', objective: 'L17-O3', instructions: 'Match the prepositions.', prompt: '', pairs: [['mit', 'with (+ dative)'], ['ohne', 'without (+ accusative)'], ['für', 'for (+ accusative)'], ['bei', 'at (+ dative)'], ['gegen', 'against (+ accusative)']], explanation: 'mit/bei → dative; für/ohne/gegen → accusative.' }),
    q({ id: 'L17-P-19', topic: 'wichtig', skill: 'grammar', grammar: 'dative-pronouns', type: 'mc', objective: 'L17-O4', instructions: 'Choose the pronoun.', prompt: 'Familie ist … sehr wichtig. (ich)', options: ['mir', 'mich', 'ich', 'mein'], answer: 'mir', explanation: 'wichtig + dative: mir.', learnHref: IMP }),
    q({ id: 'L17-P-20', topic: 'wichtig', skill: 'grammar', grammar: 'dative-pronouns', type: 'gap', objective: 'L17-O4', instructions: 'Fill in the dative pronoun.', prompt: 'Was ist ___ wichtig? (du)', answer: [['dir']], explanation: 'du → dir.' }),
    q({ id: 'L17-P-21', topic: 'future', skill: 'vocabulary', type: 'match', objective: 'L17-O5', instructions: 'Match.', prompt: '', pairs: [['nächstes Jahr', 'next year'], ['bald', 'soon'], ['später', 'later'], ['der Traum', 'dream'], ['heiraten', 'to marry']], explanation: 'Plans and future.', learnHref: FUT }),
    q({ id: 'L17-P-22', topic: 'future', skill: 'vocabulary', type: 'mc', objective: 'L17-O5', instructions: 'Choose the right form.', prompt: '… Monat fange ich einen neuen Job an.', options: ['Nächsten', 'Nächste', 'Nächstes', 'Nächster'], answer: 'Nächsten', explanation: 'der Monat → nächsten Monat (accusative time).' }),
    q({ id: 'L17-P-23', topic: 'wollen', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L17-O1', instructions: 'Write it in German (use wollen).', prompt: 'We want to buy a car.', answer: 'Wir wollen ein Auto kaufen.', explanation: 'wollen … kaufen.' }),
    q({ id: 'L17-P-24', topic: 'werden', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L17-O2', instructions: 'Write it in German.', prompt: 'I want to become a teacher. (female)', answer: 'Ich will Lehrerin werden.', accept: ['Ich möchte Lehrerin werden.'], explanation: 'will … werden.' }),
    q({ id: 'L17-P-25', topic: 'wichtig', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L17-O4', instructions: 'Write it in German.', prompt: 'Health is very important to me.', answer: 'Gesundheit ist mir sehr wichtig.', accept: ['Die Gesundheit ist mir sehr wichtig.', 'Mir ist Gesundheit sehr wichtig.'], explanation: '… ist mir wichtig.' }),
    q({ id: 'L17-P-26', topic: 'werden', skill: 'listening', type: 'listen', objective: 'L17-O2', instructions: 'Listen and answer.', prompt: 'What does Jonas want to become?', audio: 'Mein Sohn Jonas ist sechzehn. Er will später Ingenieur werden.', options: ['an engineer', 'a doctor', 'a teacher', 'a cook'], answer: 'an engineer', explanation: 'Ingenieur werden.' }),
    q({ id: 'L17-P-27', topic: 'wichtig', skill: 'listening', type: 'listen', objective: 'L17-O4', instructions: 'Listen and answer.', prompt: 'What is NOT so important to her?', audio: 'Meine Familie ist mir sehr wichtig. Geld ist mir nicht so wichtig.', options: ['money', 'family', 'work', 'friends'], answer: 'money', explanation: 'Geld ist mir nicht so wichtig.' }),
    q({ id: 'L17-P-28', topic: 'wollen', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L17-O1', instructions: 'Listen and write.', prompt: '', audio: 'Nächstes Jahr will ich eine Weltreise machen.', answer: 'Nächstes Jahr will ich eine Weltreise machen.', explanation: 'will … machen.' }),
    q({ id: 'L17-P-29', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'mc', objective: 'L17-O3', instructions: 'Choose the correct sentence.', prompt: 'I’m going on holiday without my children.', options: ['Ich fahre ohne meine Kinder in Urlaub.', 'Ich fahre ohne meinen Kindern in Urlaub.', 'Ich fahre mit meine Kinder in Urlaub.', 'Ich fahre ohne meiner Kinder in Urlaub.'], answer: 'Ich fahre ohne meine Kinder in Urlaub.', explanation: 'ohne + accusative plural → meine.' }),
    q({ id: 'L17-P-30', topic: 'werden', skill: 'grammar', grammar: 'werden', type: 'mc', objective: 'L17-O2', instructions: 'Choose the form.', prompt: 'Die Kinder … schnell groß.', options: ['werden', 'wird', 'wirst', 'werdet'], answer: 'werden', explanation: 'sie (plural) werden.' })
  ];

  const DIALOG = '– Was willst du nach der Schule machen, Mira? – Ich will Lehrerin werden. Aber zuerst will ich ein Jahr in Australien arbeiten. – Toll! Und was ist dir wichtig? – Meine Freunde und meine Familie sind mir sehr wichtig.';
  const READ = 'Meine Pläne\nIch heiße Kemal und bin 34. Ich wohne seit einem Jahr in Leipzig.\nNächsten Monat will ich die A1-Prüfung machen. Später will ich als Koch arbeiten.\nNächstes Jahr wollen meine Frau und ich heiraten — mit unseren Familien, aber ohne große Party!';
  const apply = [
    q({ id: 'L17-A-01', topic: 'werden', skill: 'listening', type: 'listen', objective: 'L17-O2', instructions: 'Listen to the conversation.', prompt: 'What does Mira want to become?', audio: DIALOG, options: ['a teacher', 'a doctor', 'an engineer', 'a cook'], answer: 'a teacher', explanation: 'Lehrerin werden.' }),
    q({ id: 'L17-A-02', topic: 'future', skill: 'listening', type: 'listen', objective: 'L17-O5', instructions: 'Listen again.', prompt: 'What does she want to do first?', audio: DIALOG, options: ['work in Australia for a year', 'study in Germany', 'travel round the world', 'get married'], answer: 'work in Australia for a year', explanation: 'ein Jahr in Australien arbeiten.' }),
    q({ id: 'L17-A-03', topic: 'wollen', skill: 'reading', type: 'reading', objective: 'L17-O1', instructions: 'Read the text.', passage: READ, prompt: 'Was will Kemal nächsten Monat machen?', options: ['die A1-Prüfung', 'heiraten', 'als Koch arbeiten'], answer: 'die A1-Prüfung', explanation: 'Nächsten Monat will ich die A1-Prüfung machen.' }),
    q({ id: 'L17-A-04', topic: 'future', skill: 'reading', type: 'reading', objective: 'L17-O5', instructions: 'Read the text.', passage: READ, prompt: 'Wann wollen Kemal und seine Frau heiraten?', options: ['nächstes Jahr', 'nächsten Monat', 'bald'], answer: 'nächstes Jahr', explanation: 'Nächstes Jahr wollen … heiraten.' }),
    q({ id: 'L17-A-05', topic: 'prepositions', skill: 'reading', type: 'reading', objective: 'L17-O3', instructions: 'Read the text.', passage: READ, prompt: 'Wie wollen sie heiraten?', options: ['mit den Familien, ohne große Party', 'ohne die Familien', 'mit einer großen Party'], answer: 'mit den Familien, ohne große Party', explanation: 'mit unseren Familien, aber ohne große Party.' }),
    q({ id: 'L17-A-06', topic: 'future', skill: 'writing', type: 'writing', objective: 'L17-O5', instructions: 'Write about your plans and wishes (5–6 sentences).', prompt: 'What do you want to do next year and later? What do you want to become? What is important to you?',
      rubric: ['I use wollen with the infinitive at the end.', 'I use werden (… werden / Es wird …).', 'I use mit + dative or ohne / für + accusative.', 'I say what is important to me: … ist mir wichtig.'],
      model: 'Nächstes Jahr will ich die A2-Prüfung machen. Später will ich in Deutschland als Ingenieur arbeiten. Im Sommer will ich mit meiner Familie nach Österreich fahren. Mein Sohn will Pilot werden. Familie und Gesundheit sind mir sehr wichtig.', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L17-A-07', topic: 'wichtig', skill: 'speaking', type: 'speaking', objective: 'L17-O4', instructions: 'Talk for one minute about your plans (out loud).', prompt: 'Then ask a partner: Was willst du nächstes Jahr machen? Was ist dir wichtig?',
      rubric: ['I used wollen 2–3 times.', 'I used a future time word (nächstes Jahr, bald, später).', 'I said what is important to me.', 'I asked my partner two questions.'],
      model: 'Nächstes Jahr will ich den Führerschein machen. Später will ich ein Haus kaufen. Meine Kinder sind mir sehr wichtig. Und du? Was willst du nächstes Jahr machen? Was ist dir wichtig?', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    wol('L17-T-01', 'Ich ___ heute Abend ins Kino gehen.', [['will']], 'ich will.'),
    wol('L17-T-02', 'Sie (they) ___ ein Haus kaufen.', [['wollen']], 'sie wollen.'),
    q({ id: 'L17-T-03', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'conjugation', objective: 'L17-O1', instructions: 'Conjugate.', prompt: 'du + wollen →', answer: 'willst', explanation: 'du willst.' }),
    q({ id: 'L17-T-04', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'order', objective: 'L17-O1', instructions: 'Put the words in order.', prompt: 'Do you want to come along?', tokens: ['Willst', 'du', 'mitkommen'], answer: 'Willst du mitkommen', explanation: 'Modal first, infinitive last.' }),
    wer('L17-T-05', 'Er ___ nächsten Monat 50.', [['wird']], 'er wird.'),
    q({ id: 'L17-T-06', topic: 'werden', skill: 'grammar', grammar: 'werden', type: 'mc', objective: 'L17-O2', instructions: 'Choose the form.', prompt: 'Wir … bald Eltern.', options: ['werden', 'wird', 'werdet', 'wollen'], answer: 'werden', explanation: 'wir werden.' }),
    q({ id: 'L17-T-07', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'gap', objective: 'L17-O3', instructions: 'Fill in the possessive.', prompt: 'Ich wohne mit ___ Freundin zusammen. (mein)', answer: [['meiner']], explanation: 'mit + dative feminine → meiner.' }),
    q({ id: 'L17-T-08', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'mc', objective: 'L17-O3', instructions: 'Choose the correct form.', prompt: 'Die Blumen sind für … Mutter.', options: ['meine', 'meiner', 'meinem', 'meinen'], answer: 'meine', explanation: 'für + accusative; die Mutter → meine.' }),
    q({ id: 'L17-T-09', topic: 'prepositions', skill: 'grammar', grammar: 'prepositions-case', type: 'mc', objective: 'L17-O3', instructions: 'Choose the correct form.', prompt: 'Er geht ohne … Schlüssel aus dem Haus.', options: ['seinen', 'seinem', 'seiner', 'sein'], answer: 'seinen', explanation: 'ohne + accusative; der Schlüssel → seinen.' }),
    q({ id: 'L17-T-10', topic: 'wichtig', skill: 'grammar', grammar: 'dative-pronouns', type: 'mc', objective: 'L17-O4', instructions: 'Choose the pronoun.', prompt: 'Sport ist … wichtig. (wir)', options: ['uns', 'wir', 'unser', 'euch'], answer: 'uns', explanation: 'wir → uns.' }),
    q({ id: 'L17-T-11', topic: 'wollen', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L17-O1', instructions: 'Write it in German (use wollen).', prompt: 'She wants to learn German.', answer: 'Sie will Deutsch lernen.', explanation: 'sie will … lernen.' }),
    q({ id: 'L17-T-12', topic: 'werden', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L17-O2', instructions: 'Write it in German.', prompt: 'It’s getting cold.', answer: 'Es wird kalt.', explanation: 'werden + adjective.' }),
    q({ id: 'L17-T-13', topic: 'future', skill: 'listening', type: 'listen', objective: 'L17-O5', instructions: 'Listen and answer.', prompt: 'When does he want to move?', audio: 'Nächstes Jahr will ich nach Berlin ziehen. Dort will ich studieren.', options: ['next year', 'next month', 'next week', 'later'], answer: 'next year', explanation: 'Nächstes Jahr.' }),
    q({ id: 'L17-T-14', topic: 'wichtig', skill: 'reading', type: 'reading', objective: 'L17-O4', instructions: 'Read and answer.', passage: 'Ich arbeite gern im Team. Ein gutes Team ist mir sehr wichtig.\nViel Geld ist mir nicht so wichtig.', prompt: 'Was ist der Person sehr wichtig?', options: ['ein gutes Team', 'viel Geld', 'ein großes Büro'], answer: 'ein gutes Team', explanation: 'Ein gutes Team ist mir sehr wichtig.' }),
    q({ id: 'L17-T-15', topic: 'wollen', skill: 'grammar', grammar: 'modal-wollen', type: 'mc', objective: 'L17-O1', instructions: 'Choose the meaning.', prompt: 'What is the best translation of “I will call you tomorrow”?', options: ['Ich rufe dich morgen an.', 'Ich will dich morgen anrufen.', 'Ich werde dich morgen.', 'Ich wolle dich morgen anrufen.'], answer: 'Ich rufe dich morgen an.', explanation: 'English “will” (future) → German present tense. „Ich will …“ = I want to.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
