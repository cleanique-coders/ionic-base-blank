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

## How to create a side menu apps

Just replace the `<body>` tag with the following codes and update the menu list accordingly

```html
  <body ng-app="app" animation="slide-left-right-ios7">
      <div>
          <div>
              <ion-side-menus>
                  <ion-side-menu-content>
                      <div class="bar bar-header bar-light" style="background-color: transparent !important;">
                          <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
                          <h1 class="title">Base Blank</h1>
                      </div>
                      <ion-nav-view></ion-nav-view>
                  </ion-side-menu-content>
              
                <!-- Left menu -->
                <ion-side-menu side="left">
                    <ion-list>
                      <!-- Add your menu item here -->
                      <!-- You might want to link to your other pages for each links -->
                      <ion-item>
                          Locations
                      </ion-item>
                    </ion-list>
                </ion-side-menu>

              </ion-side-menus>
          </div>
        </div>
    </body>
```
