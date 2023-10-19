// VAR for class= .container Nmae: container
let container = document.querySelector(".container");

//ARRAY containing JavaScript Object. Data used to create html elements
let cards = [{ name: "The Magician", image: "http://www.learntarot.com/bigjpgs/maj01.jpg", description1: "The Magician is the archetype of the active, masculine principle - the ultimate achiever. He symbolizes the power to tap universal forces and use them for creative purposes. Note his stance in the picture. He acts as a lightening rod - one arm extended up into the Divine for inspiration, the other pointing toward Earth to ground this potent energy. His abilities appear magical at times because his will helps him achieve what seem to be miracles.<br><br>What makes the Magician so powerful? First, he is not afraid to act. He believes in himself and is willing to put that belief on the line. He also knows what he intends to do and why. He doesn't hesitate because he understands his situation exactly. The Magician can focus with single-minded determination. As long as he remembers the divine source of his power, the Magician remains the perfect conduit for miracles. <br><br>In a reading, the Magician implies that the primal forces of creativity are yours if you can claim your power and act with awareness and concentration. This card is a signal to act and act now, provided you understand exactly what you want and are committed to getting it.", description2: "There are no separate explanations for reversed cards. The meaning of a reversed card depends on what the card would mean if upright. A reversed card shows that a card's energy is present, but at a lower level. For some reason, the energy cannot express freely, normally or completely. It may be: still in its early stages, losing force and power, blocked or restricted, incomplete, inappropriate, being denied, only present in appearance", description3: "",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)",
webpage: "http://www.learntarot.com/maj01.htm" },

{ name: "The High Priestess", image: "http://www.learntarot.com/bigjpgs/maj02.jpg", description1: "The High Priestess is the guardian of the unconscious. She sits in front of the thin veil of unawareness which is all that separates us from our inner landscape. She contains within herself the secrets of these realms and offers us the silent invitation.", description2: "The High Priestess is the feminine principle that balances the masculine force of the Magician. The feminine archetype in the tarot is split between the High Priestess and the Empress. The High Priestess is the mysterious unknown that women often represent, especially in cultures that focus on the tangible and known. The Empress represents woman's role as the crucible of life.", description3: "In readings, the High Priestess poses a challenge to you to go deeper - to look beyond the obvious, surface situation to what is hidden and obscure. She also asks you to recall the vastness of your potential and to remember the unlimited possibilities you hold within yourself. The High Priestess can represent a time of waiting and allowing. It is not always necessary to act to achieve your goals. Sometimes they can be realized through a stillness that gives desire a chance to flower within the fullness of time.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)",
webpage: "http://www.learntarot.com/maj02.htm" }, 

