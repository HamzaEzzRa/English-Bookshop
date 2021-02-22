CREATE TABLE JOB(

                    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
                    refFreelancer  int,
                    refRate   int,

                    refOffer  int,

                    FOREIGN KEY(refOffer) REFERENCES OFFERS(ID),
                    FOREIGN KEY(refRate) REFERENCES RATE(ID),

                    FOREIGN KEY(refFreelancer) REFERENCES FREELANCER(ID)

);