# training-portal-vue-bulma

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### z-indices:

### Why can I use an object in components:? or use this.options.components.push to add new component options?

#Code layout guidance:
##template and markup 
##scripts 
- imports
-- non-components imports
-- components imports
- exports 
-- data 
-- computed properties
-- methods
-- lifecycle hooks
##styles

Markup order:
* v-for
* v-if
* v-on
* v-bind
* class
* style


The general organizaion:
Main.js creates the main Vue instance and attaches it to App.vue
App.vue is the main parent component for all other components
The router component is the first and only child of App.vue
The router component is dynamically made into Menu.vue (could be any component is the views folder)
Menu.vue is the main page and contains all the section menu links which take as a prop the secion that each one of them represent and the MediumModal
MenuItem.vue renders the available medium buttons and houses the logic that determines when the store changes the current section and medium type
MediumModal.vue opens up and renders based on state in the state store


TODO
Delete Banger Library
Globalize the import of CourseTemplate