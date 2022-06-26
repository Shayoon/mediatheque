# Projet mediatheque

## Description
Ce projet est un exercice réalisé lors d'une formation JAVA proposé par Hacene et Killian

## Lancer le projet

#### Récupérer les nodes modules

```bash
npm install
```
#### Angular CLI

```bash
npm install -g @angular/cli
```
#### Lancer les serveurs
###### Angular
```bash
ng serve -o
```
Angular server s'ouvre sur le port 4200 par defaut, si le port est déjà pris

```bash
ng serve -o --port 5000
#remplacer 5000 par n'importe quel port au besoin
```
###### JSON Server

```bash
npm run start:db
```
JSON-server s'ouvre sur le serveur 3000 par defaut, si le port est déjà pris

```bash
json-server --watch db/db.json --port 3050
#remplacer 3050 par n'importe quel port au besoin
```

**Si le port par defaut est changé, il faut aller changer la variable d'environement API_URL dans environments/environment.ts**