{ name: "The Empress", image: "http://www.learntarot.com/bigjpgs/maj03.jpg", description1: "The Empress and the High Priestess are the two halves of the female archetype in the major arcana. The Empress represents the fertile, life-giving Mother who reigns over the bounty of nature and the rhythms of the Earth. From her comes all the pleasures and joys of the senses and the abundance of new life in all its forms. The Empress encourages you to strengthen your connections with the natural world which is the ground of our being. Too often false sophistications and pleasures take us far from our roots. Let the Empress remind you to keep your feet firmly planted in the Earth.", description2: "In readings the Empress can refer to any aspect of Motherhood. She can be an individual mother, but as a major arcana card, she also goes beyond the specifics of mothering to its essence - the creation of life and its sustenance through loving care and attention.", description3: "The Empress can also represent lavish abundance of all kinds. She offers a cornucopia of delights, especially those of the senses - food, pleasure and beauty. She can suggest material reward, but only with the understanding that riches go with a generous and open spirit. The Empress asks you to embrace the principle of life and enjoy its bountiful goodness.", 
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj03.htm" },

{ name: "The Emperor", image: "http://www.learntarot.com/bigjpgs/maj04.jpg", description1: "The figure of the Emperor says much about the essential qualities of this card. We see a stern, commanding figure seated on a stone-slab throne. His back is straight, and his eyes meet ours directly. He is confident of his complete authority to rule.", description2: "The Emperor represents structure, order and regulation - forces to balance the free-flowing, lavish abundance of the Empress. He advocates a four-square world where trains are on time, games are played by rules, and commanding officers are respected. In chaotic situations, the Emperor can indicate the need for organization. Loose ends should be tied up, and wayward elements, harnessed. In situations that are already over-controlled, he suggests the confining effect of those constraints.", description3: "The Emperor can represent an encounter with authority or the assumption of power and control. As the regulator, he is often associated with legal matters, disciplinary actions, and officialdom in all its forms. He can also stand for an individual father or archetypal Father in his role as guide, protector and provider.", 
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj04.htm" },

{ name: "The Heirophant", image: "http://www.learntarot.com/bigjpgs/maj05.jpg", description1: "Except in rare cases, every human grows and develops within a culture. We learn by living with others. The Hierophant represents such official learning, especially in groups. A Hierophant is someone who interprets secret knowledge. On Card 5 we see a religious figure in a formal church setting. He is wearing the elaborate vestments of his office. His task is to bring the two initiates into the church so they can take up their appointed roles.", description2: "Besides churches, there are schools, clubs, teams, companies, and societies. The Hierophant represents all of these because his realm is structured groups with rules and assigned roles. Such environments emphasize belief systems - facts, rules, procedures, and ritual. Members are rewarded for following conventions. They develop a group identity. The Hierophant is one of three cards that focuses on the group. (The 3 of Cups and the 3 of Pentacles are the others.", description3: "In readings, the Hierophant often represents learning with experts or knowledgeable teachers. This card also stands for institutions and their values. The Hierophant is a symbol of the need to conform to rules or fixed situations. His appearance in a reading can show that you are struggling with a force that is not innovative, free-spirited or individual. Groups can be enriching or stifling, depending on circumstances. Sometimes we need to follow a program or embrace tradition, other times, we need to trust ourselves.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj05.htm" },

{ name: "The Lovers", image: "http://www.learntarot.com/bigjpgs/maj06.jpg", description1: "The Lovers is one card that is easy to remember. Love and sex are riveting subjects, and, as you'd expect, this card represents both. The urge for union is powerful, and, in its highest form, takes us beyond ourselves. That is why an angel is blessing the bond between the man and woman on this card.", description2: "In readings, Card 6 often refers to a relationship that is based on deep love - the strongest force of all. The relationship may not be sexual, although it often is or could be. More generally, the Lovers can represent the attractive force that draws any two entities together in a relationship - whether people, ideas, events, movements or groups.", description3: "Card 6 can also stand for tough value choices and the questioning that goes with them. In some decks, the Lovers shows a man torn between two women - a virgin and a temptress. This rather old-fashioned triangle symbolizes the larger dilemmas we face when we are tempted between right and wrong.", description4: "The Lovers can indicate a moral or ethical crossroads - a decision point where you must choose between the high road or the low road. This card can also represent your personal beliefs because to make such a decision you must know where you stand. Following your own path can mean going against those who are urging you in a direction that is wrong for you.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj06.htm" },

{ name: "The Chariot", image: "http://www.learntarot.com/bigjpgs/maj07.jpg", description1: "Picture Julius Caesar riding his chariot triumphantly into Rome. He has defeated his enemies and conquered vast, new lands. This is the spirit of the Chariot. Card 7 represents the victories that are possible through willpower and self-mastery. A military image is appropriate for the Chariot because this card stands for the strengths associated with combat - discipline, grit, determination and assertiveness.", description2: "The Chariot represents the positive aspects of the ego. A healthy ego is one that is strong and self-assured. It knows what it wants and how to get it. We can get annoyed at someone whose ego is too healthy, but we often turn to that person to lead us through difficult moments. We know he or she won't be wishy-washy.", description3: "I,n readings, the Chariot often appears when hard control is or could be in evidence. At its best, hard control is not brutal, but firm and direct. It is backed up by a strong will and great confidence. The Chariot can mean self-control or control of the environment. This card also represents victory. There are many types of wins; the Chariot's is of the win-lose type. Your success comes from beating the competition to become number one. Such moments are glorious in the right circumstances.", 
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj07.htm" },

{ name: "Strength", image: "http://www.learntarot.com/bigjpgs/maj08.jpg", description1: "Usually we think of strength in physical terms - big arms, powerful legs - but there is also inner strength. Inner strength comes from an exercise of the heart muscle. It is perseverance, courage, resolve and composure - qualities that help us endure when times are tough. In the past, a person with inner strength was commonly said to have character; he or she could be counted on in the darkest moments. Card 8 represents this energy of quiet determination. Strength is not a flashy card, but one that is solid and reliable.", description2: "Card 8 also represents patience and compassion. Getting angry is easy when events turn sour, but dealing calmly with frustration takes great strength. So does accepting others and forgiving mistakes. We need strength to mold situations softly. The Chariot controls through mastery and authority. Card 8 is more subtle, even loving. Notice how the lion (itself a symbol of strength) is being guided and tamed by the woman's gentle hands.", desscription3: "Card 8 will appear in a reading when its qualities are needed. It can be a reminder not to despair or give up. You have the inner strength to endure and triumph. If you are pushing too hard, you need to withdraw for the moment and be patient. If other people or circumstances are driving you crazy, remember the strength that comes with love and forbearance. These will see you through the hardest moments.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj08.htm" },

{ name: "The Hermit", image: "http://www.learntarot.com/bigjpgs/maj09.jpg", description1: "The traditional hermit is a crusty, bearded character who has withdrawn from the company of men to live a life of seclusion and hardship. Card 9 supports this understanding. The Hermit represents the desire to turn away from the getting and spending of society to focus on the inner world. He seeks answers within and knows that they will come only with quiet and solitude.", description2: "There comes a point in life when we begin to question the obvious. We sense that there is a deeper reality and begin to search for it. This is mainly a solitary quest because answers do not lie in the external world, but in ourselves. The hermit on Card 9 reminds us of Diogenes, the Greek ascetic who is said to have gone out: with a lantern in hand to search for an honest man. Diogenes is a symbol of the search for truth that the Hermit hopes to uncover by stripping away all diversions.", description3: "In readings, the Hermit often suggests a need for time alone - a period of reflection when distractions are limited. In times of action and high energy, he stands for the still center that must be created for balance. He can also indicate that withdrawal or retreat is advised for the moment. In addition, the Hermit can represent seeking of all kinds, especially for deeper understanding or the truth of a situation, we have been told, and so the Hermit stands for guidance as well. We can receive help from wise teachers, and, in turn, help others as we progress.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj09.htm" },

{ name: "The Wheel of Fortune", image: "http://www.learntarot.com/bigjpgs/maj10.jpg", description1: "In Greek mythology, there are three women known as the Fates. They are responsible for spinning the destiny of each person at his or her birth. It is not surprising that the Fates are spinners because the wheel of fortune is an apt image for the elusive turns of a man's fate. This is the theme of Card 10.", description2: "The Wheel of Fortune is one of the few cards in the major arcana that does not have a human figure as a focal point. This is because its center is above the realm of man - in the higher levels (clouds) where the destinies of all are woven together in the tapestry of life. The tarot recognizes that each person sets his own path in life, but is also subject to the larger cycles that include him. We experience chance events that appear to be accidents although they are part of the great plan.", description3: "In readings, the Wheel of Fortune can indicate a vision or realization that strikes with great force. If you've been struggling with a problem or tough situation, this card can signal that you will find the answer if you stand back and view everything from a larger perspective.", description4: "The Wheel of Fortune also represents unexpected encounters and twists of fate. You can't predict surprises; you can only be aware when one is circling around. Indeed, Card 10 often suggests wheel-like actions - changes in direction, repeating cycles and rapid movement. When the energy of the Wheel arrives, you will feel life speed up. You are caught in a cyclone that may deposit you anywhere.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj10.htm" },

{ name: "Justice", image: "http://www.learntarot.com/bigjpgs/maj11.jpg", description1: "On Card 11 we see the familiar figure of Justice. She has the scales of equality and impartial judgment in one hand, and the sword of decision in the other. In the tarot, Justice represents the understanding that life is ultimately fair and just. Even though the vagaries of day-to-day life tend to make us doubt this fact, Justice reminds us that there is divine balance. Notice the similarity between the Emperor and Justice. Both cards stand for universal order; the Emperor in its underlying structure, Justice, in the action of karma - cause and effect.", description2: "There is a serious feel to Card 11 - the tone of the courtroom. This card refers to legal matters of all kinds, but is not restricted to them. The courts are where judgments are made and decisions rendered. Our legal system is the official arena in which we explore the principles of Justice - fairness, impartiality and the quest for truth.", description3: "In readings, Justice often appears when you are concerned with doing what is right or making sure you receive your due. This card can also appear when you are feeling the impact of a past mistake or good deed. The cause you set in motion at one time is now returning to you as an effect.", description4: "Sometimes Justice is a signal to do what needs to be done. A time comes when responsibilities must be accepted, and accounts settled. The past will continue to haunt you if you do not recognize your mistakes and make amends for them. You will need to weigh matters carefully and perhaps make important decisions about your future course.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj11.htm" },

{ name: "The Hanged Man", image: "http://www.learntarot.com/bigjpgs/maj12.jpg", description1: "The Hanged Man is one of the most mysterious cards in the tarot deck. It is simple, but complex. It attracts, but also disturbs. It contradicts itself in countless ways. The Hanged Man is unsettling because it symbolizes the action of paradox in our lives. A paradox is something that appears contradictory, and yet is true. The Hanged Man presents to us certain truths, but they are hidden in their opposites.", description2: "The main lesson of the Hanged Man is that we control by letting go - we win by surrendering. The figure on Card 12 has made the ultimate surrender - to die on the cross of his own travails - yet he shines with the glory of divine understanding. He has sacrificed himself, but he emerges the victor. The Hanged Man also tells us that we can move-forward by standing still. By suspending time, we can have all the time in the world.", description3: "In readings, the Hanged Man reminds us that the best approach to a problem is not always the most obvious. When we most want to force our will on someone, that is when we should release. When we most want to have our own way, that is when we should sacrifice. When we most want to act, that is when we should wait. The irony is that by making these contradictory moves, we find what we are looking for.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj12.htm" },

{ name: "Death", image: "http://www.learntarot.com/bigjpgs/maj13.jpg", description1: "Death! A powerful energy indeed. Who can look at the dark, skeletal figure on Card 13 and not feel uneasy? Here we see the face of our deepest fear - our greatest unknown. We recoil from Death because we think of it as annihilation. In the tarot (and in life I would suggest) Death is not a permanent end, but a transition into a new state. Life is eternal in its essence, if not in its form. To grow, to move, to live - we must die to the old to give birth to the new.", description2: "It is a truism in tarot work that Card 13 rarely has anything to do with physical death. A responsible card reader never interprets Card 13 in this way because this view is too limiting. Death is not something that happens once to our bodies. It happens continually, at many levels and not just in the physical. Each moment we die to the present so the future can unfold.", description3: "In readings, Death often represents an important ending that will initiate great change. It signals the end of an era; a moment when a door is closing. At such times, there may be sadness and reluctance, but also relief and a sense of completion. Death also suggests getting down to basics. Dying has a way of making you concentrate on what's important. This card reminds you to cut out the unnecessary. Death can also mean you will experience an inexorable force. Death is inevitable, and sometimes there are events that are inescapable as well. When these moments occur, the best approach is to ride your fate and see where it takes you.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj13.htm" },

{ name: "Temperance", image: "http://www.learntarot.com/bigjpgs/maj14.jpg", description1: "There are certain people who exude a kind of quiet composure. They may not say much, but they go about their business with an air of calm deliberation. Their presence is comforting because they are so centered. For me, this is the energy of Temperance.", description2: "To be temperate is to show moderation and self-restraint. In a world full of enticing indulgences, it is often necessary to find the middle ground. Sensible, maybe, but also a bit boring? The energy of Temperance may seem unexciting on the surface, but it is the calm of a hurricane's eye. All around are swirling winds, but in the center is a still point that brings everything into balance.", description3: "In readings, Temperance can represent a need for moderation, especially when extreme cards are present (such as the Knights). This card can also indicate a need for balance. In conflict situations, Temperance suggests that compromise and cooperation are vital. Look for any opportunity to bring opposing parties together. In fact, to temper can mean to modify by adding a new component. By combining and recombining, we come up with the ideal mixture or solution. Temperance is the card of good health in all areas - physical, mental and emotional. When illness or dis-ease is a concern, Temperance holds out the promise of vitality and well-being.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj14.htm" },

{ name: "The Devil", image: "http://www.learntarot.com/bigjpgs/maj15.jpg", description1: "Lucifer. Mephistopheles. Satan. The Prince of Darkness. No matter what we call him, the Devil is our symbol for what is bad and undesirable. From our human perspective, we see the world as a struggle between light and dark. We want to vanquish the bad so the good can prevail. In fact, good and bad cannot be separated, just as you cannot separate a shadow from its source. Darkness is simply the absence of light, and it is caused by errors that hide the truth. Card 15 shows us these errors.", description2: "First is ignorance - not knowing the truth and not realizing that we do not know. Second is materialism - the belief that there is nothing but the physical. As spiritual beings, we long for the Divine, but we lose contact with this source of truth if we trust only our senses. There is also hopelessness, which robs us of our joy and movement toward the light.", description3: "Traditionally the Devil stands for evil, but it does not have this rather frightening meaning in a reading. This card lets you know that you are caught in an unhealthy, unproductive situation. You may be in the dark about something - ignorant of the truth and its implications. You may be obsessed by a person, idea, substance or pattern that you know is bad for you (or maybe you don't!). Sometimes this card reflects back the negativity that has made you doubt yourself and your future. We are prone to many errors in life. Card 15 lets us know when they are serious enough to require attention. When you see the Devil, examine your assumptions carefully. Make sure you are not working from a false picture of yourself and the situation. Hold fast to the highest vision of who you are.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj15.htm" },

{ name: "The Tower", image: "http://www.learntarot.com/bigjpgs/maj16.jpg", description1: "The Tower is an unsettling card. Fire, lightning, falling on jagged rocks - definitely looks like trouble! Card 16 will not be welcomed by those who dislike change. It represents a sudden, dramatic upheaval or reversal in fortune. Usually change is gradual, giving us time to adapt, but sometimes it is quick and explosive. This is the action of the Tower.", description2: "In films, the hero sometimes slaps someone who is groggy or babbling. Having tried everything else, he finally resorts to a sharp sting to snap him out of it. Sudden crises are life's way of telling you to wake up. Something's wrong, and you're not responding. Are you too full of pride? Expect a blow to your ego. Are you holding back your anger? Expect the dam to burst. Are you stuck in a rut? Expect a surprise.", description3: "How you respond to the Tower's change makes all the difference in how uncomfortable the experience will be. Recognize that the disruption occurred because it was needed. Perhaps embracing the change is too much to ask, but try to find the positive in it. In fact, you may feel tremendous release that you have finally been forced in a new direction. You may have a burst of insight about your situation and reach a new level of understanding about it.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj16.htm" },

{ name: "The Star", image: "http://www.learntarot.com/bigjpgs/maj17.jpg", description1: "People have always looked to the stars as a source of inspiration and hope. There is something about their twinkling light that draws us out of ourselves and up into a higher plane. When we turn our eyes heavenward, we no longer feel the distress of earth. The Star reminds me of the clear, high voice of a soprano. There is something otherworldly about it. All the harshness and density of everyday life has been refined away leaving only the purest essence. After being exposed to the Star, we feel uplifted and blessed.", description2: "In readings, the Star is most welcome when grief and despair have overwhelmed us. In our darkest moments, we need to know that there is hope,that there is light at the end of the tunnel. The Star is the opposite of the Devil who strips us of our faith in the future. Card 17 holds out the promise that we can eventually find peace of mind. The Star also reminds us to open our heart and release our fears and doubt. If you have been holding back in any way, now is the time to give generously.", description3: "It is important to remember that the Star is inspiring, but it is not a card of practical solutions or final answers. Truly without hope we can accomplish nothing, but hope is only a beginning. When you see Card 17, know that you are on the right track. Your goals and your aspirations are blessed, but to realize them, you must take positive action. Use the light of the Star to guide you in your efforts.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj17.htm" },

{ name: "The Moon", image: "http://www.learntarot.com/bigjpgs/maj18.jpg", description1: "If you look around the room right now, you will (probably!) see people and objects that are comforting in their familiarity. Everything is exactly as you expect it to be. You know that if you closed your eyes and opened them, the room would be the same. But...have you ever lost the familiar to find, in its place, a world so extraordinary you can't even grasp it? This is the experience of the Moon.", description2: "Most of the time we live in a tiny pocket of normality that we wrap around us like a security blanket. We turn our backs on the mysterious universe that waits outside. From time to time we may sneak a peak with our imagination, or venture out through fantasy or expanded awareness. We can be thrust out there unprepared through drugs, madness or intense experiences such as battle.", description3: "The Moon is the light of this realm - the world of shadow and night. Although this place is awesome, it does not have to be frightening. In the right circumstances, the Moon inspires and enchants. It holds out the promise that all you imagine can be yours. The Moon guides you to the unknown so you can allow the unusual into your life.", description4: "Sadly, we are usually afraid of the Moon. In readings, this card often stands for fears and anxieties - the ones that come in the darkest part of the night. Card 18 also stands for illusions. It is easy to lose our way in the moonlight. Be careful not to let deceptions and false ideas lead you astray. Sometimes the Moon is a signal that you are lost and wandering aimlessly. You must find your way back to the path and your clarity of purpose.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj18.htm" },

{ name: "The Sun", image: "http://www.learntarot.com/bigjpgs/maj19.jpg", description1: "Brilliant. Radiant. Sparkling. So many of our words reflect (!) the power and glory of light. When we turn on the light in a room, we illuminate it so that all the dark corners are visible. When we turn on the light in our minds, we are enlightened. We see clearly and understand the truth. Both within and without, the energy of light expands our limits and makes us shine.", description2: "Throughout history, people have honored the Sun as the source of light and warmth. In the myths of many cultures, the Sun is a prominent god - full of vigor and courage. He is the vital energy center that makes life on earth possible. In the tarot the Sun also symbolizes vitality and splendor. The Sun is definitely not a meek and retiring card.", description3: "In readings, you will understand Card 19 if you imagine yourself to be a Sun God. How do you think and feel? You have total confidence in yourself. You are not cocky, but profoundly sure of your power. You have unlimited energy and glow with health. You have a greatness about you and stand out brilliantly. Finally, you see and understand all that is happening within your sphere. When you see this card, know that you will be successful at all you undertake. Now is the time to let your light shine.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj19.htm" },

{ name: "Judgemment", image: "http://www.learntarot.com/bigjpgs/maj20.jpg", description1: "On Card 20, we see people rising up at the call of an angel. It is Judgment Day, when the faithful are brought to heaven, but what about those who are not saved? Have they been judged and found wanting? For their sins, will they be denied the presence of God? It is this aspect of judgment that is unsettling. How can judgment be reconciled with forgiveness?", description2: "In fact, judgment comes in two forms. The hurtful kind says - What you did is wrong, and you are bad and worthless for having done it. This type of judgment separates and leaves no room for redemption. It is possible to judge without condemning. We assess the matter, weigh all sides and try to discern the truth. We recognize the need to choose and hope for the courage to do so wisely - but without blame.", description3: "In readings, Card 20 can be a reminder that judgments are necessary; sometimes you must decide. At such moments, it is best to consider the matter carefully and then commit yourself without censure. If you are being judged yourself, learn from the process. Take what is of value, correct what needs correcting, but never lose sight of your worth.", description4: "Card 20 also stands for the feelings that come with salvation. When the angel calls, you are reborn - cleansed of all guilts and burdens. The past and its mistakes are behind you, and you are ready to begin anew. You may even feel a calling - a personal conviction of what you are meant to do. If you are in a low period, in need of hope and absolution, Judgement can show you that renewal is at hand.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj20.htm" },

{ name: "The World", image: "http://www.learntarot.com/bigjpgs/maj21.jpg", description1: "It's Thanksgiving Day. You've just finished a delicious meal, and there's a hot mug of coffee in your hand. Friends and family are arguing about the latest fiasco, the baby's cooing at you from across the table, and your feet are rubbing the belly of a devoted mutt. You're happy, fulfilled and truly thankful (at least until you have to start the dishes!). For this moment, the World and everything in it is yours.", description2: "We all recognize this feeling. It can come at any time or place and is always welcome. We can feel it at home raking the leaves or on the world stage accepting the Nobel Prize. It can seem quiet and simple, or wild and glorious. What is this feeling, and where does it come from? Card 21 can help us find out.", description3: "A major element of happiness is wholeness - the sense that everything is working together in harmony. Not in a static way, but with dynamic balance. Involvement is also important. To be happy, we must feel connected - engaged with what is around us. There is also accomplishment - knowing that we have goals and are moving toward them successfully. When all these elements come together, we feel fulfilled and blessed.", description4: "The World represents these moments and all that goes into them. In readings, it is a very positive sign that you are in a position to realize your heart's desire. What that is for you depends on the situation, but it will always feel great. Remember, though, that Card 21 is a symbol of active contribution and service. To hold the World in our hands, we must give of ourselves to it. That is the source of true happiness.",
copyright: "Source: leartarot.com (Copyright © 1995-2021 by Joan Bunning)", 
webpage: "http://www.learntarot.com/maj21.htm" },
];

//console.log the Array [cards] to view the independet elements within it. Independent element will list the name, Image, description and webpage properties along with their values.
console.log(cards);

for (let i =0; i <cards.length; i++) {
    console.log(cards[i]);
    console.log(cards[i].name);
    console.log(cards[i].image);
    console.log(cards[i].description1);
    console.log(cards[i].description2);
    console.log(cards[i].description3);
    console.log(cards[i].description4);
    console.log(cards[i].copyright);
    console.log(cards[i].webpage);

let div = document.createElement("div");
    console.log(div);
    div.setAttribute("class", "card");
    console.log(container);
let h2 = document.createElement("h2");
    h2.textContent = cards[i].name;
    console.log(h2);
let img = document.createElement("img");
    console.log(img);
    img.setAttribute("src", cards[i].image)
    console.log(img);
let d1 = document.createElement("p");
    d1.setAttribute("class", "description1");
    d1.innerHTML = cards[i].description1;
    console.log(d1);
let d2 = document.createElement("p");
    d2.setAttribute("class", "description2");
    d2.textContent = cards[i].description2;
    d2.style.display = "none";
    console.log(d2);
let d3 = document.createElement("p");
    d3.setAttribute("class", "description3");
    d3.textContent = cards[i].description3;
    console.log(d3);    
let d4 =document.createElement("p");
    d4.setAttribute("class", "description4");
    d4.textContent = cards[i].description4;
    console.log(d4);
let pc = document.createElement("p");
    pc.setAttribute("class", "copyright")
    pc.textContent = cards[i].copyright;
    console.log(pc);
let a = document.createElement("a");
    a.setAttribute("href", cards[i].webpage);
    a.textContent = cards[i].name+ " webpage";
    console.log(a);

//append div with elements
//console.log to confirm

div.append(h2);
div.append(img);
div.append(d1);
div.append(d2);
div.append(d3);
div.append(d4);
div.append(pc);
div.append(a);
console.log(div);

//append div to container

container.append(div);
}

let allcards = document.querySelectorAll(".card");
//console.log = Nodelist of all 22 images.
console.log(allcards);
console.log(allcards[0]);

for (let i=0; i < allcards.length; i++) {
    console.log(allcards[i]);
    allcards[i].addEventListener("click", function(){
        // allcards[i].style.border= "3px solid black";

        reverseCard(allcards[i])

        // resetCard()

    })
}


function resetCard() {

}

function reverseCard(card){ 
    card.setAttribute("class", "card reverse");

    let cardImage = card.querySelector("img");
    cardImage.style.rotate = "180deg";
    let description1 = card.querySelector(".description1");
    description1.style.display = "none";
    let description2 = card.querySelector(".description2");
    console.log(description2);
    description2.style.display = "block";
}



