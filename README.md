# WEB 2630 Exercise 3
> In this exercise, you will be practicing separating code in your application and putting that code in its own component.

## Exercise Requirements
* Create a new Server.vue Component
  * This component will create a separate server for each List Item with the passed ID prop.
  <li> Server #{{ server.id }}</li>
  * Allow the component to be clicked (@click)
    * When clicked pass the data properties (props) to the ServersDetails.vue
* ServerDetail.vue
  * Have a button that can be clicked to change the selected Server's status to Normal
  * Show:
    * Selected Server ID and Status
* Servers.vue
  * Loop through an array of servers and pass the server ID and Status to the proper children to get the outcome shown below.
  * Code snippet to help get you started:
data () {
 return {
  servers: [
   { id: 1, status: 'Normal'},
   { id: 2, status: 'Critical'},
   { id: 3, status: 'Unknown'},
   { id: 4, status: 'Normal'}
  ]
 }
}

## Exercise Steps

1. Fork it (<https://github.com/CodySquadroni/WEB2630_Exercise4/fork>)
2. Clone it (<https://github.com/GITHUB_USERNAME/WEB2630_Exercise4.git>)
3. Complete The Exercise Requirements Above
4. Connect WEB2630_Exercise4 to Netlify
5. Submit Your GitHub and Netlify URL on Canvas

**Note: Remember to make your GitHub repository private and add me as a collaborator GitHub username: CodySquadroni**

## Final Outcome

![](Exercise4_Finished.png)

# Commands
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
