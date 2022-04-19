###
# ReactJS Exam

Sukurtas puslapis, kuriame prisijungę vartotojai gali įtraukti savo turimus gebėjimus. 


### Naudotos kalbos
- HTML,
- ReactJS,
- CSS.

## Sistemos paleidimas

1. Repozitorijos klonavimas

- Naudojantis atsiųsta nuoroda, klonuoti repozitoriją. 

2. npm paketų paruošimas

- reikalingus npm paketus įrašome naudodami komandą
```bash
npm install
```

3. Dokumento .env paruošimas

- naudojantis .env example dokumentu, sukurti aplanke dokumentą .env, vietoje kabučių įrašyti nuorodą https://autumn-delicate-wilderness.glitch.me/v1/ 

4. Serverio paleidimas
- serverį paleidžiame naudodami komandą
```bash
npm start
```

5. Puslapio paleidimas
- puslapis pasileidžia automatiškai. 

## Sistemos veikimo principai

1. Register: vartotojas įrašo email ir slaptažodį. Sistema patikrina ar įvesti abu reikiami laukai ir nukreipia į login puslapį. 
2. Login: vartotojas įrašo registracijos metu naudotą email ir slaptažodį. Sistema patikrina, ar vartotojas registruotas, jei taip - nukreipia į vartotojo įgūdžių puslapį. 
3. Home: atvaizduojami vartotojo įvesti įgūdžiai. 
4. Add: vartotojas gali pridėti naują įgūdį. Kai įrašas sėkmingai pridėtas, vartotojas nukreipiamas į bendrą įgūdžių sąrašą. 
5. Neprisijungęs vartotojas negali matyti Home ir Add puslapių. 
6. Prisijungęs vartotojas negali neatsijungęs kurti naujo vartotojo arba jungtis prie kitos paskyros. 

