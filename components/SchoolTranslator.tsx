"use client";
import {useEffect} from "react";

/** Curated English -> natural Hindi translations. Never send school/student data to a third-party translator. */
export const schoolHindi:Record<string,string>={
"Skip to content":"मुख्य सामग्री पर जाएँ",
"Home":"होम","About":"परिचय","Academics":"शिक्षा","Admissions":"प्रवेश","Student Life":"विद्यार्थी जीवन","Sports":"खेलकूद","Facilities":"सुविधाएँ","Gallery":"फोटो गैलरी","FAQ":"प्रश्नोत्तर","Dashboard":"डैशबोर्ड","Contact":"संपर्क","Apply Now":"अभी आवेदन करें","ERP Login":"ईआरपी लॉगिन","Get directions":"रास्ता देखें","Send an enquiry":"पूछताछ भेजें","Enquire":"पूछताछ करें","Visit":"मुलाकात","Explore":"और जानें","Explore the school":"स्कूल के बारे में जानें","EXPLORE":"और जानें","VISIT":"मुलाकात","CONTACT":"संपर्क","FAQs & Help":"प्रश्न और सहायता","English Medium":"अंग्रेज़ी माध्यम","Classes up to 12 · Sadar, Betul":"कक्षा 12 तक · सदर, बैतूल","English Medium · English & Hindi Medium":"अंग्रेज़ी एवं हिंदी माध्यम","Get in touch":"संपर्क करें",
"Building Knowledge, Character and a Brighter Future.":"ज्ञान, संस्कार और उज्ज्वल भविष्य की ओर।",
"Near Kirad Mangal Bhawan, Sadar, Betul, M.P.":"किराड़ मंगल भवन के पास, सदर, बैतूल, म.प्र.",
"Near Kirad Mangal Bhawan, Sadar, Betul":"किराड़ मंगल भवन के पास, सदर, बैतूल",
"Near Kirad Mangal Bhawan, Sadar, Betul.":"किराड़ मंगल भवन के पास, सदर, बैतूल।",
"Near Kirad Mangal Bhawan":"किराड़ मंगल भवन के पास",
"District Betul, Madhya Pradesh":"जिला बैतूल, मध्य प्रदेश",
"Sadar, Betul, Madhya Pradesh, India":"सदर, बैतूल, मध्य प्रदेश, भारत",
"Sadar, Betul":"सदर, बैतूल",
"Building Knowledge, Character and a Brighter Future":"ज्ञान, संस्कार और उज्ज्वल भविष्य की ओर",
"Respectful, inclusive education for every child.":"हर बच्चे के लिए सम्मानजनक और समावेशी शिक्षा।",
"UNIQUE HIGHER SECONDARY PUBLIC SCHOOL":"यूनिक हायर सेकेंडरी पब्लिक स्कूल",
"HIGHER SECONDARY PUBLIC SCHOOL":"हायर सेकेंडरी पब्लिक स्कूल",
"UNIQUE SCHOOL":"यूनिक स्कूल",
"Opening the Door to Knowledge":"ज्ञान के द्वार खोलते हुए",
"WELCOME TO SADAR, BETUL":"सदर, बैतूल में आपका स्वागत है",
"Where knowledge":"जहाँ ज्ञान","finds character.":"संस्कारों से जुड़ता है।",
"Unique Higher Secondary Public School · Sadar, Betul":"यूनिक हायर सेकेंडरी पब्लिक स्कूल · सदर, बैतूल",
"English Medium · Classes up to 12":"अंग्रेज़ी माध्यम · कक्षा 12 तक",
"Apply for admission":"प्रवेश के लिए आवेदन करें","Explore our school":"हमारे स्कूल को जानें",
"DISCOVER":"खोजें","ENGLISH MEDIUM":"अंग्रेज़ी माध्यम","SADAR · BETUL":"सदर · बैतूल",
"CLASSES UP TO 12":"कक्षा 12 तक","CONTACT FOR TRANSPORT":"परिवहन के लिए संपर्क करें",
"LEARN • GROW • ACHIEVE":"सीखें • आगे बढ़ें • सफलता पाएँ",
"WELCOME TO UNIQUE HIGHER SECONDARY PUBLIC SCHOOL":"यूनिक हायर सेकेंडरी पब्लिक स्कूल में आपका स्वागत है",
"Learning for life.":"जीवनभर सीखने के लिए।","Growing with purpose.":"सार्थक लक्ष्य के साथ आगे बढ़ें।",
"A caring learning environment where students build knowledge, confidence and character for the future.":"एक ऐसा सहयोगी शैक्षणिक वातावरण जहाँ विद्यार्थी भविष्य के लिए ज्ञान, आत्मविश्वास और अच्छे संस्कार विकसित करते हैं।",
"Higher Secondary Education":"उच्च माध्यमिक शिक्षा",
"Discover our school":"हमारे विद्यालय को जानें","Explore academics":"पढ़ाई के बारे में जानें",
"OUR PHILOSOPHY":"हमारा शिक्षा-दर्शन","Rooted in values.":"संस्कारों से जुड़े।","Ready for tomorrow.":"कल के लिए तैयार।",
"THE UNIQUE EXPERIENCE":"यूनिक का अनुभव","Every day, a chance":"हर दिन एक अवसर","to become more.":"कुछ नया बनने का।",
"Learning and co-curricular opportunities help children grow academically and personally.":"पढ़ाई और सह-पाठ्यक्रम गतिविधियाँ बच्चों के शैक्षणिक तथा व्यक्तिगत विकास में मदद करती हैं।",
"ADMISSIONS 2026–27":"प्रवेश 2026–27","Your child’s journey":"आपके बच्चे की नई यात्रा","can begin here.":"यहीं से शुरू हो सकती है।",
"Contact our school office to confirm admissions and eligibility. Speak with our team or plan a school visit.":"प्रवेश और पात्रता की जानकारी स्कूल कार्यालय से प्राप्त करें। हमारी टीम से बात करें या स्कूल आने का समय तय करें।",
"Start an application":"आवेदन शुरू करें","WhatsApp admissions":"व्हाट्सऐप से प्रवेश संबंधी पूछताछ",
"SCHOOL AT A GLANCE":"एक नज़र में हमारा स्कूल","Clear information.":"स्पष्ट जानकारी।","Confident decisions.":"सही निर्णय।",
"Open public school dashboard":"स्कूल का सार्वजनिक डैशबोर्ड खोलें",
"FIND US IN SADAR BETUL":"सदर, बैतूल में हमसे मिलें","Come and meet us.":"आइए, हमसे मिलिए।","Call the school":"स्कूल को कॉल करें",
"OUR SCHOOL · SADAR, BETUL":"हमारा विद्यालय · सदर, बैतूल","Unique School.":"यूनिक स्कूल।","Discover our story":"हमारी कहानी जानें",
"KNOWLEDGE • CHARACTER • GROWTH":"ज्ञान • संस्कार • विकास",
"Clear, child-centred information with details maintained by the authorised school team.":"बच्चों को केंद्र में रखकर तैयार की गई जानकारी, जिसे विद्यालय की अधिकृत टीम द्वारा अद्यतन किया जाता है।",
"A NEW JOURNEY OF LEARNING, VALUES AND EXCELLENCE":"शिक्षा, संस्कार और उत्कृष्टता की नई यात्रा",
"Come and discover":"आइए और जानिए","CONTACT THE SCHOOL":"स्कूल से संपर्क करें","How can we help?":"हम आपकी कैसे मदद कर सकते हैं?",
"Your name":"आपका नाम","Phone":"मोबाइल नंबर","Student name":"विद्यार्थी का नाम","Department":"विभाग","General enquiry":"सामान्य पूछताछ","Transport":"परिवहन","Message":"संदेश","Send enquiry":"पूछताछ भेजें",
"UNIQUE HIGHER SECONDARY PUBLIC SCHOOL · BETUL":"यूनिक हायर सेकेंडरी पब्लिक स्कूल · बैतूल",
"Learning today.":"आज सीखें।","Leading tomorrow.":"कल नेतृत्व करें।",
"Discover an academic journey rooted in understanding, confidence, curiosity and character.":"समझ, आत्मविश्वास, जिज्ञासा और अच्छे संस्कारों पर आधारित शैक्षणिक यात्रा को जानिए।",
"Explore academics":"शैक्षणिक जानकारी देखें",
"01 / OUR APPROACH":"01 / हमारा दृष्टिकोण","Education with":"शिक्षा का","purpose.":"सार्थक उद्देश्य।",
"02 / PROGRAMMES":"02 / अध्ययन कार्यक्रम","Every stage matters.":"सीखने का हर चरण महत्वपूर्ण है।",
"Explore the learning stages. Class availability and programmes are subject to school confirmation.":"सीखने के विभिन्न चरणों के बारे में जानें। कक्षाओं और कार्यक्रमों की उपलब्धता की पुष्टि स्कूल से करें।",
"Enquire about classes":"कक्षाओं की जानकारी पूछें",
"03 / CURRICULUM & SUBJECTS":"03 / पाठ्यक्रम और विषय","Build the fundamentals.":"मज़बूत बुनियाद बनाएँ।",
"Explore broad learning areas. Exact subjects, board and streams should be verified with school administration.":"विभिन्न अध्ययन क्षेत्रों को जानें। विषय, बोर्ड और संकाय की सही जानकारी स्कूल प्रशासन से सत्यापित करें।",
"04 / TEACHING METHODOLOGY":"04 / पढ़ाने की पद्धति","Teaching that connects.":"समझ से जुड़ी शिक्षा।",
"05 / THE ACADEMIC JOURNEY":"05 / शैक्षणिक यात्रा","Step by step, growing stronger.":"हर कदम पर आगे बढ़ें।",
"Illustrative educational stages, not an official confirmed class-wise prospectus.":"ये शैक्षणिक चरण उदाहरण के लिए हैं; आधिकारिक कक्षावार विवरणिका नहीं।",
"06 / BEYOND CLASSROOMS":"06 / कक्षा से आगे","Learning happens everywhere.":"सीखना हर जगह होता है।",
"Explore student life":"विद्यार्थी जीवन देखें",
"07 / EDUCATORS":"07 / शिक्षक","Guidance that makes a difference.":"मार्गदर्शन जो बदलाव लाए।",
"Teacher profiles, qualifications and departments will be displayed once authorised and verified by the school.":"विद्यालय द्वारा स्वीकृत और सत्यापित किए जाने पर शिक्षकों की जानकारी, योग्यता और विभाग यहाँ दिखाए जाएँगे।",
"Dedicated Guidance":"समर्पित मार्गदर्शन","Understand the academic support and teaching approach by speaking with the school.":"स्कूल से बात करके शैक्षणिक सहायता और पढ़ाने के तरीकों की जानकारी लें।",
"Contact the school":"स्कूल से संपर्क करें","Faculty Information":"शिक्षकों की जानकारी",
"Official faculty biographies are awaiting school-approved information.":"शिक्षकों का आधिकारिक परिचय स्कूल की स्वीकृत जानकारी मिलने पर जोड़ा जाएगा।","Faculty page":"शिक्षक पृष्ठ",
"08 / LEARNING SPACES":"08 / सीखने के स्थान","Space to discover.":"खोजने और सीखने की जगह।",
"Illustrative photography below is not presented as verified Unique School campus facilities.":"नीचे दिखाई गई तस्वीरें उदाहरण के लिए हैं; इन्हें यूनिक स्कूल की वास्तविक सुविधाएँ न समझें।",
"Ask about school facilities":"स्कूल की सुविधाओं के बारे में पूछें",
"09 / ASSESSMENT & FEEDBACK":"09 / मूल्यांकन और प्रतिक्रिया","Progress is a journey.":"प्रगति एक निरंतर यात्रा है।",
"10 / ACHIEVEMENTS":"10 / उपलब्धियाँ","Celebrate every milestone.":"हर उपलब्धि का उत्सव मनाएँ।",
"Only school-verified academic results, competition awards and student accomplishments will be displayed.":"केवल विद्यालय द्वारा सत्यापित परिणाम, पुरस्कार और विद्यार्थियों की उपलब्धियाँ प्रदर्शित की जाएँगी।",
"Achievements":"उपलब्धियाँ","11 / ACADEMIC CALENDAR":"11 / शैक्षणिक कैलेंडर","Stay informed.":"ताज़ा जानकारी पाएँ।",
"Request the school's approved calendar for exams, events, parent meetings and holidays.":"परीक्षाओं, कार्यक्रमों, अभिभावक बैठकों और छुट्टियों का स्वीकृत कैलेंडर विद्यालय से प्राप्त करें।",
"Calendar & documents":"कैलेंडर और दस्तावेज़","13 / BEGIN YOUR JOURNEY":"13 / अपनी यात्रा शुरू करें","Discover what’s possible":"नई संभावनाएँ जानें","at Unique School.":"यूनिक स्कूल में।",
"Explore admissions":"प्रवेश की जानकारी लें","WhatsApp enquiry":"व्हाट्सऐप पर पूछताछ",
"UNIQUE SCHOOL • SADAR, BETUL":"यूनिक स्कूल • सदर, बैतूल",
"Every great story":"हर अच्छी कहानी","starts with a":"की शुरुआत होती है","first step.":"पहले कदम से।",
"Discover the admission process, connect with our team and plan your child's next learning journey.":"प्रवेश प्रक्रिया जानें, हमारी टीम से संपर्क करें और अपने बच्चे की अगली शैक्षणिक यात्रा की योजना बनाएँ।",
"Start an enquiry":"पूछताछ शुरू करें","See the process":"प्रक्रिया देखें",
"LEARNING":"शिक्षा","LIFE.":"जीवन।","ADMISSIONS • ENQUIRY":"प्रवेश • पूछताछ",
"ACADEMIC SESSION: CONFIRM WITH SCHOOL":"शैक्षणिक सत्र: विद्यालय से पुष्टि करें",
"CLASS AVAILABILITY: ON ENQUIRY":"उपलब्ध कक्षाएँ: पूछताछ पर जानकारी",
"ADMISSION HELPLINE: 9452003222":"प्रवेश हेल्पलाइन: 9452003222",
"01 / WELCOME":"01 / स्वागत","The next chapter begins with curiosity.":"अगला अध्याय जिज्ञासा से शुरू होता है।",
"02 / WHY UNIQUE SCHOOL":"02 / यूनिक स्कूल क्यों?","More than just a classroom.":"सिर्फ कक्षा से कहीं अधिक।",
"03 / HOW TO JOIN":"03 / प्रवेश कैसे लें","Five simple steps.":"पाँच आसान चरण।",
"04 / CLASSES & ELIGIBILITY":"04 / कक्षाएँ और पात्रता","Finding the right learning stage.":"पढ़ाई का सही स्तर चुनें।",
"05 / PREPARING TO APPLY":"05 / आवेदन की तैयारी","Documents & information.":"दस्तावेज़ और जानकारी।",
"06 / ADMISSION ENQUIRY":"06 / प्रवेश पूछताछ","Tell us a little about your child.":"हमें अपने बच्चे के बारे में बताएँ।",
"START HERE":"यहाँ से शुरू करें","Student details":"विद्यार्थी का विवरण","Student full name *":"विद्यार्थी का पूरा नाम *",
"Class applying for *":"प्रवेश के लिए कक्षा *","Select a class":"कक्षा चुनें","Previous school (optional)":"पिछला विद्यालय (वैकल्पिक)",
"Parent / guardian details":"अभिभावक का विवरण","Guardian full name *":"अभिभावक का पूरा नाम *",
"Mobile number *":"मोबाइल नंबर *","Email (optional)":"ईमेल (वैकल्पिक)","Address (optional)":"पता (वैकल्पिक)",
"Visit & final details":"विद्यालय भ्रमण और अंतिम विवरण",
"Preferred campus visit date (request only)":"पसंदीदा विद्यालय भ्रमण की तारीख (केवल अनुरोध)",
"Transport information needed?":"क्या परिवहन की जानकारी चाहिए?","Message (optional)":"संदेश (वैकल्पिक)",
"I consent to opening WhatsApp with these details for an admission enquiry.":"मैं प्रवेश पूछताछ के लिए इन विवरणों के साथ व्हाट्सऐप खोलने की सहमति देता/देती हूँ।",
"← Back":"वापस जाएँ","Continue to WhatsApp":"व्हाट्सऐप पर आगे बढ़ें","Continue":"आगे बढ़ें",
"07 / FEES & ASSISTANCE":"07 / फीस और सहायता","Clear information, informed choices.":"स्पष्ट जानकारी से सही निर्णय।",
"Ask about fees":"फीस की जानकारी लें",
"08 / CAMPUS VISIT":"08 / विद्यालय भ्रमण","Experience the school in person.":"विद्यालय को स्वयं आकर देखें।",
"Request a school visit":"विद्यालय भ्रमण का अनुरोध करें",
"09 / LEARNING ENVIRONMENT":"09 / शैक्षणिक वातावरण","A glimpse of learning.":"पढ़ाई की एक झलक।",
"Illustrative educational photographs, not verified photographs of Unique School's campus.":"ये उदाहरण के लिए शैक्षणिक तस्वीरें हैं, यूनिक स्कूल परिसर की सत्यापित तस्वीरें नहीं।",
"View gallery":"गैलरी देखें","11 / NEED HELP?":"11 / सहायता चाहिए?","We're here to guide you.":"हम आपकी सहायता के लिए हैं।",
"Call 9452003222":"9452003222 पर कॉल करें","WhatsApp office":"कार्यालय को व्हाट्सऐप करें",
};

