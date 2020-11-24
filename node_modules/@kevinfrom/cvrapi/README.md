# CvrApi.js

## Installation
npm:
```
npm i @kevinfrom/cvrapi
```
yarn:
````
yarn add @kevinfrom/cvrapi
````

## Demoes
Demo using promise can be found in the ``demo`` directory

## Disclaimer
As per **3.0.0** all methods now return a **Promise**, for the old and deprecated synchronous **XMLHttpRequest** use **2.1.1**:

npm:
````
npm i @kevinfrom/cvrapi@^2.1.1
````
yarn:
````
yarn add @kevinfrom/cvrapi@2.1.1
````

## Examples
````
<script src="node_modules/kevinfrom/CvrApi.js/dist/CvrApi.js"><script>
<script>
    const cvrApi = new CvrApi();

    cvrApi.search('Vestjysk Marketing').then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Country
Set a different country:
````
<script>
    const cvrApi = new CvrApi('de');
</script>
````

### SSL/HTTPS
Disable SSL/HTTPS (default true):
````
<script>
    const cvrApi = new CvrApi('da', false);

    cvrApi.search('Vestjysk Marketing').then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Query search
Search using query (integer/string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.search('Vestjysk Marketing').then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Search by company name
Search by name (string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.searchByName('Vestjysk Marketing').then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Search by VAT
Search by VAT (integer/string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.searchByVat(10029155).then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Search by CVR
Alias of searchByVat

Search by CVR (integer/string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.searchByCvr(10029155).then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Search by production unit
Search by production unit (integer/string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.searchByProductionUnit(1007740219).then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````

### Search by phone
Search by phone (integer/string):
````
<script>
    const cvrApi = new CvrApi();

    cvrApi.searchByPhone(97320108).then(data => {
        // do something with data
    }).catch(error => {
        console.log(error)
    })
</script>
````
