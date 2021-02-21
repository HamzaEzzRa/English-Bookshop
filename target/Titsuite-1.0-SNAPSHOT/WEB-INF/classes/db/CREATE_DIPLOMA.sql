CREATE TABLE DIPLOMA (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    acquisition_date DATE NOT NULL,
    field VARCHAR(255) NOT NULL,
    freelancer_ref INTEGER NOT NULL,
    FOREIGN KEY (freelancer_ref) REFERENCES FREELANCER(id)
)