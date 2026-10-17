// Lektion 23 · "Es regnet. Na und?" (Momente A1.2, Modul 8)
// Original content written for this site, aligned with the lesson title/topic and Grammar Book step 24.
// NOT copied from Kursbuch/Arbeitsbuch; no textbook page/exercise numbers claimed.
// status 'ai-checked' = written and checked by the AI assistant; needs a human (teacher) review before 'approved'.
(function (root) {
  const GB = 'grammar-lab.html?s='; // Grammar Lab step
  const L = 23, LVL = 'A1.2';
  const q = (o) => Object.assign({ level: LVL, lesson: L, difficulty: 1, status: 'ai-checked' }, o);
  const CONJ = GB + '24', TWO = GB + '24', WX = GB + '24', LOS = GB + '24', TRIP = GB + '24';
  const join = (id, prompt, a, ex, acc) => q({ id, topic: 'connectors', skill: 'grammar', grammar: 'coordinating-conjunctions', type: 'translate', difficulty: 2, objective: 'L23-O1', instructions: 'Join the two sentences.', prompt, answer: a, accept: acc, explanation: ex, learnHref: CONJ });
  const two = (id, prompt, a, ex) => q({ id, topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'gap', objective: 'L23-O2', instructions: 'Dative (Wo?) or accusative (Wohin?)? Fill in the article.', prompt, answer: a, explanation: ex, learnHref: TWO });

  const objectives = [
    { id: 'L23-O1', text: 'Join sentences with und, aber, oder, denn (position 0) and give reasons with denn.', kind: 'grammar' },
    { id: 'L23-O2', text: 'Use the two-way prepositions: Wo? → dative, Wohin? → accusative (ins, ans vs im, am).', kind: 'grammar' },
    { id: 'L23-O3', text: 'Use the verb pairs liegen/legen, stehen/stellen, sein/gehen.', kind: 'grammar' },
    { id: 'L23-O4', text: 'Talk about the weather (Es regnet. Es ist sonnig. Es sind 20 Grad.) and make adjectives with -los.', kind: 'communication' },
    { id: 'L23-O5', text: 'Wish someone a good trip and plan a weekend with reasons.', kind: 'communication' }
  ];

  const learn = [
    { id: 'conj', title: 'Joining sentences: und, aber, oder, denn', objective: 'L23-O1', href: CONJ,
      text: 'These four words are in position 0: the second sentence keeps its normal order (verb in position 2). Comma before aber and denn. After denn write a normal sentence.',
      table: [['Ich lerne Deutsch und ich arbeite in Köln.', 'und = and'], ['Ich mag Kaffee, aber ich trinke keinen Tee.', 'aber = but'], ['Kommst du mit oder bleibst du hier?', 'oder = or'], ['Ich bleibe zu Hause, denn es regnet.', 'denn = because'], ['Ich bleibe zu Hause, denn heute ist es kalt.', 'normal word order after denn']],
      mistakes: [['…, denn regnet es.', '…, denn es regnet.', 'denn does not change the word order.']] },
    { id: 'two', title: 'The two-way prepositions', objective: 'L23-O2', href: TWO,
      text: 'an, auf, in, vor, hinter, neben, zwischen, unter, über: Wo? (location) → dative. Wohin? (movement to a new place) → accusative. in das → ins, an das → ans.',
      table: [['Wo? Ich bin im Park. · Wir sind am Meer.', 'dative'], ['Wohin? Ich gehe in den Park. · Wir fahren ans Meer.', 'accusative'], ['Das Buch liegt auf dem Tisch.', 'Wo? → dem'], ['Ich lege das Buch auf den Tisch.', 'Wohin? → den'], ['Ich bin im Kino. · Ich gehe ins Kino.', 'im (dat.) · ins (acc.)']] },
    { id: 'pairs', title: 'Verb pairs: liegen/legen, stehen/stellen', objective: 'L23-O3', href: TWO,
      table: [['liegen — Das Handy liegt auf dem Tisch.', 'legen — Ich lege das Handy auf den Tisch.'], ['stehen — Die Flasche steht im Kühlschrank.', 'stellen — Ich stelle die Flasche in den Kühlschrank.'], ['sein — Ich bin in der Stadt.', 'fahren — Ich fahre in die Stadt.']] },
    { id: 'weather', title: 'Talking about the weather · -los', objective: 'L23-O4', href: WX,
      table: [['Es regnet. · Es schneit.', 'It’s raining. · It’s snowing.'], ['Es ist sonnig / bewölkt / windig / neblig.', 'sunny / cloudy / windy / foggy'], ['Es ist warm / heiß / kalt / kühl.', 'warm / hot / cold / cool'], ['Es sind 25 Grad. · Es sind minus 5 Grad.', 'temperature'], ['Die Sonne scheint.', 'The sun is shining.'], ['die Wolke → wolkenlos · die Arbeit → arbeitslos', '-los = without']] },
    { id: 'trip', title: 'Wishes for a trip', objective: 'L23-O5', href: TRIP,
      table: [['Gute Reise!', 'Have a good trip!'], ['Viel Spaß!', 'Have fun!'], ['Schönen Urlaub!', 'Have a nice holiday!'], ['Komm gut nach Hause!', 'Get home safely!'], ['Es regnet? Na und?', 'It’s raining? So what?']] }
  ];

  const practice = [
    join('L23-P-01', 'Ich bleibe zu Hause. Es regnet. (denn)', 'Ich bleibe zu Hause, denn es regnet.', 'denn + normal word order.'),
    join('L23-P-02', 'Ich mag Kaffee. Ich trinke keinen Tee. (aber)', 'Ich mag Kaffee, aber ich trinke keinen Tee.', 'Comma before aber.'),
    join('L23-P-03', 'Kommst du mit? Bleibst du hier? (oder)', 'Kommst du mit oder bleibst du hier?', 'oder joins two questions.', ['Kommst du mit, oder bleibst du hier?']),
    join('L23-P-04', 'Ich bin müde. Ich habe schlecht geschlafen. (denn)', 'Ich bin müde, denn ich habe schlecht geschlafen.', 'denn + normal sentence.'),
    q({ id: 'L23-P-05', topic: 'connectors', skill: 'grammar', grammar: 'coordinating-conjunctions', type: 'mc', objective: 'L23-O1', instructions: 'Choose the correct sentence.', prompt: 'I’m going to the park because the sun is shining.', options: ['Ich gehe in den Park, denn die Sonne scheint.', 'Ich gehe in den Park, denn scheint die Sonne.', 'Ich gehe in den Park, denn die Sonne scheinen.', 'Ich gehe in den Park denn, die Sonne scheint.'], answer: 'Ich gehe in den Park, denn die Sonne scheint.', explanation: 'denn = position 0.', learnHref: CONJ }),
    q({ id: 'L23-P-06', topic: 'connectors', skill: 'grammar', grammar: 'coordinating-conjunctions', type: 'mc', objective: 'L23-O1', instructions: 'Choose the connector.', prompt: 'Es ist kalt, … die Sonne scheint.', options: ['aber', 'denn', 'oder', 'und'], answer: 'aber', explanation: 'contrast → aber.' }),
    q({ id: 'L23-P-07', topic: 'connectors', skill: 'grammar', grammar: 'coordinating-conjunctions', type: 'match', objective: 'L23-O1', instructions: 'Match.', prompt: '', pairs: [['und', 'and'], ['aber', 'but'], ['oder', 'or'], ['denn', 'because'], ['Warum?', 'Why?']], explanation: 'Connectors.', learnHref: CONJ }),
    two('L23-P-08', 'Ich lege die Jacke auf ___ Bett. (das Bett)', [['das']], 'Wohin? → accusative: das.'),
    two('L23-P-09', 'Die Jacke liegt auf ___ Bett. (das Bett)', [['dem']], 'Wo? → dative: dem.'),
    two('L23-P-10', 'Wir fahren in ___ Berge. (die Berge)', [['die']], 'Wohin? → accusative plural: die.'),
    two('L23-P-11', 'Ich gehe in ___ Park. (der Park)', [['den']], 'Wohin? → den.'),
    two('L23-P-12', 'Ich bin in ___ Stadt. (die Stadt)', [['der']], 'Wo? → dative feminine: der.'),
    q({ id: 'L23-P-13', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'ins, ans, im or am?', prompt: 'Wir fahren … Meer.', options: ['ans', 'am', 'ins', 'im'], answer: 'ans', explanation: 'Wohin? an das → ans.', learnHref: TWO }),
    q({ id: 'L23-P-14', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'ins, ans, im or am?', prompt: 'Wir sind … Meer.', options: ['am', 'ans', 'im', 'ins'], answer: 'am', explanation: 'Wo? an dem → am.' }),
    q({ id: 'L23-P-15', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'ins, ans, im or am?', prompt: 'Ich gehe heute Abend … Kino.', options: ['ins', 'im', 'am', 'ans'], answer: 'ins', explanation: 'Wohin? in das → ins.' }),
    q({ id: 'L23-P-16', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'Wo or Wohin?', prompt: '… fährst du am Wochenende?', options: ['Wohin', 'Wo'], answer: 'Wohin', explanation: 'fahren = movement → Wohin?' }),
    q({ id: 'L23-P-17', topic: 'pairs', skill: 'grammar', grammar: 'liegen-legen', type: 'mc', objective: 'L23-O3', instructions: 'liegt or legt?', prompt: 'Das Buch … auf dem Tisch.', options: ['liegt', 'legt'], answer: 'liegt', explanation: 'position (Wo?) → liegen.', learnHref: TWO }),
    q({ id: 'L23-P-18', topic: 'pairs', skill: 'grammar', grammar: 'liegen-legen', type: 'mc', objective: 'L23-O3', instructions: 'stelle or stehe?', prompt: 'Ich … die Milch in den Kühlschrank.', options: ['stelle', 'stehe'], answer: 'stelle', explanation: 'movement (Wohin?) → stellen.' }),
    q({ id: 'L23-P-19', topic: 'pairs', skill: 'grammar', grammar: 'liegen-legen', type: 'gap', objective: 'L23-O3', instructions: 'Fill in stehen or stellen.', prompt: 'Die Milch ___ im Kühlschrank.', answer: [['steht']], explanation: 'Wo? → stehen.' }),
    q({ id: 'L23-P-20', topic: 'weather', skill: 'vocabulary', type: 'match', objective: 'L23-O4', instructions: 'Match the weather.', prompt: '', pairs: [['Es regnet.', 'It’s raining.'], ['Es schneit.', 'It’s snowing.'], ['bewölkt', 'cloudy'], ['windig', 'windy'], ['neblig', 'foggy']], explanation: 'Weather.', learnHref: WX }),
    q({ id: 'L23-P-21', topic: 'weather', skill: 'grammar', grammar: 'es-weather', type: 'order', objective: 'L23-O4', instructions: 'Put the words in order.', prompt: 'Today it is 25 degrees.', tokens: ['Heute', 'sind', 'es', '25', 'Grad'], answer: 'Heute sind es 25 Grad', explanation: 'Es sind 25 Grad → Heute sind es 25 Grad.' }),
    q({ id: 'L23-P-22', topic: 'weather', skill: 'vocabulary', type: 'translate', objective: 'L23-O4', instructions: 'Make the -los adjective.', prompt: 'die Wolke →', answer: 'wolkenlos', explanation: 'Wolke + n + los.', learnHref: LOS }),
    q({ id: 'L23-P-23', topic: 'weather', skill: 'vocabulary', type: 'translate', objective: 'L23-O4', instructions: 'Make the -los adjective.', prompt: 'die Arbeit →', answer: 'arbeitslos', explanation: 'Arbeit + s + los = unemployed.' }),
    q({ id: 'L23-P-24', topic: 'trip', skill: 'communication', type: 'mc', objective: 'L23-O5', instructions: 'What do you say?', prompt: 'Your friend is leaving for a long journey.', options: ['Gute Reise!', 'Gute Besserung!', 'Prost!', 'Mach ich!'], answer: 'Gute Reise!', explanation: 'Gute Reise = Have a good trip.', learnHref: TRIP }),
    q({ id: 'L23-P-25', topic: 'two-way', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L23-O3', instructions: 'Write it in German.', prompt: 'I put the key on the table.', answer: 'Ich lege den Schlüssel auf den Tisch.', explanation: 'legen + auf + accusative.' }),
    q({ id: 'L23-P-26', topic: 'weather', skill: 'listening', type: 'listen', objective: 'L23-O4', instructions: 'Listen to the forecast.', prompt: 'What will the weather be like on Saturday?', audio: 'Am Samstag scheint die Sonne, es sind 28 Grad. Am Sonntag regnet es.', options: ['sunny, 28 degrees', 'rainy', 'cloudy, 18 degrees', 'snowy'], answer: 'sunny, 28 degrees', explanation: 'die Sonne scheint, 28 Grad.' }),
    q({ id: 'L23-P-27', topic: 'connectors', skill: 'listening', type: 'listen', objective: 'L23-O1', instructions: 'Listen and answer.', prompt: 'Why isn’t he going to the beach?', audio: 'Ich gehe heute nicht an den Strand, denn es ist zu windig.', options: ['It is too windy.', 'It is raining.', 'It is too hot.', 'He is ill.'], answer: 'It is too windy.', explanation: 'denn es ist zu windig.' }),
    q({ id: 'L23-P-28', topic: 'connectors', skill: 'listening', type: 'dictation', difficulty: 2, objective: 'L23-O1', instructions: 'Listen and write.', prompt: '', audio: 'Es regnet, aber ich gehe spazieren.', answer: 'Es regnet, aber ich gehe spazieren.', explanation: 'aber + normal word order.' }),
    q({ id: 'L23-P-29', topic: 'weather', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L23-O4', instructions: 'Write it in German.', prompt: 'It’s cold and windy today.', answer: 'Heute ist es kalt und windig.', accept: ['Es ist heute kalt und windig.'], explanation: 'Heute ist es …' }),
    q({ id: 'L23-P-30', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'Choose the correct sentence.', prompt: 'I’m hanging the picture on the wall.', options: ['Ich hänge das Bild an die Wand.', 'Ich hänge das Bild an der Wand.', 'Ich hänge das Bild am Wand.', 'Ich hänge das Bild in die Wand.'], answer: 'Ich hänge das Bild an die Wand.', explanation: 'Wohin? → an + accusative.' })
  ];

  const DIALOG = '– Was machst du am Wochenende? – Am Samstag fahre ich ans Meer, denn es wird sonnig und warm. – Toll! Und am Sonntag? – Am Sonntag soll es regnen, aber das ist egal. Ich gehe ins Museum. – Na dann, viel Spaß!';
  const READ = 'Das Wetter morgen\nIm Norden ist es bewölkt und windig, es sind 14 Grad.\nIm Süden scheint die Sonne, es ist fast wolkenlos und warm: bis 24 Grad.\nIn den Bergen kann es am Abend regnen.';
  const apply = [
    q({ id: 'L23-A-01', topic: 'two-way', skill: 'listening', type: 'listen', objective: 'L23-O2', instructions: 'Listen to the conversation.', prompt: 'Where is the speaker going on Saturday?', audio: DIALOG, options: ['to the seaside', 'to the museum', 'to the mountains', 'to the cinema'], answer: 'to the seaside', explanation: 'ans Meer.' }),
    q({ id: 'L23-A-02', topic: 'connectors', skill: 'listening', type: 'listen', objective: 'L23-O1', instructions: 'Listen again.', prompt: 'Why is he going there on Saturday?', audio: DIALOG, options: ['It will be sunny and warm.', 'It will rain.', 'His friends are there.', 'The museum is closed.'], answer: 'It will be sunny and warm.', explanation: 'denn es wird sonnig und warm.' }),
    q({ id: 'L23-A-03', topic: 'weather', skill: 'reading', type: 'reading', objective: 'L23-O4', instructions: 'Read the forecast.', passage: READ, prompt: 'Wie ist das Wetter im Norden?', options: ['bewölkt und windig', 'sonnig und warm', 'es regnet'], answer: 'bewölkt und windig', explanation: 'Im Norden ist es bewölkt und windig.' }),
    q({ id: 'L23-A-04', topic: 'weather', skill: 'reading', type: 'reading', objective: 'L23-O4', instructions: 'Read the forecast.', passage: READ, prompt: 'Wie warm wird es im Süden?', options: ['bis 24 Grad', '14 Grad', 'bis 30 Grad'], answer: 'bis 24 Grad', explanation: 'bis 24 Grad.' }),
    q({ id: 'L23-A-05', topic: 'weather', skill: 'reading', type: 'reading', objective: 'L23-O4', instructions: 'Read the forecast.', passage: READ, prompt: 'Wo kann es am Abend regnen?', options: ['in den Bergen', 'im Norden', 'im Süden'], answer: 'in den Bergen', explanation: 'In den Bergen kann es am Abend regnen.' }),
    q({ id: 'L23-A-06', topic: 'connectors', skill: 'writing', type: 'writing', objective: 'L23-O1', instructions: 'Write about the weather and your weekend plans (5–6 sentences).', prompt: 'Describe today’s weather. Say where you will go (Wohin?) and give reasons with denn. Use aber once.',
      rubric: ['I describe the weather with es.', 'I use denn + normal word order for a reason.', 'I use aber / oder / und.', 'I use Wohin? + accusative (in den Park, ans Meer, ins Kino).'],
      model: 'Heute ist es kalt und bewölkt, es sind nur 8 Grad. Am Samstag gehe ich ins Kino, denn es soll regnen. Am Sonntag scheint die Sonne, aber es ist windig. Dann fahre ich mit Freunden an den See. Es ist kalt? Na und?', explanation: 'Self-assessed. Compare with the model answer.' }),
    q({ id: 'L23-A-07', topic: 'pairs', skill: 'speaking', type: 'speaking', objective: 'L23-O3', instructions: 'Tidy your room out loud.', prompt: 'Say where you put five things (Ich lege / stelle … auf / in …) and where they are now (Das Buch liegt …).',
      rubric: ['I used legen / stellen + accusative.', 'I used liegen / stehen + dative.', 'I used three different prepositions.', 'I used five objects.'],
      model: 'Ich lege das Buch auf den Tisch. Jetzt liegt das Buch auf dem Tisch. Ich stelle die Flasche in den Kühlschrank. Die Flasche steht jetzt im Kühlschrank. Ich lege die Jacke aufs Bett …', explanation: 'Self-assessed.' })
  ];

  const quiz = [
    join('L23-T-01', 'Ich gehe nicht schwimmen. Das Wasser ist zu kalt. (denn)', 'Ich gehe nicht schwimmen, denn das Wasser ist zu kalt.', 'denn + normal word order.'),
    join('L23-T-02', 'Es schneit. Wir fahren Ski. (und)', 'Es schneit und wir fahren Ski.', 'und: usually no comma.', ['Es schneit, und wir fahren Ski.']),
    q({ id: 'L23-T-03', topic: 'connectors', skill: 'grammar', grammar: 'coordinating-conjunctions', type: 'mc', objective: 'L23-O1', instructions: 'Choose the connector.', prompt: 'Trinkst du Tee … Kaffee?', options: ['oder', 'aber', 'denn', 'und'], answer: 'oder', explanation: 'choice → oder.' }),
    two('L23-T-04', 'Die Katze schläft unter ___ Tisch. (der Tisch)', [['dem']], 'Wo? → dative: dem.'),
    two('L23-T-05', 'Ich stelle die Lampe neben ___ Sofa. (das Sofa)', [['das']], 'Wohin? → accusative: das.'),
    q({ id: 'L23-T-06', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'ins, ans, im or am?', prompt: 'Ich bin gerade … Kino.', options: ['im', 'ins', 'am', 'ans'], answer: 'im', explanation: 'Wo? in dem → im.' }),
    q({ id: 'L23-T-07', topic: 'two-way', skill: 'grammar', grammar: 'two-way-prepositions', type: 'mc', objective: 'L23-O2', instructions: 'Wo or Wohin?', prompt: '… wohnst du?', options: ['Wo', 'Wohin'], answer: 'Wo', explanation: 'wohnen = position → Wo?' }),
    q({ id: 'L23-T-08', topic: 'pairs', skill: 'grammar', grammar: 'liegen-legen', type: 'mc', objective: 'L23-O3', instructions: 'liegt or legt?', prompt: 'Er … sein Handy auf den Tisch.', options: ['legt', 'liegt'], answer: 'legt', explanation: 'movement → legen.' }),
    q({ id: 'L23-T-09', topic: 'pairs', skill: 'grammar', grammar: 'liegen-legen', type: 'gap', objective: 'L23-O3', instructions: 'Fill in stehen or stellen.', prompt: 'Ich ___ die Blumen auf den Tisch.', answer: [['stelle']], explanation: 'Wohin? → stellen.' }),
    q({ id: 'L23-T-10', topic: 'weather', skill: 'vocabulary', type: 'mc', objective: 'L23-O4', instructions: 'Choose the sentence.', prompt: 'There is no cloud in the sky.', options: ['Der Himmel ist wolkenlos.', 'Es ist bewölkt.', 'Es ist neblig.', 'Es regnet.'], answer: 'Der Himmel ist wolkenlos.', explanation: 'wolkenlos = cloudless.' }),
    q({ id: 'L23-T-11', topic: 'connectors', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L23-O1', instructions: 'Write it in German.', prompt: 'I’m staying at home because the weather is bad.', answer: 'Ich bleibe zu Hause, denn das Wetter ist schlecht.', accept: ['Ich bleibe heute zu Hause, denn das Wetter ist schlecht.'], explanation: 'denn + normal word order.' }),
    q({ id: 'L23-T-12', topic: 'two-way', skill: 'writing', type: 'translate', difficulty: 2, objective: 'L23-O2', instructions: 'Write it in German.', prompt: 'We are going to the seaside.', answer: 'Wir fahren ans Meer.', accept: ['Wir gehen ans Meer.'], explanation: 'Wohin? → ans Meer.' }),
    q({ id: 'L23-T-13', topic: 'weather', skill: 'listening', type: 'listen', objective: 'L23-O4', instructions: 'Listen and answer.', prompt: 'What is the temperature?', audio: 'Heute ist es sehr kalt. Es sind minus drei Grad und es schneit.', options: ['minus 3 degrees', '3 degrees', 'minus 13 degrees', '30 degrees'], answer: 'minus 3 degrees', explanation: 'minus drei Grad.' }),
    q({ id: 'L23-T-14', topic: 'trip', skill: 'reading', type: 'reading', objective: 'L23-O5', instructions: 'Read and answer.', passage: 'Liebe Clara, morgen fliegst du nach Lissabon!\nGute Reise und viel Spaß! Komm gut nach Hause! Deine Mia', prompt: 'Was wünscht Mia?', options: ['eine gute Reise', 'gute Besserung', 'alles Gute zum Geburtstag'], answer: 'eine gute Reise', explanation: 'Gute Reise!' }),
    q({ id: 'L23-T-15', topic: 'trip', skill: 'vocabulary', type: 'match', objective: 'L23-O5', instructions: 'Match.', prompt: '', pairs: [['Viel Spaß!', 'Have fun!'], ['Schönen Urlaub!', 'Have a nice holiday!'], ['Na und?', 'So what?'], ['die Sonne scheint', 'the sun is shining'], ['heiß', 'hot']], explanation: 'Wishes and weather.' })
  ];

  root.LESSON_CONTENT = root.LESSON_CONTENT || {};
  root.LESSON_CONTENT[L] = { n: L, objectives, learn, practice, apply, quiz, version: 1 };
})(typeof window !== 'undefined' ? window : globalThis);