Object.assign(schoolHindi,{
"UNIQUE SCHOOL / STUDENT LIFE":"यूनिक स्कूल / विद्यार्थी जीवन","Not just school.":"सिर्फ एक स्कूल नहीं।","A world to explore.":"खोजने के लिए एक नई दुनिया।",
"Beyond textbooks are friendships, creativity, movement and moments that help children grow.":"पाठ्यपुस्तकों से आगे दोस्ती, रचनात्मकता, खेल और ऐसे अनुभव हैं जो बच्चों को आगे बढ़ने में मदद करते हैं।",
"Explore the day":"स्कूल के दिन को जानें","Admission enquiry":"प्रवेश संबंधी पूछताछ","LEARN · CREATE · GROW":"सीखें · रचें · आगे बढ़ें",
"Every child. Every possibility.":"हर बच्चा, अनगिनत संभावनाएँ।","Meet Unique School":"यूनिक स्कूल को जानें",
"02 / SCHOOL DAY":"02 / विद्यालय का दिन","A day full of possibility.":"संभावनाओं से भरा एक दिन।",
"Illustrative daily flow; actual school timetable is confirmed by administration.":"दिखाई गई दिनचर्या उदाहरण के लिए है; वास्तविक समय-सारणी की पुष्टि विद्यालय प्रशासन से करें।",
"03 / LIFE BEYOND BOOKS":"03 / किताबों से आगे","Many ways to shine.":"प्रतिभा निखारने के कई अवसर।",
"Activities below represent opportunities to ask the school about, not a verified activity schedule.":"नीचे दी गई गतिविधियाँ उदाहरण हैं; वास्तविक गतिविधियों और समय-सारणी के लिए विद्यालय से पूछें।",
"04 / CLUBS & LEADERSHIP":"04 / क्लब और नेतृत्व","Confidence grows through participation.":"भागीदारी से आत्मविश्वास बढ़ता है।",
"Enquire about activities":"गतिविधियों की जानकारी लें","05 / MORE TO EXPLORE":"05 / और भी जानें",
"Expression matters.":"अपनी बात कहना महत्वपूर्ण है।","06 / THE STUDENT EXPERIENCE":"06 / विद्यार्थियों का अनुभव",
"Little moments, lasting impact.":"छोटे पल, गहरा प्रभाव।","Editorial illustration, not a quoted student testimonial.":"यह उदाहरणात्मक सामग्री है, किसी छात्र का वास्तविक कथन नहीं।",
"07 / LIFE IN PICTURES":"07 / तस्वीरों में विद्यालय जीवन","A glimpse of school life.":"विद्यालय जीवन की एक झलक।",
"These are illustrative stock photos, not photographs of Unique School students or campus.":"ये उदाहरणात्मक तस्वीरें हैं, यूनिक स्कूल के विद्यार्थियों या परिसर की वास्तविक तस्वीरें नहीं।",
"08 / SCHOOL EVENTS":"08 / विद्यालय के कार्यक्रम","Celebrate every milestone.":"हर उपलब्धि का उत्सव मनाएँ।",
"School-approved activities, celebrations and achievements can be published on the news and gallery pages.":"विद्यालय से स्वीकृत गतिविधियाँ, समारोह और उपलब्धियाँ समाचार तथा गैलरी पृष्ठों पर प्रकाशित की जा सकती हैं।",
"Explore events":"कार्यक्रम देखें","09 / FAMILY CONNECTION":"09 / परिवार से जुड़ाव","Growing together.":"मिलकर आगे बढ़ें।",
"Strong parent-school communication supports children at every stage.":"अभिभावकों और विद्यालय के बीच अच्छा संवाद हर चरण में बच्चों की मदद करता है।",
"10 / JOIN THE UNIQUE FAMILY":"10 / यूनिक परिवार से जुड़ें","Let their story begin.":"उनकी नई शुरुआत होने दें।",
"Talk to the school about admissions, visits and student activities.":"प्रवेश, भ्रमण और विद्यार्थी गतिविधियों के बारे में विद्यालय से बात करें।",
"UNIQUE SCHOOL / SPORTS & WELLBEING":"यूनिक स्कूल / खेल और स्वास्थ्य",
"THE SPIRIT":"खेल का","PLAY.":"जज़्बा।","Explore sports":"खेलों को जानें",
"01 / MOVE":"01 / सक्रिय रहें","01 / PHYSICAL EDUCATION":"01 / शारीरिक शिक्षा","More than a game.":"सिर्फ खेल नहीं, उससे बढ़कर।",
"02 / SPORTS EXPLORER":"02 / खेलों को जानें","Find your game.":"अपना पसंदीदा खेल चुनें।",
"Illustrative sports categories, not a confirmed list of Unique School facilities.":"दिखाए गए खेल उदाहरण हैं; इन्हें यूनिक स्कूल की उपलब्ध सुविधाओं की पुष्टि न समझें।",
"Enquire":"पूछताछ करें","03 / FITNESS & TRAINING":"03 / फिटनेस और प्रशिक्षण",
"Stronger with every step.":"हर कदम पर और मज़बूत।","04 / SCHOOL SPORTS CULTURE":"04 / विद्यालय की खेल संस्कृति",
"Every effort counts.":"हर प्रयास महत्वपूर्ण है।","05 / ACHIEVEMENTS":"05 / उपलब्धियाँ","The champions wall.":"चैंपियनों की उपलब्धियाँ।",
"See school achievements":"विद्यालय की उपलब्धियाँ देखें","GIVE":"अपना","YOUR":"सर्वश्रेष्ठ","BEST.":"दें।",
"THE SPIRIT OF UNIQUE":"यूनिक का जज़्बा","06 / SPORTS IN PICTURES":"06 / तस्वीरों में खेल","Moments in motion.":"खेल के यादगार पल।",
"Illustrative photographs only, not verified Unique School sports events.":"ये केवल उदाहरणात्मक तस्वीरें हैं, यूनिक स्कूल की सत्यापित खेल गतिविधियों की नहीं।",
"07 / WELLBEING & SAFETY":"07 / स्वास्थ्य और सुरक्षा","Play smart. Stay safe.":"समझदारी से खेलें, सुरक्षित रहें।",
"09 / JOIN UNIQUE SCHOOL":"09 / यूनिक स्कूल से जुड़ें","Where the next move begins.":"जहाँ अगला कदम शुरू होता है।",
"Enquire about student sports activities, school visits, admissions and participation opportunities.":"विद्यार्थियों की खेल गतिविधियों, विद्यालय भ्रमण, प्रवेश और भागीदारी के अवसरों की जानकारी लें।",
"WhatsApp school":"विद्यालय को व्हाट्सऐप करें",
"UNIQUE SCHOOL / SADAR, BETUL":"यूनिक स्कूल / सदर, बैतूल",
"Space to learn.":"सीखने की जगह।","Room to grow.":"आगे बढ़ने के अवसर।",
"Explore campus":"परिसर को जानें","Plan a visit":"भ्रमण की योजना बनाएँ","SPACES & EXPERIENCES":"स्थान और अनुभव",
"A PLACE FOR POSSIBILITIES":"संभावनाओं का विद्यालय","01 / A PLACE TO BELONG":"01 / अपना सा वातावरण",
"Every space tells":"हर जगह की","a story.":"एक कहानी है।","Get to know our school":"हमारे विद्यालय को जानें",
"02 / INTERACTIVE CAMPUS EXPLORER":"02 / इंटरैक्टिव परिसर दर्शन",
"Choose your perspective.":"अपनी पसंद का स्थान चुनें।",
"Explore different learning environments. Images are illustrative, not verified photos of the school's campus.":"सीखने के अलग-अलग वातावरणों को जानें। तस्वीरें उदाहरण के लिए हैं, विद्यालय परिसर की सत्यापित तस्वीरें नहीं।",
"FEATURED SPACE":"प्रमुख स्थान","03 / CLASSROOMS, LABS & LIBRARY":"03 / कक्षाएँ, प्रयोगशालाएँ और पुस्तकालय",
"Curiosity deserves":"जिज्ञासा को चाहिए","space.":"खुली जगह।",
"04 / BEYOND THE CLASSROOM":"04 / कक्षा से आगे",
"Designed for":"बनाया गया","discovery.":"खोज के लिए।","Sports & wellbeing":"खेल और स्वास्थ्य","Student life":"विद्यार्थी जीवन",
"MOVE / CREATE / EXPLORE":"खेलें / रचें / खोजें",
"05 / ESSENTIAL CARE":"05 / ज़रूरी देखभाल",
"The details that matter.":"छोटी बातों का बड़ा महत्व।",
"Specific facilities, policies and routes are subject to confirmation by the school administration.":"सुविधाओं, नीतियों और बस मार्गों की पुष्टि विद्यालय प्रशासन से करें।",
"06 / CAMPUS IN PICTURES":"06 / तस्वीरों में परिसर","Take a closer look.":"ज़रा करीब से देखिए।",
"Explore illustrative reference photographs by category. Click any image for a larger view.":"विभिन्न श्रेणियों की उदाहरणात्मक तस्वीरें देखें। बड़ी तस्वीर देखने के लिए उस पर क्लिक करें।",
"VIEW IMAGE":"तस्वीर देखें","07 / CAMPUS WALKTHROUGH":"07 / परिसर की एक झलक",
"Your first look,":"आपकी पहली झलक,","before the visit.":"विद्यालय आने से पहले।",
"Request an actual campus visit":"वास्तविक विद्यालय भ्रमण का अनुरोध करें",
"CAMPUS":"परिसर","YOUR JOURNEY STARTS HERE":"आपकी यात्रा यहाँ से शुरू होती है",
"09 / SEE IT FOR YOURSELF":"09 / स्वयं आकर देखें",
"Come explore":"आइए जानें","Unique School.":"यूनिक स्कूल।",
"Book campus visit":"विद्यालय भ्रमण बुक करें","QUESTIONS ABOUT FACILITIES?":"सुविधाओं के बारे में प्रश्न हैं?",
"GET DIRECTIONS":"रास्ता देखें",
"UNIQUE SCHOOL · VISUAL JOURNAL":"यूनिक स्कूल · तस्वीरों की कहानी",
"Little moments.":"छोटे-छोटे पल।","Big stories.":"बड़ी-बड़ी कहानियाँ।",
"Explore the gallery":"गैलरी देखें","Discover student life":"विद्यार्थी जीवन को जानें",
"THE VISUAL JOURNAL":"तस्वीरों की कहानी","01 / STORIES":"01 / कहानियाँ",
"SADAR • BETUL":"सदर • बैतूल",
"MEMORIES / MOMENTS / DISCOVERIES":"यादें / पल / खोज",
"01 / THROUGH THE LENS":"01 / कैमरे की नज़र से",
"Life, in":"ज़िंदगी,","every frame.":"हर तस्वीर में।",
"Authentic school photos can be added with approval and appropriate consent.":"अनुमति और उचित सहमति के बाद विद्यालय की वास्तविक तस्वीरें जोड़ी जा सकती हैं।",
"02 / EXPLORE OUR GALLERY":"02 / हमारी गैलरी देखें",
"Every picture has":"हर तस्वीर की","a place.":"अपनी जगह है।",
"Choose a theme, browse the visual stories and open any image to explore it in detail.":"श्रेणी चुनें, तस्वीरों की कहानियाँ देखें और किसी भी तस्वीर को बड़े रूप में खोलें।",
"Sort":"क्रम बदलें","Featured":"चुनिंदा","Title A–Z":"नाम के अनुसार",
"ILLUSTRATIVE PHOTO COLLECTION":"उदाहरणात्मक फोटो संग्रह",
"Load more moments":"और तस्वीरें देखें","CREATIVITY, EVERY DAY":"हर दिन रचनात्मकता",
"03 / BEYOND THE CLASSROOM":"03 / कक्षा से आगे",
"More than just":"सिर्फ","photographs.":"तस्वीरों से बढ़कर।",
"04 / YOUR SCHOOL, YOUR STORIES":"04 / आपका स्कूल, आपकी कहानियाँ",
"A gallery that":"ऐसी गैलरी जो","grows with us.":"हमारे साथ बढ़ती है।",
"05 / COME SEE FOR YOURSELF":"05 / स्वयं आकर देखें",
"Discover Unique":"यूनिक को जानें","in person.":"स्वयं आकर।",
"Explore admissions, connect with the school or request a campus visit.":"प्रवेश की जानकारी लें, विद्यालय से संपर्क करें या परिसर भ्रमण का अनुरोध करें।",
"Request a visit":"भ्रमण का अनुरोध करें","Close":"बंद करें",
"UNIQUE SCHOOL / HELP CENTRE":"यूनिक स्कूल / सहायता केंद्र",
"Questions?":"प्रश्न हैं?","Answers.":"उत्तर यहाँ हैं।",
"One helpful place for academics, admissions, student life, sports, facilities and everything in between.":"शिक्षा, प्रवेश, विद्यार्थी जीवन, खेल, सुविधाओं और अन्य सभी विषयों के प्रश्नों का एक ही स्थान पर उत्तर पाएँ।",
"Find your answer":"अपना उत्तर खोजें","MADE FOR STUDENTS & PARENTS":"विद्यार्थियों और अभिभावकों के लिए",
"Try “fees”, “campus visit”, “sports” or “library”":"“फीस”, “विद्यालय भ्रमण”, “खेल” या “पुस्तकालय” खोजें",
"01 / EXPLORE BY TOPIC":"01 / विषय के अनुसार खोजें",
"Everything,":"हर जानकारी,","in its place.":"अपनी सही जगह पर।",
"Select a topic to explore its questions and answers, or search across all topics.":"प्रश्नोत्तर देखने के लिए विषय चुनें या सभी विषयों में खोजें।",
"No matching questions":"कोई संबंधित प्रश्न नहीं मिला",
"Try searching another word or choose a topic.":"कोई दूसरा शब्द खोजें या विषय चुनें।","Clear search":"खोज मिटाएँ",
"02 / KEEP EXPLORING":"02 / और जानकारी पाएँ","Explore the school.":"विद्यालय को जानें।",
"03 / STILL HAVE QUESTIONS?":"03 / अभी भी प्रश्न हैं?",
"We're here to":"हम आपकी","help.":"मदद के लिए हैं।",
"For official fees, eligibility, facilities and up-to-date information, please contact the school office.":"आधिकारिक फीस, पात्रता, सुविधाओं और ताज़ा जानकारी के लिए विद्यालय कार्यालय से संपर्क करें।",
"Ask on WhatsApp":"व्हाट्सऐप पर पूछें","Contact school":"विद्यालय से संपर्क करें",
"UNIQUE SCHOOL · INFORMATION CENTRE":"यूनिक स्कूल · सूचना केंद्र",
"Everything school.":"स्कूल की पूरी जानकारी।","All in one place.":"एक ही जगह पर।",
"Explore dashboard":"डैशबोर्ड देखें","SMART SCHOOL HUB":"स्मार्ट स्कूल सूचना केंद्र",
"EXPLORE · LEARN · GROW":"जानें · सीखें · आगे बढ़ें",
"PUBLIC DASHBOARD":"सार्वजनिक डैशबोर्ड","Student records are never displayed publicly.":"विद्यार्थियों के निजी रिकॉर्ड सार्वजनिक रूप से नहीं दिखाए जाते।",
"School ERP":"स्कूल ईआरपी","Menu":"मेन्यू","WELCOME TO THE SCHOOL HUB":"स्कूल सूचना केंद्र में आपका स्वागत है",
"Hello, welcome!":"नमस्कार, आपका स्वागत है!",
"Official information notice":"आधिकारिक सूचना संबंधी जानकारी",
"OUR LOCATION":"हमारा स्थान","Madhya Pradesh":"मध्य प्रदेश","EDUCATION":"शिक्षा",
"School Learning":"विद्यालय शिक्षा","Ask about current classes":"उपलब्ध कक्षाओं की जानकारी लें",
"SCHOOL EVENTS":"विद्यालय के कार्यक्रम","Explore Events":"कार्यक्रम देखें","See event information":"कार्यक्रमों की जानकारी देखें",
"ADMISSION HELP":"प्रवेश सहायता","Enquire Now":"अभी पूछताछ करें","Contact admissions":"प्रवेश कार्यालय से संपर्क करें",
"01 / QUICK ACCESS":"01 / तुरंत पहुँच","Where would you like to go?":"आप कहाँ जाना चाहेंगे?",
"EXPLORE OUR SCHOOL":"हमारे विद्यालय को जानें",
"02 / STAY INFORMED":"02 / ताज़ा जानकारी","Information & notices.":"सूचनाएँ और नोटिस।",
"Notice board":"सूचना पट्ट","General guidance only — these are not dated official circulars.":"यह केवल सामान्य मार्गदर्शन है, दिनांक सहित आधिकारिक परिपत्र नहीं।",
"Learn more":"और जानें","No matching information. Try another search.":"संबंधित जानकारी नहीं मिली। दूसरा शब्द खोजें।",
"03 / ACADEMIC PLANNER":"03 / शैक्षणिक योजना",
"Calendar.":"कैलेंडर।","Events":"कार्यक्रम",
"School-specific events and holidays are not yet connected. Check official notices for confirmed dates.":"विद्यालय के कार्यक्रम और छुट्टियों की सूची अभी जुड़ी नहीं है। पुष्टि की गई तारीखों के लिए आधिकारिक नोटिस देखें।",
"04 / SCHOOL RESOURCES":"04 / विद्यालय संसाधन",
"Documents & downloads.":"दस्तावेज़ और डाउनलोड।",
"Links open school information pages. No unverified files or fake downloads are offered.":"ये लिंक विद्यालय की जानकारी वाले पृष्ठ खोलते हैं। कोई असत्यापित फ़ाइल या नकली डाउनलोड नहीं दिया गया है।",
"05 / DISCOVER SCHOOL LIFE":"05 / विद्यालय जीवन को जानें",
"More than a classroom.":"कक्षा से कहीं अधिक।",
"Creativity, friendship, sports and exploration all shape the school experience.":"रचनात्मकता, मित्रता, खेल और नई खोजें मिलकर विद्यालय का अनुभव बनाती हैं।",
"Illustrative photograph, not an actual Unique School event.":"यह उदाहरणात्मक तस्वीर है, यूनिक स्कूल का वास्तविक कार्यक्रम नहीं।",
"06 / SCHOOL PORTAL ACCESS":"06 / स्कूल पोर्टल पहुँच",
"A workspace for everyone.":"हर किसी के लिए कार्यक्षेत्र।",
"PRIVATE ACCESS SEPARATE":"निजी जानकारी के लिए अलग प्रवेश",
"ROLE PREVIEW":"भूमिका का पूर्वावलोकन",
"Requires secure school records":"सुरक्षित विद्यालय रिकॉर्ड आवश्यक",
"No private data shown on this page.":"इस पृष्ठ पर कोई निजी जानकारी नहीं दिखाई गई है।",
"View ERP demonstration":"ईआरपी का डेमो देखें",
"07 / NEED ASSISTANCE?":"07 / सहायता चाहिए?",
"We are here to guide you.":"हम आपकी मदद के लिए हैं।",
"Ask about admissions, school timings, transport arrangements and other school information.":"प्रवेश, विद्यालय के समय, परिवहन और अन्य जानकारी के लिए पूछें।",
"Help & FAQs":"सहायता और प्रश्नोत्तर",
"WhatsApp School":"विद्यालय को व्हाट्सऐप करें",
"UNIQUE SCHOOL · SADAR, BETUL":"यूनिक स्कूल · सदर, बैतूल",
"Your school journey,":"आपकी शैक्षणिक यात्रा,",
"made simpler.":"अब और आसान।",
"Good conversations.":"अच्छी बातचीत।","Great beginnings.":"बेहतरीन शुरुआत।",
"WhatsApp us":"हमें व्हाट्सऐप करें",
"LET'S CONNECT":"आइए जुड़ें","SCHOOL OFFICE":"विद्यालय कार्यालय",
"01 — CONNECT":"01 — संपर्क","02 — ASK":"02 — पूछें","03 — VISIT":"03 — मुलाकात",
"SCROLL TO EXPLORE":"आगे देखने के लिए नीचे जाएँ",
"01 / WE'RE LISTENING":"01 / हम आपकी बात सुन रहे हैं",
"Every question":"हर प्रश्न","matters.":"महत्वपूर्ण है।",
"02 / QUICK CONNECTIONS":"02 / तुरंत संपर्क",
"How would you like":"आप कैसे","to connect?":"संपर्क करना चाहेंगे?",
"One school, multiple ways to reach us.":"एक विद्यालय, संपर्क के कई तरीके।",
"DIRECT CALL":"सीधे कॉल करें","Talk to our team":"हमारी टीम से बात करें",
"For admissions, visits and school enquiries.":"प्रवेश, भ्रमण और विद्यालय की जानकारी के लिए।",
"WHATSAPP":"व्हाट्सऐप","Send a message":"संदेश भेजें",
"Start a conversation with a prefilled enquiry.":"पहले से तैयार पूछताछ संदेश के साथ बातचीत शुरू करें।",
"Open WhatsApp":"व्हाट्सऐप खोलें","VISIT CAMPUS":"विद्यालय आएँ",
"Find our location":"हमारा पता देखें",
"03 / HOW CAN WE HELP?":"03 / हम आपकी कैसे मदद करें?",
"Tell us what":"हमें बताएँ","you need.":"आपको क्या चाहिए।",
"Your enquiry does not require uploading documents or making any payments.":"पूछताछ के लिए दस्तावेज़ अपलोड करना या कोई भुगतान करना आवश्यक नहीं है।",
"ENQUIRY FORM":"पूछताछ फ़ॉर्म","Let's get in touch.":"आइए संपर्क करें।",
"Selected topic:":"चुना हुआ विषय:",
"Parent / Guardian Name":"अभिभावक का नाम","Mobile Number":"मोबाइल नंबर",
"Student Name":"विद्यार्थी का नाम",
"Class / Enquiry Category":"कक्षा / पूछताछ की श्रेणी",
"Select class":"कक्षा चुनें",
"Email Address (optional)":"ईमेल पता (वैकल्पिक)",
"Your Message (optional)":"आपका संदेश (वैकल्पिक)",
"I agree to share these details with the school for responding to my enquiry.":"मैं अपनी पूछताछ का उत्तर देने के लिए ये विवरण विद्यालय के साथ साझा करने की सहमति देता/देती हूँ।",
"Send these details on WhatsApp":"ये विवरण व्हाट्सऐप पर भेजें",
"04 / FIND US IN BETUL":"04 / बैतूल में हमसे मिलें",
"Come say":"आइए कहें","hello.":"नमस्ते।",
"Visit Unique Higher Secondary Public School near Kirad Mangal Bhawan, Sadar, District Betul, Madhya Pradesh.":"किराड़ मंगल भवन के पास, सदर, जिला बैतूल, मध्य प्रदेश में स्थित यूनिक हायर सेकेंडरी पब्लिक स्कूल आइए।",
"Google Maps Directions":"गूगल मैप्स पर रास्ता",
"Request a campus visit":"विद्यालय भ्रमण का अनुरोध करें",
"Visiting hours and appointments must be confirmed with school staff before travelling.":"आने से पहले विद्यालय कर्मचारी से मिलने का समय और अनुमति की पुष्टि करें।",
"Open in Google Maps":"गूगल मैप्स में खोलें",
"05 / NEED A QUICK ANSWER?":"05 / तुरंत उत्तर चाहिए?",
"Explore our":"हमारा","help centre.":"सहायता केंद्र देखें।",
"Frequently Asked Questions":"अक्सर पूछे जाने वाले प्रश्न",
"THE NEXT CHAPTER STARTS HERE":"अगला अध्याय यहाँ से शुरू होता है",
"Let's begin a":"आइए शुरू करें","conversation.":"बातचीत।",
"Call the school":"विद्यालय को कॉल करें",
});


