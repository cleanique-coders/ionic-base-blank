# Ionic Base Blank

A simple template with ngCordova & ngstorage installed. May add some more common plugins

## How to create new page in Ionic Base Blank

### Open up `www/js/route.js` and add the route for the new page

```javascript
  .state('pageName', {
    templateUrl: 'templates/pageName.html',
    controller: 'pageNameCtrl'
  })
```

### Create the `pageName` view by creating a HTML file in `wwww/templates/pageName.html` and paste the following codes for the main content

```html
<ion-view title="PageName" id="pageNameId" class=" ">
    <ion-content padding="true" class="has-header"></ion-content>
</ion-view>
```

### Open up `www/js/controllers.js` and append the following to the end of the file.

```javascript
.controller('pageNameCtrl', function($scope) {

})
```

## Using `$storage`

`$storage` is accessible everywhere in views since it's been define in `$rootScope.$storage`
