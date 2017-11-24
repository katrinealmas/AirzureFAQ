using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
        public class DbInitialize : DropCreateDatabaseAlways<FaqContext>
        {
            protected override void Seed(FaqContext context)
            {
            List<Faq> faq = new List<Faq>();
            faq.Add((new Faq
            {
                  //  FaqId = "1",
                    Date = DateTime.Now,
                    Category = Category.Bestilling,
                    Question = "Kan jeg annullere en avbestilling?",
                    Answer = "Nei, det er ikke mulig. Du må legge inn en ny bestilling dersom du angrer avbestillingen"
                }));

                faq.Add((new Faq
                {
                   // FaqId = "2",
                    Date = DateTime.Now,
                    Category = Category.Bestilling,
                    Question = "Er det mulig å endre min billett?",
                    Answer = "Du kan endre tid og dato for reisen (men ikke ruten). Dersom det er høyere pris på den nye avgangen må du også betale mellomlegget"
                }));

                faq.Add((new Faq
                {
                  //  FaqId = "3",
                    Date = DateTime.Now,
                    Category = Category.Bestilling,
                    Question = "Hvilke regler gjelder for avbestilling?",
                    Answer = "Du kan kansellere reisen uten kostnader innen 24 timer etter bestillingen og få full refusjon. Hvis du bestiller mindre enn 24 timer før avgang, kan du kansellere reisen din opptil 12 timer før avgang og få full refusjon. Dette gjør du ved å ta kontakt med kundeservice"
                }));

                faq.Add((new Faq
                {
                //    FaqId = "4",
                    Date = DateTime.Now,
                    Category = Category.Bagasje,
                    Question = "Hvor mye bagasje er inkludert?",
                    Answer = "Dersom annet ikke er spesifisert kan du ha med 23kg insjekket bagasje og håndbagasje(maks 10 kg, høyde 55 cm, bredde 40 cm og dybde 23 cm)e"
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "5",
                    Date = DateTime.Now,
                    Category = Category.Bagasje,
                    Question = "Hvor er bagasjen min?",
                    Answer = "I 95% av tilfellene vil forsvunnet bagasje komme til rette etter 24 timer. Du må rapportere bagasjen som forsvunnet ved skranken under ankomst. Dersom du oppgir telefon nummer vil du få oppdateringer fortløpende på sms."
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "6",
                    Date = DateTime.Now,
                    Category = Category.Bagasje,
                    Question = "Kan jeg ta med pc-bag i tillegg til håndbagasjen?",
                    Answer = "Du kan ha med én håndbagasje (maks 10 kg, høyde 55 cm, bredde 40 cm og dybde 23 cm) og én håndveske eller PC-veske (høyde 40 cm, bredde 30 cm og dybde 15 cm) om bord."
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "7",
                    Date = DateTime.Now,
                    Category = Category.Innsjekk,
                    Question = "Trenger jeg ombordstigningskort?",
                    Answer = "Ja, det trenger du for å komme gjennom sikkerhetskontrollen. Du får ombordstigningskort ved insjekk på flyplassen"
                }));
        
                faq.Add((new Faq
                {
                  //  FaqId = "8",
                    Date = DateTime.Now,
                    Category = Category.Innsjekk,
                    Question = "Hvor kan jeg sjekke inn?",
                    Answer = "Du må sjekke inn ved Airzure sin skranke på flyplassen"
                }));


                faq.Add((new Faq
                {
                 //   FaqId = "9",
                    Date = DateTime.Now,
                    Category = Category.Innsjekk,
                    Question = "Er mitt sete garantert etter insjekk?",
                    Answer = "Ja, dersom det ikke forekommer endring av flytype eller andre passasjerer med spesielle behov"
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "10",
                    Date = DateTime.Now,
                    Category = Category.Reiseinformasjon,
                    Question = "Har dere underholdning ombord?",
                    Answer = "Alle avganger har airzure magasin ombord. Interkontinentale avganger har underholdningssystem i hvert sete."
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "11",
                    Date = DateTime.Now,
                    Category = Category.Reiseinformasjon,
                    Question = "Hvor store er setene ombord?",
                    Answer = "Dette avhenger av flytypen som er satt opp på din avgang."
                }));

                faq.Add((new Faq
                {
                 //   FaqId = "12",
                    Date = DateTime.Now,
                    Category = Category.Reiseinformasjon,
                    Question = "Er det matservering?",
                    Answer = "Det er mulig å kjøpe mat på alle våre avganger. Måltider er ikke inkludert i noen av våre avganger"
                }));

                faq.Add((new Faq
                {
                //    FaqId = "13",
                    Date = DateTime.Now,
                    Category = Category.Spesialbehov,
                    Question = "Inntil når kan jeg fly dersom jeg er gravid?",
                    Answer = "Mange kvinner velger å fly under svangerskapet , men det er visse begrensninger som du må vurdere når du gjør en bestilling."
                }));

                faq.Add((new Faq
                {
                //    FaqId = "14",
                    Date = DateTime.Now,
                    Category = Category.Spesialbehov,
                    Question = "Kan jeg sitte ved nødutgangen dersom jeg har spesielle behov?",
                    Answer = "Alle som sitter ved nødutgangen må være i fysisk stand til å åpne nødutgangen"
                }));

            

                foreach (Faq f in faq)
                 {
                     context.Faq.Add(f);
                 }

                List<UserQuestion> questions = new List<UserQuestion>();

            questions.Add((new UserQuestion
            {
                Name = "Medisiner",
                Email = "Bobbert@gmail.com",
                Date = DateTime.Now,
                Question = "Kan jeg oppbevare medisinene mine i kjøleskap ombord?",
                Answer = "Ja det kan du. Henvend deg til personale ved ombordstigning."
            }));

            questions.Add((new UserQuestion
            {
                Name = "Selge bilett",
                Email = "Bob@gmail.com",
                Date = DateTime.Now,
                Question = "Kan jeg videre selge biletten min?",
                Answer = "Ja, men husk å få oppdatert navnet på biletten"
            }));

            foreach (UserQuestion q in questions)
            {
                context.Question.Add(q);
            }

            context.SaveChanges();
                base.Seed(context);
            }
        }

    }