/* Shared translations stay local: no API keys, remote translation request or student data transfer. */
const baseText = new WeakMap<Text,string>();
const appliedText = new WeakMap<Text,string>();
const baseAttributes = new WeakMap<Element,Map<string,string>>();
const appliedAttributes = new WeakMap<Element,Map<string,string>>();
const translatedAttributes=["placeholder","title","aria-label","alt"];

export function translateSchoolText(raw:string):string{
 const str=raw.trim();
 if(!str)return raw;
 let hi=schoolHindi[str];
 if(!hi){
  const classMatch=/^Class\s+(\d{1,2})$/i.exec(str);
  if(classMatch)hi="कक्षा "+classMatch[1];
  else if(/^Class\s+(\d{1,2})\s*(?:to|-)\s*(\d{1,2})$/i.test(str)){
   hi=str.replace(/Class\s+/i,"कक्षा ").replace(/\s*(?:to|-)\s*/i," से ");
  }
  else if(str==="All")hi="सभी";
  else if(str==="All categories")hi="सभी श्रेणियाँ";
  else if(str==="Choose a category")hi="श्रेणी चुनें";
  else if(str==="General Enquiry")hi="सामान्य पूछताछ";
  else if(str==="Admission")hi="प्रवेश";
  else if(str==="Campus Visit")hi="विद्यालय भ्रमण";
  else if(str==="General")hi="सामान्य";
  else if(str==="Academics")hi="शिक्षा";
  else if(str==="Classroom")hi="कक्षा";
  else if(str==="Science")hi="विज्ञान";
  else if(str==="Library")hi="पुस्तकालय";
  else if(str==="Sports")hi="खेल";
  else if(str==="Creativity")hi="रचनात्मकता";
  else if(str==="Celebrations")hi="उत्सव";
  else if(str==="Technology")hi="तकनीक";
  else if(str==="Student Life")hi="विद्यार्थी जीवन";
  else if(str==="Gallery & Events")hi="गैलरी और कार्यक्रम";
  else if(str==="Facilities")hi="सुविधाएँ";
  else if(str==="Contact & Transport")hi="संपर्क और परिवहन";
  else if(str==="Dashboard & ERP")hi="डैशबोर्ड और ईआरपी";
  else if(str==="English")hi="अंग्रेज़ी";
  else if(str==="Hindi")hi="हिंदी";
  else if(str==="Search")hi="खोजें";
  else if(str==="Contact")hi="संपर्क";
  else if(str==="Dark")hi="डार्क मोड";
  else if(str==="Light")hi="लाइट मोड";
  else if(str==="Next")hi="अगला";
  else if(str==="Previous")hi="पिछला";
  else if(str==="Back")hi="वापस";
  else if(str==="Required")hi="आवश्यक";
  else if(str==="Optional")hi="वैकल्पिक";
  else if(str==="Yes")hi="हाँ";
  else if(str==="No")hi="नहीं";
  else if(str==="Submit enquiry")hi="पूछताछ भेजें";
  else if(str==="Submitting enquiry...")hi="पूछताछ भेजी जा रही है...";
  else if(str==="Expand all")hi="सभी उत्तर खोलें";
  else if(str==="Collapse all")hi="सभी उत्तर बंद करें";
  else if(str==="SEARCH RESULTS")hi="खोज परिणाम";
  else if(str==="SELECTED TOPIC")hi="चुना गया विषय";
  else if(str==="Help")hi="सहायता";
  else if(str==="Select a date")hi="तारीख चुनें";
  else if(str==="Nursery")hi="नर्सरी";
  else if(str==="LKG")hi="एलकेजी";
  else if(str==="UKG")hi="यूकेजी";
  else if(/^Selected:\s/.test(str))hi="चुनी गई तारीख: "+str.slice(10);
  else if(/^TOPIC\s+(\d+)/.test(str))hi=str.replace(/^TOPIC/i,"विषय");
 }
 if(!hi)return raw;
 // Preserve whitespace to avoid concatenating adjacent inline elements.
 const start=raw.match(/^\s*/)?.[0]||"";
 const end=raw.match(/\s*$/)?.[0]||"";
 return start+hi+end;
}

