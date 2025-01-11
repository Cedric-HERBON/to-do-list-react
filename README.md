# To-do List

Application créé avec Vite et React, en jsx.
Cette liste de tâche en version très simplifiée permet l'ajout, la suppression, et le marquage de l'état d'achèvement des tâches.
Cette application utilise un certain nombre de composants Materiel UI (MUI).

La persistance de la liste des tâches à travers les sessions de l'utilisateur est assurée par le biais du localStorage.

Les principaux composants sont :
- App
- TodoForm
- TodoList
- Todo

## App

Le composant App gère l'état et le comportement de l'application "To-do List".
Il permet de gérer l'ajout, la suppression, et la modification de l'état d'achèvement des tâches.

Il comprend :
- un useState "todos" correspondant à un tableau d'objets. Chacun de ces objets contient un identifiant, une description des tâches, et un état de complétion.
- des fonctions permettant l'ajout, la suppression, et la modification de l'état d'achèvement d'une tâche.
- des useEffect permettant de gérer la persistance des tâches.

Le retour se fait sous la forme de JSX représentant :
- le titre de l'application,
- un formulaire pour la création de tâches,
- la liste des tâches existantes.

## TodoForm

Le composant TodoForm permet le rendu d'un formulaire permettant d'ajouter une nouvelle tâche dans le State "todos".
Il retourne ce formulaire à travers deux composants MUI : "TextField" pour l'input, et "Button" pour le bouton d'envoi.

## TodoList
Le composant TodoList permet le rendu de la liste des tâches existantes (achevée ou non).
Il retourne cette liste à travers le composant "List" de MUI.

## Todo

Ce composant permet le rendu d'une seule tâche. Il comprend aussi la fonctionnalité de modification de l'état d'achèvement d'une tâche.