/** Works with existing JSX and dynamically rendered tabs without changing React state or form values. */
export function useSchoolTranslator(isHindi:boolean){
 useEffect(()=>{
  const root=document.getElementById("unique-school-root");
  if(!root)return;
  document.documentElement.lang=isHindi?"hi":"en";
  document.dispatchEvent(new Event("unique-school-language"));
  const shouldIgnore=(textNode:Text)=>{
   const parent=textNode.parentElement;
   return !parent||!!parent.closest("script,style,noscript,textarea,[contenteditable='true'],[data-no-translate]");
  };
  const translateNode=(node:Text)=>{
   if(shouldIgnore(node))return;
   const current=node.nodeValue??"";
   const previous=baseText.get(node);
   const applied=appliedText.get(node);
   if(previous===undefined||(current!==applied&&current!==previous)){
     baseText.set(node,current);
   }
   const base=baseText.get(node)??current;
   const next=isHindi?translateSchoolText(base):base;
   if(current!==next)node.nodeValue=next;
   appliedText.set(node,next);
  };
  const translateElement=(element:Element)=>{
   if(element.closest("[data-no-translate]"))return;
   let originals=baseAttributes.get(element);
   let applied=appliedAttributes.get(element);
   if(!originals){originals=new Map();baseAttributes.set(element,originals)}
   if(!applied){applied=new Map();appliedAttributes.set(element,applied)}
   for(const attr of translatedAttributes){
    const value=element.getAttribute(attr);
    if(value===null)continue;
    const prior=originals.get(attr);
    if(prior===undefined||(value!==applied.get(attr)&&value!==prior))originals.set(attr,value);
    const en=originals.get(attr)??value;
    const translated=isHindi?translateSchoolText(en):en;
    if(value!==translated)element.setAttribute(attr,translated);
    applied.set(attr,translated);
   }
  };
  const walk=(node:Node)=>{
   if(node.nodeType===Node.TEXT_NODE){translateNode(node as Text);return}
   if(node.nodeType!==Node.ELEMENT_NODE&&node.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return;
   const element=node as Element;
   if(node.nodeType===Node.ELEMENT_NODE){
    if(element.matches("script,style,noscript,[data-no-translate]"))return;
    translateElement(element);
   }
   const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);
   while(walker.nextNode()){
    const current=walker.currentNode;
    if(current.nodeType===Node.TEXT_NODE)translateNode(current as Text);
    else {
     const el=current as Element;
     if(!el.closest("[data-no-translate]"))translateElement(el);
    }
   }
  };
  walk(root);
  let scheduled=false;
  const observer=new MutationObserver(records=>{
   if(scheduled)return;
   scheduled=true;
   // Rendered data, tabs and form errors can change after user interaction.
   queueMicrotask(()=>{
    scheduled=false;
    for(const item of records){
     if(item.type==="characterData"){walk(item.target);continue}
     if(item.type==="attributes"){walk(item.target);continue}
     for(const child of item.addedNodes)walk(child);
    }
   });
  });
  observer.observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:translatedAttributes});
  return()=>observer.disconnect();
 },[isHindi]);
}

/* FAQ content is translated in full, not only the accordion labels. */
Object.assign(schoolHindi,{
"General":"सामान्य जानकारी","Discover Unique School":"यूनिक स्कूल को जानें","Classes, curriculum & learning":"कक्षाएँ, पाठ्यक्रम और पढ़ाई",
"Admission journey & enquiries":"प्रवेश प्रक्रिया और पूछताछ","Activities & everyday experience":"गतिविधियाँ और दैनिक जीवन",
"Games, fitness & wellbeing":"खेल, फिटनेस और स्वास्थ्य","Campus spaces & student support":"परिसर की सुविधाएँ और विद्यार्थी सहायता",
"Photographs & celebrations":"तस्वीरें और समारोह","School portal help":"स्कूल पोर्टल सहायता",
"Reach the right team":"सही टीम से संपर्क करें",
"Where is Unique Higher Secondary Public School located?":"यूनिक हायर सेकेंडरी पब्लिक स्कूल कहाँ स्थित है?",
"The school is located near Kirad Mangal Bhawan, Sadar, Betul, Madhya Pradesh.":"यह विद्यालय किराड़ मंगल भवन के पास, सदर, बैतूल, मध्य प्रदेश में स्थित है।",
"How can we contact the school office?":"विद्यालय कार्यालय से कैसे संपर्क करें?",
"Call +91 94520 03222 or use the official enquiry options on the Contact page.":"+91 94520 03222 पर कॉल करें या संपर्क पृष्ठ पर उपलब्ध पूछताछ विकल्प का उपयोग करें।",
"Can parents visit the school?":"क्या अभिभावक विद्यालय आ सकते हैं?",
"Yes, you may request a campus visit. Please confirm the appointment with the school office before travelling.":"हाँ, आप विद्यालय भ्रमण का अनुरोध कर सकते हैं। आने से पहले कार्यालय से मिलने का समय निश्चित कर लें।",
"Where can we find verified announcements?":"सत्यापित घोषणाएँ कहाँ मिलेंगी?",
"Check the News, Events and Notices pages, and contact the school for the latest approved information.":"समाचार, कार्यक्रम और सूचना पृष्ठ देखें। ताज़ा स्वीकृत जानकारी के लिए विद्यालय से संपर्क करें।",
"Which classes are available?":"विद्यालय में कौन-कौन सी कक्षाएँ उपलब्ध हैं?",
"Please ask the school office to confirm the current classes, seat availability and admission eligibility.":"वर्तमान कक्षाओं, उपलब्ध सीटों और प्रवेश पात्रता की पुष्टि विद्यालय कार्यालय से करें।",
"Which education board and streams does the school offer?":"विद्यालय किस बोर्ड और किन संकायों की पढ़ाई कराता है?",
"Official affiliation, streams, subjects and medium of instruction should be confirmed with the administration before making an admission decision.":"प्रवेश का निर्णय लेने से पहले विद्यालय प्रशासन से बोर्ड की संबद्धता, संकाय, विषयों और शिक्षण माध्यम की आधिकारिक पुष्टि करें।",
"How are examinations and learning progress communicated?":"परीक्षाओं और शैक्षणिक प्रगति की जानकारी कैसे दी जाती है?",
"Ask the school about its current assessment methods, reports and parent-teacher communication arrangements.":"वर्तमान मूल्यांकन पद्धति, रिपोर्ट और अभिभावक-शिक्षक संवाद के बारे में विद्यालय से पूछें।",
"Where can I get the academic calendar?":"शैक्षणिक कैलेंडर कहाँ मिलेगा?",
"Request the school's current approved calendar through the Contact or Downloads page.":"संपर्क या डाउनलोड पृष्ठ के माध्यम से विद्यालय का वर्तमान स्वीकृत कैलेंडर माँगें।",
"Is computer learning part of the programme?":"क्या कंप्यूटर शिक्षा भी उपलब्ध है?",
"Please confirm technology resources, timetable and available practical activities directly with the school.":"तकनीकी संसाधन, समय-सारणी और व्यावहारिक गतिविधियों की उपलब्धता विद्यालय से सीधे पूछें।",
"Are admissions open right now?":"क्या अभी प्रवेश खुले हैं?",
"Admission dates, available classes and seats can change. Confirm the latest status directly with the school office.":"प्रवेश की तारीखें, कक्षाएँ और उपलब्ध सीटें बदल सकती हैं। ताज़ा स्थिति की पुष्टि विद्यालय कार्यालय से करें।",
"How do I send an admission enquiry?":"प्रवेश संबंधी पूछताछ कैसे भेजें?",
"Open the Admissions page, complete its guided enquiry form and send the prefilled message through WhatsApp.":"प्रवेश पृष्ठ खोलें, पूछताछ फ़ॉर्म भरें और तैयार संदेश व्हाट्सऐप के माध्यम से भेजें।",
"What documents might be needed?":"किन दस्तावेज़ों की आवश्यकता हो सकती है?",
"Depending on class and school policy, the school may request age proof, student photographs, previous academic reports and a transfer certificate where applicable.":"कक्षा और विद्यालय की नीति के अनुसार आयु प्रमाण, विद्यार्थी की तस्वीरें, पिछली कक्षा की अंकसूची और आवश्यकता पड़ने पर स्थानांतरण प्रमाणपत्र माँगा जा सकता है।",
"Where can I find the current fees?":"वर्तमान फीस की जानकारी कहाँ मिलेगी?",
"Request the latest officially approved fee details from the school. Fees are not collected through the website enquiry form.":"विद्यालय से नवीनतम स्वीकृत फीस की जानकारी प्राप्त करें। वेबसाइट के पूछताछ फ़ॉर्म से फीस नहीं ली जाती।",
"Can I request a campus visit before applying?":"क्या आवेदन से पहले विद्यालय भ्रमण कर सकते हैं?",
"Yes. Use the campus visit enquiry button and wait for the school to confirm a suitable appointment.":"हाँ। विद्यालय भ्रमण अनुरोध बटन का उपयोग करें और विद्यालय द्वारा समय की पुष्टि होने की प्रतीक्षा करें।",
"What activities can students take part in?":"विद्यार्थी किन गतिविधियों में भाग ले सकते हैं?",
"Explore the Student Life page for illustrative themes. Ask the school which clubs, creative activities and celebrations are currently offered.":"विद्यार्थी जीवन पृष्ठ पर गतिविधियों के उदाहरण देखें। वर्तमान क्लब, रचनात्मक गतिविधियों और समारोहों के बारे में विद्यालय से पूछें।",
"Does the school organise cultural events?":"क्या विद्यालय सांस्कृतिक कार्यक्रम आयोजित करता है?",
"Please confirm current events, participation details and the annual schedule with school staff.":"वर्तमान कार्यक्रमों, भागीदारी की जानकारी और वार्षिक समय-सारणी की पुष्टि विद्यालय कर्मचारियों से करें।",
"How are student achievements showcased?":"विद्यार्थियों की उपलब्धियाँ कैसे प्रदर्शित की जाती हैं?",
"Verified achievements may be published after school approval and appropriate student or guardian consent.":"विद्यालय की स्वीकृति और विद्यार्थी या अभिभावक की उचित सहमति मिलने के बाद सत्यापित उपलब्धियाँ प्रकाशित की जा सकती हैं।",
"Can parents contribute to school activities?":"क्या अभिभावक विद्यालय की गतिविधियों में सहयोग कर सकते हैं?",
"Contact the school to ask about parent meetings, events and opportunities for involvement.":"अभिभावक बैठकों, कार्यक्रमों और भागीदारी के अवसरों की जानकारी के लिए विद्यालय से संपर्क करें।",
"Which sports are available?":"कौन-कौन से खेल उपलब्ध हैं?",
"The Sports page showcases illustrative activities. Confirm actual sports, equipment and facilities with the school office.":"खेल पृष्ठ पर गतिविधियों के उदाहरण दिखाए गए हैं। वास्तविक खेलों, उपकरणों और सुविधाओं की पुष्टि विद्यालय कार्यालय से करें।",
"Are coaching or training sessions available?":"क्या खेल प्रशिक्षण उपलब्ध है?",
"Ask about available coaching, the supervision arrangements and any training schedules.":"उपलब्ध प्रशिक्षण, निगरानी की व्यवस्था और समय-सारणी के बारे में पूछें।",
"Does the school participate in inter-school competitions?":"क्या विद्यालय अंतर-विद्यालय प्रतियोगिताओं में भाग लेता है?",
"Participation and results will be shown once verified; contact the school for the latest details.":"सत्यापन के बाद भागीदारी और परिणाम दिखाए जाएँगे। ताज़ा जानकारी के लिए विद्यालय से संपर्क करें।",
"Can parents visit the sports areas?":"क्या अभिभावक खेल के स्थान देख सकते हैं?",
"Request a campus visit with the school office and ask which facilities can be viewed.":"विद्यालय कार्यालय से भ्रमण का अनुरोध करें और पूछें कि कौन-सी सुविधाएँ देखी जा सकती हैं।",
"What safety measures apply during sports?":"खेल के दौरान सुरक्षा की क्या व्यवस्था है?",
"The school can provide its official supervision, hydration, first-aid and activity policies on request.":"अनुरोध पर विद्यालय निगरानी, पेयजल, प्राथमिक उपचार और गतिविधियों से जुड़ी अपनी आधिकारिक नीतियों की जानकारी दे सकता है।",
"Are the website photos from Unique School?":"क्या वेबसाइट की तस्वीरें यूनिक स्कूल की हैं?",
"Photos on the Facilities page are illustrative reference images, not verified photographs of the Unique School campus.":"सुविधाएँ पृष्ठ की तस्वीरें उदाहरण के लिए हैं; ये यूनिक स्कूल परिसर की सत्यापित तस्वीरें नहीं हैं।",
"Are computer and science laboratories available?":"क्या कंप्यूटर और विज्ञान प्रयोगशालाएँ उपलब्ध हैं?",
"Ask the administration to confirm the labs, equipment and practical learning arrangements currently available.":"उपलब्ध प्रयोगशालाओं, उपकरणों और व्यावहारिक शिक्षा की व्यवस्था की पुष्टि प्रशासन से करें।",
"Does the campus have a library?":"क्या परिसर में पुस्तकालय है?",
"Library and reading-space access must be confirmed with the school office.":"पुस्तकालय और पढ़ने की जगह की उपलब्धता विद्यालय कार्यालय से सुनिश्चित करें।",
"Does the school provide buses?":"क्या विद्यालय बस सुविधा देता है?",
"Contact the school to confirm current transport options, routes, stops and fees.":"वर्तमान परिवहन विकल्पों, मार्गों, स्टॉप और शुल्क की पुष्टि विद्यालय से करें।",
"Can parents ask about water, hygiene, security and accessibility?":"क्या अभिभावक पानी, स्वच्छता, सुरक्षा और पहुँच संबंधी सुविधाओं की जानकारी ले सकते हैं?",
"Yes. School staff can provide details about these arrangements and available student support.":"हाँ। विद्यालय कर्मचारी इन व्यवस्थाओं और उपलब्ध विद्यार्थी सहायता की जानकारी दे सकते हैं।",
"Where can we see school photographs?":"विद्यालय की तस्वीरें कहाँ देख सकते हैं?",
"Visit the Gallery page. Any illustrative stock photos are identified as such until authentic, approved school photographs are supplied.":"गैलरी पृष्ठ देखें। विद्यालय की वास्तविक स्वीकृत तस्वीरें मिलने तक उदाहरणात्मक तस्वीरों को अलग से चिह्नित किया जाता है।",
"Where will upcoming events be announced?":"आगामी कार्यक्रमों की घोषणा कहाँ होगी?",
"Look at the Events and Notices pages for school-approved dates and information.":"विद्यालय से स्वीकृत तारीखों और जानकारी के लिए कार्यक्रम एवं सूचना पृष्ठ देखें।",
"How can student photos be added to the website?":"विद्यार्थियों की तस्वीरें वेबसाइट पर कैसे जोड़ी जा सकती हैं?",
"School administrators should approve the images and obtain appropriate permission before publishing student photographs.":"विद्यार्थियों की तस्वीरें प्रकाशित करने से पहले विद्यालय प्रशासन को उनकी स्वीकृति और उचित अनुमति लेनी चाहिए।",
"Who can access the school dashboard?":"विद्यालय के डैशबोर्ड का उपयोग कौन कर सकता है?",
"Access depends on the school portal and authorised user permissions. Contact the administration for credentials and access guidance.":"डैशबोर्ड की पहुँच पोर्टल और अधिकृत उपयोगकर्ता अनुमतियों पर निर्भर करती है। लॉगिन और पहुँच संबंधी सहायता के लिए प्रशासन से संपर्क करें।",
"How do I report an ERP login problem?":"ईआरपी लॉगिन की समस्या कैसे बताएँ?",
"Contact the school office and describe the login issue. Never send your password through an enquiry or WhatsApp message.":"विद्यालय कार्यालय को लॉगिन की समस्या बताएँ। अपना पासवर्ड कभी भी पूछताछ फ़ॉर्म या व्हाट्सऐप पर न भेजें।",
"Is the ERP portal fully operational?":"क्या ईआरपी पोर्टल पूरी तरह सक्रिय है?",
"Please verify the status of any ERP features with the school before relying on them for attendance, fees or student records.":"उपस्थिति, फीस या विद्यार्थी रिकॉर्ड के लिए ईआरपी सुविधाओं पर निर्भर होने से पहले उनकी स्थिति विद्यालय से सत्यापित करें।",
"What is the school's contact number?":"विद्यालय का संपर्क नंबर क्या है?",
"You can call +91 94520 03222.":"आप +91 94520 03222 पर कॉल कर सकते हैं।",
"How do I reach the school?":"विद्यालय कैसे पहुँचें?",
"The school is near Kirad Mangal Bhawan, Sadar, Betul, Madhya Pradesh. Use the directions link on the Contact page.":"विद्यालय किराड़ मंगल भवन के पास, सदर, बैतूल, मध्य प्रदेश में है। संपर्क पृष्ठ के दिशा-निर्देश लिंक का उपयोग करें।",
"How can I enquire about transport?":"परिवहन के बारे में कैसे पूछताछ करें?",
"Ask the school office to verify routes, stops, seats, timing and applicable transport charges.":"मार्गों, स्टॉप, सीटों, समय और लागू परिवहन शुल्क की पुष्टि विद्यालय कार्यालय से करें।",
"Can I enquire directly on WhatsApp?":"क्या सीधे व्हाट्सऐप पर पूछ सकते हैं?",
"Yes. The website links to the school's listed WhatsApp number and prepares a message for you to review and send.":"हाँ। वेबसाइट विद्यालय के दिए गए व्हाट्सऐप नंबर पर संदेश तैयार करती है, जिसे आप जाँचकर भेज सकते हैं।",
});

/* Dynamic dashboard, contact and form content. */
Object.assign(schoolHindi,{
"Classes, curriculum and learning":"कक्षाओं, पाठ्यक्रम और पढ़ाई की जानकारी",
"Admission process and enquiries":"प्रवेश प्रक्रिया और पूछताछ",
"School Gallery":"विद्यालय की गैलरी","Pictures and school life":"तस्वीरें और विद्यालय जीवन",
"Fitness, games and activities":"स्वास्थ्य, खेल और गतिविधियाँ",
"Explore campus spaces":"विद्यालय की सुविधाएँ देखें",
"FAQ & Help":"प्रश्न और सहायता","Answers to common questions":"आम प्रश्नों के उत्तर",
"Notices":"नोटिस","Official school announcements":"विद्यालय की आधिकारिक घोषणाएँ",
"School events and celebrations":"विद्यालय के कार्यक्रम और समारोह",
"Welcome to the Unique School information hub":"यूनिक स्कूल सूचना केंद्र में आपका स्वागत है",
"Explore school programmes, facilities, activities and the latest approved information through the links below.":"नीचे दिए गए लिंक से विद्यालय के कार्यक्रमों, सुविधाओं, गतिविधियों और नवीनतम स्वीकृत जानकारी को जानें।",
"Admission enquiries and campus visits":"प्रवेश पूछताछ और विद्यालय भ्रमण",
"Contact the school to confirm current admission dates, eligibility, availability and appointment timings.":"प्रवेश की वर्तमान तारीखों, पात्रता, उपलब्धता और मिलने के समय की पुष्टि विद्यालय से करें।",
"Academic calendar and downloadable documents":"शैक्षणिक कैलेंडर और डाउनलोड किए जा सकने वाले दस्तावेज़",
"Request the current approved academic calendar, class information and official documents from the school.":"विद्यालय से वर्तमान स्वीकृत शैक्षणिक कैलेंडर, कक्षाओं की जानकारी और आधिकारिक दस्तावेज़ माँगें।",
"School events and activities":"विद्यालय के कार्यक्रम और गतिविधियाँ",
"Confirmed event dates and notices will be published on the school's dedicated information pages.":"पुष्टि की गई कार्यक्रम तारीखें और सूचनाएँ विद्यालय के संबंधित पृष्ठों पर प्रकाशित की जाएँगी।",
"Students":"विद्यार्थी","Parents":"अभिभावक","Teachers":"शिक्षक","Admin":"प्रशासक",
"Your learning journey":"आपकी पढ़ाई की यात्रा","Personal profile":"व्यक्तिगत प्रोफ़ाइल",
"Attendance and timetable":"उपस्थिति और समय-सारणी",
"Homework and assignments":"गृहकार्य और असाइनमेंट",
"Exam results and certificates":"परीक्षा परिणाम और प्रमाणपत्र",
"Stay connected with your child":"अपने बच्चे की पढ़ाई से जुड़े रहें",
"Child's attendance":"बच्चे की उपस्थिति","Academic progress":"शैक्षणिक प्रगति",
"Fees and school notices":"फीस और विद्यालय सूचनाएँ","Parent-teacher meetings":"अभिभावक-शिक्षक बैठकें",
"Organise your classroom":"अपनी कक्षा व्यवस्थित करें",
"Class and attendance records":"कक्षा और उपस्थिति रिकॉर्ड",
"Assign homework":"गृहकार्य दें","Enter marks and feedback":"अंक और प्रतिक्रिया दर्ज करें",
"Timetable and communication":"समय-सारणी और संवाद",
"Manage school operations":"विद्यालय संचालन प्रबंधित करें",
"Admissions and enrolment":"प्रवेश और नामांकन",
"Attendance and fees":"उपस्थिति और फीस",
"Approved content publishing":"स्वीकृत सामग्री प्रकाशित करना",
"Permissions and audit logs":"अनुमतियाँ और गतिविधि रिकॉर्ड",
"School Information Centre":"विद्यालय सूचना केंद्र",
"Live academic records, announcements and event dates require school-approved data. This public hub shows verified general details, useful links and clearly labelled guidance—not invented statistics.":"वास्तविक शैक्षणिक रिकॉर्ड, घोषणाओं और कार्यक्रमों के लिए विद्यालय से स्वीकृत डेटा आवश्यक है। यह सार्वजनिक पृष्ठ केवल सत्यापित सामान्य जानकारी, उपयोगी लिंक और स्पष्ट मार्गदर्शन देता है, मनगढ़ंत आँकड़े नहीं।",
"General guidance only — these are not dated official circulars.":"ये सामान्य मार्गदर्शन है, दिनांक सहित आधिकारिक परिपत्र नहीं।",
"School Learning":"विद्यालय शिक्षा","Information & notices.":"सूचनाएँ और नोटिस।",
"Forms & information":"फ़ॉर्म और जानकारी","Request approved school forms":"स्वीकृत विद्यालय फ़ॉर्म माँगें",
"Academic calendar":"शैक्षणिक कैलेंडर","Current school calendar & timetable":"वर्तमान शैक्षणिक कैलेंडर और समय-सारणी",
"Notices and circulars":"सूचनाएँ और परिपत्र","School-approved communication":"विद्यालय से स्वीकृत सूचनाएँ",
"Choose a date":"तारीख चुनें",
"Student records are never displayed publicly.":"विद्यार्थी रिकॉर्ड सार्वजनिक रूप से नहीं दिखाए जाते।",
"View ERP demonstration":"ईआरपी का डेमो देखें",
"Light":"लाइट मोड","Dark":"डार्क मोड",
"Classrooms":"कक्षाएँ","Learning Spaces":"शैक्षणिक स्थान",
"Computer Learning":"कंप्यूटर शिक्षा",
"Science & Discovery":"विज्ञान और खोज",
"Reading & Research":"पठन और अध्ययन",
"Sports & Movement":"खेल और गतिविधियाँ",
"Art & Activities":"कला और गतिविधियाँ",
"Transport & Access":"परिवहन और पहुँच",
"Cleanliness & Water":"स्वच्छता और पीने का पानी",
"Student Safety":"विद्यार्थियों की सुरक्षा",
"First Aid & Care":"प्राथमिक उपचार और देखभाल",
"Campus":"परिसर",
"Learning":"शिक्षा",
"Activities":"गतिविधियाँ",
"Library & Reading Zone":"पुस्तकालय और पढ़ने का स्थान",
"All":"सभी",
"Parent / Guardian":"अभिभावक",
"Admission":"प्रवेश",
"Campus Visit":"विद्यालय भ्रमण",
"Classes, eligibility & admission guidance":"कक्षाएँ, पात्रता और प्रवेश मार्गदर्शन",
"Plan a visit to the school":"विद्यालय भ्रमण की योजना बनाएँ",
"Programmes, subjects & curriculum":"कार्यक्रम, विषय और पाठ्यक्रम",
"Routes, stops & availability":"मार्ग, स्टॉप और उपलब्धता",
"Other questions & information":"अन्य प्रश्न और जानकारी",
"Your full name":"आपका पूरा नाम",
"10-digit mobile number":"10 अंकों का मोबाइल नंबर",
"Student's full name":"विद्यार्थी का पूरा नाम",
"yourname@example.com":"yourname@example.com",
"Tell us what you'd like to know...":"हमें बताएँ कि आप क्या जानना चाहते हैं...",
"Please complete the required fields, enter a valid 10-digit Indian mobile number, check your email if provided, and accept the consent checkbox.":"कृपया आवश्यक जानकारी भरें, सही 10 अंकों का भारतीय मोबाइल नंबर दें, ईमेल दिया हो तो जाँचें और सहमति बॉक्स चुनें।",
"Your enquiry was received by the website. The school may contact you using the details provided.":"वेबसाइट पर आपकी पूछताछ प्राप्त हो गई है। विद्यालय दिए गए विवरणों से आपसे संपर्क कर सकता है।",
"We couldn't confirm that the enquiry was saved. You can send the same information directly to the school on WhatsApp, or call the school office.":"हम यह पुष्टि नहीं कर पाए कि आपकी पूछताछ सुरक्षित हुई है। आप यही जानकारी सीधे विद्यालय को व्हाट्सऐप पर भेज सकते हैं या कार्यालय में कॉल कर सकते हैं।",
"We never ask for fees or passwords through this contact form. Form submission requires an operational school database.":"इस संपर्क फ़ॉर्म में फीस या पासवर्ड नहीं माँगा जाता। फ़ॉर्म जमा करने के लिए विद्यालय का सक्रिय डेटाबेस आवश्यक है।",
"Student Name":"विद्यार्थी का नाम",
"Mobile Number":"मोबाइल नंबर",
"Your Message (optional)":"आपका संदेश (वैकल्पिक)",
"Start a conversation with a prefilled enquiry.":"पहले से भरे पूछताछ संदेश के साथ बातचीत शुरू करें।",
"Explore the campus":"परिसर को जानें",
"Select a class":"कक्षा चुनें",
"General Enquiry":"सामान्य पूछताछ",
"Submit enquiry":"पूछताछ जमा करें",
"Submitting enquiry...":"पूछताछ जमा की जा रही है...",
"Search school information...":"विद्यालय की जानकारी खोजें...",
"Search fees, classes, transport, sports...":"फीस, कक्षाएँ, परिवहन, खेल खोजें...",
"Search":"खोजें","Clear search":"खोज हटाएँ",
"Expand all":"सभी उत्तर खोलें","Collapse all":"सभी उत्तर बंद करें",
"Today":"आज","Previous month":"पिछला महीना","Next month":"अगला महीना",
"Hide":"छिपाएँ","Show more":"और दिखाएँ","Show less":"कम दिखाएँ",
"Show all information":"सारी जानकारी दिखाएँ",
"Admission enquiry":"प्रवेश संबंधी पूछताछ",
"FEATURED SPACE":"विशेष स्थान",
"VIEW IMAGE":"तस्वीर देखें",
"Open in Google Maps":"गूगल मैप्स में खोलें",
});
